import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap');

  body, html {
    font-family: 'Tajawal', sans-serif;
  }

  .menu-title {
    font-weight: 700;
  }
`;

const ControversialLegalTopics: React.FC = () => {
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

  const topics = [
    {
      title: "الزواج المدني",
      description: "قضية مثيرة للجدل حول إمكانية تطبيق الزواج المدني في الأردن.",
      details: "يختلف الفقهاء والقضاة حول شرعية وقانونية الزواج المدني. البعض يرى أنه يتعارض مع الشريعة الإسلامية، بينما يرى آخرون أنه ضروري لضمان حقوق المواطنين من مختلف الأديان."
    },
    {
      title: "حقوق المرأة في الميراث",
      description: "النقاش حول المساواة في الميراث بين الرجل والمرأة.",
      details: "هناك جدل قائم بين من يدعو إلى المساواة الكاملة في الميراث وبين من يتمسك بالتقسيم التقليدي المستند إلى التفسيرات الفقهية الشائعة."
    },
    {
      title: "عقوبة الإعدام",
      description: "الجدل المستمر حول استمرار تطبيق عقوبة الإعدام أو إلغائها.",
      details: "ينقسم الرأي بين مؤيد لاستمرار العقوبة كرادع للجريمة، وبين معارض يرى أنها تتنافى مع حق الحياة وإمكانية إصلاح المجرم."
    },
    {
      title: "قوانين الأحوال الشخصية",
      description: "النقاش حول تحديث قوانين الأحوال الشخصية.",
      details: "يدور جدل حول مدى الحاجة لتحديث هذه القوانين لتتماشى مع التغيرات الاجتماعية، مع الحفاظ على الهوية الإسلامية للمجتمع."
    }
  ];

  return (
    <div className={`min-h-screen font-tajawal ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <style jsx global>{styles}</style>
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
        <h1 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          المواضيع القانونية المثيرة للجدل
        </h1>
        
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            فيما يلي قائمة بالمواضيع القانونية المثيرة للجدل في المجتمع الأردني. هذه المواضيع تحظى باهتمام كبير وتثير نقاشات حادة بين مختلف الأطراف في المجتمع القانوني والعام.
          </p>
        </div>

        {topics.map((topic, index) => (
          <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-6`}>
            <h2 className={`text-2xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{topic.title}</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{topic.description}</p>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-700'}>{topic.details}</p>
          </div>
        ))}

        <div className="mt-8 text-center">
          <Link href="/" className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors`}>
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ControversialLegalTopics;
