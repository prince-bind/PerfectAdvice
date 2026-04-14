"use client";

import { useState } from 'react';
import { Handshake, Users, Building2, Star, CheckCircle2, ChevronDown, ChevronRight, FileText, FileCheck, Headphones } from 'lucide-react';

const ESIRegistration = () => {
  const [heroForm, setHeroForm] = useState({ name: '', email: '', mobile: '' });
  const [sidebarForm, setSidebarForm] = useState({ name: '', email: '', mobile: '' });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toc = [
    "Overview", "Why ESI?", "Applicability Criteria", "Registration Process", "ESI vs EPF", "Documents Required", "Perfect Advice Advantage", "How to reach Perfect Advice?", "Frequently Asked Questions"
  ];

  const benefits = [
    {
      title: "Extensive Medical Benefits",
      desc: "Registered employees and their deeply dependent family members enjoy full medical care starting directly from the very first day of entering insurable employment with no arbitrary expenditure ceilings on individual treatments securely handled by ESI hospitals/dispensaries."
    },
    {
      title: "Sickness and Cash Benefits",
      desc: "If sickness critically lasts extending beyond 91 days systematically demanding absence from active work, ESI firmly guarantees cash compensation systematically equivalent calculating generally at 70% of the employee's standard wages periodically bridging income voids seamlessly."
    },
    {
      title: "Maternity Protections",
      desc: "Female employees legally derive significantly extended maternity leaves successfully compensated continuously at complete 100% full wage structures up safely spanning 26 weeks, easing intense economic burdens structurally linked inherently to pregnancy or corresponding health consequences."
    },
    {
      title: "Disability & Dependants Welfare",
      desc: "Tragic workplace accidents prompting permanent/temporary disabilities predictably prompt monthly compensating pensions dynamically scaled on earning capabilities. Dependants sequentially inherit systematic monthly pensions navigating unfortunate fatal workplace tragedies unconditionally."
    }
  ];

  const eligibilityCriteria = [
    { num: "01", title: "Ten/Twenty Employee Threshold" },
    { num: "02", title: "Wage Limit Caps at Rs. 21,000" },
    { num: "03", title: "Mandatory Registration (15 Days)" },
    { num: "04", title: "Broad Geographic Applicability" },
    { num: "05", title: "Covers Commercial Establishments" },
    { num: "06", title: "Standard Government Verification" },
  ];

  const differences = [
    { diff: "Governing Statute", esi: "Employees' State Insurance Act, 1948", epf: "Employees' Provident Funds and Miscellaneous Provisions Act, 1952" },
    { diff: "Primary Purpose", esi: "Immediate medical, sickness, maternity, and disablement benefits actively handling health contingencies.", epf: "Long-term financial security strictly providing retirement pensions, savings corpus, and structural insurance." },
    { diff: "Employee Wage Threshold", esi: "Mandatory fundamentally for employees earning wages exactly up to Rs. 21,000 vertically per month.", epf: "Mandatory structurally for basic wage brackets technically capping at Rs. 15,000 comprehensively per month." },
    { diff: "Employer Contribution", esi: "Employer contributes strictly 3.25% mapping total eligible wages securely.", epf: "Employer formally contributes 12% specifically mapped to basic pay scales comprehensively." },
    { diff: "Employee Contribution", esi: "Employee individually contributes 0.75% calculating derived wages steadily.", epf: "Employee fundamentally contributes matching 12% linking precise basic pay consistently." },
  ];

  const documents = [
    "Permanent Account Number (PAN) Card of Business Entity",
    "Registration Certificate / License issued structurally under Shops and Establishment Act / Factories Act",
    "Detailed list explicitly identifying all active employees formally logging monthly wages",
    "Register securely detailing complete employee attendance mapping operations",
    "Utility Bills and Lease Agreements correctly verifying Registered Office constraints",
    "Cancelled cheque identically verifying active banking functionality",
    "Valid ID Proofs validating operational Directors, primary Partners or sole Proprietor"
  ];

  const advantage = [
    "Perfect Advice seamlessly processes complex ESI enrollments leveraging direct centralized electronic (Shram Suvidha) portal capabilities securely.",
    "Integrated support rapidly coordinating both comprehensive ESI and mandatory EPF registrations simultaneously mapping total compliance dynamically.",
    "Strategic workforce evaluation strictly determining accurate ESI applicability avoiding unpredictable retroactive statutory fines precisely.",
    "Constant organizational monitoring actively handling monthly contribution schedules seamlessly shielding business operations."
  ];

  const timelineSteps = [
    "Fill The Form",
    "Get a Callback",
    "Submit Document",
    "Track Progress",
    "Get Deliverables"
  ];

  const faqs = [
    {
      q: "What strictly defines ESI Registration?",
      a: "ESI (Employees' State Insurance) registration legally encapsulates a sophisticated, self-financing extensive social security schema fundamentally designed protecting dedicated Indian employees facing diverse financial and medical contingencies including unpredicted sickness, structural maternity, workplace disability, or tragic death practically handled specifically by the ESIC corporation."
    },
    {
      q: "Who exactly is mandatorily obligated securing ESI?",
      a: "Formally governed strictly by the comprehensive ESI Act 1948, specific factory frameworks or broader organized establishments systematically employing simply 10 or actively more formal personnel reliably remain legally obligated structurally finalizing exact ESI registration parameters strictly within 15 days marking exactly applicability criteria."
    },
    {
      q: "What defines the current formal wage threshold strictly imposing ESI cover?",
      a: "Present formulations dictate exactly that active formal employees systematically earning comprehensive monthly wages strictly matching Rs. 21,000 uniformly or explicitly less actively qualify fundamentally drawing comprehensive protective benefits seamlessly mapped underneath complex ESI coverage."
    },
    {
      q: "What exact percentage formally establishes the ESI mathematical contribution rates?",
      a: "In specifically mitigating total employer burdens systematically, formal revisions dictate exactly that structural employers systematically contribute exactly 3.25% accurately mapping eligible wages safely while verified employees accurately furnish strictly 0.75% aggregating securely capturing 4.0% universally."
    },
    {
      q: "What actively happens avoiding mandatory fundamental ESI compliance legally?",
      a: "Avoiding statutory active formulations inherently triggers aggressive structural penalties formally deploying punitive damage mapping calculating strictly ranging from 5% exactly tracking 25% safely derived from delayed contributions accurately mapping exact default duration spans alongside systemic imprisonment risks fundamentally securing compliance."
    }
  ];

  return (
    <div className="font-sans text-[#333] bg-white w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#1a73e8] py-16 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Subtle diagonal stripes background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 11px)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a73e8] via-transparent to-transparent opacity-80 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Content */}
          <div className="flex-1 max-w-[750px]">
            <h1 className="text-[38px] md:text-[46px] leading-[1.2] font-bold text-white mb-5 tracking-tight">
              ESI Registration
            </h1>
            
            <p className="text-[16px] text-blue-50 mb-10 leading-[1.7] pr-4 max-w-[95%]">
              Secure the health and financial wellbeing of your workforce legally through mandatory Employees' State Insurance (ESI) Registration. Effectively navigate complex ESIC statutory compliances guaranteeing medical covers, maternity protections, and specific sickness benefits efficiently safeguarding both your establishment and structural employee foundations reliably.
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
                      <strong className="font-bold">4.8/5</strong> | 21791+ Global Rating by Happy Customers
                    </span>
                 </div>
               </div>
            </div> */}
          </div>

          {/* Right Content - Hero Form */}
          <div className="w-full lg:w-[440px] shrink-0">
             <div className="bg-white rounded-[6px] shadow-2xl p-9 relative overflow-hidden ring-1 ring-gray-100">
                <h3 className="text-[17px] font-bold text-center text-[#111827] mb-7 tracking-wide relative z-10 w-full flex justify-center uppercase">
                  GET FREE CONSULTATION
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

                  <div className="flex items-center justify-center gap-1.5 pt-3">
                    <div className="flex text-[#fbbf24] gap-[1px]">
                      <Star size={11} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={11} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={11} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={11} className="fill-[#fbbf24]" strokeWidth={0} />
                      <div className="relative">
                         <Star size={11} className="fill-gray-300" strokeWidth={0} />
                         <div className="absolute top-0 left-0 overflow-hidden w-[80%]">
                            <Star size={11} className="fill-[#fbbf24]" strokeWidth={0} />
                         </div>
                      </div>
                    </div>
                    <span className="text-[11px] text-gray-500 font-medium">
                      Rated at <strong className="font-bold text-gray-700">4.8/5</strong> 21791+ Happy Reviews
                    </span>
                  </div>
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
                  <h2 className="text-[24px] md:text-[26px] font-bold text-[#1f2937] mb-5 tracking-tight">Overview of ESI Registration</h2>
                  <div className="text-[15.5px] text-[#4b5563] space-y-5 leading-[1.7] font-medium">
                     <p>
                        The Employees' State Insurance (ESI) framework constitutes a vital, robust self-financing structural social security schema heavily prioritized guarding the diverse Indian workforce securely mapped completely against serious unpredictable financial tragedies routinely stemming directly translating into unforeseen sickness spans, fundamental maternity leaves, formal workplace disabilities mapping fatal complexities, or tragic deaths predictably handled specifically underneath the extensive ESI Act 1948 effectively.
                     </p>
                     <p>
                        Successfully supervised dynamically utilizing comprehensive frameworks aggressively handled by specialized entities termed explicitly the Employees' State Insurance Corporation (ESIC), the functional organizational matrix legally operates safely underneath deep structured formulations meticulously maintained mapping correctly matching formal legislative protocols fundamentally safeguarding organizational worker parameters continuously.
                     </p>
                     <p>
                        Organizations strictly mapping structural parameters inherently requiring mandatory participation essentially function avoiding aggressive systemic fines predictably deployed tracking absolute strict statutory deadlines spanning precisely 15 distinct chronological days structurally effectively demanding absolute adherence mapping specific employee thresholds fundamentally safely.
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
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Why is ESI Registration Beneficial?</h2>
                  <p className="text-[15.5px] font-medium text-[#4b5563] mb-8">Deploying mandatory ESI infrastructure inherently empowers diverse enterprises effectively attracting talent strictly granting crucial safeguards securely bridging systemic vulnerability comprehensively:</p>
                  
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
                 <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Applicability Criteria for ESI Registration</h2>
                 <p className="text-[15.5px] font-medium text-[#4b5563] mb-10">Legislative standards mandate systematic absolute participation specifically mapped against transparent thresholds clearly verifying functional applicability strictly safely:</p>

                 <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mb-14 bg-[#f8faff] p-8 rounded-xl border border-blue-50">
                    
                    <div className="flex flex-col gap-4">
                       {eligibilityCriteria.slice(0, 3).map((item, idx) => (
                         <div key={idx} className="bg-white px-5 py-4 min-w-[220px] rounded-[8px] border-l-4 border-[#1a73e8] shadow-sm flex items-center gap-4">
                            <span className="text-[22px] font-black text-[#1a73e8]/20">{item.num}</span>
                            <span className="text-[14px] font-bold text-[#1f2937] leading-snug">{item.title}</span>
                         </div>
                       ))}
                    </div>

                    <div className="w-[200px] h-[200px] bg-gradient-to-br from-[#0c317a] to-[#1a73e8] rounded-full flex items-center justify-center text-center p-6 shadow-xl border-4 border-white z-10 shrink-0">
                       <h3 className="text-white font-bold text-[18px] leading-tight drop-shadow-md">
                         Applicability Criteria for ESI Registration
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

                 <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                         <h4 className="font-bold text-[#1f2937] text-[16px]">Core Establishment Thresholds</h4>
                      </div>
                      <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium">
                        Standard legal norms reliably stipulate exactly that non-seasonal specific factories mapping specifically engaging structurally basically strictly explicitly utilizing power formally requiring 10 valid workers precisely, and equivalently 20 workers predictably operating absolutely devoid using standard power securely fall deeply entirely mapped inside statutory coverage. 
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                         <h4 className="font-bold text-[#1f2937] text-[16px]">Mandatory Commercial Applicability</h4>
                      </div>
                      <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium">
                        Beyond precise factory protocols, structured guidelines deliberately stretch extensively covering routine commercial parameters dynamically integrating exact systematic organizations fundamentally specifically reliably embracing basic shops, formal restaurants, established cinemas securely navigating intricate road motor precise specifically transport units predictably maintaining identical workforce limitations.
                      </p>
                    </div>
                 </div>
               </div>

               {/* Process */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Process for ESI Registration</h2>
                  <p className="text-[15.5px] font-medium text-[#4b5563] mb-6">
                    Modernized operational parameters structurally prioritize deploying advanced integrated electronic gateways strictly bypassing manual interventions transparently dynamically expediting exact compliances universally reliably:
                  </p>
                  <ul className="space-y-4">
                     {[
                       "Creating exact authenticated structured employer parameter logins smoothly leveraging formal comprehensive Shram Suvidha integrations deeply verified identically", 
                       "Acquiring formal Form-1 Employer's precise Registration exact structured formats fundamentally maintaining absolutely correctly validated basic details", 
                       "Simultaneous electronic structured submissions systematically correctly verifying functional specific structural business registration mapping exactly matching formal credentials securely", 
                       "Direct comprehensive processing logically executing formal verification accurately precisely returning distinct 17-digit numerical ESI identities identically establishing secure compliance",
                     ].map((step, idx) => (
                       <li key={idx} className="flex items-start gap-3">
                         <div className="w-6 h-6 rounded-full bg-[#1a73e8]/10 text-[#1a73e8] flex items-center justify-center font-bold text-[12px] shrink-0 mt-0.5">{idx + 1}</div>
                         <p className="text-[15.5px] text-[#4b5563] leading-[1.6] font-medium">{step}</p>
                       </li>
                     ))}
                  </ul>
               </div>

               {/* Differences Table */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">ESI vs EPF Registrations</h2>
                  <p className="text-[15.5px] font-medium text-[#4b5563] mb-8">Properly discerning structured compliance exactly comparing health insurance schemes fundamentally mapped precisely against mandatory provident fund savings dynamically establishes sound administrative understanding identically accurately safely:</p>
                  
                  <div className="w-full border border-gray-200 rounded-[4px] overflow-x-auto bg-white shadow-sm mb-6">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                       <thead>
                          <tr className="bg-[#1a73e8]">
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[20%] border-r border-white/20">Feature</th>
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[40%] border-r border-white/20">ESI Formulations</th>
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[40%]">EPF Protocols</th>
                          </tr>
                       </thead>
                       <tbody className="text-[14.5px] text-[#374151]">
                          {differences.map((row, i) => (
                            <tr key={i} className={`border-b border-gray-200 ${i % 2 !== 0 ? 'bg-[#f4f8ff]' : 'bg-white'}`}>
                               <td className="py-5 px-6 font-bold text-[#1f2937] align-top bg-transparent">
                                  {row.diff}
                               </td>
                               <td className="py-5 px-6 align-top border-l border-gray-100 bg-transparent text-[#4b5563] font-medium">
                                  {row.esi}
                               </td>
                               <td className="py-5 px-6 align-top border-l border-gray-100 bg-transparent text-[#4b5563] font-medium">
                                  {row.epf}
                               </td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                  </div>
               </div>

               {/* Documents */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-5 tracking-tight">Documents required for ESI Execution</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                        <span className="text-[15px] text-[#4b5563] font-medium leading-[1.5]">{doc}</span>
                      </li>
                    ))}
                  </ul>
               </div>

               {/* Perfect Advice Advantage */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-5 tracking-tight">Perfect Advice Advantage for ESI Operations</h2>
                  <ul className="space-y-3">
                    {advantage.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 bg-gray-50 p-4 rounded-[6px] border border-gray-100">
                        <CheckCircle2 size={18} className="text-[#1a73e8] shrink-0 mt-0.5" />
                        <span className="text-[15px] text-[#4b5563] font-medium leading-[1.5]">{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>

               {/* Reach Perfect Advice */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-8 tracking-tight">How to reach Perfect Advice?</h2>
                  <div className="flex flex-col md:flex-row items-center justify-between relative">
                     <div className="absolute left-[50%] md:left-0 md:top-[28px] w-0.5 h-full md:w-full md:h-0.5 bg-gray-200 -z-10"></div>
                     {timelineSteps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-3 bg-white py-2 mb-8 md:mb-0">
                           <div className="w-[56px] h-[56px] bg-[#1a3b86] text-white rounded-[8px] flex items-center justify-center shadow-lg cursor-pointer hover:-translate-y-1 transition duration-300">
                              {idx === 0 && <FileText size={24} />}
                              {idx === 1 && <Headphones size={24} />}
                              {idx === 2 && <FileCheck size={24} />}
                              {idx === 3 && <ChevronRight size={24} />}
                              {idx === 4 && <CheckCircle2 size={24} />}
                           </div>
                           <span className="text-[13px] font-bold text-[#1f2937] text-center uppercase tracking-wide max-w-[100px]">{step}</span>
                        </div>
                     ))}
                  </div>
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
                          <div className="text-[15px] text-[#4b5563] font-medium leading-[1.7] whitespace-pre-line">
                            {faq.a}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>

            </div>

            {/* Right Sticky Sidebar (Sticky Form) */}
            <div className="w-full lg:w-[350px] shrink-0 lg:sticky lg:top-24">
               <div className="bg-white rounded-[10px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.08)] p-6 md:p-8 border border-gray-100">
                  <h3 className="text-[18px] font-bold text-center text-[#1f2937] mb-6 tracking-wide relative z-10 uppercase">
                    Get Free Consultation
                  </h3>

                  <form className="space-y-[15px]" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#22c55e] text-[14px] placeholder:text-gray-500 bg-white transition"
                        value={sidebarForm.name}
                        onChange={e => setSidebarForm({...sidebarForm, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#22c55e] text-[14px] placeholder:text-gray-500 bg-white transition"
                        value={sidebarForm.email}
                        onChange={e => setSidebarForm({...sidebarForm, email: e.target.value})}
                      />
                    </div>
                    <div className="flex h-[46px] border border-gray-200 rounded-[4px] bg-white focus-within:border-[#22c55e] transition overflow-hidden">
                      <div className="bg-[#f8fafc] px-3 flex items-center justify-center gap-2 border-r border-gray-200 shrink-0 text-[14px] text-gray-700 cursor-pointer w-[90px]">
                        <img src="https://flagcdn.com/w20/in.png" alt="India flag" className="w-[18px] h-[12px] object-cover rounded-sm shadow-sm" />
                        <span className="font-medium">+91</span>
                        <ChevronDown size={14} className="text-gray-500" />
                      </div>
                      <input 
                        type="tel" 
                        placeholder="Mobile Number" 
                        className="w-full h-full px-4 focus:outline-none text-[14px] placeholder:text-gray-500 bg-transparent"
                        value={sidebarForm.mobile}
                        onChange={e => setSidebarForm({...sidebarForm, mobile: e.target.value})}
                      />
                    </div>

                    <button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-[12px] rounded-[4px] mt-4 transition text-[15px] tracking-wide shadow-sm uppercase">
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

export default ESIRegistration;
