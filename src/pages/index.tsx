import Link from 'next/link';
import React from 'react';
import { Book, Gavel, Bookmark } from 'lucide-react';

// Add these styles at the top of your file
const styles = `
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
`;

// Main App Component
const Home: React.FC = () => {
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
    },
    { 
      title: "القانون التجاري", 
      description: "تحليل للقوانين التي تحكم الأعمال التجارية في الأردن.",
      link: "/legal-topics/commercial-law"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{styles}</style>
      
      {/* الهيدر المعدل */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              رؤيا قانونية
            </Link>
            <nav>
              <ul className="flex space-x-reverse space-x-4">
                <li><Link href="/" className="hover:text-white/80">الرئيسية</Link></li>
                <li><Link href="/legal-codes/" className="hover:text-white/80">القوانين الأردنية</Link></li>
                <li><Link href="/course-books" className="hover:text-white/80">الكتب الدراسية</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div className="container mx-auto px-4 py-8" dir="rtl">
          <h1 className="text-4xl font-bold mb-6 text-center">مرحباً بكم في رؤيا قانونية</h1>
          <p className="text-xl text-center mb-12">مصدركم الشامل للمعلومات والمواضيع القانونية الأردنية</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/legal-codes" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Gavel size={48} className="mb-4 mx-auto text-blue-600" />
              <h2 className="text-2xl font-semibold mb-2 text-center">القوانين الأردنية</h2>
              <p className="text-gray-600 text-center">الوصول إلى جميع القوانين الأردنية الرئيسية مع الأوصاف وملفات PDF القابلة للتنزيل</p>
            </Link>
            
            <Link href="/course-books" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Book size={48} className="mb-4 mx-auto text-blue-600" />
              <h2 className="text-2xl font-semibold mb-2 text-center">الكتب الدراسية</h2>
              <p className="text-gray-600 text-center">ملخصات وروابط تحميل لكتب المقررات الجامعية الرئيسية</p>
            </Link>
            
            <Link href="/controversial-legal-topics" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Bookmark size={48} className="mb-4 mx-auto text-blue-600" />
              <h2 className="text-2xl font-semibold mb-2 text-center">المواضيع القانونية المثيرة للجدل</h2>
              <p className="text-gray-600 text-center">استكشف المواضيع القانونية المثيرة للنقاش في المجتمع الأردني</p>
            </Link>
          </div>

          {/* Legal Topics Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-center">المواضيع القانونية</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legalTopics.map((topic, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{topic.title}</h2>
                    <p className="text-gray-600 mb-4">{topic.description}</p>
                  </div>
                  <Link 
                    href={topic.link}
                    className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center group"
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
        </div>
      </main>
    </div>
  );
};

export default Home;
