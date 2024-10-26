import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

const ControversialLegalTopics: React.FC = () => {
  const topics = [
    {
      title: "الزواج المدني",
      description: "قضية مثيرة للجدل حول إمكانية تطبيق الزواج المدني في الأردن.",
      details: "يختلف الفقهاء والقضاة حول شرعية وقانونية الزواج المدني. البعض يرى أنه يتعارض مع الشريعة الإسلامية، بينما يرى آخرون أنه ضروري لضمان حقوق المواطنين من مختلف الأديان."
    },
    {
      title: "حقوق المرأة في الميراث",
      description: "النقاش حول المساواة في الميراث بين الرجل والمرأة.",
      details: "هناك جدل قائم بين من يدعو إلى المساواة الكاملة في الميراث وبين من يتمسك بالتقسيم التقليدي المستند إلى التفسيرات الفقهية الشائعة."
    },
    {
      title: "عقوبة الإعدام",
      description: "الجدل المستمر حول استمرار تطبيق عقوبة الإعدام أو إلغائها.",
      details: "ينقسم الرأي بين مؤيد لاستمرار العقوبة كرادع للجريمة، وبين معارض يرى أنها تتنافى مع حق الحياة وإمكانية إصلاح المجرم."
    },
    {
      title: "قوانين الأحوال الشخصية",
      description: "النقاش حول تحديث قوانين الأحوال الشخصية.",
      details: "يدور جدل حول مدى الحاجة لتحديث هذه القوانين لتتماشى مع التغيرات الاجتماعية، مع الحفاظ على الهوية الإسلامية للمجتمع."
    }
  ];

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

      <main className="container mx-auto px-4 py-8" dir="rtl">
        <h1 className="text-4xl font-bold mb-6 text-center">المواضيع القانونية المثيرة للجدل</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <p className="text-gray-700 mb-4">
            فيما يلي قائمة بالمواضيع القانونية المثيرة للجدل في المجتمع الأردني. هذه المواضيع تحظى باهتمام كبير وتثير نقاشات حادة بين مختلف الأطراف في المجتمع القانوني والعام.
          </p>
        </div>

        {topics.map((topic, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-3">{topic.title}</h2>
            <p className="text-gray-600 mb-4">{topic.description}</p>
            <p className="text-gray-700">{topic.details}</p>
          </div>
        ))}

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
