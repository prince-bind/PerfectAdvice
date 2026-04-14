"use client";

import { useState } from 'react';
import { Handshake, Users, Building2, Star, CheckCircle2, ChevronDown} from 'lucide-react';

const Section8CompanyRegistration = () => {
  const [heroForm, setHeroForm] = useState({ name: '', email: '', mobile: '' });
  const [sidebarForm, setSidebarForm] = useState({ name: '', email: '', mobile: '' });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toc = [
    "Overview", "Why Section 8?", "Eligibility Criteria", "Registration Process", "Section 8 vs Private Limited", "Documents Required", "Perfect Advice Advantage", "How to reach Perfect Advice?", "Frequently Asked Questions"
  ];

  const benefits = [
    {
      title: "Unmatched Institutional Credibility",
      desc: "Unlike traditional Trusts or local Societies, a Section 8 Company provides massive credibility due to strict MCA regulations. Corporations actively prefer channeling their CSR funds specifically into Section 8 entities due to superior transparency matrices."
    },
    {
      title: "Limited Liability Protection",
      desc: "Similar to standard corporate structures, the formal liability of specific Section 8 members remains fundamentally strictly limited safely encapsulating personal assets entirely completely against complex organizational institutional liabilities broadly."
    },
    {
      title: "Seamless Asset Management",
      desc: "Section 8 entities structurally easily acquire, formally hold, functionally navigate, and strictly safely transfer extensive precise physical properties navigating distinct institutional legal names securely devoid arbitrary regulatory challenges frequently faced by Societies."
    },
    {
      title: "No Absolute Minimum Capital",
      desc: "Incorporation explicitly bypasses standard strict corporate minimum share capital stipulations universally. Section 8 entities can structurally functionally commence immense charitable operations entirely utilizing specific dynamic foundational subscription contributions."
    }
  ];

  const eligibilityCriteria = [
    { num: "01", title: "Minimum Two Directors/Shareholders" },
    { num: "02", title: "Strict Charitable Objectives" },
    { num: "03", title: "Zero Dividend Distribution Rule" },
    { num: "04", title: "Digital Signature Certificate (DSC)" },
    { num: "05", title: "Valid Commercial/Residential Office" },
    { num: "06", title: "Mandatory Central Govt License" },
  ];

  const differences = [
    { diff: "Primary Objective", sec8: "Exclusively strictly dedicated advancing charitable exactly non-profit specific objectives comprehensively.", pvt: "Operates structurally generating robust exact financial commercial profits specifically accurately." },
    { diff: "Profit Utilization", sec8: "Profits generated must strictly reinvest structurally expanding specific exact charitable objectives universally.", pvt: "Profits functionally accurately distribute matching specific exactly calculated dividend distributions freely." },
    { diff: "Suffix Appended", sec8: "Generally utilize specialized specific suffixes matching 'Foundation', 'Federation', or 'Association'.", pvt: "Mandatorily technically accurately suffix explicitly 'Private Limited' navigating precise name formats." },
    { diff: "Regulatory Privileges", sec8: "Exempted structurally bypassing numerous strict procedural exact compliances mapping standard companies.", pvt: "Subjected effectively completely navigating rigorous continuous identical regulatory corporate compliances deeply." },
    { diff: "Capital Framework", sec8: "Inherently operates explicitly devoid specifying required minimal precise authorized capitals systematically.", pvt: "Historically functionally demanded precise minimal corporate precise structured exact capital frameworks reliably." },
  ];

  const documents = [
    "Permanent Account Number (PAN) Card structurally capturing all valid Directors/Members",
    "Comprehensive authentic formal Identity/Address Proofs broadly covering subscribing members",
    "Specifically drafted explicit formal objective declaration precisely mapping strictly Form INC-15",
    "Detailed validated formal practitioner declaration effectively capturing Form INC-14 specifics",
    "Current accurate structurally mapped precise Utility Bill identically verifying Registered organizational Addresses",
    "No Objection exact valid structurally executed Certificate provided specifically navigating exact landlords",
    "Extensively mapped detailed explicitly structured 3-year projected specific Income/Expenditure structurally exact estimates"
  ];

  // const advantage = [
  //   "Perfect Advice integrates explicitly precise distinct CA frameworks thoroughly systematically navigating strict MCA Central Government explicit License structural requirements successfully.",
  //   "Drafting expertly precise specifically tailored MoA properly correctly restricting functional parameters ensuring rapid robust MCA institutional approvals securely.",
  //   "Integrated services mapping distinct immediate sequential complex corporate PAN strictly accurately corresponding TAN generation explicitly simultaneously broadly.",
  //   "Post-incorporation guidance comprehensively mapping specific complex exact structural 12A explicitly alongside strict 80G dynamic NGO taxation protocols dynamically."
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
      q: "What uniquely accurately defines specific Section 8 Companies?",
      a: "A precisely formatted Section 8 Company represents fundamentally explicit corporate entities formally registered specifically navigating the authoritative Companies Act comprehensively dedicated exclusively structurally mapping charitable exact domains explicitly universally rejecting structural dividend formats."
    },
    {
      q: "Can precise exact foreign specific investors fundamentally incorporate Section 8 formats?",
      a: "Yes, precisely mapping standard strict FEMA explicit formal regulations completely systematically, foreign exact individuals formally explicitly can perfectly navigate incorporating precisely investing dynamically mapping structural secure Section 8 entities accurately properly safely."
    },
    {
      q: "Are structural Section 8 specific organizations explicitly exempt navigating formal Income Tax directly?",
      a: "No, immediate fundamental exact incorporation explicitly practically does not inherently inherently secure explicit taxation benefits explicitly. The entity mandatorily strictly properly accurately applies practically dynamically navigating precisely Income Tax Section 12A explicitly."
    },
    {
      q: "What actively happens effectively successfully violating specific specific zero dividend regulations?",
      a: "Strictly legally distributing specific structural dividends inherently profoundly violates exact structural central institutional licenses. Violations attract immense complex penal exactly precise structural actions successfully dynamically resulting explicitly mapping license revocations fundamentally."
    },
    {
      q: "Can standard operational explicit Private Limited structures successfully formally dynamically convert?",
      a: "Yes, standard functional typical precise Private specifically Limited corporate formats logically specifically properly formally navigate complex structural protocols cleanly seamlessly mapping completely exact specific precise conversion specifically tracking Section 8 domains accurately broadly precisely safely."
    }
  ];

  return (
    <div className="font-sans text-[#333] bg-white w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#1a73e8] py-16 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 11px)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a73e8] via-transparent to-transparent opacity-80 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Content */}
          <div className="flex-1 max-w-[750px]">
            <h1 className="text-[38px] md:text-[46px] leading-[1.2] font-bold text-white mb-5 tracking-tight">
              Section 8 Company Registration
            </h1>
            
            <p className="text-[16px] text-blue-50 mb-10 leading-[1.7] pr-4 max-w-[95%]">
              Elevate your non-profit capabilities by structurally establishing a formidable Section 8 Company. Benefit immensely explicitly navigating stringent transparent MCA frameworks significantly attracting specifically massive dynamic Corporate Social Responsibility (CSR) specific explicit institutional funding seamlessly safely properly globally reliably natively.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-8 border border-blue-400/30 bg-blue-500/10 rounded-[8px] p-5 backdrop-blur-sm max-w-max">
              <div className="flex items-center gap-4">
                <Handshake size={32} strokeWidth={1.5} className="text-white"/>
                <div>
                  <div className="font-bold text-[18px] text-white tracking-wide mb-0.5">5000 +</div>
                  <div className="text-[13px] text-blue-50 font-medium tracking-wide">Happy Customers</div>
                </div>
              </div>
              <div className="w-[1px] h-10 bg-blue-400/30 hidden sm:block"></div>
              <div className="flex items-center gap-4">
                <Users size={32} strokeWidth={1.5} className="text-white"/>
                <div>
                  <div className="font-bold text-[18px] text-white tracking-wide mb-0.5">100 +</div>
                  <div className="text-[13px] text-blue-50 font-medium tracking-wide">CAs, CS & Lawyers</div>
                </div>
              </div>
              <div className="w-[1px] h-10 bg-blue-400/30 hidden md:block"></div>
              <div className="flex items-center gap-4">
                <Building2 size={32} strokeWidth={1.5} className="text-white"/>
                <div>
                  <div className="font-bold text-[18px] text-white tracking-wide mb-0.5">10 +</div>
                  <div className="text-[13px] text-blue-50 font-medium tracking-wide">Offices Globally</div>
                </div>
              </div>
            </div>

            {/* Google Reviews */}
            {/* <div className="flex items-center gap-4">
               <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg shrink-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-[24px] h-[24px]" />
               </div>
               <div>
                 <div className="text-white font-bold text-[15px] mb-0.5">Google Reviews</div>
                 <div className="flex items-center gap-1.5 flex-wrap">
                    <div className="flex text-[#fbbf24] gap-0.5">
                      <Star size={14} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={14} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={14} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={14} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={14} className="fill-[#fbbf24]" strokeWidth={0} />
                    </div>
                    <span className="text-[13.5px] text-white font-medium ml-1">
                      <strong className="font-bold">4.8/5</strong> | 21,791+ Global Rating by Happy Customers
                    </span>
                 </div>
               </div>
            </div> */}
          </div>

          {/* Right Content - Hero Form */}
          <div className="w-full lg:w-[440px] shrink-0">
             <div className="bg-white rounded-[6px] shadow-2xl p-9 relative overflow-hidden ring-1 ring-gray-100">
                <h3 className="text-[17px] font-bold text-center text-[#111827] mb-7 tracking-wide relative z-10 w-full flex justify-center uppercase">
                  FREE CONSULTATION
                </h3>

                <form className="space-y-[18px] relative z-10 pb-2" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full h-[50px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#1a73e8] text-[14.5px] placeholder:text-gray-400 bg-white transition"
                      value={heroForm.name}
                      onChange={e => setHeroForm({...heroForm, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full h-[50px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#1a73e8] text-[14.5px] placeholder:text-gray-400 bg-white transition"
                      value={heroForm.email}
                      onChange={e => setHeroForm({...heroForm, email: e.target.value})}
                    />
                  </div>
                  <div className="flex h-[50px] border border-gray-200 rounded-[4px] bg-white focus-within:border-[#1a73e8] transition overflow-hidden">
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

                  <button className="w-full bg-[#1a73e8] hover:bg-[#155fc4] text-white font-bold py-[14px] rounded-[4px] mt-4 transition text-[14.5px] tracking-wide shadow-sm">
                    TALK TO AN EXPERT
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
                  <h2 className="text-[24px] md:text-[26px] font-bold text-[#1f2937] mb-5 tracking-tight">Overview of Section 8 Structural Incorporation</h2>
                  <div className="text-[15.5px] text-[#4b5563] space-y-5 leading-[1.7] font-medium">
                     <p>
                        A meticulously formulated formal Section 8 precise Company dynamically represents structurally explicit advanced Corporate frameworks actively incorporated navigating tracking explicitly comprehensive parameters strictly mapped directly inherently underneath specific profound formal provisions specifically navigating deeply advanced Companies Act explicitly tracking strictly 2013 formally legally.
                     </p>
                     <p>
                        Structurally inherently specifically engineered specifically accurately promoting massive explicit non-profit structural explicit domains specifically covering expansive precisely education naturally inherently dynamically tracking exact explicit structural environmental scopes identically perfectly comprehensively, specific corresponding specific corporate precisely profits fundamentally exactly explicitly reinvested safely.
                     </p>
                  </div>
               </div>

               {/* Table of Contents */}
               <div>
                 <h2 className="text-[15.5px] font-bold text-[#1f2937] mb-4">Table of Contents</h2>
                 <div className="flex flex-wrap gap-2.5">
                   {toc.map((item, idx) => (
                     <button key={idx} className="bg-[#1a73e8] hover:bg-[#155fc4] text-white px-4 py-2 text-[13px] font-medium rounded transition">
                       {item}
                     </button>
                   ))}
                 </div>
               </div>

               {/* Benefits */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Why Choose Section 8?</h2>
                  <ul className="space-y-6">
                    {benefits.map((benefit, i) => (
                       <li key={i}>
                          <div className="flex items-center gap-2 mb-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
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
                         <div key={idx} className="bg-white px-5 py-4 min-w-[220px] rounded-[8px] border-l-4 border-[#1a73e8] shadow-sm flex items-center gap-4">
                            <span className="text-[22px] font-black text-[#1a73e8]/20">{item.num}</span>
                            <span className="text-[14px] font-bold text-[#1f2937] leading-snug">{item.title}</span>
                         </div>
                       ))}
                    </div>

                    <div className="w-[200px] h-[200px] bg-gradient-to-br from-[#1a73e8] to-[#112a6a] rounded-full flex items-center justify-center text-center p-6 shadow-xl border-4 border-white z-10 shrink-0">
                       <h3 className="text-white font-bold text-[18px] leading-tight text-center">
                         Section 8 Eligibility
                       </h3>
                    </div>

                    <div className="flex flex-col gap-4">
                       {eligibilityCriteria.slice(3, 6).map((item, idx) => (
                         <div key={idx} className="bg-white px-5 py-4 min-w-[220px] rounded-[8px] border-r-4 border-[#1a73e8] shadow-sm flex items-center gap-4 justify-end text-right">
                            <span className="text-[14px] font-bold text-[#1f2937] leading-snug">{item.title}</span>
                            <span className="text-[22px] font-black text-[#1a73e8]/20">{item.num}</span>
                         </div>
                       ))}
                    </div>
                 </div>
               </div>

               {/* Comparison Table */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Section 8 vs Private Limited</h2>
                  <div className="w-full border border-gray-200 rounded-[4px] overflow-x-auto bg-white shadow-sm mb-6">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                       <thead>
                          <tr className="bg-[#1a73e8]">
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[20%] border-r border-white/20">Feature</th>
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[40%] border-r border-white/20">Section 8 Formulations</th>
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[40%]">Private Limited Protocol</th>
                          </tr>
                       </thead>
                       <tbody className="text-[14.5px] text-[#374151]">
                          {differences.map((row, i) => (
                            <tr key={i} className={`border-b border-gray-200 ${i % 2 !== 0 ? 'bg-[#f4f8ff]' : 'bg-white'}`}>
                               <td className="py-5 px-6 font-bold text-[#1f2937] align-top">
                                  {row.diff}
                               </td>
                               <td className="py-5 px-6 align-top border-l border-gray-100">
                                  {row.sec8}
                               </td>
                               <td className="py-5 px-6 align-top border-l border-gray-100">
                                  {row.pvt}
                               </td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
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
                            <span className="text-[#1a73e8] font-bold mt-0.5">Q.</span>
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
                      className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#1a73e8] text-[14px]"
                      value={sidebarForm.name}
                      onChange={e => setSidebarForm({...sidebarForm, name: e.target.value})}
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#1a73e8] text-[14px]"
                      value={sidebarForm.email}
                      onChange={e => setSidebarForm({...sidebarForm, email: e.target.value})}
                    />
                    <input 
                      type="tel" 
                      placeholder="Mobile Number" 
                      className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#1a73e8] text-[14px]"
                      value={sidebarForm.mobile}
                      onChange={e => setSidebarForm({...sidebarForm, mobile: e.target.value})}
                    />
                    <button className="w-full bg-[#1a73e8] hover:bg-[#155fc4] text-white font-bold py-[12px] rounded-[4px] transition text-[15px] uppercase">
                      Get Started
                    </button>
                  </form>
               </div>
            </div>

         </div>
      </section>

    </div>
  );
};

export default Section8CompanyRegistration;
