import React from 'react';
import Link from 'next/link';
import { Mail, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">تواصل معنا</h1>
        
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">المطورون:</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="font-medium ml-2">المعتصم بالله:</span>
                <a href="https://www.instagram.com/8kp.m" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 flex items-center">
                  <Instagram size={16} className="mr-1" />
                  @8kp.m
                </a>
              </li>
              <li className="flex items-center">
                <span className="font-medium ml-2">محمد الفطيمات:</span>
                <a href="https://www.instagram.com/mh_a_i" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 flex items-center">
                  <Instagram size={16} className="mr-1" />
                  @mh_a_i
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">البريد الإلكتروني:</h2>
            <a href="mailto:julawvision@gmail.com" className="text-blue-500 hover:text-blue-600 flex items-center">
              <Mail size={16} className="mr-2" />
              julawvision@gmail.com
            </a>
          </div>
          
          <Link href="/" className="block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
