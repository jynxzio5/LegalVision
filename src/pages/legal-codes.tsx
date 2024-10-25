import React from 'react';
import Link from 'next/link';
import { Book, Briefcase, Users, Gavel, Shield, Home, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/router';

const LegalCodes = () => {
  const codes = [
    { title: "القانون المدني", icon: Book, link: "/legal-topics/civil-law" },
    { title: "القانون التجاري", icon: Briefcase, link: "/legal-topics/commercial-law" },
    { title: "قانون الأسرة", icon: Users, link: "/legal-topics/family-law" },
    { title: "قانون العمل", icon: Gavel, link: "/legal-topics/labor-law" },
    { title: "القانون الجنائي", icon: Shield, link: "/legal-topics/criminal-law" },
  ];

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

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">القوانين الأردنية</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
          {codes.map((code, index) => (
            <Link href={code.link} key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <code.icon className="w-12 h-12 mb-4 mx-auto text-blue-600" />
                <h2 className="text-xl font-semibold text-center">{code.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LegalCodes;
