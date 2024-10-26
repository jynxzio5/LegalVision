import React, { useState } from 'react';
import { FileDown, Home, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '../../contexts/ThemeContext';  // تأكد من أن المسار صحيح

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

  .menu-title {
    font-family: 'Tajawal', sans-serif;
    font-weight: 700;
  }
`;

const PropertyLawPage = () => {
  const { darkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
        <h1 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>قانون الملكية في الأردن</h1>
        
        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>نظرة عامة</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            يعد قانون الملكية في الأردن من أهم القوانين التي تنظم العلاقات المتعلقة بالأموال والممتلكات. يهدف هذا القانون إلى حماية حقوق الملكية وتنظيم عمليات نقل الملكية وتسجيلها، بالإضافة إلى تحديد الحقوق والواجبات المترتبة على الملكية.
          </p>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>أهم النقاط في قانون الملكية الأردني</h2>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>تعريف أنواع الملكية (الخاصة، العامة، الشائعة)</li>
            <li>تنظيم عمليات البيع والشراء للعقارات</li>
            <li>تحديد قواعد الرهن العقاري والحقوق العينية</li>
            <li>تنظيم حقوق الارتفاق والجوار</li>
            <li>تحديد إجراءات تسجيل الملكية في دائرة الأراضي والمساحة</li>
            <li>تنظيم عمليات الإيجار وحقوق المؤجر والمستأجر</li>
            <li>حماية الملكية الفكرية والصناعية</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>حقوق الملكية الأساسية</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            يضمن قانون الملكية الأردني مجموعة من الحقوق الأساسية للمالكين، منها:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>حق استعمال الملكية والتصرف بها</li>
            <li>حق الانتفاع من الملكية</li>
            <li>حق حماية الملكية من التعدي</li>
            <li>حق نقل الملكية للغير (البيع، الهبة، الميراث)</li>
            <li>حق تأجير الملكية</li>
            <li>حق رهن الملكية للحصول على تمويل</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>التحديات والتطورات الحديثة</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            يواجه قانون الملكية في الأردن عدة تحديات في ظل التطورات الاقتصادية والتكنولوجية الحديثة. ومن أهم هذه التحديات:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>تنظيم الملكية في العالم الرقمي والأصول الافتراضية</li>
            <li>حماية حقوق الملكية الفكرية في ظل انتشار الإنترنت</li>
            <li>تحديث إجراءات تسجيل الملكية وتبسيطها</li>
            <li>معالجة قضايا الملكية المتعلقة بالاستثمار الأجنبي</li>
            <li>تطوير قوانين الإيجار لتحقيق التوازن بين حقوق المالك والمستأجر</li>
          </ul>
        </section>

        <div className="text-center">
          <a 
            href="/api/download/property-law-jordan.pdf"
            className={`inline-flex items-center ${
              darkMode 
                ? 'bg-blue-700 hover:bg-blue-600' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white px-6 py-3 rounded-md transition-colors`}
          >
            <FileDown size={20} className="ml-2" />
            تحميل النص الكامل لقانون الملكية الأردني (PDF)
          </a>
        </div>
      </main>
    </div>
  );
};

export default PropertyLawPage;
