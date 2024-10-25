import React from 'react';
import { FileDown } from 'lucide-react';
import Link from 'next/link';

const CriminalLawPage = () => {
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
        <h1 className="text-4xl font-bold mb-6 text-center">القانون الجنائي في الأردن</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">نظرة عامة</h2>
          <p className="text-gray-700 mb-4">
            يعد القانون الجنائي في الأردن من أهم فروع القانون التي تهدف إلى حماية المجتمع وضمان الأمن والاستقرار. يحدد هذا القانون الأفعال التي تعتبر جرائم والعقوبات المترتبة عليها، كما ينظم إجراءات التحقيق والمحاكمة في القضايا الجنائية.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">أهم النقاط في القانون الجنائي الأردني</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>تصنيف الجرائم (جنايات، جنح، مخالفات)</li>
            <li>تحديد أركان الجريمة (الركن المادي والركن المعنوي)</li>
            <li>تنظيم العقوبات وأنواعها</li>
            <li>تحديد الظروف المشددة والمخففة للعقوبة</li>
            <li>تنظيم المسؤولية الجنائية وموانعها</li>
            <li>تحديد أسباب الإباحة وموانع العقاب</li>
            <li>تنظيم إجراءات التحقيق والمحاكمة الجنائية</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">أنواع الجرائم</h2>
          <p className="text-gray-700 mb-4">
            يصنف القانون الجنائي الأردني الجرائم إلى عدة أنواع، منها:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>الجرائم الواقعة على الأشخاص (القتل، الإيذاء)</li>
            <li>الجرائم الواقعة على الأموال (السرقة، الاحتيال)</li>
            <li>الجرائم المخلة بالإدارة العامة (الرشوة، اختلاس المال العام)</li>
            <li>جرائم أمن الدولة</li>
            <li>الجرائم الإلكترونية</li>
            <li>جرائم المخدرات</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">العقوبات</h2>
          <p className="text-gray-700 mb-4">
            يحدد القانون الجنائي الأردني مجموعة من العقوبات التي يمكن فرضها على مرتكبي الجرائم، ومنها:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>الإعدام (في حالات محددة جدًا)</li>
            <li>الأشغال الشاقة المؤبدة أو المؤقتة</li>
            <li>الاعتقال</li>
            <li>الحبس</li>
            <li>الغرامة</li>
            <li>المصادرة</li>
            <li>العقوبات البديلة (مثل الخدمة المجتمعية)</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">حقوق المتهم</h2>
          <p className="text-gray-700 mb-4">
            يكفل القانون الجنائي الأردني مجموعة من الحقوق للمتهم، منها:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>الحق في افتراض البراءة حتى تثبت الإدانة</li>
            <li>الحق في الدفاع والاستعانة بمحامٍ</li>
            <li>الحق في محاكمة عادلة وعلنية</li>
            <li>الحق في الطعن في الأحكام الصادرة</li>
            <li>الحق في عدم التعرض للتعذيب أو المعاملة القاسية</li>
          </ul>
        </section>

        <div className="text-center">
          <a 
            href="/pdfs/crimnal-code.pdf"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            download="القانون_الجنائي_الأردني.pdf"
          >
            <FileDown size={20} className="ml-2" />
            تحميل النص الكامل للقانون الجنائي الأردني (PDF)
          </a>
        </div>
      </main>
    </div>
  );
};

export default CriminalLawPage;
