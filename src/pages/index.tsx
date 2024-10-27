import React, { useState } from 'react';
import Link from 'next/link';
import { Book, Bookmark, HelpCircle, Scale, Moon, Sun, Mail, Instagram, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// Add these styles at the top of your file
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

  @keyframes slideLeft {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-slide-left {
    animation: slideLeft 0.3s ease-out forwards;
  }

  .menu-title {
    font-family: 'Tajawal', sans-serif;
    font-weight: 700;
  }
`;

// Main App Component
const Home: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { title: "القوانين الأردنية", href: "/legal-codes" },
    { title: "الكتب الدراسية", href: "/course-books" },
    { title: "المواضيع القانونية المثيرة للجدل", href: "/controversial-legal-topics" },
    { title: "بنك الأسئلة", href: "/question-bank" },
    { title: "تواصل معنا", href: "/contact" },
  ];

  const legalTopics = [
    { 
      title: "القانون المدني", 
      description: "شرح مفصل للقانون المدني الأردني وتطبيقاته في الحياة اليومية.",
      link: "/legal-topics/civil-law"
    },
    { 
      title: "الحقوق المدنية", 
      description: "نظرة عامة على الحقوق المدنية في القانون الأردني.",
      link: "/legal-topics/civil-rights"
    },
    { 
      title: "قانون العمل", 
      description: "تحليل شامل لقانون العمل الأردني وحقوق العمال وأصحاب العمل.",
      link: "/legal-topics/labor-law"
    },
    { 
      title: "القانون الجنائي", 
      description: "نظرة عامة على النظام الجنائي الأردني والجرائم الرئيسية.",
      link: "/legal-topics/criminal-law"
    },
    { 
      title: "قانون الأسرة", 
      description: "دراسة لقوانين الأسرة والزواج والطلاق في الأردن.",
      link: "/legal-topics/family-law"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <style>{styles}</style>
      
      {/* الهيدر المعدل */}
      <header className="bg-blue-600 dark:bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              رؤيا قانونية
            </Link>
            <div className="flex items-center">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-900 transition-colors duration-300 mr-2"
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
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

      {/* القائمة المنسدلة المعدلة */}
      {isMenuOpen && (
        <div className="bg-blue-500 dark:bg-blue-700">
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

      <main className="container mx-auto px-4 py-8">
    
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/legal-codes" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <Scale size={48} className="mb-4 mx-auto text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-semibold mb-2 text-center text-gray-900 dark:text-white">القوانين الأردنية</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center">استعرض القوانين والتشريعات الأردنية الحديثة</p>
          </Link>

          <Link href="/course-books" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <Book size={48} className="mb-4 mx-auto text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-semibold mb-2 text-center text-gray-900 dark:text-white">الكتب الدراسية</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center">اطلع على الكتب الدراسية والمراجع القانونية الهامة</p>
          </Link>

          <Link href="/controversial-legal-topics" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <Bookmark size={48} className="mb-4 mx-auto text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-semibold mb-2 text-center text-gray-900 dark:text-white">المواضيع القانونية المثيرة للجدل</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center">استكشف المواضيع القانونية المثيرة للنقاش في المجتمع الأردني</p>
          </Link>

          <Link href="/question-bank" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <HelpCircle size={48} className="mb-4 mx-auto text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-semibold mb-2 text-center text-gray-900 dark:text-white">بنك الأسئلة</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center">اختبر معرفتك القانونية مع مجموعة متنوعة من الأسئلة</p>
          </Link>
        </div>

        {/* Legal Topics Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">المواضيع القانونية</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalTopics.map((topic, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{topic.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{topic.description}</p>
                </div>
                <Link 
                  href={topic.link}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold inline-flex items-center group"
                >
                  اقرأ المزيد
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2 transform group-hover:translate-x-1 transition-transform" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* إضافة الفوتر */}
      <footer className={`mt-auto py-8 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2023 رؤيا قانونية. جميع الحقوق محفوظة.</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-sm mb-2">تم التطوير بواسطة:</p>
              <ul className="flex space-x-4 rtl:space-x-reverse mb-2">
                <li className="text-sm font-semibold flex items-center">
                  <a href="https://www.instagram.com/8kp.m" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors flex items-center">
                    المعتصم بالله
                    <Instagram size={16} className="mr-1" />
                  </a>
                </li>
                <li className="text-sm font-semibold flex items-center">
                  <a href="https://www.instagram.com/mh_a_i" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors flex items-center">
                    محمد الفطيمات
                    <Instagram size={16} className="mr-1" />
                  </a>
                </li>
              </ul>
              <div className="flex items-center">
                <a href="mailto:julawvision@gmail.com" className="hover:text-blue-500 transition-colors flex items-center">
                  <Mail size={20} className="ml-2" />
                  <span className="text-sm">julawvision@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
