import React, { useState, useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Download, Search } from 'lucide-react';

const exams = [
  {
    title: "الثقافة الاسلامية 1",
    description: "بنك اسئلة لمادة الثقافة الاسلامية",
    pdfLink: "/pdfs/testbank1.pdf"
  },
  {
    title: "الثقافة الاسلامية 2",
    description: "بنك اسئلة لمادة الثقافة الاسلامية",
    pdfLink: "/pdfs/testbank2.pdf"
  },
  {
    title: "قانون دولي خاص",
    description: "بنك اسئلة لمادة القانون الدولي الخاص",
    pdfLink: "/pdfs/testbank3.pdf"
  },
  // ... يمكنك إضافة المزيد من الامتحانات هنا إذا كنت ترغب في ذلك
];

const QuestionBankContent: React.FC = () => {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExams = useMemo(() => {
    return exams.filter(exam => 
      exam.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">بنك الأسئلة</h1>
      
      <div className={`relative mb-6 ${darkMode ? 'text-white' : 'text-black'}`}>
        <input
          type="text"
          placeholder="ابحث عن عناوين الامتحانات..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full p-2 pr-10 rounded-md ${
            darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
          } border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExams.map((exam, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-2">{exam.title}</h2>
            <p className="mb-4">{exam.description}</p>
            <a
              href={exam.pdfLink}
              download
              title="تحميل"
              className={`inline-flex items-center justify-center p-2 rounded-full ${
                darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
              } text-white transition-colors duration-300`}
            >
              <Download size={24} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionBankContent;
