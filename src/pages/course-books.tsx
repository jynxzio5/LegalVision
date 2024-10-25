import React from 'react';
import { FileDown, Instagram, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CourseBooks = () => {
  const router = useRouter();
  const books = [
    { title: "مجلة الأحكام العدلية", filename: "/pdfs/majallat-al-ahkam-al-adliyyah.pdf", available: true },
    { title: "الثقافة الوطنية", filename: "/pdfs/national-culture.pdf", available: true },
    { title: "الإسلام وقضايا العصر", filename: "/pdfs/islam-contemporary-issues.pdf", available: true },
    { title: "الريادة والابتكار", filename: "/pdfs/book3.pdf", available: true },
    { title: "أخلاق وقيم", filename: "/pdfs/ethics-values.pdf", available: true },
  ];

  const summaries = [
    { title: "القانون الاداري", author: "الدكتورة هالة العتوم", filename: "/pdfs/managelaw.pdf" },
    { title: "التنظيم الاداري", author: "الطالب عبدالله ملكاوي", filename: "/pdfs/tal5es.pdf" },
    { title: "احكام التزام", author: "الطالبتين هبة ناصر قطاني / سوار محمد العداربة", filename: "/pdfs/ahkam-eltzam.pdf" },
    { title: "مصادر التزام غير ارادية", author: "الطالب احمد عياصرة", filename: "/pdfs/non-voluntary-obligation-sources-summary.pdf" },
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
                  <Link href="/" className="hover:text-white/80">
                    <Home size={28} /> {/* تم استبدال النص بأيقونة المنزل */}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8" dir="rtl">
        <button 
          onClick={() => router.back()} 
          className="mb-4 inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowRight className="ml-2" />
          رجوع
        </button>

        <h1 className="text-4xl font-bold mb-6 text-center">الكتب الدراسية والمراجع القانونية</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">الكتب والمراجع</h2>
          <ul className="space-y-4">
            {books.map((book, index) => (
              <li key={index} className="flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0">
                <span className="text-xl font-semibold">{book.title}</span>
                {book.available ? (
                  <button 
                    onClick={() => handleDownload(book.filename)}
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <FileDown size={18} className="ml-2" />
                    PDF
                  </button>
                ) : (
                  <span className="text-gray-500 italic">قريباً</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">ملخصات</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-right">اسم الملخص</th>
                  <th className="px-4 py-2 text-center">دكتور/ة المادة</th>
                  <th className="px-4 py-2 text-left">تحميل</th>
                </tr>
              </thead>
              <tbody>
                {summaries.map((summary, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="px-4 py-2 text-right font-semibold">{summary.title}</td>
                    <td className="px-4 py-2 text-center">{summary.author}</td>
                    <td className="px-4 py-2 text-left">
                      <button 
                        onClick={() => handleDownload(summary.filename)}
                        className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors"
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

        <div className="mt-12 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md">
          <p className="text-yellow-700">
            <strong>تنبيه:</strong> إذا كان أي من الكتب أو الملخصات المذكورة أعلاه يعود لك ولا ترغب في عرضه على موقعنا، يرجى التواصل معنا وسنقوم بإزالته فورًا.
          </p>
          <div className="mt-2 flex items-center flex-wrap">
            <span className="mr-2">للتواصل:</span>
            <a 
              href="https://www.instagram.com/8kp.m/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mr-4"
            >
              <Instagram size={20} className="mr-1" />
              @8kp.m
            </a>
            <a 
              href="https://www.instagram.com/mh_a_i/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
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
