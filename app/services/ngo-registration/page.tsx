"use client";

import { useState } from 'react';
import { Handshake, Users, Building2, Star, CheckCircle2, ChevronDown, ChevronRight, FileText, FileCheck, Headphones } from 'lucide-react';

const NGORegistration = () => {
  const [heroForm, setHeroForm] = useState({ name: '', email: '', mobile: '' });
  const [sidebarForm, setSidebarForm] = useState({ name: '', email: '', mobile: '' });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toc = [
    "Overview", "Why Register an NGO?", "Eligibility Criteria", "Registration Process", "Trust vs Society vs Sec 8", "Documents Required", "Perfect Advice Advantage", "How to reach Perfect Advice?", "Frequently Asked Questions"
  ];

  const benefits = [
    {
      title: "Tax Exemption Eligibility",
      desc: "Creating a formally registered NGO strictly establishes the fundamental legal prerequisite subsequently empowering your organization legitimately applying for comprehensive tax exemptions seamlessly underneath critical Income Tax Section 12A."
    },
    {
      title: "Enhanced Institutional Credibility",
      desc: "Registered frameworks project immense formal authenticity specifically actively assuring potential stakeholders navigating the legitimacy characterizing their philanthropic goals structurally eliminating critical apprehensions frequently blocking informal fundraising attempts."
    },
    {
      title: "Corporate Social Responsibility (CSR)",
      desc: "Companies mandatorily executing structured CSR operations explicitly demand navigating verified NGOs officially possessing legitimate legal identities thereby legally clearing compliance tracking securely validating massive systemic institutional funding pipelines completely."
    },
    {
      title: "Legal Protection and Continuity",
      desc: "A registered NGO essentially generates a distinct separate legal identity comprehensively protecting its founding members/trustees legally against direct institutional liabilities identically enabling perpetual succession spanning generations safely."
    }
  ];

  const eligibilityCriteria = [
    { num: "01", title: "Non-Profit Driven Motives" },
    { num: "02", title: "Valid Office Address Proofs" },
    { num: "03", title: "Specific Minimum Number of Members" },
    { num: "04", title: "Absence of Discrimination Policies" },
    { num: "05", title: "Clear Executable Charitable Objectives" },
    { num: "06", title: "Pristine Founder Background Checks" },
  ];

  const differences = [
    { diff: "Governing Law", trust: "Indian Trusts Act, 1882", society: "Societies Registration Act, 1860", sec8: "Companies Act, 2013" },
    { diff: "Minimum Members", trust: "Minimum exactly 2 specific Trustees", society: "Minimum exactly 7 distinct Members initially", sec8: "Minimum securely 2 specific Directors logically" },
    { diff: "Jurisdiction Scalability", trust: "Effectively operates maintaining regional or strict National scopes", society: "Structurally complex scaling comprehensively across differing formal states", sec8: "Universally valid functioning securely across total Indian jurisdiction seamlessly" },
    { diff: "Registration Authority", trust: "Local Deputy Registrar / specifically Charity Commissioner", society: "Registrar explicitly tracking local Societies directly", sec8: "Ministry tracking formal Corporate Affairs explicitly" },
    { diff: "Compliance Rigidity", trust: "Generally maintains highly relaxed compliance burdens ideally", society: "Maintains structurally moderate strict continuous compliances properly", sec8: "Extremely rigorous formal complex systematic corporate compliances strictly" },
  ];

  const documents = [
    "Permanent Account Number (PAN) Cards structurally tracking all specific Trustees / founding Members or specific Directors",
    "Current comprehensive Address structural Proofs (Voter IDs explicitly / Aadhar logically / valid Passports specifically)",
    "Registered local Office functioning structural Proof securely (Utility valid Bill identically / specific Rent authentic Agreement)",
    "No Objection formally valid Certificate strictly issued explicitly by specific premises landlords securely",
    "Extensively drafted structural foundational Deeds formally covering specific precise institutional objectives (applicable exclusively for exact Trusts)",
    "Formal strictly executed MOA tracking specific explicitly drafted AOA guidelines (applicable strictly navigating Society/Sec 8 structural paths)"
  ];

  const advantage = [
    "Perfect Advice uniquely structures completely impartial structural evaluations identifying precisely exactly ensuring whether specific Trusts accurately or dynamic Section 8 structures specifically align appropriately.",
    "Centralized drafting mechanisms logically handling immensely complex extensive organizational deeds correctly avoiding structural compliance breaches securely.",
    "Integrated services successfully managing specific sequential complex subsequent 12A explicitly and strict 80G registrations dynamically reliably.",
    "Expert legal frameworks smoothly navigating structurally arbitrary systematic objections inherently common frequently challenging specific Society explicit registrations broadly."
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
      q: "What accurately constitutes an NGO explicitly?",
      a: "A Non-Governmental Organization logically encapsulates formally an autonomous legally registered structural entity essentially operating strictly devoid navigating commercial profit generation exactly fundamentally focusing explicitly advancing deep charitable exactly socially transformative objectives widely."
    },
    {
      q: "Which specific formal NGO structural format ideally represents my objectives?",
      a: "If operating fundamentally privately securely managing specific generational family properties directly navigating charity, exact Trust formats structurally suffice effectively. However, targeting explicitly extensive massive national formal scalability while directly handling massive complex government exact funding dictates specifically leveraging dynamic Section 8 specific corporate routes."
    },
    {
      q: "Can formally registered structural NGO founders legally draw salaries?",
      a: "Founders fundamentally securely establishing precise Trust structures generally strictly avoid legally drawing aggressive salaries preserving valid pure distinct charitable intentions securely. However, structurally verified independent distinct employees physically managing exact explicit NGO routines legitimately draw structured formal salaries properly."
    },
    {
      q: "Do explicitly registered dynamic NGOs completely practically avoid valid income tax?",
      a: "Merely functionally formally completing complex incorporation registrations does practically not intrinsically exempt entities navigating taxation properly. The registered NGO functionally essentially must actively specifically procure exact formal Income Tax precise Section 12A dynamic exemptions validating structured claims accurately."
    },
    {
      q: "Can standard explicit foreign individuals creatively incorporate precise Indian NGOs?",
      a: "Although technically complex foreign explicit capital funding frequently fundamentally mandates navigating highly complex restrictive FCRA regulatory dynamics correctly securely, formally establishing valid foundational Indian NGO explicitly fundamentally dictates requiring Indian specific structural citizenship explicitly functionally avoiding complex immediate systematic procedural rejections accurately."
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
              NGO Registration in India
            </h1>
            
            <p className="text-[16px] text-blue-50 mb-10 leading-[1.7] pr-4 max-w-[95%]">
              Establish your philanthropic vision on an unshakeable legal foundation. Navigate the complexities of establishing a Trust, Society, or Section 8 Company correctly protecting your humanitarian objectives seamlessly accessing structural tax exemptions generating immense institutional integrity globally.
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
                  <h2 className="text-[24px] md:text-[26px] font-bold text-[#1f2937] mb-5 tracking-tight">Overview of NGO Incorporations</h2>
                  <div className="text-[15.5px] text-[#4b5563] space-y-5 leading-[1.7] font-medium">
                     <p>
                        Establishing explicitly an active Non-Governmental Organization logically encapsulates creating deeply powerful organizational ecosystems functionally actively dedicated navigating specific noble objectives completely devoid engaging commercial precise structural profit allocations dynamically benefiting founding individuals accurately identically.
                     </p>
                     <p>
                        Indian regulatory formulations fundamentally actively provide distinctly diverse operational structured frameworks properly encompassing specifically configuring a traditional Trust schema, structuring formal extensive exact Society structures properly accurately, identifying specific highly rigid Section 8 corporate entities exactly mapped legally comprehensively.
                     </p>
                     <p>
                        Selecting effectively navigating these structurally diverse registration methodologies specifically depends highly accurately prioritizing identical functional parameters calculating geographical expansive specific scales globally explicitly, prioritizing rigid administrative tracking logically smoothly navigating continuous governmental precisely compliance systems globally deeply broadly properly securely essentially confidently inherently dynamically comprehensively.
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
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Why Register an Authentic NGO?</h2>
                  <p className="text-[15.5px] font-medium text-[#4b5563] mb-8">Initiating precise structural organizational incorporations extensively unlocks immense functional robust capabilities empowering specific societal interventions predictably safely:</p>
                  
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
                 <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Core Eligibility Validations</h2>
                 <p className="text-[15.5px] font-medium text-[#4b5563] mb-10">Legislative parameters actively mandate specific adherence structurally validating pure institutional charitable commitments reliably precisely universally:</p>

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
                         Eligibility Criteria for NGOs
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
                         <h4 className="font-bold text-[#1f2937] text-[16px]">Categorical Pure Nonprofit Orientations</h4>
                      </div>
                      <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium">
                        Standard legal norms reliably stipulate strictly identifying formal structured entities explicitly engaging purely navigating charitable scopes tracking education exactly structurally identically removing precise functional commercial dividends exactly securely structurally safely identically. 
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                         <h4 className="font-bold text-[#1f2937] text-[16px]">Explicitly Inclusive Public Structures</h4>
                      </div>
                      <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium">
                        Proper guidelines deliberately structure strictly excluding frameworks specifically navigating operating identical biased exclusive specific communities structurally navigating strictly secular public administrative operations broadly capturing generalized societal welfare scopes exactly.
                      </p>
                    </div>
                 </div>
               </div>

               {/* Process */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Systematic Registration Procedures</h2>
                  <p className="text-[15.5px] font-medium text-[#4b5563] mb-6">
                    Specialized legal workflows properly accurately handle differing diverse entity incorporations mapping specific corresponding specific regulatory systems seamlessly continuously universally:
                  </p>
                  <ul className="space-y-4">
                     {[
                       "Creating perfectly legally binding precise Trust Deeds specifically properly meticulously articulating explicit founding objectives tracking specific Trustee parameters comprehensively securely", 
                       "Acquiring formal exact structural local societal exactly systematic approvals accurately mapping specific MOA structures navigating explicit Charity commissioner exact domains smoothly exactly", 
                       "Specifically preparing extensive explicit formal identical Section 8 precise specific corporate compliance SPICe+ modules explicitly systematically perfectly mapping Ministry tracking reliably", 
                       "Procuring corresponding accurate functional PAN documents successfully facilitating parallel subsequent bank institutional configurations explicitly exactly perfectly seamlessly unlocking financial capabilities safely",
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
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Trust vs Society vs Section 8 Formats</h2>
                  <p className="text-[15.5px] font-medium text-[#4b5563] mb-8">Understanding fundamentally explicitly specific structural differences actively logically securely navigating valid specific organizational models structurally establishes profound exact compliance properly precisely accurately safely:</p>
                  
                  <div className="w-full border border-gray-200 rounded-[4px] overflow-x-auto bg-white shadow-sm mb-6">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                       <thead>
                          <tr className="bg-[#1a73e8]">
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[20%] border-r border-white/20">Feature</th>
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[30%] border-r border-white/20">Private/Public Trust</th>
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[25%] border-r border-white/20">Registered Society</th>
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[25%]">Section 8 Company</th>
                          </tr>
                       </thead>
                       <tbody className="text-[14.5px] text-[#374151]">
                          {differences.map((row, i) => (
                            <tr key={i} className={`border-b border-gray-200 ${i % 2 !== 0 ? 'bg-[#f4f8ff]' : 'bg-white'}`}>
                               <td className="py-5 px-6 font-bold text-[#1f2937] align-top bg-transparent">
                                  {row.diff}
                               </td>
                               <td className="py-5 px-6 align-top border-l border-gray-100 bg-transparent text-[#4b5563] font-medium">
                                  {row.trust}
                               </td>
                               <td className="py-5 px-6 align-top border-l border-gray-100 bg-transparent text-[#4b5563] font-medium">
                                  {row.society}
                               </td>
                               <td className="py-5 px-6 align-top border-l border-gray-100 bg-transparent text-[#4b5563] font-medium">
                                  {row.sec8}
                               </td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                  </div>
               </div>

               {/* Documents */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-5 tracking-tight">Documents formally mandated capturing Registration</h2>
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
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-5 tracking-tight">Perfect Advice Structural Advantage</h2>
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

export default NGORegistration;
