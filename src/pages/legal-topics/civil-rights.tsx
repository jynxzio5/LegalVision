import React, { useState } from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Menu, X } from 'lucide-react';
import { useRouter } from 'next/router';
import { useTheme } from '../../contexts/ThemeContext';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

  .menu-title {
    font-family: 'Tajawal', sans-serif;
    font-weight: 700;
  }
`;

const CivilRightsPage = () => {
  const router = useRouter();
  const { darkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleBack = () => {
    router.back();
  };

  const menuItems = [
    { title: "القوانين الأردنية", href: "/legal-codes" },
    { title: "الكتب الدراسية", href: "/course-books" },
    { title: "المواضيع القانونية المثيرة للجدل", href: "/controversial-legal-topics" },
    { title: "بنك الأسئلة", href: "/question-bank" },
    { title: "تواصل معنا", href: "/contact" },
  ];

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

      {/* القائمة المنسدلة */}
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
        <h1 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>الحقوق المدنية في الأردن</h1>
        
        <button 
          onClick={handleBack} 
          className={`flex items-center mb-4 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
        >
          <ArrowLeft size={20} className="ml-1" />
          رجوع
        </button>
        
        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>نظرة عامة</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            الحقوق المدنية هي الحقوق الأساسية التي يتمتع بها المواطنون والمقيمون في الأردن. تهدف هذه الحقوق إلى ضمان المساواة والعدالة وحماية الحريات الأساسية لجميع الأفراد في المجتمع.
          </p>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>أهم الحقوق المدنية في الأردن</h2>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>الحق في المساواة أمام القانون</li>
            <li>حرية التعبير والرأي</li>
            <li>حرية الاعتقاد والدين</li>
            <li>الحق في التجمع السلمي</li>
            <li>الحق في تكوين الجمعيات والانضمام إليها</li>
            <li>الحق في المشاركة السياسية</li>
            <li>الحق في التعليم</li>
            <li>الحق في الرعاية الصحية</li>
            <li>الحق في العمل وظروف عمل عادلة</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>الإطار القانوني للحقوق المدنية</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            تستند الحقوق المدنية في الأردن إلى عدة مصادر قانونية، منها:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>الدستور الأردني</li>
            <li>القوانين والتشريعات الوطنية</li>
            <li>المعاهدات والاتفاقيات الدولية التي صادق عليها الأردن</li>
            <li>قرارات المحكمة الدستورية</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>تحديات وقضايا معاصرة</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            رغم التقدم المحرز في مجال الحقوق المدنية، لا تزال هناك بعض التحديات والقضايا المعاصرة، منها:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>تعزيز المساواة بين الجنسين</li>
            <li>حماية حقوق الأقليات</li>
            <li>ضمان حرية الصحافة والإعلام</li>
            <li>تحسين ظروف العمل وحقوق العمال</li>
            <li>تعزيز استقلال القضاء</li>
            <li>مكافحة التمييز بجميع أشكاله</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>آليات حماية الحقوق المدنية</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            يوجد في الأردن عدة آليات لحماية الحقوق المدنية، منها:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>المحاكم الوطنية</li>
            <li>المركز الوطني لحقوق الإنسان</li>
            <li>منظمات المجتمع المدني</li>
            <li>الهيئات الرقابية الحكومية</li>
            <li>آليات الشكاوى والتظلم</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CivilRightsPage;
