"use client";

import { useState } from 'react';
import { Handshake, Users, Building2, Star, CheckCircle2, ChevronDown, ChevronRight, FileText, FileCheck, Headphones } from 'lucide-react';

const IECRegistration = () => {
  const [heroForm, setHeroForm] = useState({ name: '', email: '', mobile: '' });
  const [sidebarForm, setSidebarForm] = useState({ name: '', email: '', mobile: '' });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toc = [
    "Overview", "Why IEC?", "Eligibility Criteria", "Registration Process", "IEC vs GST", "Documents Required", "Perfect Advice Advantage", "How to reach Perfect Advice?", "Frequently Asked Questions"
  ];

  const benefits = [
    {
      title: "Global Market Expansion",
      desc: "Having an IEC code serves as the primary stepping stone for taking your business to international markets. It acts as a mandatory license allowing Indian businesses to import state-of-the-art global goods and export products worldwide legally."
    },
    {
      title: "Lifetime Validity",
      desc: "An IEC significantly reduces ongoing compliance because it comes with lifetime validity. Unlike other licenses that require yearly tedious renewals and hefty fees, the IEC requires no formal renewal once issued."
    },
    {
      title: "No Return Filing Required",
      desc: "Holding an Import Export Code does not necessitate filing any separate rigorous returns to the DGFT. Even if import-export transactions occur, practically zero compliance is required after the allocation."
    },
    {
      title: "Access Government Benefits",
      desc: "Enterprises holding IEC codes can heavily avail multiple beneficial schemes declared by customs, Export Promotion Councils, and the Directorate General of Foreign Trade (DGFT) like MEIS, SEIS, etc."
    }
  ];

  const eligibilityCriteria = [
    { num: "01", title: "All Business Types Handled" },
    { num: "02", title: "Valid PAN Requirement" },
    { num: "03", title: "Active Bank Account Needed" },
    { num: "04", title: "Digital Signature Certificate (DSC)" },
    { num: "05", title: "No Minimum Turnover Threshold" },
    { num: "06", title: "Individual Proprietorship Support" },
  ];

  const differences = [
    { diff: "Applicability", iec: "Strictly for individuals/entities involved in Import/Export.", gst: "For businesses supplying goods/services exceeding local thresholds." },
    { diff: "Issuing Authority", iec: "Directorate General of Foreign Trade (DGFT).", gst: "Goods and Services Tax Network (GSTN)." },
    { diff: "Return Filing", iec: "Absolutely strictly no returns are formally filed.", gst: "Mandatory monthly/quarterly/annual return filings are required." },
    { diff: "Validity Period", iec: "Valid for a lifetime without demanding renewal.", gst: "Valid fundamentally as long as the business actively runs and files returns." },
    { diff: "Code Composition", iec: "A unique 10-digit number generally mapped to PAN.", gst: "A 15-digit alphanumeric standardized code mapping state/PAN combination." },
  ];

  const documents = [
    "Permanent Account Number (PAN) Card of the Entity/Individual",
    "Valid Identity and Address Proof of all Directors/Partners/Proprietor",
    "Current Bank Account details supplemented by a Cancelled Cheque",
    "Registered Office Address Proof (Utility Bill/Rent Agreement)",
    "NOC from the landlord if the office remains rented",
    "Class-2 or Class-3 Digital Signature Certificate (DSC)",
    "Incorporation Certificate in cases representing a Company or LLP"
  ];

  const advantage = [
    "Perfect Advice houses specialized DGFT professionals guaranteeing rapid IEC generation without systemic rejections.",
    "Our network of Chartered Accountants effectively verify your banking proofs and documentation minimizing delays.",
    "Integrated services available for claiming subsequent DGFT and export promotion council benefits effortlessly.",
    "Dedicated 24*7 relationship management for compliance troubleshooting."
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
      q: "What is an Import Export Code (IEC)?",
      a: "An Import Export Code (IEC) is a 10-digit mandatory registration code issued by the Directorate General of Foreign Trade (DGFT) uniquely authorizing businesses and individuals to legally conduct cross-border import and export trading within the framework of India."
    },
    {
      q: "Who explicitly requires an IEC?",
      a: "Any entrepreneur, whether registering as a sole proprietorship, partnership firm, LLP, NGO, or corporate entity who practically imports goods into India or aggressively exports products internationally, mandatorily requires an IEC."
    },
    {
      q: "Do I need formally to renew my IEC every year?",
      a: "No, historically the IEC structurally boasts lifetime validity avoiding repetitive renewal applications. However, DGFT's recent amendments mandate simply digitally updating the IEC profile annually to ensure registered particulars remain totally accurate."
    },
    {
      q: "Can I use an IEC for personal non-commercial imports?",
      a: "No, an IEC code is generally not required if specific goods are selectively imported entirely for personal usage without intending any commercial or manufacturing distribution."
    },
    {
      q: "How fast can I practically attain my IEC code?",
      a: "With our specialized DGFT integration, upon submitting complete and verified documents (PAN, Bank Cheque, Address Proofs), the IEC is frequently generated immediately or within 1 to 2 standard working days digitally."
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
              IEC (Import Export Code) Registration
            </h1>
            
            <p className="text-[16px] text-blue-50 mb-10 leading-[1.7] pr-4 max-w-[95%]">
              Unlock the vast potential of international trade. Secure your valid lifetime Import Export Code (IEC) issued seamlessly by the Directorate General of Foreign Trade (DGFT). An indispensable legal mandate explicitly required for clearing global customs, receiving international shipments, and sending commercial exports worldwide.
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
                  <h2 className="text-[24px] md:text-[26px] font-bold text-[#1f2937] mb-5 tracking-tight">Overview of IEC Registration</h2>
                  <div className="text-[15.5px] text-[#4b5563] space-y-5 leading-[1.7] font-medium">
                     <p>
                        An Import Export Code (IEC) is formally structured as a 10-digit mandatory registration identification code dynamically generated and safely issued by the reliable Directorate General of Foreign Trade (DGFT) actively functioning underneath the authoritative Ministry of Commerce and Industry in India.
                     </p>
                     <p>
                        Operating directly as a primary structural permit verifying any global transaction capabilities, no recognized entrepreneur, specific proprietorship, collaborative partnership, or legal company framework can freely engage functionally in any systematic import or export activities operating from Indian ground without initially securing an active IEC.
                     </p>
                     <p>
                        Additionally, whenever any significant shipment safely arrives within complex Indian boundaries securely tracking customs clearance or simultaneously when vital payments successfully funnel broadly into registered foreign bank accounts, providing precise IEC details remains strictly unavoidable minimizing unauthorized laundering.
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
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Why is IEC Registration beneficial?</h2>
                  <p className="text-[15.5px] font-medium text-[#4b5563] mb-8">Obtaining the Import Export Code rapidly provides significant systemic advantages actively impacting business mobility globally:</p>
                  
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
                 <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Eligibility Criteria for IEC Registration</h2>
                 <p className="text-[15.5px] font-medium text-[#4b5563] mb-10">DGFT frameworks stipulate basic standardized requirements efficiently applicable for allocating IEC:</p>

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
                         Eligibility Criteria for IEC Registration
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
                         <h4 className="font-bold text-[#1f2937] text-[16px]">Applicability Across Business Constructs</h4>
                      </div>
                      <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium">
                        Virtually any structured entity formally carrying out legal business transactions can apply. Sole proprietorships, traditional partnerships, Limited Liability Partnerships, Private entities, and Charitable trusts identically qualify strictly assuming possessing valid PAN verifications.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                         <h4 className="font-bold text-[#1f2937] text-[16px]">Current Banking Setup Mandate</h4>
                      </div>
                      <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium">
                        A functional current banking account explicitly mapped identically to the applicant business entity actively possessing matching structural names represents an uncompromising imperative reliably facilitating formal DGFT authentications seamlessly.
                      </p>
                    </div>
                 </div>
               </div>

               {/* Process */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Process for IEC Registration</h2>
                  <p className="text-[15.5px] font-medium text-[#4b5563] mb-6">
                    Our established expert teams accurately complete DGFT integrations avoiding arbitrary delays systematically:
                  </p>
                  <ul className="space-y-4">
                     {[
                       "Collection and immediate deep verification practically regarding valid PAN setups along securely with mapped current account validations", 
                       "Acquisition of digital signature setups appropriately linking authorized partners/directors directly facilitating online authentications", 
                       "Structured application submissions fundamentally mapping specific business activity accurately through standard ANF-2A formulations", 
                       "Proper systematic remittance of predefined structural government processing fees digitally utilizing seamless verified payment portals",
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
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">IEC vs GST Formulations</h2>
                  <p className="text-[15.5px] font-medium text-[#4b5563] mb-8">Understanding the functional regulatory differences accurately isolating GST impacts from structural IEC requirements fundamentally ensures compliance:</p>
                  
                  <div className="w-full border border-gray-200 rounded-[4px] overflow-x-auto bg-white shadow-sm mb-6">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                       <thead>
                          <tr className="bg-[#1a73e8]">
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[20%] border-r border-white/20">Feature</th>
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[40%] border-r border-white/20">IEC (Import Export Code)</th>
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[40%]">GST Validation</th>
                          </tr>
                       </thead>
                       <tbody className="text-[14.5px] text-[#374151]">
                          {differences.map((row, i) => (
                            <tr key={i} className={`border-b border-gray-200 ${i % 2 !== 0 ? 'bg-[#f4f8ff]' : 'bg-white'}`}>
                               <td className="py-5 px-6 font-bold text-[#1f2937] align-top bg-transparent">
                                  {row.diff}
                               </td>
                               <td className="py-5 px-6 align-top border-l border-gray-100 bg-transparent text-[#4b5563] font-medium">
                                  {row.iec}
                               </td>
                               <td className="py-5 px-6 align-top border-l border-gray-100 bg-transparent text-[#4b5563] font-medium">
                                  {row.gst}
                               </td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                  </div>
               </div>

               {/* Documents */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-5 tracking-tight">Documents required for IEC Registration</h2>
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
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-5 tracking-tight">Perfect Advice Advantage for IEC Integration</h2>
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

export default IECRegistration;
