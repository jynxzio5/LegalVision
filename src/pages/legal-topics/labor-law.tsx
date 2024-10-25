import React from 'react';
import { FileDown, Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LaborLawPage: React.FC = () => {
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

        <h1 className="text-4xl font-bold mb-6 text-center">قانون العمل في الأردن</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">نظرة عامة</h2>
          <p className="text-gray-700 mb-4">
            يعد قانون العمل الأردني من أهم التشريعات التي تنظم العلاقات بين أصحاب العمل والعمال في المملكة الأردنية الهاشمية. يهدف هذا القانون إلى حماية حقوق العمال وضمان ظروف عمل عادلة وآمنة، مع مراعاة مصالح أصحاب العمل والتنمية الاقتصادية للبلاد.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">أهم النقاط في قانون العمل الأردني</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>تحديد ساعات العمل وأيام الراحة الأسبوعية والإجازات السنوية</li>
            <li>تنظيم الحد الأدنى للأجور وطرق دفعها</li>
            <li>حماية حقوق المرأة العاملة، بما في ذلك إجازة الأمومة</li>
            <li>تحديد شروط وإجراءات إنهاء عقود العمل</li>
            <li>تنظيم عمل الأحداث وحمايتهم من الاستغلال</li>
            <li>إنشاء نظام للضمان الاجتماعي وتعويضات إصابات العمل</li>
            <li>تشجيع التدريب المهني وتطوير المهارات</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">حقوق العمال الأساسية</h2>
          <p className="text-gray-700 mb-4">
            يضمن قانون العمل الأردني مجموعة من الحقوق الأساسية للعمال، منها:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>الحق في أجر عادل ومنتظم</li>
            <li>الحق في بيئة عمل آمنة وصحية</li>
            <li>الحق في تكوين النقابات والانضمام إليها</li>
            <li>الحق في التفاوض الجماعي</li>
            <li>الحق في الإجازات المدفوعة</li>
            <li>الحماية من التمييز والتحرش في مكان العمل</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">التحديات والتطورات الحديثة</h2>
          <p className="text-gray-700 mb-4">
            يواجه سوق العمل الأردني عدة تحديات، منها البطالة وعدم التوافق بين مخرجات التعليم ومتطلبات سوق العمل. وقد شهدت السنوات الأخيرة عدة تعديلات على قانون العمل لمواكبة التغيرات الاقتصادية والاجتماعية، مثل تنظيم العمل المرن وحماية العمال في القطاع غير الرسمي.
          </p>
        </section>

        <div className="text-center">
          <a 
            href="/pdfs/labor-code.pdf"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            download="قانون_العمل_الأردني.pdf"
          >
            <FileDown size={20} className="ml-2" />
            تحميل النص الكامل لقانون العمل الأردني (PDF)
          </a>
        </div>
      </main>
    </div>
  );
};

export default LaborLawPage;
