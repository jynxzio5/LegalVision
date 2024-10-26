import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/router';

const CivilRightsPage = () => {
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
              <ul className="flex items-center">
                <li>
                  <Link href="/" className="hover:text-white/80">
                    <Home size={24} />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8" dir="rtl">
        <h1 className="text-4xl font-bold mb-6 text-center">الحقوق المدنية في الأردن</h1>
        
        <button 
          onClick={handleBack} 
          className="flex items-center mb-4 text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft size={20} className="ml-1" />
          رجوع
        </button>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">نظرة عامة</h2>
          <p className="text-gray-700 mb-4">
            الحقوق المدنية هي الحقوق الأساسية التي يتمتع بها المواطنون والمقيمون في الأردن. تهدف هذه الحقوق إلى ضمان المساواة والعدالة وحماية الحريات الأساسية لجميع الأفراد في المجتمع.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">أهم الحقوق المدنية في الأردن</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>الحق في المساواة أمام القانون</li>
            <li>حرية التعبير والرأي</li>
            <li>حرية الاعتقاد والدين</li>
            <li>الحق في التجمع السلمي</li>
            <li>الحق في تكوين الجمعيات والانضمام إليها</li>
            <li>الحق في المشاركة السياسية</li>
            <li>الحق في التعليم</li>
            <li>الحق في الرعاية الصحية</li>
            <li>الحق في العمل وظروف عمل عادلة</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">الإطار القانوني للحقوق المدنية</h2>
          <p className="text-gray-700 mb-4">
            تستند الحقوق المدنية في الأردن إلى عدة مصادر قانونية، منها:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>الدستور الأردني</li>
            <li>القوانين والتشريعات الوطنية</li>
            <li>المعاهدات والاتفاقيات الدولية التي صادق عليها الأردن</li>
            <li>قرارات المحكمة الدستورية</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">تحديات وقضايا معاصرة</h2>
          <p className="text-gray-700 mb-4">
            رغم التقدم المحرز في مجال الحقوق المدنية، لا تزال هناك بعض التحديات والقضايا المعاصرة، منها:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>تعزيز المساواة بين الجنسين</li>
            <li>حماية حقق الأقليات</li>
            <li>ضمان حرية الصحافة والإعلام</li>
            <li>تحسين ظروف العمل وحقوق العمال</li>
            <li>تعزيز استقلال القضاء</li>
            <li>مكافحة التمييز بجميع أشكاله</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">آليات حماية الحقوق المدنية</h2>
          <p className="text-gray-700 mb-4">
            يوجد في الأردن عدة آليات لحماية الحقوق المدنية، منها:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>المحاكم الوطنية</li>
            <li>المركز الوطني لحقوق الإنسان</li>
            <li>منظمات المجتمع المدني</li>
            <li>الهيئات الرقابية الحكومية</li>
            <li>آليات الشكاوى والتظلم</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CivilRightsPage;
