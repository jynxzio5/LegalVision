import React from 'react';
import { FileDown } from 'lucide-react';
import Link from 'next/link';

const PropertyLawPage = () => {
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
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="/legal-codes" className="hover:text-white/80">
                    القوانين الأردنية
                  </Link>
                </li>
                <li>
                  <Link href="/course-books" className="hover:text-white/80">
                    الكتب الدراسية
                  </Link>
                </li>
                <li>
                  <Link href="/legal-topics" className="hover:text-white/80">
                    المواضيع القانونية
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8" dir="rtl">
        <h1 className="text-4xl font-bold mb-6 text-center">قانون الملكية في الأردن</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">نظرة عامة</h2>
          <p className="text-gray-700 mb-4">
            يعد قانون الملكية في الأردن من أهم القوانين التي تنظم العلاقات المتعلقة بالأموال والممتلكات. يهدف هذا القانون إلى حماية حقوق الملكية وتنظيم عمليات نقل الملكية وتسجيلها، بالإضافة إلى تحديد الحقوق والواجبات المترتبة على الملكية.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">أهم النقاط في قانون الملكية الأردني</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>تعريف أنواع الملكية (الخاصة، العامة، الشائعة)</li>
            <li>تنظيم عمليات البيع والشراء للعقارات</li>
            <li>تحديد قواعد الرهن العقاري والحقوق العينية</li>
            <li>تنظيم حقوق الارتفاق والجوار</li>
            <li>تحديد إجراءات تسجيل الملكية في دائرة الأراضي والمساحة</li>
            <li>تنظيم عمليات الإيجار وحقوق المؤجر والمستأجر</li>
            <li>حماية الملكية الفكرية والصناعية</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">حقوق الملكية الأساسية</h2>
          <p className="text-gray-700 mb-4">
            يضمن قانون الملكية الأردني مجموعة من الحقوق الأساسية للمالكين، منها:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>حق استعمال الملكية والتصرف بها</li>
            <li>حق الانتفاع من الملكية</li>
            <li>حق حماية الملكية من التعدي</li>
            <li>حق نقل الملكية للغير (البيع، الهبة، الميراث)</li>
            <li>حق تأجير الملكية</li>
            <li>حق رهن الملكية للحصول على تمويل</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">التحديات والتطورات الحديثة</h2>
          <p className="text-gray-700 mb-4">
            يواجه قانون الملكية في الأردن عدة تحديات في ظل التطورات الاقتصادية والتكنولوجية الحديثة. ومن أهم هذه التحديات:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>تنظيم الملكية في العالم الرقمي والأصول الافتراضية</li>
            <li>حماية حقوق الملكية الفكرية في ظل انتشار الإنترنت</li>
            <li>تحديث إجراءات تسجيل الملكية وتبسيطها</li>
            <li>معالجة قضايا الملكية المتعلقة بالاستثمار الأجنبي</li>
            <li>تطوير قوانين الإيجار لتحقيق التوازن بين حقوق المالك والمستأجر</li>
          </ul>
        </section>

        <div className="text-center">
          <a 
            href="/api/download/property-law-jordan.pdf"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            <FileDown size={20} className="ml-2" />
            تحميل النص الكامل لقانون الملكية الأردني (PDF)
          </a>
        </div>
      </main>
    </div>
  );
};

export default PropertyLawPage;
