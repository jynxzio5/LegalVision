import React from 'react';
import Link from 'next/link';
import { Mail, Instagram, Home } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20"></div>
        <div className="absolute inset-0 animated-bg"></div>
        <svg className="absolute bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill={darkMode ? "#1F2937" : "#F3F4F6"} fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,181.3C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-5xl font-bold mb-12 text-center animate-fade-in-down">تواصل معنا</h1>
        
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">المطورون</h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all">
                <span className="font-medium text-lg">المعتصم بالله</span>
                <a href="https://www.instagram.com/8kp.m" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 flex items-center bg-white dark:bg-gray-600 px-3 py-2 rounded-full shadow-sm hover:shadow-md transition-all" aria-label="Instagram profile of المعتصم بالله">
                  <Instagram size={20} />
                </a>
              </li>
              <li className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all">
                <span className="font-medium text-lg">محمد الفطيمات</span>
                <a href="https://www.instagram.com/mh_a_i" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 flex items-center bg-white dark:bg-gray-600 px-3 py-2 rounded-full shadow-sm hover:shadow-md transition-all" aria-label="Instagram profile of محمد الفطيمات">
                  <Instagram size={20} />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mb-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">البريد الإلكتروني</h2>
            <a href="mailto:julawvision@gmail.com" className="text-blue-500 hover:text-blue-600 flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:shadow-md transition-all">
              <Mail size={24} className="ml-3" />
              <span className="text-xl">julawvision@gmail.com</span>
            </a>
          </div>
          
          <Link href="/" className="block text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Home size={20} className="inline-block ml-3" />
            <span className="font-bold text-lg">العودة إلى الصفحة الرئيسية</span>
          </Link>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.5s ease-out;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        .animated-bg {
          background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          opacity: 0.1;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 8%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 8%);
          background-size: 50px 50px;
          animation: sparkle 4s linear infinite;
        }

        @keyframes sparkle {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
