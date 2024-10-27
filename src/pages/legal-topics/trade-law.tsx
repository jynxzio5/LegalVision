import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Home, Menu, X, FileDown, BookOpen, Scale, ShoppingCart, Briefcase } from 'lucide-react';
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

const TradeLaw = () => {
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
    const filePath = '/pdfs/trad-law.pdf';
    
    // إنشاء رابط للتحميل
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'قانون_التجارة.pdf'; // اسم الملف عند التحميل
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

        <h1 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>قانون التجارة</h1>
        
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2" size={24} />
            نظرة عامة
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            قانون التجارة هو مجموعة القواعد القانونية التي تنظم الأعمال والمعاملات التجارية في الأردن. يهدف هذا القانون إلى تنظيم العلاقات التجارية وحماية حقوق التجار والمستهلكين على حد سواء.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            يعتبر قانون التجارة أساسياً في تنظيم الحياة الاقتصادية والتجارية في المملكة، حيث يوفر الإطار القانوني للعديد من الأنشطة التجارية والشركات.
          </p>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Scale className="mr-2" size={24} />
            المبادئ الأساسية
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>حرية التجارة: حق الأفراد في ممارسة الأنشطة التجارية بحرية ضمن إطار القانون.</li>
            <li>حسن النية في المعاملات التجارية: افتراض حسن النية في التعاملات التجارية.</li>
            <li>الشكلية في بعض العقود التجارية: ضرورة اتباع شكليات معينة في بعض العقود التجارية.</li>
            <li>سرعة المعاملات التجارية: تبسيط الإجراءات لتسهيل وتسريع المعاملات التجارية.</li>
            <li>حماية المستهلك: توفير الحماية القانونية للمستهلكين في المعاملات التجارية.</li>
          </ul>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <ShoppingCart className="mr-2" size={24} />
            الموضوعات الرئيسية
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>الأعمال التجارية: تعريف وتصنيف الأعمال التجارية.</li>
            <li>التاجر: شروط اكتساب صفة التاجر وواجباته القانونية.</li>
            <li>المحل التجاري: تعريفه وعناصره وكيفية التصرف فيه.</li>
            <li>الشركات التجارية: أنواعها وكيفية تأسيسها وإدارتها.</li>
            <li>الأوراق التجارية: الكمبيالة والشيك والسند لأمر.</li>
            <li>الإفلاس والتسوية الواقعة منه: إجراءات الإفلاس وآثاره القانونية.</li>
          </ul>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Briefcase className="mr-2" size={24} />
            أهمية قانون التجارة
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            يلعب قانون التجارة دوراً حيوياً في تنظيم الاقتصاد الوطني وتشجيع الاستثمار. فهو يوفر الإطار القانوني الذي يضمن استقرار المعاملات التجارية، ويحمي حقوق جميع الأطراف المشاركة في النشاط التجاري.
          </p>
          <p className="text-lg leading-relaxed">
            كما يساهم في تعزيز الثقة في السوق التجاري الأردني، مما يساعد على جذب الاستثمارات المحلية والأجنبية وتحفيز النمو الاقتصادي.
          </p>
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

export default TradeLaw;
