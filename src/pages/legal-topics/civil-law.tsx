import React, { useState } from 'react';
import { FileDown, Home, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../../contexts/ThemeContext';

const CivilLawPage: React.FC = () => {
  const router = useRouter();
  const { darkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleBack = () => {
    router.back();
  };

  const handleDownload = () => {
    // تحديد مسار الملف
    const filePath = '/pdfs/civil-code.pdf';
    
    // إنشاء رابط للتحميل
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'القانون_المدني_الأردني.pdf'; // اسم الملف عند التحميل
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const menuItems = [
    { title: "القوانين الأردنية", href: "/legal-codes" },
    { title: "الكتب الدراسية", href: "/course-books" },
    { title: "المواضيع القانونية المثيرة للجدل", href: "/controversial-legal-topics" },
    { title: "بنك الأسئلة", href: "/question-bank" },
    { title: "تواصل معنا", href: "/contact" },
  ];

  return (
    <div className={`min-h-screen font-tajawal ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap');

        body {
          font-family: 'Tajawal', sans-serif;
          font-size: 18px;
          line-height: 1.6;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 700;
        }

        h2 {
          font-size: 1.8rem;
          font-weight: 700;
        }

        p, li {
          font-weight: 500;
        }
      `}</style>
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

        <h1 className={`text-4xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>القانون المدني في الأردن</h1>
        
        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>نظرة عامة</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 leading-relaxed`}>
            يعد القانون المدني في الأردن الركيزة الأساسية للنظام القانوني الخاص. يهدف هذا القانون إلى تنظيم العلاقات بين الأفراد والكيانات الخاصة، ويشمل مجموعة واسعة من المجالات مثل العقود، الملكية، المسؤولية التقصيرية، وقانون الأسرة.
          </p>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>أهم النقاط في القانون المدني الأردني</h2>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>مصادر الالتزام (العقد، الإرادة المنفردة، العمل غير المشروع، الإثراء بلا سبب، القانون)</li>
            <li>نظرية العقد (أركان العقد، صحة العقد، آثار العقد، انحلال العقد)</li>
            <li>المسؤولية التقصيرية (الضرر، الخطأ، علاقة السببية)</li>
            <li>الحقوق العينية (حق الملكية، الحقوق المتفرعة عن الملكية)</li>
            <li>قانون الأسرة (الزواج، الطلاق، النفقة، الحضانة)</li>
            <li>الميراث والوصية</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>نظرية العقد</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 leading-relaxed`}>
            تعد نظرية العقد من أهم الموضوعات في القانون المدني الأردني، وتشمل:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>أركان العقد: الرضا، المحل، السبب</li>
            <li>صحة العقد: الأهلية، عيوب الرضا (الغلط، التدليس، الإكراه، الاستغلال)</li>
            <li>آثار العقد: القوة الملزمة للعقد، نسبية أثر العقد</li>
            <li>تفسير العقد وتنفيذه</li>
            <li>انحلال العقد: الفسخ، الإقالة، البطلان</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>المسؤولية التقصيرية</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 leading-relaxed`}>
            تنظم المسؤولية التقصيرية في القانون المدني الأردني الأضرار الناتجة عن الأفعال غير المشروعة، وتشمل:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>شروط قيام المسؤولية التقصيرية: الخطأ، الضرر، علاقة السببية</li>
            <li>أنواع الضرر: المادي والمعنوي</li>
            <li>المسؤولية عن فعل الغير</li>
            <li>المسؤولية عن الأشياء</li>
            <li>دعوى التعويض وتقدير التعويض</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>الحقوق العينية</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 leading-relaxed`}>
            ينظم القانون المدني الأردني الحقوق العينية، وهي الحقوق التي ترد على الأشياء مباشرة، وتشمل:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>حق الملكية: عناصره، قيوده، أسباب كسبه</li>
            <li>الحقوق المتفرعة عن الملكية: حق الانتفاع، حق الارتفاق</li>
            <li>الحقوق العينية التبعية: الرهن، حق الامتياز</li>
            <li>الحيازة وآثارها القانونية</li>
          </ul>
        </section>

        <div className="text-center mt-8">
          <button 
            onClick={handleDownload}
            className={`inline-flex items-center justify-center ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-500' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white px-6 py-3 rounded-full transition-colors text-base font-semibold shadow-md`}
          >
            <FileDown size={18} className="ml-2" />
            <span>تحميل القانون (PDF)</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default CivilLawPage;
