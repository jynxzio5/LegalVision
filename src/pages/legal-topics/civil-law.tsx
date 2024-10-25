import React from 'react';
import { FileDown, Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CivilLawPage: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
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
        <button 
          onClick={handleBack} 
          className="absolute top-0 right-4 mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowRight className="ml-2" />
          رجوع
        </button>

        <h1 className="text-4xl font-bold mb-6 text-center">القانون المدني في الأردن</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">نظرة عامة</h2>
          <p className="text-gray-700 mb-4">
            يعد القانون المدني في الأردن الركيزة الأساسية للنظام القانوني الخاص. يهدف هذا القانون إلى تنظيم العلاقات بين الأفراد والكيانات الخاصة، ويشمل مجموعة واسعة من المجالات مثل العقود، الملكية، المسؤولية التقصيرية، وقانون الأسرة.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">أهم النقاط في القانون المدني الأردني</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>مصادر الالتزام (العقد، الإرادة المنفردة، العمل غير المشروع، الإثراء بلا سبب، القانون)</li>
            <li>نظرية العقد (أركان العقد، صحة العقد، آثار العقد، انحلال العقد)</li>
            <li>المسؤولية التقصيرية (الضرر، الخطأ، علاقة السببية)</li>
            <li>الحقوق العينية (حق الملكية، الحقوق المتفرعة عن الملكية)</li>
            <li>قانون الأسرة (الزواج، الطلاق، النفقة، الحضانة)</li>
            <li>الميراث والوصية</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">نظرية العقد</h2>
          <p className="text-gray-700 mb-4">
            تعد نظرية العقد من أهم الموضوعات في القانون المدني الأردني، وتشمل:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>أركان العقد: الرضا، المحل، السبب</li>
            <li>صحة العقد: الأهلية، عيوب الرضا (الغلط، التدليس، الإكراه، الاستغلال)</li>
            <li>آثار العقد: القوة الملزمة للعقد، نسبية أثر العقد</li>
            <li>تفسير العقد وتنفيذه</li>
            <li>انحلال العقد: الفسخ، الإقالة، البطلان</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">المسؤولية التقصيرية</h2>
          <p className="text-gray-700 mb-4">
            تنظم المسؤولية التقصيرية في القانون المدني الأردني الأضرار الناتجة عن الأفعال غير المشروعة، وتشمل:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>شروط قيام المسؤولية التقصيرية: الخطأ، الضرر، علاقة السببية</li>
            <li>أنواع الضرر: المادي والمعنوي</li>
            <li>المسؤولية عن فعل الغير</li>
            <li>المسؤولية عن الأشياء</li>
            <li>دعوى التعويض وتقدير التعويض</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">الحقوق العينية</h2>
          <p className="text-gray-700 mb-4">
            ينظم القانون المدني الأردني الحقوق العينية، وهي الحقوق التي ترد على الأشياء مباشرة، وتشمل:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>حق الملكية: عناصره، قيوده، أسباب كسبه</li>
            <li>الحقوق المتفرعة عن الملكية: حق الانتفاع، حق الارتفاق</li>
            <li>الحقوق العينية التبعية: الرهن، حق الامتياز</li>
            <li>الحيازة وآثارها القانونية</li>
          </ul>
        </section>

        <div className="text-center">
          <a 
            href="/pdfs/civil-code.pdf"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            download="القانون_المدني_الأردني.pdf"
          >
            <FileDown size={20} className="ml-2" />
            تحميل النص الكامل للقانون المدني الأردني (PDF)
          </a>
        </div>
      </main>
    </div>
  );
};

export default CivilLawPage;
