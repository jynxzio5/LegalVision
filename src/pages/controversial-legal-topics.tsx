import React from 'react';
import Link from 'next/link';

const ControversialLegalTopics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              رؤيا قانونية
            </Link>
            <nav>
              <ul className="flex space-x-reverse space-x-4">
                <li>
                  <Link href="/" className="hover:text-white/80 transition-colors">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="/legal-codes" className="hover:text-white/80 transition-colors">
                    القوانين الأردنية
                  </Link>
                </li>
                <li>
                  <Link href="/course-books" className="hover:text-white/80 transition-colors">
                    الكتب الدراسية
                  </Link>
                </li>
                <li>
                  <Link href="/legal-topics" className="hover:text-white/80 transition-colors">
                    المواضيع القانونية
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8" dir="rtl">
        <h1 className="text-4xl font-bold mb-6 text-center">المواضيع القانونية المثيرة للجدل</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            هذه الصفحة ستحتوي على قائمة بالمواضيع القانونية المثيرة للجدل في المجتمع الأردني.
          </p>
          <p className="text-gray-700">
            نحن نعمل حاليًا على جمع وتنظيم هذه المواضيع لتقديم نظرة شاملة ومتوازنة حول القضايا القانونية الأكثر إثارة للنقاش في الأردن.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ControversialLegalTopics;
