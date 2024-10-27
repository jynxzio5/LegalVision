import React, { useState } from 'react';
import { FileDown, Home, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../../contexts/ThemeContext';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap');

  body, html {
    font-family: 'Tajawal', sans-serif;
  }

  h1, h2, .menu-title {
    font-weight: 700;
  }

  p, li {
    font-weight: 500;
  }
`;

const LaborLawPage: React.FC = () => {
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

      <main className="container mx-auto px-4 py-8 relative" dir="rtl">
        <button 
          onClick={handleBack} 
          className={`absolute top-0 right-4 mt-4 inline-flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
        >
          <ArrowRight className="ml-2" />
          رجوع
        </button>

        <h1 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>قانون العمل في الأردن</h1>
        
        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>نظرة عامة</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            يعد قانون العمل الأردني من أهم التشريعات التي تنظم العلاقات بين أصحاب العمل والعمال في المملكة الأردنية الهاشمية. يهدف هذا القانون إلى حماية حقوق العمال وضمان ظروف عمل عادلة وآمنة، مع مراعاة مصالح أصحاب العمل والتنمية الاقتصادية للبلاد.
          </p>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>أهم النقاط في قانون العمل الأردني</h2>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>تحديد ساعات العمل وأيام الراحة الأسبوعية والإجازات السنوية</li>
            <li>تنظيم الحد الأدنى للأجور وطرق دفعها</li>
            <li>حماية حقوق المرأة العاملة، بما في ذلك إجازة الأمومة</li>
            <li>تحديد شروط وإجراءات إنهاء عقود العمل</li>
            <li>تنظيم عمل الأحداث وحمايتهم من الاستغلال</li>
            <li>إنشاء نظام للضمان الاجتماعي وتعويضات إصابات العمل</li>
            <li>تشجيع التدريب المهني وتطوير المهارات</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>حقوق العمال الأساسية</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            يضمن قانون العمل الأردني مجموعة من الحقوق الأساسية للعمال، منها:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>الحق في أجر عادل ومنتظم</li>
            <li>الحق في بيئة عمل آمنة وصحية</li>
            <li>الحق في تكوين النقابات والانضمام إليها</li>
            <li>الحق في التفاوض الجماعي</li>
            <li>الحق في الإجازات المدفوعة</li>
            <li>الحماية من التمييز والتحرش في مكان العمل</li>
          </ul>
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>التحديات والتطورات الحديثة</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            يواجه سوق العمل الأردني عدة تحديات، منها البطالة وعدم التوافق بين مخرجات التعليم ومتطلبات سوق العمل. وقد شهدت السنوات الأخيرة عدة تعديلات على قانون العمل لمواكبة التغيرات الاقتصادية والاجتماعية، مثل تنظيم العمل المرن وحماية العمال في القطاع غير الرسمي.
          </p>
        </section>

        <div className="text-center mt-8">
          <a 
            href="/pdfs/labor-code.pdf"
            className={`inline-flex items-center justify-center ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-500' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white px-6 py-3 rounded-full transition-colors text-base font-semibold shadow-md`}
            download="قانون_العمل_الأردني.pdf"
          >
            <FileDown size={18} className="ml-2" />
            <span>تحميل القانون (PDF)</span>
          </a>
        </div>
      </main>
    </div>
  );
};

export default LaborLawPage;
