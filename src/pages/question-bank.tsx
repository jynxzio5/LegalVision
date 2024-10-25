import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';
import dynamic from 'next/dynamic';

const DynamicQuestionBankContent = dynamic(
  () => import('../components/QuestionBankContent'),
  { ssr: false }
);

const QuestionBankPage: React.FC = () => {
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
                    <Home size={28} />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative" dir="rtl">
        <DynamicQuestionBankContent />
      </main>
    </div>
  );
};

export default QuestionBankPage;
