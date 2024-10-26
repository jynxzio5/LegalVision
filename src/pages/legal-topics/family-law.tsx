import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, ArrowRight, Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

  .menu-title {
    font-family: 'Tajawal', sans-serif;
    font-weight: 700;
  }
`;

const FamilyLawPage: React.FC = () => {
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

      <main className="container mx-auto px-4 py-8 relative" dir="rtl">
        <button 
          onClick={handleBack} 
          className={`absolute top-0 right-4 mt-4 inline-flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
        >
          <ArrowRight className="ml-2" />
          رجوع
        </button>

        <h1 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>قانون الأسرة في الأردن</h1>
        
        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>نظرة عامة</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            يعد قانون الأسرة في الأردن من أهم القوانين التي تنظم العلاقات الأسرية والشخصية. يستند هذا القانون إلى الشريعة الإسلامية ويهدف إلى تنظيم الزواج والطلاق وحقوق الأطفال والميراث وغيرها من القضايا المتعلقة بالأسرة.
          </p>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>أهم النقاط في قانون الأسرة الأردني</h2>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>تنظيم عقد الزواج وشروطه</li>
            <li>تحديد حقوق وواجبات الزوجين</li>
            <li>تنظيم إجراءا الطلاق والتفريق</li>
            <li>تحديد حقوق الأطفال في النفقة والحضانة</li>
            <li>تنظيم قضايا النسب والرضاعة</li>
            <li>تحديد قواعد الميراث وفقًا للشريعة الإسلامية</li>
            <li>تنظيم الوصية والوقف</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>الزواج في القانون الأردني</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            ينظم قانون الأسرة الأردني عقد الزواج ويحدد شروطه وأركانه، ومن أهم النقاط المتعلقة بالزواج:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>تحديد السن القانوني للزواج</li>
            <li>اشتراط موافقة الولي في حالات معينة</li>
            <li>تنظيم إجراءات عقد القران وتسجيله</li>
            <li>تحديد الحقوق المالية للزوجة (المهر والنفقة)</li>
            <li>تنظيم تعدد الزوجات وفق ضوابط محددة</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>الطلاق والتفريق</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            يتناول قانون الأسرة الأردني مسألة إنهاء الزواج من خلال الطلاق أو التفريق القضائي، ومن أهم النقاط في هذا الجانب:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>تحديد أنواع الطلاق (رجعي، بائن)</li>
            <li>تنظيم إجراءات الخلع</li>
            <li>تحديد أسباب التفريق القضائي (الشقاق والنزاع، الغيبة، الحبس)</li>
            <li>تنظيم حقوق المطلقة (النفقة، السكن، متعة الطلاق)</li>
            <li>تحديد فترة العدة وأحكامها</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>حقوق الأطفال</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            يولي قانون الأسرة الأردني اهتمامًا كبيرًا لحقوق الأطفال، ومن أهم الجوانب المتعلقة بهذا الموضوع:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>تنظيم أحكام الحضانة وشروطها</li>
            <li>تحديد حق الطفل في النفقة</li>
            <li>تنظيم حق الرؤية للوالد غير الحاضن</li>
            <li>حماية حقوق الأطفال ذوي الاحتياجات الخاصة</li>
            <li>تنظيم إجراءات إثبات النسب</li>
          </ul>
        </section>

        <div className="text-center">
          <a 
            href="/api/download/family-law-jordan.pdf"
            className={`inline-flex items-center ${
              darkMode 
                ? 'bg-blue-700 hover:bg-blue-600' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white px-6 py-3 rounded-md transition-colors`}
          >
             تحميل النص الكامل لقانون الأسرة الأردني (PDF)
          </a>
        </div>
      </main>
    </div>
  );
};

export default FamilyLawPage;
