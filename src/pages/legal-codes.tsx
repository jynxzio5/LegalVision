import React, { useState } from 'react';
import Link from 'next/link';
import { Book, Briefcase, Users, Gavel, Shield, Home, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

  .menu-title {
    font-family: 'Tajawal', sans-serif;
    font-weight: 700;
  }
`;

const LegalCodes = () => {
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

  const codes = [
    { title: "القانون المدني", icon: Book, link: "/legal-topics/civil-law" },
    { title: "القانون التجاري", icon: Briefcase, link: "/legal-topics/commercial-law" },
    { title: "قانون الأسرة", icon: Users, link: "/legal-topics/family-law" },
    { title: "قانون العمل", icon: Gavel, link: "/legal-topics/labor-law" },
    { title: "القانون الجنائي", icon: Shield, link: "/legal-topics/criminal-law" },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
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

      <main className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>القوانين الأردنية</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
          {codes.map((code, index) => (
            <Link href={code.link} key={index}>
              <div className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-lg'} p-6 rounded-lg shadow-md transition-shadow cursor-pointer`}>
                <code.icon className={`w-12 h-12 mb-4 mx-auto ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <h2 className={`text-xl font-semibold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>{code.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LegalCodes;
