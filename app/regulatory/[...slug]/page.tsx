"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { Handshake, Users, Building2, Star, CheckCircle2, PlayCircle, ChevronRight, ArrowRight, ShieldCheck, Scale, FileText } from 'lucide-react';

// Helper function to format the URL slug into a proper Title
const formatTitle = (slug: string) => {
  if (!slug) return 'Regulatory Service';
  let words = slug.split('-');
  words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const acronyms = ['Gst', 'Nri', 'Nris', 'Apa', 'Esg', 'Bfsi', 'Rbi', 'Sebi', 'Irda', 'Ibc', 'Nbfc', 'Aml', 'Fema', 'Tpap'];
  words = words.map(word => acronyms.includes(word.toUpperCase()) ? word.toUpperCase() : word);
  return words.join(' ');
};

// Helper to dynamically color the title (First/Last words black, middle words blue)
const DynamicColoredTitle = ({ title }: { title: string }) => {
  const words = title.split(' ');
  if (words.length <= 2) {
    return (
      <>
        <span className="text-slate-900">{words[0]} </span>
        <span className="text-[#1a73e8]">{words.slice(1).join(' ')}</span>
      </>
    );
  }
  const firstWord = words[0];
  const lastWord = words[words.length - 1];
  const middleWords = words.slice(1, words.length - 1).join(' ');

  return (
    <>
      <span className="text-slate-900">{firstWord.toUpperCase()} </span>
      <span className="text-[#1a73e8]">{middleWords} </span>
      <span className="text-slate-900">{lastWord}</span>
    </>
  );
};

export default function DynamicRegulatoryPage() {
  const pathname = usePathname();
  const location = { pathname };
  const pathParts = location.pathname.split('/').filter(Boolean);
  const rawServiceSlug = pathParts[pathParts.length - 1]; 
  const dynamicTitle = formatTitle(rawServiceSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="font-sans bg-slate-50 min-h-screen pb-20 relative">
      
      {/* Subtle Background Pattern/Gradient */}
      <div className="absolute top-0 left-0 w-full h-150 bg-linear-to-br from-blue-50/50 via-slate-50 to-emerald-50/30 z-0 pointer-events-none"></div>

      {/* ==============================
          HERO SECTION 
      ============================== */}
      <section className="pt-16 pb-16 px-4 md:px-8 relative z-10">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-[55%]">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold mb-6 leading-[1.15] tracking-tight">
              <DynamicColoredTitle title={dynamicTitle} />
            </h1>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Are you seeking specialized assistance to obtain your <strong className="text-slate-800 font-semibold">{dynamicTitle}</strong>? 
              At Perfect Advice, we've guided hundreds of financial and corporate entities through seamless compliance. Find the best solutions for regulatory adherence and risk mitigation.
            </p>

            {/* Checkmarks */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#1a73e8]" fill="currentColor" stroke="white" size={26} />
                <span className="text-slate-800 font-medium text-[17px]">Complete Risk Assessment & Report Drafting</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#1a73e8]" fill="currentColor" stroke="white" size={26} />
                <span className="text-slate-800 font-medium text-[17px]">Helped 500+ Clients through {dynamicTitle}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
              <button className="flex items-center gap-2 bg-[#1a73e8] hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-md transition-all shadow-lg shadow-blue-500/30 text-lg">
                Schedule a call <ChevronRight size={20} strokeWidth={2.5} />
              </button>
              
              <button className="flex items-center gap-2 text-slate-700 hover:text-green-600 transition-colors group font-semibold">
                <PlayCircle className="text-green-500 group-hover:scale-110 transition-transform" fill="currentColor" stroke="white" size={36} />
                <span className="underline decoration-green-500/30 underline-offset-4 decoration-2">See How It Works in 1 min video</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-x-12 gap-y-8 border-t border-gray-200 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-md flex items-center justify-center shrink-0 shadow-md shadow-green-500/20">
                  <Handshake className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-slate-900 leading-none mb-1">5000 +</h4>
                  <p className="text-slate-500 text-sm font-medium">Happy Customers</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-md flex items-center justify-center shrink-0 shadow-md shadow-green-500/20">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-slate-900 leading-none mb-1">100 +</h4>
                  <p className="text-slate-500 text-sm font-medium">CAs, CS & Lawyers</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-md flex items-center justify-center shrink-0 shadow-md shadow-green-500/20">
                  <Building2 className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-slate-900 leading-none mb-1">10 +</h4>
                  <p className="text-slate-500 text-sm font-medium">Offices Globally</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Content Column (Form) */}
          <div className="w-full lg:w-[45%] max-w-md mx-auto lg:mx-0 lg:ml-auto shrink-0 relative">
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 md:p-10 border border-gray-100 relative overflow-hidden">
              
              {/* Form Corner Ribbon (Decorative) */}
              <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-3 -left-8 w-24 h-6 bg-blue-100 -rotate-45 flex items-center justify-center border-b-2 border-blue-500">
                  <CheckCircle2 size={12} className="text-blue-600 ml-2" fill="currentColor" stroke="white" />
                </div>
              </div>

              <h2 className="text-[20px] font-extrabold text-slate-900 text-center mb-8 tracking-wide uppercase mt-2">
                GET FREE CONSULTATION
              </h2>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 placeholder-slate-400 bg-gray-50/50"
                />
                
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 placeholder-slate-400 bg-gray-50/50"
                />
                
                <div className="flex border border-gray-200 rounded-md overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 bg-gray-50/50">
                  <div className="flex items-center gap-2 px-3 border-r border-gray-200 shrink-0 bg-white">
                    <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-auto rounded-sm" />
                    <span className="text-slate-700 font-medium">+91</span>
                    <span className="text-slate-400 text-xs">▼</span>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    className="w-full px-4 py-3.5 focus:outline-none text-slate-800 placeholder-slate-400 bg-transparent"
                  />
                </div>

                <button 
                  type="button" 
                  className="w-full bg-[#1a73e8] hover:bg-blue-700 text-white font-bold py-4 rounded-md transition-colors mt-4 shadow-md shadow-blue-500/20"
                >
                  TALK TO AN EXPERT
                </button>
              </form>

              {/* Form Footer Reviews */}
              <div className="flex items-center justify-center gap-2 mt-6 text-[13px] font-medium text-slate-600">
                <div className="flex gap-0.5 relative shrink-0">
                  <Star size={14} className="text-[#EA4335]" fill="currentColor" strokeWidth={0} />
                  <Star size={14} className="text-[#FBBC05] absolute -right-2 top-0.5" fill="currentColor" strokeWidth={0} />
                  <Star size={14} className="text-[#34A853] absolute -right-4 -top-0.5" fill="currentColor" strokeWidth={0} />
                </div>
                <span className="ml-4">Rated at <span className="text-slate-900 font-extrabold">4.8/5</span> 22173+ Happy Reviews</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==============================
          EXPANDED CONTENT SECTION
      ============================== */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Text Area */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Streamline Your <span className="text-[#1a73e8]">{dynamicTitle}</span> Process
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Navigating the strict guidelines enforced by financial regulators requires precise documentation, thorough due diligence, and ongoing adherence to legal frameworks. Perfect Advice simplifies the entire lifecycle of your <strong>{dynamicTitle}</strong>, ensuring total transparency and minimizing the risk of non-compliance penalties.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Our dedicated regulatory teams consist of seasoned former regulators, chartered accountants, and corporate lawyers who provide unparalleled insights into the regulatory ecosystem, empowering you to operate securely and efficiently.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Core Offerings</h3>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                <Scale className="text-blue-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Legal Compliance</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">End-to-end management of all statutory filings and regulatory correspondence.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                <FileText className="text-blue-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Documentation</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Flawless drafting of standard operating procedures, applications, and legal frameworks.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                <ShieldCheck className="text-blue-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Audit Readiness</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Preparing your systems and records for internal, concurrent, and statutory audits.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                <Handshake className="text-blue-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Representation</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Expert representation before RBI, SEBI, IRDA, and other regulatory tribunals on your behalf.</p>
                </div>
              </div>
            </div>

            {/* ── DETAILED REGULATORY OVERVIEW ── */}
            <h3 className="text-2xl font-bold text-slate-900 mb-5">The Regulatory Landscape for {dynamicTitle} in India</h3>
            <div className="space-y-5 text-slate-600 text-[15.5px] leading-[1.8] mb-12">
              <p>India's regulatory environment has undergone a sweeping transformation over the past decade, driven by landmark legislative reforms and the increasing sophistication of oversight mechanisms employed by apex bodies such as the Reserve Bank of India (RBI), the Securities and Exchange Board of India (SEBI), and the Insurance Regulatory and Development Authority of India (IRDAI). For any entity seeking to operate within this environment, <strong className="text-slate-800">{dynamicTitle}</strong> has evolved from a mere procedural obligation into a strategic imperative — one that directly impacts capital access, operational continuity, and reputational standing.</p>
              <p>At Perfect Advice, our <strong className="text-slate-800">{dynamicTitle}</strong> practice is built on a foundation of institutional knowledge accumulated over more than 15 years of frontline regulatory engagement. Our team includes former regulators, senior compliance officers, and specialist advocates who have worked within the very institutions that now govern your business. This insider perspective allows us to anticipate regulatory intent — not merely interpret statutory text — delivering advisory outcomes that are both technically defensible and commercially pragmatic.</p>
              <p>The consequences of non-compliance in today's regulatory environment extend well beyond financial penalties. Reputational damage, director disqualification, suspension of business licences, and referral to criminal prosecution authorities are increasingly frequent outcomes for entities that inadequately manage their <strong className="text-slate-800">{dynamicTitle}</strong> obligations. Perfect Advice's proactive compliance architecture is specifically designed to eliminate these risks before they materialise, through rigorous gap analyses, real-time monitoring, and structured remediation protocols.</p>
              <p>We also recognise that regulatory requirements do not exist in isolation — they interact with tax obligations, corporate governance standards, FEMA provisions, and sector-specific licensing requirements in ways that can create complex, multi-dimensional compliance challenges. Our integrated advisory model ensures that all relevant regulatory dimensions are addressed holistically, eliminating the coordination failures and blind spots that commonly arise when businesses engage multiple specialist advisors operating in isolation.</p>
            </div>

            {/* ── 6-STEP PROCESS ── */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Step-by-Step Compliance Process</h3>
            <div className="space-y-5 mb-12">
              {[
                { step: '01', title: 'Regulatory Health Check & Gap Analysis', desc: 'We begin with a comprehensive diagnostic assessment of your current compliance posture, mapping every applicable regulatory obligation against your existing controls, processes, and documentation. This gap analysis forms the definitive baseline from which all subsequent advisory and implementation work is designed.' },
                { step: '02', title: 'Regulatory Calendar & Obligation Mapping', desc: 'We construct a bespoke regulatory calendar cataloguing every applicable filing deadline, license renewal date, reporting obligation, and audit cycle across all relevant regulators. This calendar is integrated with your internal governance system and is monitored by our compliance tracking platform in real time.' },
                { step: '03', title: 'Policy & Procedure Framework Development', desc: 'Where gaps exist in your internal controls or documented procedures, our team drafts and implements the required policies, SOPs, and board-approved frameworks. All documentation is aligned with the latest regulatory guidance notes, circulars, and master directions, and is reviewed by our in-house legal counsel prior to finalisation.' },
                { step: '04', title: 'Regulatory Filings & Application Management', desc: 'We manage the preparation, review, and submission of all required applications, returns, disclosures, and regulatory reports to the relevant authorities — including RBI, SEBI, MCA, IRDAI, FIU-IND, NCLT, and sector-specific bodies — ensuring accuracy, completeness, and timely submission in every instance.' },
                { step: '05', title: 'Regulatory Liaison & Representation', desc: 'Post-submission, we maintain direct lines of communication with regulatory authorities, responding to clarifications, managing query responses, attending inspections, and representing your organisation in hearings and adjudications. Our established relationships with key regulatory departments significantly accelerate resolution timelines and improve approval rates.' },
                { step: '06', title: 'Ongoing Monitoring & Annual Compliance Reviews', desc: 'Regulatory obligations evolve continuously. Our ongoing monitoring service tracks all legislative and regulatory updates affecting your business, proactively assessing their compliance implications and recommending timely adjustments to your procedures and documentation. Annual compliance reviews provide a comprehensive health check and ensure your compliance architecture remains current and robust.' },
              ].map((s, i) => (
                <div key={i} className="flex gap-5 bg-white border border-gray-100 shadow-sm rounded-xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#1a73e8]/10 text-[#1a73e8] font-extrabold text-[15px] flex items-center justify-center shrink-0">{s.step}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-[16px]">{s.title}</h4>
                    <p className="text-slate-500 text-[14.5px] leading-[1.7]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── DOCUMENTS REQUIRED ── */}
            <h3 className="text-2xl font-bold text-slate-900 mb-5">Documents Typically Required</h3>
            <p className="text-slate-600 text-[15.5px] leading-[1.8] mb-6">The specific document requirements for <strong className="text-slate-800">{dynamicTitle}</strong> vary by entity type, sector, and the particular regulatory body involved. The following list represents documents commonly required across most engagements in this practice area.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
              {[
                'Certificate of Incorporation & constitutional documents',
                'Last 3 years of audited financial statements',
                'KYC documents of directors, promoters & key personnel',
                'Board resolution authorising the compliance application',
                'Existing licences, approvals, and NOC certificates',
                'Statutory registers and compliance certificates',
                'Internal audit reports and management letter',
                'Group structure chart and beneficial ownership details',
                'FEMA/FDI compliance documentation (if applicable)',
                'IT policy, data protection & cybersecurity frameworks',
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 border border-gray-200 rounded-lg px-4 py-3">
                  <CheckCircle2 className="text-green-500 shrink-0" size={17} />
                  <span className="text-slate-700 text-[14px]">{doc}</span>
                </div>
              ))}
            </div>

            {/* ── KEY REGULATORY BODIES ── */}
            <h3 className="text-2xl font-bold text-slate-900 mb-5">Key Regulatory Bodies Governing {dynamicTitle}</h3>
            <div className="space-y-5 text-slate-600 text-[15.5px] leading-[1.8] mb-12">
              <p>The <strong className="text-slate-800">{dynamicTitle}</strong> landscape in India involves oversight from multiple apex regulatory institutions, each with its own legislative mandate, enforcement powers, and inspection methodology. Understanding the jurisdiction and expectations of each is essential for maintaining a robust compliance posture.</p>
              <p><strong className="text-slate-800">Reserve Bank of India (RBI)</strong> — As the central banking and monetary authority, the RBI regulates a wide range of entities including commercial banks, NBFCs, payment system operators, and foreign exchange dealers. Its master directions, circulars, and guidelines form the cornerstone of financial sector compliance and are updated on a rolling basis.</p>
              <p><strong className="text-slate-800">Securities and Exchange Board of India (SEBI)</strong> — SEBI exercises jurisdiction over capital markets, listed entities, investment advisers, portfolio managers, mutual funds, and market infrastructure institutions. Its regulations — particularly the LODR Regulations and the Insider Trading Regulations — impose significant ongoing disclosure and governance obligations on regulated entities.</p>
              <p><strong className="text-slate-800">Insurance Regulatory and Development Authority of India (IRDAI)</strong> — The IRDAI regulates insurance companies, insurance brokers, surveyors, and TPAs. Its evolving guidelines on product design, solvency margins, investment norms, and policyholder protection require constant monitoring and specialist interpretation.</p>
              <p><strong className="text-slate-800">Financial Intelligence Unit – India (FIU-IND)</strong> — As India's central agency for receiving, processing, and analysing financial intelligence, FIU-IND mandates reporting obligations relating to suspicious transactions (STRs), cash transactions (CTRs), and cross-border wire transfers from a broad range of financial institutions and intermediaries under the Prevention of Money Laundering Act (PMLA) 2002.</p>
            </div>

            {/* ── FAQ ── */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4 mb-4">
              {[
                { q: `What are the most common penalties for non-compliance with ${dynamicTitle} requirements?`, a: 'Penalties vary significantly by regulator and the nature of the violation. Monetary penalties can range from a few lakhs to several crores of rupees. In serious cases, regulators may impose operational restrictions, suspend licences, debar directors, or refer matters for criminal prosecution. Our proactive compliance monitoring is designed to prevent non-compliance before it attracts regulatory scrutiny.' },
                { q: `How quickly can Perfect Advice assess our current ${dynamicTitle} compliance position?`, a: 'A preliminary compliance health check can typically be completed within 5–7 business days of receiving the required documentation and system access. A comprehensive regulatory gap analysis — involving interviews with key personnel and review of all applicable policies and procedures — generally takes 3–4 weeks. We provide a clear timeline at the outset of each engagement.' },
                { q: 'Do you assist with representations before regulators when a show-cause notice has been issued?', a: 'Yes. Regulatory representation is one of our core service offerings. Our team has extensive experience in drafting response submissions, preparing supporting documentation, and appearing before regulatory adjudicating authorities on behalf of our clients. Our track record in achieving favourable outcomes in regulatory proceedings is a significant competitive differentiator.' },
                { q: 'Can you help us implement a compliance management system rather than just advising on individual matters?', a: 'Absolutely. We offer end-to-end compliance management system implementation — including policy framework design, compliance calendar development, training programmes for compliance officers and board members, and integration with technology platforms for automated monitoring and reporting. This systems-based approach is the most effective long-term solution for managing complex regulatory obligations.' },
                { q: 'How do you stay current with the constantly changing regulatory landscape in India?', a: 'Our regulatory team maintains a dedicated research function that tracks all legislative amendments, regulatory circulars, court judgments, and guidance notes on a daily basis. We also maintain active memberships in industry bodies and professional associations, and several of our senior advisors serve on regulatory working groups, providing us with advance visibility into upcoming changes.' },
              ].map((faq, i) => (
                <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-slate-800 text-[15.5px] list-none select-none hover:bg-gray-50 transition">
                    {faq.q}
                    <span className="ml-4 shrink-0 text-[#1a73e8] text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-slate-600 text-[15px] leading-[1.75] border-t border-gray-100 pt-4">{faq.a}</div>
                </details>
              ))}
            </div>

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Connect With Regulatory Experts</h3>
              <p className="text-slate-600 mb-8 text-sm leading-relaxed">Avoid penalties and operational delays. Let our experts handle the intricacies of your regulatory requirements.</p>
              
              <div className="space-y-4">
                <a href="tel:+919818024481" className="flex items-center justify-between bg-slate-50 border border-gray-100 p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group cursor-pointer">
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Call Us Direct</p>
                    <p className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors">+91 9818024481</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <ArrowRight size={20} />
                  </div>
                </a>

                <a href="mailto:support@perfectadvice.com" className="flex items-center justify-between bg-slate-50 border border-gray-100 p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group cursor-pointer">
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Send An Email</p>
                    <p className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors truncate max-w-45">nikunj@perfectadvice.in</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <ArrowRight size={20} />
                  </div>
                </a>
              </div>

              {/* Trust signals */}
              <div className="mt-8 pt-7 border-t border-gray-200">
                <h4 className="font-bold text-slate-800 mb-4 text-[15px]">Why Entities Trust Us</h4>
                <ul className="space-y-3">
                  {['30+ regulatory mandates per year', 'Zero-penalty track record for retained clients', 'Real-time regulatory update alerts', 'Dedicated compliance officer per account', 'End-to-end PMLA & FEMA compliance'].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
                      <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── WHY CHOOSE PERFECT ADVICE ── */}
      <section className="bg-[#f0f6ff] py-16 md:py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Perfect Advice for {dynamicTitle}?</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">India's most trusted regulatory advisory practice — built on precision, expertise, and a zero-penalty commitment.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              // { icon: <ShieldCheck size={28} className="text-blue-600" />, bg: 'bg-blue-50', title: 'Former Regulator Insights', desc: 'Our advisory panel includes former RBI, SEBI, and IRDAI officials whose institutional knowledge provides unparalleled insight into regulatory interpretation and enforcement priorities.' },
              { icon: <Scale size={28} className="text-emerald-600" />, bg: 'bg-emerald-50', title: 'Zero-Penalty Track Record', desc: 'For clients on our ongoing compliance retainer, we maintain a demonstrable zero-penalty track record — the clearest possible evidence of the rigour and reliability of our compliance management systems.' },
              { icon: <FileText size={28} className="text-purple-600" />, bg: 'bg-purple-50', title: 'Precision Documentation', desc: 'Regulatory outcomes are determined as much by the quality and completeness of documentation as by the underlying facts. Our specialist drafting team ensures every submission is technically flawless and strategically framed.' },
              { icon: <Handshake size={28} className="text-orange-500" />, bg: 'bg-orange-50', title: 'Regulatory Relationships', desc: 'Effective regulatory practice requires more than legal knowledge — it requires established relationships and credibility with the institutions that govern your business. Our team brings both.' },
              { icon: <CheckCircle2 size={28} className="text-teal-600" />, bg: 'bg-teal-50', title: 'Integrated Compliance', desc: 'We address all dimensions of your regulatory obligations in an integrated manner — eliminating the gaps and contradictions that arise when multiple specialist advisors work in isolation.' },
              { icon: <Star size={28} className="text-rose-500" />, bg: 'bg-rose-50', title: 'Proactive Intelligence', desc: 'Our daily regulatory monitoring and bespoke client alert service ensures you are never surprised by a regulatory change — giving you the time and information needed to adapt your compliance posture ahead of any deadline.' },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center mb-5`}>{card.icon}</div>
                <h4 className="font-bold text-slate-900 text-[17px] mb-3">{card.title}</h4>
                <p className="text-slate-500 text-[14.5px] leading-[1.7]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION BANNER ── */}
      <section className="bg-[#0f2055] py-16 px-4 relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Stay Compliant. Stay Protected.
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't let regulatory complexity put your business at risk. Connect with Perfect Advice's {dynamicTitle} specialists today for a free compliance health check.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#1a73e8] hover:bg-blue-600 text-white font-bold px-10 py-4 rounded-lg text-[16px] transition shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
              Get a Free Compliance Review <ChevronRight size={18} />
            </button>
            <button className="border-2 border-white/20 text-white hover:border-white/40 font-bold px-10 py-4 rounded-lg text-[16px] transition">
              Call +91 9818024481
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}