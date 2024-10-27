import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Home, Menu, X, FileDown, BookOpen, Scale, Shield } from 'lucide-react';
import { useRouter } from 'next/router';
import { useTheme } from '../../contexts/ThemeContext';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

  body {
    font-family: 'Tajawal', sans-serif;
  }

  .menu-title {
    font-weight: 700;
  }
`;

const CriminalProcedureLaw = () => {
  const router = useRouter();
  const { darkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { title: "الصفحة الرئيسية", href: "/" },
    { title: "القوانين الأردنية", href: "/legal-codes" },
    { title: "الكتب الدراسية", href: "/course-books" },
    { title: "بنك الأسئلة", href: "/question-bank" },
    { title: "تواصل معنا", href: "/contact" },
  ];

  const handleDownload = () => {
    // تحديد مسار الملف
    const filePath = '/pdfs/law1.pdf';
    
    // إنشاء رابط للتحميل
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'قانون_أصول_المحاكمات_الجزائية.pdf'; // اسم الملف عند التحميل
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <style>{styles}</style>
      <header className={`${darkMode ? 'bg-blue-800' : 'bg-blue-600'} text-white shadow-md`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              رؤيا قانونية
            </Link>
            <div className="flex items-center">
              <Link href="/" className="hover:text-white/80 transition-colors mr-4">
                <Home size={28} />
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-900 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className={`${darkMode ? 'bg-blue-700' : 'bg-blue-500'}`}>
          <div className="container mx-auto px-4 py-2">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                className="block py-2 text-white hover:bg-blue-600 dark:hover:bg-blue-800 menu-title text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 py-8" dir="rtl">
        <button 
          onClick={() => router.back()} 
          className={`mb-4 inline-flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
        >
          <ArrowRight className="ml-2" />
          رجوع
        </button>

        <h1 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>قانون أصول المحاكمات الجزائية</h1>
        
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2" size={24} />
            نظرة عامة
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            قانون أصول المحاكمات الجزائية هو مجموعة القواعد والإجراءات التي تنظم سير الدعوى الجزائية منذ وقوع الجريمة وحتى صدور حكم نهائي فيها. يهدف هذا القانون إلى تحقيق التوازن بين حق المجتمع في العقاب وحق المتهم في الدفاع عن نفسه.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            يعتبر هذا القانون من أهم القوانين في النظام القضائي الأردني، حيث يضمن سير العدالة بشكل سليم ويحمي حقوق جميع الأطراف المعنية في الدعوى الجزائية.
          </p>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Scale className="mr-2" size={24} />
            المبادئ الأساسية
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>مبدأ الشرعية الإجرائية: لا جريمة ولا عقوبة إلا بنص قانوني.</li>
            <li>قرينة البراءة: المتهم بريء حتى تثبت إدانته.</li>
            <li>حق الدفاع: لكل متهم الحق في الدفاع عن نفسه أو توكيل محامٍ للدفاع عنه.</li>
            <li>علانية المحاكمة: تجري المحاكمات بشكل علني إلا في حالات استثنائية.</li>
            <li>التقاضي على درجتين: حق الطعن في الأحكام أمام محكمة أعلى درجة.</li>
          </ul>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Shield className="mr-2" size={24} />
            مراحل الدعوى الجزائية
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li>مرحلة جمع الاستدلالات: تقوم بها الضابطة العدلية.</li>
            <li>مرحلة التحقيق الابتدائي: يقوم بها المدعي العام.</li>
            <li>مرحلة المحاكمة: تتم أمام المحكمة المختصة.</li>
            <li>مرحلة الطعن في الأحكام: الاستئناف والتمييز.</li>
            <li>مرحلة تنفيذ الأحكام: تنفيذ العقوبة بعد صدور الحكم النهائي.</li>
          </ol>
        </div>

        <div className="text-center">
          <button 
            onClick={handleDownload}
            className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold ${
              darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors duration-300`}
          >
            <FileDown size={24} className="mr-2" />
            تحميل القانون (PDF)
          </button>
        </div>
      </main>
    </div>
  );
};

export default CriminalProcedureLaw;
