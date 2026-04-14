"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "What services does Perfect Advice provide?",
    answer: "Perfect Advice offers a comprehensive range of services including company incorporation, audit & assurance, legal compliance, risk advisory, and virtual CFO services to help businesses scale globally."
  },
  {
    question: "How can Perfect Advice help my business stay compliant?",
    answer: "We provide end-to-end regulatory compliance management, ensuring your business meets all local and international legal requirements through our team of expert CAs and legal advisors."
  },
  {
    question: "What industries does Perfect Advice serve?",
    answer: "We serve a diverse set of industries including Fintech, Healthcare, E-commerce, Manufacturing, and Real Estate, tailored to specific sector regulations."
  },
  {
    question: "Can Perfect Advice assist with company incorporation?",
    answer: "Yes, we specialize in seamless company incorporation services across 80+ countries, handling all documentation, licensing, and registration processes."
  },
  {
    question: "How does Perfect Advice ensure data security and Privacy?",
    answer: "We adhere to strict data privacy protocols and use secure, encrypted digital infrastructure to protect your sensitive financial and business information."
  }
];

const FAQSection = () => {
  // State to track which accordion item is open (null = all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-4">
        
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            <span className="text-blue-600">F</span>requently <span className="text-blue-600">A</span>sked <span className="text-blue-600">Q</span>uestions
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* --- Left Column: Accordion --- */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
              >
                {/* Question Header (Clickable) */}
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-slate-800">
                    {item.question}
                  </span>
                  <span className="text-slate-500">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                {/* Answer Content (Conditional Rendering) */}
                <div 
                  className={`
                    overflow-hidden transition-[max-height] duration-300 ease-in-out
                    ${openIndex === index ? 'max-h-40' : 'max-h-0'}
                  `}
                >
                  <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-gray-100">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- Right Column: Brochure Card --- */}
          <div className="w-full lg:w-1/3 h-full min-h-96 rounded-xl overflow-hidden relative shadow-lg group">
            
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
              alt="Professional Support" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-blue-900/90 via-blue-800/60 to-transparent"></div>

            {/* Content Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 text-center">
              <h3 className="text-white text-xl font-bold mb-3">
                Do you have more questions?
              </h3>
              
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
              </p>

              <button className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold py-3.5 rounded-md transition-colors shadow-lg">
                Download Brochure
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;