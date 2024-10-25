import React from 'react';
import { FileDown } from 'lucide-react';
import Link from 'next/link';

const CommercialLawPage = () => {
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
        <h1 className="text-4xl font-bold mb-6 text-center">القانون التجاري في الأردن</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">نظرة عامة</h2>
          <p className="text-gray-700 mb-4">
            يعد القانون التجاري في الأردن من أهم فروع القانون التي تنظم الأنشطة التجارية والعلاقات بين التجار والشركات. يهدف هذا القانون إلى توفير إطار قانوني للمعاملات التجارية وحماية حقوق جميع الأطراف المشاركة في النشاط التجاري.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">أهم النقاط في القانون التجاري الأردني</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>تعريف الأعمال التجارية والتاجر</li>
            <li>تنظيم السجل التجاري</li>
            <li>قواعد المنافسة التجارية</li>
            <li>تنظيم الشركات التجارية وأنواعها</li>
            <li>الأوراق التجارية (الشيكات، الكمبيالات، السندات لأمر)</li>
            <li>العقود التجارية</li>
            <li>الإفلاس والتصفية</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">أنواع الشركات التجارية</h2>
          <p className="text-gray-700 mb-4">
            ينظم القانون التجاري الأردني عدة أنواع من الشركات، منها:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>شركات التضامن</li>
            <li>شركات التوصية البسيطة</li>
            <li>الشركات ذات المسؤولية المحدودة</li>
            <li>شركات المساهمة العامة</li>
            <li>شركات المساهمة الخاصة</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">الأوراق التجارية</h2>
          <p className="text-gray-700 mb-4">
            يتناول القانون التجاري الأردني الأوراق التجارية بشكل مفصل، ومن أهم الجوانب المتعلقة بها:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>أحكام إصدار وتداول الشيكات</li>
            <li>قواعد الكمبيالات وكيفية تحريرها</li>
            <li>أحكام السندات لأمر</li>
            <li>إجراءات الاحتجاج في حالة عدم الدفع</li>
            <li>المسؤولية القانونية المترتبة على إصدار شيك بدون رصيد</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">العقود التجارية</h2>
          <p className="text-gray-700 mb-4">
            ينظم القانون التجاري مجموعة من العقود التجارية الهامة، منها:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>عقد البيع التجاري</li>
            <li>عقد النقل</li>
            <li>عقد الوكالة التجارية</li>
            <li>عقد السمسرة</li>
            <li>عقد التأمين</li>
            <li>عقود التمويل والائتمان</li>
          </ul>
        </section>

        <div className="text-center mt-8">
          <a 
            href="/pdfs/code-commercial.pdf"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            download="القانون_التجاري_الأردني.pdf"
          >
            <FileDown size={20} className="ml-2" />
            تحميل النص الكامل للقانون التجاري الأردني (PDF)
          </a>
        </div>
      </main>
    </div>
  );
};

export default CommercialLawPage;
