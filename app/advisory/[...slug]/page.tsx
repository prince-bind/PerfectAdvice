"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { Handshake, User, Building2, Star, CheckCircle2, Shield, TrendingUp, Clock, Target, ArrowRight } from 'lucide-react';

// Helper function to format the URL slug into a proper Title
const formatTitle = (slug: string) => {
    if (!slug) return 'Advisory Service';
    let words = slug.split('-');
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const acronyms = ['Gst', 'Nri', 'Nris', 'Apa', 'Esg', 'Bfsi', 'Rbi', 'Sebi', 'Irda', 'Ibc', 'Nbfc'];
    words = words.map(word => acronyms.includes(word) ? word.toUpperCase() : word);
    return words.join(' ');
};

export default function DynamicAdvisoryPage() {
    const pathname = usePathname();
  const location = { pathname };
    const pathParts = location.pathname.split('/').filter(Boolean);
    const rawServiceSlug = pathParts[pathParts.length - 1];
    const dynamicTitle = formatTitle(rawServiceSlug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="font-sans bg-slate-50 min-h-screen pb-20">

            {/* ==============================
          HERO SECTION 
      ============================== */}
            <section className="bg-[#1a73e8] pt-16 pb-20 px-4 md:px-8 relative overflow-hidden">
                <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">

                    <div className="w-full lg:w-3/5 text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold mb-6 leading-[1.15] tracking-tight">
                            {dynamicTitle}
                        </h1>
                        <p className="text-blue-50 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
                            Ensure your compliance with Perfect Advice: Expert solutions for seamless management. Contact us today.
                        </p>

                        <div className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center mb-10">
                            <div className="flex items-center gap-4">
                                <Handshake size={40} strokeWidth={1.5} className="text-white shrink-0" />
                                <div>
                                    <h4 className="text-2xl font-bold tracking-tight">5000 +</h4>
                                    <p className="text-blue-100 text-sm">Happy Customers</p>
                                </div>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-white/20"></div>
                            <div className="flex items-center gap-4">
                                <User size={40} strokeWidth={1.5} className="text-white shrink-0" />
                                <div>
                                    <h4 className="text-2xl font-bold tracking-tight">100 +</h4>
                                    <p className="text-blue-100 text-sm">CAs, CS & Lawyers</p>
                                </div>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Building2 size={40} strokeWidth={1.5} className="text-white shrink-0" />
                                <div>
                                    <h4 className="text-2xl font-bold tracking-tight">10 +</h4>
                                    <p className="text-blue-100 text-sm">Offices Globally</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-3 shrink-0 shadow-lg">
                                <svg viewBox="0 0 24 24" className="w-full h-full">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                            </div>
                            <div>
                                <h5 className="font-bold text-lg mb-1">Google Reviews</h5>
                                <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
                                    <div className="flex gap-0.5 text-[#FBBC05]">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
                                    </div>
                                    <span>4.8/5</span>
                                    <span className="text-blue-200 px-1">|</span>
                                    <span className="text-blue-50">22552+ Global Rating by Happy Customers</span>
                                </div>
                            </div>
                        </div> */}

                    </div>

                    <div className="w-full lg:w-2/5 max-w-md mx-auto lg:mx-0 shrink-0">
                        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10">
                            <h2 className="text-[22px] font-extrabold text-slate-900 text-center mb-8 tracking-tight">
                                GET FREE CONSULTATION
                            </h2>

                            <form className="space-y-4">
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 placeholder-slate-500" />
                                <input type="email" placeholder="Email Address" className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 placeholder-slate-500" />
                                <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                                    <div className="flex items-center gap-2 px-3 bg-gray-50 border-r border-gray-300 shrink-0">
                                        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-auto rounded-sm" />
                                        <span className="text-slate-700 font-medium">+91</span>
                                        <span className="text-slate-400 text-xs">▼</span>
                                    </div>
                                    <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3.5 focus:outline-none text-slate-800 placeholder-slate-500" />
                                </div>
                                <button type="button" className="w-full bg-[#1a73e8] hover:bg-blue-700 text-white font-bold py-4 rounded-md transition-colors mt-2 shadow-md shadow-blue-500/30">
                                    TALK TO AN EXPERT
                                </button>
                            </form>

                            <div className="flex items-center justify-center gap-2 mt-8 text-sm font-semibold text-slate-700">
                                <div className="flex gap-0.5 relative">
                                    <Star size={16} className="text-[#EA4335]" fill="currentColor" strokeWidth={0} />
                                    <Star size={16} className="text-[#FBBC05] absolute -right-2 top-1" fill="currentColor" strokeWidth={0} />
                                    <Star size={16} className="text-[#34A853] absolute -right-4 -top-1" fill="currentColor" strokeWidth={0} />
                                </div>
                                <span className="ml-4">Rated at <span className="text-black font-extrabold">4.8/5</span> 22552+ Happy Reviews</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ==============================
          NEW EXPANDED PAGE CONTENT
      ============================== */}
            <section className="py-16 md:py-24 container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Main Text Area */}
                    <div className="lg:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            Comprehensive {dynamicTitle} Solutions
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Navigating the complexities of <strong className="text-slate-900 font-semibold">{dynamicTitle}</strong> requires precision, expertise, and a deep understanding of current regulatory frameworks. Our specialized advisory team is dedicated to providing you with tailored strategies that align with your specific business goals, ensuring both compliance and operational efficiency.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-10">
                            Whether you are an emerging startup or an established multinational, we leverage our global network and industry-specific knowledge to mitigate risks and unlock new growth opportunities for your enterprise.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h3>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
                                <Shield className="text-blue-600 shrink-0" size={28} />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Risk Mitigation</h4>
                                    <p className="text-slate-500 text-sm">We proactively identify and resolve compliance bottlenecks before they affect your business.</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
                                <TrendingUp className="text-green-600 shrink-0" size={28} />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Strategic Growth</h4>
                                    <p className="text-slate-500 text-sm">Align your regulatory strategies with your long-term expansion and revenue goals.</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
                                <Clock className="text-purple-600 shrink-0" size={28} />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Time Efficiency</h4>
                                    <p className="text-slate-500 text-sm">Streamlined processes mean faster approvals, filings, and project turnarounds.</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
                                <Target className="text-red-600 shrink-0" size={28} />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Expert Accuracy</h4>
                                    <p className="text-slate-500 text-sm">Rely on top-tier professionals ensuring 100% accuracy in all legal and financial documentation.</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Approach</h3>
                        <ul className="space-y-4 mb-12">
                            {[
                                "In-depth analysis of your current operational framework.",
                                "Customized roadmap detailing necessary compliances and strategies.",
                                "Dedicated relationship manager for end-to-end execution.",
                                "Continuous monitoring and post-service support."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-blue-500 mt-1 shrink-0" size={20} />
                                    <span className="text-slate-700 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* ── DETAILED OVERVIEW ── */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-5">Understanding {dynamicTitle} in India</h3>
                        <div className="space-y-5 text-slate-600 text-[15.5px] leading-[1.8] mb-12">
                            <p>The regulatory landscape surrounding <strong className="text-slate-800">{dynamicTitle}</strong> in India has evolved significantly over the past decade, driven by sweeping legislative reforms introduced by the Ministry of Corporate Affairs (MCA), the Securities and Exchange Board of India (SEBI), and other apex regulatory bodies. Businesses operating within the Indian jurisdiction must now adhere to stricter disclosure norms, tighter compliance timelines, and more rigorous audit requirements than ever before.</p>
                            <p>At Perfect Advice, we have built an end-to-end practice around <strong className="text-slate-800">{dynamicTitle}</strong> that covers every dimension of the engagement lifecycle — from initial scoping and due diligence to final filings and ongoing monitoring. Our multidisciplinary team of Chartered Accountants, Company Secretaries, legal counsel, and industry specialists brings together decades of cumulative experience and the operational depth needed to handle even the most complex mandates efficiently.</p>
                            <p>We understand that no two organisations are alike. Whether your entity is a private limited company seeking its first-ever compliance certification, a public-sector undertaking navigating a regulatory restructuring, or a foreign subsidiary aligning domestic operations with international frameworks, our advisory methodology is calibrated to your specific size, sector, and risk tolerance. This bespoke approach ensures that the solutions we deliver are not only technically sound but also commercially viable and strategically aligned with your broader business objectives.</p>
                            <p>India's position as one of the fastest-growing major economies in the world has brought with it a commensurate increase in regulatory complexity. The introduction of landmark legislation — including the Companies Act 2013, the Insolvency and Bankruptcy Code 2016, the Foreign Exchange Management Act (FEMA) and its subsequent amendments, and the SEBI Listing Obligations and Disclosure Requirements (LODR) Regulations — has created a dense compliance matrix that demands constant vigilance and expert navigation. Perfect Advice's dedicated <strong className="text-slate-800">{dynamicTitle}</strong> team keeps pace with every regulatory update, ensuring our clients are never caught unawares.</p>
                        </div>

                        {/* ── STEP-BY-STEP PROCESS ── */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Step-by-Step Process</h3>
                        <div className="space-y-5 mb-12">
                            {[
                                { step: '01', title: 'Initial Consultation & Needs Assessment', desc: 'Our engagement begins with a comprehensive discovery call where we understand your business model, geographic footprint, regulatory history, and specific pain points. This allows us to map the exact scope of work and identify potential challenges upfront, saving time and cost later.' },
                                { step: '02', title: 'Document Collection & Due Diligence', desc: 'We provide a tailored document checklist and work closely with your finance and legal teams to gather all requisite information. Our due diligence framework is designed to surface any latent liabilities, inconsistencies, or areas of non-compliance before they escalate into major issues.' },
                                { step: '03', title: 'Regulatory Analysis & Strategy Formulation', desc: 'Our specialists analyse the collected data against the applicable regulatory framework and formulate a detailed compliance and advisory strategy. This includes an assessment of applicable exemptions, deductions, treaty benefits, or procedural shortcuts that can optimise the process for your entity.' },
                                { step: '04', title: 'Preparation & Filing of Applications', desc: 'We prepare all necessary applications, petitions, or filings with meticulous attention to detail, ensuring accuracy and completeness. Submissions are made to the relevant authorities — MCA, RoC, SEBI, RBI, Income Tax Department, NCLT, or others — within the stipulated deadlines.' },
                                { step: '05', title: 'Regulatory Interaction & Follow-Up', desc: 'Post-submission, our team liaises directly with regulatory authorities on your behalf, responding to queries, providing supplementary documentation, and attending hearings where required. This proactive interaction significantly reduces processing time and improves the likelihood of first-time approvals.' },
                                { step: '06', title: 'Completion, Reporting & Ongoing Support', desc: 'Once the matter is resolved, we provide a comprehensive summary report documenting the actions taken, outcomes achieved, and any residual obligations. We remain available for ongoing compliance monitoring, annual filings, and any future advisory needs that may arise.' },
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
                        <p className="text-slate-600 text-[15.5px] leading-[1.8] mb-6">While the exact document list varies case-by-case, the following are commonly required across most <strong className="text-slate-800">{dynamicTitle}</strong> engagements. Our team will provide you with a precise, customised checklist after the initial consultation.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                            {[
                                'Certificate of Incorporation / Registration Certificate',
                                'Memorandum & Articles of Association (MoA & AoA)',
                                'PAN Card, TAN Certificate & GST Registration',
                                'Audited Financial Statements (last 3 years)',
                                'Board Resolutions & Shareholder Agreements',
                                'KYC Documents of Directors / Partners / Promoters',
                                'Latest Statutory Registers & Annual Returns',
                                'Bank Account Statements (last 12 months)',
                                'Existing Compliance Certificates & Licences',
                                'Organisational Chart & Entity Structure Diagram',
                            ].map((doc, i) => (
                                <div key={i} className="flex items-center gap-3 bg-slate-50 border border-gray-200 rounded-lg px-4 py-3">
                                    <CheckCircle2 className="text-green-500 shrink-0" size={17} />
                                    <span className="text-slate-700 text-[14px]">{doc}</span>
                                </div>
                            ))}
                        </div>

                        {/* ── REGULATORY FRAMEWORK OVERVIEW ── */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-5">Applicable Regulatory Framework</h3>
                        <div className="space-y-5 text-slate-600 text-[15.5px] leading-[1.8] mb-12">
                            <p>The governance of <strong className="text-slate-800">{dynamicTitle}</strong> in India is distributed across multiple regulatory bodies, each with its own jurisdiction, mandate, and enforcement mechanism. A high-level understanding of this framework is essential for any business seeking to operate compliantly and efficiently.</p>
                            <p><strong className="text-slate-800">Ministry of Corporate Affairs (MCA)</strong> — The MCA administers the Companies Act 2013, governing the incorporation, management, and winding-up of companies. The MCA's online portal (MCA21) is the primary interface for most corporate filings and real-time compliance tracking.</p>
                            <p><strong className="text-slate-800">Income Tax Department</strong> — All matters related to tax residency, withholding tax obligations (TDS/TCS), advance tax planning, transfer pricing documentation, and tax treaty benefits fall within the purview of the Income Tax Act 1961, administered by the Central Board of Direct Taxes (CBDT).</p>
                            <p><strong className="text-slate-800">Reserve Bank of India (RBI)</strong> — Cross-border transactions, foreign direct investment (FDI), external commercial borrowings (ECBs), and all matters involving foreign exchange are regulated by FEMA and administered by the RBI through its various regional offices and online reporting platforms.</p>
                            <p><strong className="text-slate-800">Securities and Exchange Board of India (SEBI)</strong> — For listed entities or those seeking to access capital markets, SEBI regulations govern disclosure obligations, insider trading restrictions, substantial acquisition of shares and takeovers, and the obligations of market intermediaries.</p>
                        </div>

                        {/* ── FAQ ── */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                        <div className="space-y-4 mb-12">
                            {[
                                { q: `What is the typical timeline for completing a ${dynamicTitle} engagement?`, a: 'Timelines vary significantly based on the complexity of the matter, the responsiveness of regulatory authorities, and the completeness of documentation provided by the client. Straightforward matters may be resolved within 2–4 weeks, while complex cross-border or multi-jurisdictional transactions can take 3–6 months. We provide realistic timelines during the initial scoping call and keep you informed at every milestone.' },
                                { q: `What makes Perfect Advice's approach to ${dynamicTitle} different from other firms?`, a: `Unlike generalist advisory firms, Perfect Advice has built a dedicated practice around ${dynamicTitle} with a team of specialists who work exclusively in this domain. Our deep regulatory relationships, technology-enabled workflow management, and 360-degree client support model set us apart. We don't just file documents — we provide strategic counsel that protects and creates long-term value for your business.` },
                                { q: 'Are your fees fixed or variable based on the scope of work?', a: 'We believe in transparent pricing. For well-defined, standard engagements, we offer fixed-fee packages. For complex, bespoke mandates, fees are structured on a time-and-materials basis with a clear budget cap agreed upfront. You will never encounter surprise invoices — all pricing is discussed and agreed before work commences.' },
                                { q: 'Do you offer post-compliance support and ongoing retainer arrangements?', a: 'Absolutely. Many of our clients choose to retain our team on an ongoing basis for continuous compliance monitoring, annual filings, regulatory updates, and ad-hoc advisory. Our retainer packages are flexible and can be customised to the specific volume and complexity of your requirements.' },
                                { q: 'Can you assist companies that are already in a distressed or non-compliant state?', a: 'Yes, we have significant experience in remediation and regulatory rescue situations. Whether you are facing a show-cause notice, compounding application, NCLT proceedings, or have accumulated delayed filings, our team can assess the situation, design a recovery plan, and execute it systematically while minimising penalties and reputational risk.' },
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
                        <div className="bg-[#f8fafc] rounded-2xl p-8 border border-gray-200 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Need Immediate Assistance?</h3>
                            <p className="text-slate-600 mb-8">Our advisors are available 24/7 to help you with your {dynamicTitle.toLowerCase()} requirements.</p>

                            <div className="space-y-4">
                                <a href="tel:+919818024481" className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-lg hover:border-blue-500 hover:shadow-md transition-all group">
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Call Us Now</p>
                                        <p className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">+91 9818024481</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <ArrowRight size={20} />
                                    </div>
                                </a>

                                <a href="mailto:nikunj@perfectadvice.in" className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-lg hover:border-blue-500 hover:shadow-md transition-all group">
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Email Us</p>
                                        <p className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">nikunj@perfectadvice.in</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <ArrowRight size={20} />
                                    </div>
                                </a>
                            </div>

                            {/* Mini checklist in sidebar */}
                            <div className="mt-8 pt-7 border-t border-gray-200">
                                <h4 className="font-bold text-slate-800 mb-4 text-[15px]">Why Clients Trust Us</h4>
                                <ul className="space-y-3">
                                    {['1,00,000+ mandates successfully delivered', 'Presence across 4 cities & offices', 'Panel of 100+ CAs, CSs & Lawyers', 'Dedicated client success manager', 'Real-time status tracking portal', '100% money-back service guarantee'].map((pt, i) => (
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
            <section className="bg-[#f0f6ff] py-16 md:py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Perfect Advice?</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Over 15 years of delivering high-impact advisory services to businesses across every sector and scale in India and beyond.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Shield size={28} className="text-blue-600" />, bg: 'bg-blue-50', title: 'Regulatory Expertise', desc: 'Our specialists maintain real-time awareness of legislative changes across all major Indian and international regulatory bodies, ensuring you are always ahead of the compliance curve.' },
                            { icon: <TrendingUp size={28} className="text-green-600" />, bg: 'bg-green-50', title: 'Proven Track Record', desc: 'With over 500,000 successful engagements spanning incorporation, licensing, taxation, restructuring, and dispute resolution, our track record speaks for itself.' },
                            { icon: <Target size={28} className="text-purple-600" />, bg: 'bg-purple-50', title: 'Tailored Solutions', desc: 'We reject cookie-cutter approaches. Every strategy we devise is built around your specific business context, industry dynamics, and long-term growth objectives.' },
                            { icon: <Clock size={28} className="text-orange-500" />, bg: 'bg-orange-50', title: 'Timely Delivery', desc: 'Regulatory deadlines missed can mean severe financial penalties and reputational damage. Our project management discipline ensures zero-delay delivery on all committed timelines.' },
                            { icon: <CheckCircle2 size={28} className="text-teal-600" />, bg: 'bg-teal-50', title: 'End-to-End Support', desc: 'From the first consultation to the final compliance certificate and beyond, we are a single point of accountability for your entire advisory journey — no handoffs, no gaps.' },
                            { icon: <Handshake size={28} className="text-rose-500" />, bg: 'bg-rose-50', title: 'Trusted Relationships', desc: 'We build long-term partnerships, not transactional engagements. Our repeat client rate of over 85% reflects the trust and confidence our clients place in our team and processes.' },
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
            <section className="bg-[#1a2a85] py-16 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                        Ready to Get Started with {dynamicTitle}?
                    </h2>
                    <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        Connect with our expert advisors today for a free, no-obligation consultation. Let us design the optimal solution for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-[#1a2a85] font-bold px-10 py-4 rounded-lg text-[16px] hover:bg-blue-50 transition shadow-lg">
                            Book a Free Consultation
                        </button>
                        <button className="border-2 border-white text-white font-bold px-10 py-4 rounded-lg text-[16px] hover:bg-white/10 transition">
                            Call +91 9818024481
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}