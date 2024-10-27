import React, { useState } from 'react';
import { FileDown, Home, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../../contexts/ThemeContext';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;600;700&display=swap');

  body, html {
    font-family: 'Tajawal', sans-serif;
  }

  h1 {
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  h2, .menu-title {
    font-weight: 700;
  }

  p, li {
    font-weight: 600;
    line-height: 1.8;
  }

  .text-shadow {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

const CriminalLawPage: React.FC = () => {
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
    <div className={`min-h-screen font-tajawal ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
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

      <main className="container mx-auto px-4 py-8 relative" dir="rtl">
        <button 
          onClick={handleBack} 
          className={`absolute top-0 right-4 mt-4 inline-flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
        >
          <ArrowRight className="ml-2" />
          رجوع
        </button>

        <h1 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'} text-shadow`}>القانون الجنائي في الأردن</h1>
        
        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} text-shadow`}>نظرة عامة</h2>
          <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-4`}>
            يعد القانون الجنائي في الأردن من أهم فروع القانون التي تهدف إلى حماية المجتمع وضمان الأمن والاستقرار. يحدد هذا القانون الأفعال التي تعتبر جرائم والعقوبات المترتبة عليها، كما ينظم إجراءات التحقيق والمحاكمة في القضايا الجنائية.
          </p>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>أهم النقاط في القانون الجنائي الأردني</h2>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>تصنيف الجرائم (جنايات، جنح، مخالفات)</li>
            <li>تحديد أركان الجريمة (الركن المادي والركن المعنوي)</li>
            <li>تنظيم العقوبات وأنواعها</li>
            <li>تحديد الظروف المشددة والمخففة للعقوبة</li>
            <li>تنظيم المسؤولية الجنائية وموانعها</li>
            <li>تحديد أسباب الإباحة وموانع العقاب</li>
            <li>تنظيم إجراءات التحقيق والمحاكمة الجنائية</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>أنواع الجرائم</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            يصنف القانون الجنائي الأردني الجرائم إلى عدة أنواع، منها:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>الجرائم الواقعة على الأشخاص (القتل، الإيذاء)</li>
            <li>الجرائم الواقعة على الأموال (السرقة، الاحتيال)</li>
            <li>الجرائم المخلة بالإدارة العامة (الرشوة، اختلاس المال العام)</li>
            <li>جرائم أمن الدولة</li>
            <li>الجرائم الإلكترونية</li>
            <li>جرائم المخدرات</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>العقوبات</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            يحدد القانون الجنائي الأردني مجموعة من العقوبات التي يمكن فرضها على مرتكبي الجرائم، ومنها:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>الإعدام (في حالات محددة جدًا)</li>
            <li>الأشغال الشاقة المؤبدة أو المؤقتة</li>
            <li>الاعتقال</li>
            <li>الحبس</li>
            <li>الغرامة</li>
            <li>المصادرة</li>
            <li>العقوبات البديلة (مثل الخدمة المجتمعية)</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>حقوق المتهم</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            يكفل القانون الجنائي الأردني مجموعة من الحقوق للمتهم، منها:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>الحق في افتراض البراءة حتى تثبت الإدانة</li>
            <li>الحق في الدفاع والاستعانة بمحامٍ</li>
            <li>الحق في محاكمة عادلة وعلنية</li>
            <li>الحق في الطعن في الأحكام الصادرة</li>
            <li>الحق في عدم التعرض للتعذيب أو المعاملة القاسية</li>
          </ul>
        </section>

        <div className="text-center mt-8">
          <a 
            href="/pdfs/criminal-code.pdf"
            className={`inline-flex items-center justify-center ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-500' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white px-6 py-3 rounded-full transition-colors text-base font-semibold shadow-md`}
            download="القانون_الجنائي_الأردني.pdf"
          >
            <FileDown size={18} className="ml-2" />
            <span>تحميل القانون (PDF)</span>
          </a>
        </div>
      </main>
    </div>
  );
};

export default CriminalLawPage;
