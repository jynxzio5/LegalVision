import React, { useState } from 'react';
import { FileDown, Instagram, ArrowRight, Home, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../contexts/ThemeContext';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

  .menu-title {
    font-family: 'Tajawal', sans-serif;
    font-weight: 700;
  }
`;

const CourseBooks = () => {
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

  const books = [
    { title: "مجلة الأحكام العدلية", filename: "/pdfs/book.pdf", available: true },
    { title: "الثقافة الوطنية", filename: "/pdfs/book6.pdf", available: true },
    { title: "الإسلام وقضايا العصر", filename: "/pdfs/islam-contemporary-issues.pdf", available: true },
    { title: "الريادة والابتكار", filename: "/pdfs/book3.pdf", available: true },
    { title: "أخلاق وقيم", filename: "/pdfs/short4.pdf", available: true },
    { title: "القانون الدولي العام", filename: "/pdfs/book1.pdf", available: true },
  ];

  const summaries = [
    { title: "القانون الاداري", author: "الدكتورة هالة العتوم", filename: "/pdfs/managelaw.pdf" },
    { title: "التنظيم الاداري", author: "الطالب عبدالله ملكاوي", filename: "/pdfs/tal5es.pdf" },
    { title: "احكام التزام", author: "الطالبتين هبة ناصر قطاني / سوار محمد العداربة", filename: "/pdfs/ahkam-eltzam.pdf" },
    { title: "مصادر التزام غير ارادية", author: "الطالب احمد عياصرة", filename: "/pdfs/non-voluntary-obligation-sources-summary.pdf" },
    { title: "أصول محاكمات جزائية", author: "غير معروف", filename: "/pdfs/short1.pdf" },
    { title: "مهارات اللغة العربية", author: "غير معروف", filename: "/pdfs/short2.pdf" },
    { title: "القانون الدولي الخاص", author: "الدكتور خلدون القطيشات", filename: "/pdfs/short3.pdf" },
    { title: "اساسيات اللغة الانجليزية", author: "اهل الهمة", filename: "/pdfs/short6.pdf" },
  ];

  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename.split('/').pop() || filename;
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
        <button 
          onClick={() => router.back()} 
          className={`mb-4 inline-flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
        >
          <ArrowRight className="ml-2" />
          رجوع
        </button>

        <h1 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>الكتب الدراسية والمراجع القانونية</h1>
        
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>الكتب والمراجع</h2>
          <ul className="space-y-4">
            {books.map((book, index) => (
              <li key={index} className={`flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <span className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{book.title}</span>
                {book.available ? (
                  <button 
                    onClick={() => handleDownload(book.filename)}
                    className={`inline-flex items-center ${darkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-md transition-colors`}
                  >
                    <FileDown size={18} className="ml-2" />
                    PDF
                  </button>
                ) : (
                  <span className={`italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>قريباً</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>ملخصات</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={darkMode ? 'bg-gray-700' : 'bg-gray-100'}>
                  <th className={`px-4 py-2 text-right ${darkMode ? 'text-white' : 'text-gray-900'}`}>اسم الملخص</th>
                  <th className={`px-4 py-2 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>دكتور/ة المادة</th>
                  <th className={`px-4 py-2 text-left ${darkMode ? 'text-white' : 'text-gray-900'}`}>تحميل</th>
                </tr>
              </thead>
              <tbody>
                {summaries.map((summary, index) => (
                  <tr key={index} className={`border-b last:border-b-0 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <td className={`px-4 py-2 text-right font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{summary.title}</td>
                    <td className={`px-4 py-2 text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{summary.author}</td>
                    <td className="px-4 py-2 text-left">
                      <button 
                        onClick={() => handleDownload(summary.filename)}
                        className={`inline-flex items-center ${darkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-3 py-1 rounded-md transition-colors`}
                      >
                        <FileDown size={16} className="ml-1" />
                        PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`mt-12 ${darkMode ? 'bg-yellow-900 border-yellow-700' : 'bg-yellow-100 border-yellow-500'} border-l-4 p-4 rounded-md`}>
          <p className={darkMode ? 'text-yellow-200' : 'text-yellow-700'}>
            <strong>تنبيه:</strong> إذا كان أي من الكتب أو الملخصات المذكورة أعلاه يعود لك ولا ترغب في عرضه على موقعنا، يرجى التواصل معنا وسنقوم بإزالته فورًا.
          </p>
          <div className="mt-2 flex items-center flex-wrap">
            <span className="mr-2">للتواصل:</span>
            <a 
              href="https://www.instagram.com/8kp.m/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} mr-4`}
            >
              <Instagram size={20} className="mr-1" />
              @8kp.m
            </a>
            <a 
              href="https://www.instagram.com/mh_a_i/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
            >
              <Instagram size={20} className="mr-1" />
              @mh_a_i
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseBooks;
