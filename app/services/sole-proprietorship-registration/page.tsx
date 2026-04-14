"use client";

import { useState } from 'react';
import { Users, Star, CheckCircle2, ChevronDown, User } from 'lucide-react';

const SoleProprietorshipRegistration = () => {
  const [heroForm, setHeroForm] = useState({ name: '', email: '', mobile: '' });
  const [sidebarForm, setSidebarForm] = useState({ name: '', email: '', mobile: '' });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toc = [
    "Overview", "Why Sole Proprietorship?", "Eligibility Criteria", "Registration Process", "Documents Required", "Perfect Advice Advantage", "How to reach Perfect Advice?", "Frequently Asked Questions"
  ];

  const benefits = [
    {
      title: "Complete Control",
      desc: "As the sole owner, you have absolute authority over all business decisions, strategies, and day-to-day operations without any interference."
    },
    {
      title: "Quick & Easy Setup",
      desc: "It is the simplest business structure to establish in India, requiring minimal legal formalities and no mandatory central registration."
    },
    {
      title: "Lower Compliance Burden",
      desc: "Unlike companies or LLPs, a sole proprietorship has very few annual compliance requirements, reducing administrative overhead and costs."
    },
    {
      title: "Tax Advantages",
      desc: "There is no separate tax for the business; profits are taxed as the personal income of the owner, often falling into lower tax brackets initially."
    }
  ];

  const eligibilityCriteria = [
    { num: "01", title: "Indian Citizenship" },
    { num: "02", title: "Minimum 18 Years of Age" },
    { num: "03", title: "Valid Resident Proof" },
    { num: "04", title: "Functional Bank Account" },
    { num: "05", title: "Unique Business Name" },
    { num: "06", title: "Specific Business License (optional)" },
  ];

  const documents = [
    "PAN Card of the Proprietor",
    "Aadhar Card / Voter ID of the Proprietor",
    "Passport-size photographs",
    "Proof of Business Address (Rent Agreement/Utility Bill)",
    "NOC from the owner of the premises",
    "Bank Account Statement / Cancelled Cheque",
    "GST Registration (if turnover exceeds threshold)"
  ];

  // const advantage = [
  //   "Same-day processing for basic business registrations.",
  //   "Comprehensive assistance with current account opening and bank coordination.",
  //   "Expert advice on whether a proprietorship is the right fit for your scale.",
  //   "End-to-end GST and MSME (Udyam) registration support."
  // ];

  // const timelineSteps = [
  //   "Fill The Form",
  //   "Get a Callback",
  //   "Submit Document",
  //   "Track Progress",
  //   "Get Deliverables"
  // ];

  const faqs = [
    {
      q: "Is there a specific registration for Sole Proprietorship?",
      a: "No, there is no single central registration. It is usually established through registrations like MSME (Udyam), GST, or Shop & Establishment License which act as proof of business."
    },
    {
      q: "Can I convert my proprietorship to a Private Limited Company later?",
      a: "Yes, you can easily convert a sole proprietorship into a Private Limited Company or LLP as your business grows and requires more investment."
    },
    {
      q: "What is the liability of a sole proprietor?",
      a: "In a sole proprietorship, the owner has unlimited liability. This means the owner's personal assets can be used to settle the business debts."
    },
    {
      q: "Does a sole proprietorship require a separate PAN?",
      a: "No, the business uses the personal PAN of the proprietor. There is no separate legal entity distinct from the owner."
    }
  ];

  return (
    <div className="font-sans text-[#333] bg-white w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0f172a] py-16 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 11px)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-transparent to-transparent opacity-80 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Content */}
          <div className="flex-1 max-w-[750px]">
            <h1 className="text-[38px] md:text-[46px] leading-[1.2] font-bold text-white mb-5 tracking-tight">
              Sole Proprietorship Registration
            </h1>
            
            <p className="text-[16px] text-slate-300 mb-10 leading-[1.7] pr-4 max-w-[95%]">
              Launch your independent business journey today. A Sole Proprietorship is the fastest way to start your venture with full control and minimal regulatory compliance. Get certified in just 24 hours.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-8 border border-slate-700 bg-white/5 rounded-[8px] p-5 backdrop-blur-sm max-w-max">
              <div className="flex items-center gap-4">
                <User size={32} strokeWidth={1.5} className="text-[#3b82f6]"/>
                <div>
                  <div className="font-bold text-[18px] text-white tracking-wide mb-0.5">5000 +</div>
                  <div className="text-[13px] text-slate-400 font-medium tracking-wide">Proprietors Served</div>
                </div>
              </div>
              <div className="w-[1px] h-10 bg-slate-700 hidden sm:block"></div>
              <div className="flex items-center gap-4">
                <Users size={32} strokeWidth={1.5} className="text-[#3b82f6]"/>
                <div>
                  <div className="font-bold text-[18px] text-white tracking-wide mb-0.5">100 +</div>
                  <div className="text-[13px] text-slate-400 font-medium tracking-wide">CAs & Experts</div>
                </div>
              </div>
            </div>

            {/* Google Reviews */}
            {/* <div className="flex items-center gap-4">
               <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg shrink-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-[24px] h-[24px]" />
               </div>
               <div>
                 <div className="text-white font-bold text-[15px] mb-0.5">Trustpilot Score</div>
                 <div className="flex items-center gap-1.5 flex-wrap">
                    <div className="flex text-[#10b981] gap-0.5">
                      <Star size={14} className="fill-[#10b981]" strokeWidth={0} />
                      <Star size={14} className="fill-[#10b981]" strokeWidth={0} />
                      <Star size={14} className="fill-[#10b981]" strokeWidth={0} />
                      <Star size={14} className="fill-[#10b981]" strokeWidth={0} />
                      <Star size={14} className="fill-[#10b981]" strokeWidth={0} />
                    </div>
                    <span className="text-[13.5px] text-slate-300 font-medium ml-1">
                      <strong className="font-bold text-white">4.9/5</strong> Excellent Service
                    </span>
                 </div>
               </div>
            </div> */}
          </div>

          {/* Right Content - Hero Form */}
          <div className="w-full lg:w-[440px] shrink-0">
             <div className="bg-white rounded-[6px] shadow-2xl p-9 relative overflow-hidden ring-1 ring-gray-100">
                <h3 className="text-[17px] font-bold text-center text-[#111827] mb-7 tracking-wide relative z-10 w-full flex justify-center uppercase">
                  START FOR ₹499*
                </h3>

                <form className="space-y-[18px] relative z-10 pb-2" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full h-[50px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#3b82f6] text-[14.5px] placeholder:text-gray-400 bg-white transition"
                      value={heroForm.name}
                      onChange={e => setHeroForm({...heroForm, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full h-[50px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#3b82f6] text-[14.5px] placeholder:text-gray-400 bg-white transition"
                      value={heroForm.email}
                      onChange={e => setHeroForm({...heroForm, email: e.target.value})}
                    />
                  </div>
                  <div className="flex h-[50px] border border-gray-200 rounded-[4px] bg-white focus-within:border-[#3b82f6] transition overflow-hidden">
                    <div className="bg-[#f8fafc] px-3 flex items-center justify-center gap-2 border-r border-gray-200 shrink-0 text-[14px] text-gray-700 cursor-pointer w-[90px]">
                      <img src="https://flagcdn.com/w20/in.png" alt="India flag" className="w-[18px] h-[12px] object-cover rounded-sm shadow-sm" />
                      <span className="font-medium">+91</span>
                      <ChevronDown size={14} className="text-gray-500" />
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Mobile Number" 
                      className="w-full h-full px-4 focus:outline-none text-[14.5px] placeholder:text-gray-400 bg-transparent"
                      value={heroForm.mobile}
                      onChange={e => setHeroForm({...heroForm, mobile: e.target.value})}
                    />
                  </div>

                  <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-[14px] rounded-[4px] mt-4 transition text-[14.5px] tracking-wide shadow-sm uppercase">
                    Register Now
                  </button>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT + SIDEBAR */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
         <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 items-start relative">
            
            {/* Left Main Content */}
            <div className="flex-1 w-full lg:w-[calc(100%-380px)] space-y-12">
               
               {/* Overview */}
               <div>
                  <h2 className="text-[24px] md:text-[26px] font-bold text-[#1f2937] mb-5 tracking-tight">What is a Sole Proprietorship?</h2>
                  <div className="text-[15.5px] text-[#4b5563] space-y-5 leading-[1.7] font-medium">
                     <p>
                        A Sole Proprietorship is the simplest and most common form of business in India, where a single individual owns and manages the entire establishment. In this structure, there is no legal distinction between the owner and the business entity.
                     </p>
                     <p>
                        It is ideal for entrepreneurs who are just starting out, freelancers, or small-scale traders who want to maintain full control over their operations without the complexity of managing partners or directors. The setup process is primarily driven by obtaining various tax and administrative licenses rather than a core incorporation certificate.
                     </p>
                  </div>
               </div>

               {/* Table of Contents */}
               <div>
                 <h2 className="text-[15.5px] font-bold text-[#1f2937] mb-4">Table of Contents</h2>
                 <div className="flex flex-wrap gap-2.5">
                   {toc.map((item, idx) => (
                     <button key={idx} className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2 text-[13px] font-medium rounded transition">
                       {item}
                     </button>
                   ))}
                 </div>
               </div>

               {/* Benefits */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Advantages of Sole Proprietorship</h2>
                  <ul className="space-y-6">
                    {benefits.map((benefit, i) => (
                       <li key={i}>
                          <div className="flex items-center gap-2 mb-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shrink-0"></div>
                             <h4 className="font-bold text-[#1f2937] text-[16px]">{benefit.title}</h4>
                          </div>
                          <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium pb-2 border-b border-gray-100 last:border-0">
                            {benefit.desc}
                          </p>
                       </li>
                    ))}
                  </ul>
               </div>

               {/* Eligibility Diagram */}
               <div>
                 <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Eligibility Criteria</h2>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mb-14 bg-[#f8faff] p-8 rounded-xl border border-blue-50">
                    <div className="flex flex-col gap-4">
                       {eligibilityCriteria.slice(0, 3).map((item, idx) => (
                         <div key={idx} className="bg-white px-5 py-4 min-w-[220px] rounded-[8px] border-l-4 border-[#3b82f6] shadow-sm flex items-center gap-4">
                            <span className="text-[22px] font-black text-[#3b82f6]/20">{item.num}</span>
                            <span className="text-[14px] font-bold text-[#1f2937] leading-snug">{item.title}</span>
                         </div>
                       ))}
                    </div>

                    <div className="w-[200px] h-[200px] bg-gradient-to-br from-[#1e293b] to-[#3b82f6] rounded-full flex items-center justify-center text-center p-6 shadow-xl border-4 border-white z-10 shrink-0">
                       <h3 className="text-white font-bold text-[18px] leading-tight">
                         Proprietorship Requirements
                       </h3>
                    </div>

                    <div className="flex flex-col gap-4">
                       {eligibilityCriteria.slice(3, 6).map((item, idx) => (
                         <div key={idx} className="bg-white px-5 py-4 min-w-[220px] rounded-[8px] border-r-4 border-[#3b82f6] shadow-sm flex items-center gap-4 justify-end text-right">
                            <span className="text-[14px] font-bold text-[#1f2937] leading-snug">{item.title}</span>
                            <span className="text-[22px] font-black text-[#3b82f6]/20">{item.num}</span>
                         </div>
                       ))}
                    </div>
                 </div>
               </div>

               {/* Documents */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-5 tracking-tight">Documents Required</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                        <span className="text-[15px] text-[#4b5563] font-medium leading-[1.5]">{doc}</span>
                      </li>
                    ))}
                  </ul>
               </div>

               {/* FAQs */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-6 tracking-tight">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-[6px] bg-white overflow-hidden transition-all duration-200">
                        <button 
                          className="w-full flex items-center justify-between p-5 text-left bg-transparent hover:bg-gray-50 transition"
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-[#3b82f6] font-bold mt-0.5">Q.</span>
                            <span className="font-bold text-[#1f2937] text-[15.5px] pr-4">{faq.q}</span>
                          </div>
                          <ChevronDown size={18} className={`text-gray-500 shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <div className={`px-5 pl-12 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-[300px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="text-[15px] text-[#4b5563] font-medium leading-[1.7]">
                            {faq.a}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>

            </div>

            {/* Sidebar Form */}
            <div className="w-full lg:w-[350px] shrink-0 lg:sticky lg:top-24">
               <div className="bg-white rounded-[10px] shadow-lg p-6 md:p-8 border border-gray-100">
                  <h3 className="text-[18px] font-bold text-center text-[#1f2937] mb-6 uppercase">
                    Connect With Us
                  </h3>

                  <form className="space-y-[15px]" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#3b82f6] text-[14px]"
                      value={sidebarForm.name}
                      onChange={e => setSidebarForm({...sidebarForm, name: e.target.value})}
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#3b82f6] text-[14px]"
                      value={sidebarForm.email}
                      onChange={e => setSidebarForm({...sidebarForm, email: e.target.value})}
                    />
                    <input 
                      type="tel" 
                      placeholder="Mobile Number" 
                      className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#3b82f6] text-[14px]"
                      value={sidebarForm.mobile}
                      onChange={e => setSidebarForm({...sidebarForm, mobile: e.target.value})}
                    />
                    <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-[12px] rounded-[4px] transition text-[15px] uppercase">
                      Confirm Appointment
                    </button>
                  </form>
               </div>
            </div>

         </div>
      </section>

    </div>
  );
};

export default SoleProprietorshipRegistration;

