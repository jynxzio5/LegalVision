import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Home, Menu, X, FileDown, BookOpen, Scale, Users } from 'lucide-react';
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

const CivilProcedureLaw = () => {
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
    const filePath = '/pdfs/law2.pdf';
    
    // إنشاء رابط للتحميل
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'قانون_أصول_المحاكمات_المدنية.pdf'; // اسم الملف عند التحميل
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

        <h1 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>قانون أصول المحاكمات المدنية</h1>
        
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2" size={24} />
            نظرة عامة
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            قانون أصول المحاكمات المدنية هو مجموعة القواعد والإجراءات التي تنظم سير الدعاوى المدنية أمام المحاكم. يهدف هذا القانون إلى تنظيم إجراءات التقاضي وضمان حقوق الأطراف في الدعوى المدنية.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            يعتبر هذا القانون أساسياً في النظام القضائي الأردني، حيث ينظم كيفية رفع الدعاوى، وتقديم الأدلة، وإصدار الأحكام في القضايا المدنية والتجارية.
          </p>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Scale className="mr-2" size={24} />
            المبادئ الأساسية
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>مبدأ المواجهة: حق كل طرف في الاطلاع على أدلة الطرف الآخر والرد عليها.</li>
            <li>مبدأ علنية الجلسات: تكون جلسات المحاكم علنية إلا في حالات استثنائية.</li>
            <li>مبدأ تسبيب الأحكام: يجب أن تكون الأحكام القضائية مسببة.</li>
            <li>مبدأ التقاضي على درجتين: حق الطعن في الأحكام أمام محكمة أعلى درجة.</li>
            <li>مبدأ حياد القاضي: يجب أن يكون القاضي محايداً في نظر الدعوى.</li>
          </ul>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Users className="mr-2" size={24} />
            مراحل الدعوى المدنية
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li>تقديم لائحة الدعوى: يقدم المدعي لائحة دعواه إلى المحكمة المختصة.</li>
            <li>تبليغ المدعى عليه: يتم إبلاغ المدعى عليه بالدعوى وموعد الجلسة.</li>
            <li>تبادل اللوائح: يقدم الأطراف لوائحهم وبيناتهم للمحكمة.</li>
            <li>المرافعات: يقدم الأطراف مرافعاتهم الشفوية أمام المحكمة.</li>
            <li>إصدار الحكم: تصدر المحكمة حكمها في الدعوى.</li>
            <li>الطعن في الحكم: يمكن للأطراف الطعن في الحكم أمام محكمة أعلى درجة.</li>
          </ol>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Scale className="mr-2" size={24} />
            أنواع الدعاوى المدنية
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>دعاوى الحقوق الشخصية: مثل دعاوى التعويض والديون.</li>
            <li>دعاوى الحقوق العينية: مثل دعاوى الملكية والارتفاق.</li>
            <li>دعاوى الأحوال الشخصية: مثل دعاوى الزواج والطلاق والنفقة.</li>
            <li>الدعاوى المستعجلة: للقضايا التي تتطلب إجراءً سريعاً.</li>
          </ul>
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

export default CivilProcedureLaw;
