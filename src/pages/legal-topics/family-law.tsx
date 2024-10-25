import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, ArrowRight } from 'lucide-react';

const FamilyLawPage: React.FC = () => {
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

        <h1 className="text-4xl font-bold mb-6 text-center">قانون الأسرة في الأردن</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">نظرة عامة</h2>
          <p className="text-gray-700 mb-4">
            يعد قانون الأسرة في الأردن من أهم القوانين التي تنظم العلاقات الأسرية والشخصية. يستند هذا القانون إلى الشريعة الإسلامية ويهدف إلى تنظيم الزواج والطلاق وحقوق الأطفال والميراث وغيرها من القضايا المتعلقة بالأسرة.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">أهم النقاط في قانون الأسرة الأردني</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>تنظيم عقد الزواج وشروطه</li>
            <li>تحديد حقوق وواجبات الزوجين</li>
            <li>تنظيم إجراءا الطلاق والتفريق</li>
            <li>تحديد حقوق الأطفال في النفقة والحضانة</li>
            <li>تنظيم قضايا النسب والرضاعة</li>
            <li>تحديد قواعد الميراث وفقًا للشريعة الإسلامية</li>
            <li>تنظيم الوصية والوقف</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">الزواج في القانون الأردني</h2>
          <p className="text-gray-700 mb-4">
            ينظم قانون الأسرة الأردني عقد الزواج ويحدد شروطه وأركانه، ومن أهم النقاط المتعلقة بالزواج:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>تحديد السن القانوني للزواج</li>
            <li>اشتراط موافقة الولي في حالات معينة</li>
            <li>تنظيم إجراءات عقد القران وتسجيله</li>
            <li>تحديد الحقوق المالية للزوجة (المهر والنفقة)</li>
            <li>تنظيم تعدد الزوجات وفق ضوابط محددة</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">الطلاق والتفريق</h2>
          <p className="text-gray-700 mb-4">
            يتناول قانون الأسرة الأردني مسألة إنهاء الزواج من خلال الطلاق أو التفريق القضائي، ومن أهم النقاط في هذا الجانب:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>تحديد أنواع الطلاق (رجعي، بائن)</li>
            <li>تنظيم إجراءات الخلع</li>
            <li>تحديد أسباب التفريق القضائي (الشقاق والنزاع، الغيبة، الحبس)</li>
            <li>تنظيم حقوق المطلقة (النفقة، السكن، متعة الطلاق)</li>
            <li>تحديد فترة العدة وأحكامها</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">حقوق الأطفال</h2>
          <p className="text-gray-700 mb-4">
            يولي قانون الأسرة الأردني اهتمامًا كبيرًا لحقوق الأطفال، ومن أهم الجوانب المتعلقة بهذا الموضوع:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>تنظيم أحكام الحضانة وشروطها</li>
            <li>تحديد حق الطفل في النفقة</li>
            <li>تنظيم حق الرؤية للوالد غير الحاضن</li>
            <li>حماية حقوق الأطفال ذوي الاحتياجات الخاصة</li>
            <li>تنظيم إجراءات إثبات النسب</li>
          </ul>
        </section>

        <div className="text-center">
          <a 
            href="/api/download/family-law-jordan.pdf"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
             تحميل النص الكامل لقانون الأسرة الأردني (PDF)
          </a>
        </div>
      </main>
    </div>
  );
};

export default FamilyLawPage;
