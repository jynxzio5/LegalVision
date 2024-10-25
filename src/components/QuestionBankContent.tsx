import React from 'react';
import { useRouter } from 'next/router';
import { ArrowRight, FileDown } from 'lucide-react';

const exams = [
  { id: 1, name: 'امتحان القانون المدني 2022', file: '/pdfs/civil-law-exam-2022.pdf' },
  { id: 2, name: 'امتحان القانون الجنائي 2022', file: '/pdfs/criminal-law-exam-2022.pdf' },
  { id: 3, name: 'امتحان قانون الأسرة 2022', file: '/pdfs/family-law-exam-2022.pdf' },
  { id: 4, name: 'امتحان القانون التجاري 2022', file: '/pdfs/commercial-law-exam-2022.pdf' },
];

const QuestionBankContent: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <button 
        onClick={handleBack} 
        className="absolute top-0 right-4 mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        <ArrowRight className="ml-2" />
        رجوع
      </button>

      <h1 className="text-4xl font-bold mb-6 text-center">بنك الأسئلة</h1>
      
      <div className="grid gap-4">
        {exams.map((exam) => (
          <div key={exam.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <span className="text-lg font-semibold">{exam.name}</span>
            <a 
              href={exam.file}
              download
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <FileDown size={20} className="mr-2" />
              تحميل
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuestionBankContent;
