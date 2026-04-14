"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { Star, ArrowRight, Lightbulb, Search, Cog, Rocket, CheckCircle } from 'lucide-react';

// Helper function to format the URL slug into a proper Title
const formatTitle = (slug: string) => {
  if (!slug) return 'Consulting Service';
  let words = slug.split('-');
  words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
  // Acronyms specific to the consulting section
  const acronyms = ['Hr', 'Lpo', 'Cfo', 'B2b', 'Adr', 'Nclt', 'Pmla', 'Ifrs', 'Kyc', 'Fdi'];
  words = words.map(word => acronyms.includes(word.toUpperCase()) ? word.toUpperCase() : word);
  
  return words.join(' ');
};

export default function DynamicConsultingPage() {
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
          PREMIUM DARK HERO SECTION 
      ============================== */}
      <section className="bg-slate-900 pt-20 pb-24 px-4 md:px-8 relative overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-[55%] text-white">
            <div className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-6 uppercase">
              Expert Consulting Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold mb-6 leading-[1.15] tracking-tight">
              Transform Your Business with <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">{dynamicTitle}</span>
            </h1>
            
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              Unlock your company's full potential. Our elite consultants provide actionable strategies, operational optimization, and dedicated support for your most complex challenges.
            </p>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 border-t border-slate-800 pt-8">
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">95%</h4>
                <p className="text-slate-400 text-sm font-medium">Client Retention</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">2500+</h4>
                <p className="text-slate-400 text-sm font-medium">Projects Offered</p>
              </div>
              <div className="hidden md:block">
                <h4 className="text-3xl font-bold text-white mb-1">24/7</h4>
                <p className="text-slate-400 text-sm font-medium">Expert Support</p>
              </div>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=1" alt="Client" />
                <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=2" alt="Client" />
                <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=3" alt="Client" />
                <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300">+5k</div>
              </div>
              <div className="text-sm text-slate-400 ml-2">
                Trusted by global industry leaders.
              </div>
            </div>

          </div>

          {/* Right Content Column (Form) */}
          <div className="w-full lg:w-[45%] max-w-md mx-auto lg:mx-0 shrink-0">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">
                Request a Consultation
              </h2>
              <p className="text-slate-500 text-center text-sm mb-8">Speak with our {dynamicTitle} experts today.</p>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-3.5 bg-slate-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 placeholder-slate-400 transition-colors"
                />
                
                <input 
                  type="email" 
                  placeholder="Work Email" 
                  className="w-full px-4 py-3.5 bg-slate-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 placeholder-slate-400 transition-colors"
                />
                
                <div className="flex bg-slate-50 border border-gray-200 rounded-lg overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-colors">
                  <div className="flex items-center gap-2 px-3 border-r border-gray-200 shrink-0 bg-white">
                    <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-auto rounded-sm" />
                    <span className="text-slate-700 font-medium">+91</span>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    className="w-full px-4 py-3.5 bg-transparent focus:outline-none text-slate-800 placeholder-slate-400"
                  />
                </div>

                <button 
                  type="button" 
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors mt-2 flex justify-center items-center gap-2 group"
                >
                  Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-sm font-medium text-slate-600">
                <Star size={16} className="text-yellow-400" fill="currentColor" />
                <span><strong className="text-slate-900">4.9/5</strong> Rating on Google Reviews</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==============================
          NEW CONSULTING METHODOLOGY SECTION
      ============================== */}
      <section className="py-20 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Text Area */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Strategic Insights for <span className="text-blue-600">{dynamicTitle}</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              In today's rapidly evolving market, generic advice is not enough. Our <strong className="text-slate-900">{dynamicTitle}</strong> practice provides deep, data-driven insights combined with practical execution frameworks. We don't just hand you a report; we partner with your executive team to drive measurable results.
            </p>

            {/* Process Timeline (Unique to Consulting Page) */}
            <div className="mt-12 mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Consulting Methodology</h3>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                
                {/* Step 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                    <Search size={20} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">1. Discovery & Assessment</h4>
                    <p className="text-slate-600 text-sm">We conduct a deep dive into your current operations, financials, and structural bottlenecks.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-purple-100 text-purple-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                    <Lightbulb size={20} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">2. Strategic Planning</h4>
                    <p className="text-slate-600 text-sm">Developing a customized, actionable roadmap aligned with your specific business objectives.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-amber-100 text-amber-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                    <Cog size={20} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">3. Implementation</h4>
                    <p className="text-slate-600 text-sm">Working alongside your team to deploy new frameworks, technologies, and processes.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-emerald-100 text-emerald-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                    <Rocket size={20} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">4. Optimization</h4>
                    <p className="text-slate-600 text-sm">Continuous tracking of KPIs and making iterative improvements for sustained growth.</p>
                  </div>
                </div>

              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-6">Value Delivered</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
              {[
                "Cost Reduction & Efficiency",
                "Enhanced Executive Decision Making",
                "Scalable Operational Frameworks",
                "Risk Mitigation & Compliance",
                "Market Expansion Strategies",
                "Capital Optimization"
              ].map((val, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle className="text-blue-500 shrink-0" size={18} />
                  <span className="text-slate-700 font-medium">{val}</span>
                </div>
              ))}
            </div>

            {/* ── IN-DEPTH OVERVIEW ── */}
            <h3 className="text-2xl font-bold text-slate-900 mb-5">The Strategic Imperative of {dynamicTitle}</h3>
            <div className="space-y-5 text-slate-600 text-[15.5px] leading-[1.8] mb-12">
              <p>In an era defined by rapid technological disruption, shifting consumer expectations, and intensifying global competition, organisations that invest in expert <strong className="text-slate-800">{dynamicTitle}</strong> practice are, on average, three times more likely to out-perform their peers over a five-year horizon. This is not a coincidence — it is the direct result of better decision frameworks, cleaner data architectures, and leadership teams that understand how to translate strategic insight into operational reality.</p>
              <p>At Perfect Advice, our <strong className="text-slate-800">{dynamicTitle}</strong> engagements are structured around a proprietary diagnostic model that evaluates four critical dimensions of organisational health: strategic alignment, operational efficiency, financial resilience, and talent capability. By examining each dimension independently and then mapping the interdependencies between them, we are able to identify the root causes of underperformance — not merely the surface-level symptoms — and design interventions that produce durable, measurable change.</p>
              <p>Our consultants bring a combination of domain expertise and cross-industry perspective that is rarely available in purely specialist firms. This dual lens allows us to identify non-obvious solutions — often drawn from adjacent industries or emerging global best practices — and adapt them to your specific commercial and regulatory context. The result is a bespoke strategy that is neither a theoretical abstraction nor a one-size-fits-all template, but a precisely engineered roadmap for your organisation's unique trajectory.</p>
              <p>Critically, our partnership model means we do not hand over a report and disappear. We embed our consultants within your project governance structure for the duration of the engagement, attending leadership team meetings, tracking implementation milestones, and making real-time adjustments as conditions evolve. This accountability-driven approach consistently delivers outcomes that purely advisory models cannot match — and it is the primary reason why over 85% of our <strong className="text-slate-800">{dynamicTitle}</strong> clients choose to continue their relationship with Perfect Advice beyond the initial mandate.</p>
            </div>

            {/* ── DETAILED 6-STEP PROCESS ── */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Engagement Process in Detail</h3>
            <div className="space-y-5 mb-12">
              {[
                { step: '01', title: 'Discovery Call & Scope Definition', desc: 'We begin every engagement with a structured discovery session designed to surface your organisation\'s most pressing challenges, strategic priorities, and current capability gaps. This session also allows us to assess cultural and operational context — factors that profoundly influence the design and execution of any successful consulting programme.' },
                { step: '02', title: 'Diagnostic & Data Collection', desc: 'Our team deploys a structured diagnostic toolkit — comprising quantitative benchmarking, qualitative interviews, process mapping workshops, and technology stack reviews — to build a comprehensive picture of your current state. This phase typically involves senior stakeholders across finance, operations, HR, technology, and commercial functions.' },
                { step: '03', title: 'Insight Synthesis & Hypothesis Development', desc: 'Working from the diagnostic outputs, our consultants develop a set of evidence-based hypotheses about the primary drivers of your current performance challenges. These are rigorously tested against your data, industry benchmarks, and leading academic and practitioner research before being consolidated into the strategy document.' },
                { step: '04', title: 'Strategy Design & Scenario Planning', desc: 'We develop not one but multiple strategic scenarios, each optimised for a different set of assumptions about market conditions, regulatory changes, or competitive responses. This scenario-based approach ensures your leadership team is prepared to respond effectively regardless of how the external environment evolves.' },
                { step: '05', title: 'Implementation Planning & Change Management', desc: 'Strategy without execution is merely aspiration. Our implementation planning process translates the chosen strategic direction into a granular project plan, complete with workstreams, owners, decision frameworks, resource requirements, and a risk register. We place particular emphasis on change management, recognising that people — not processes — are the ultimate determinant of transformation success.' },
                { step: '06', title: 'Performance Tracking & Continuous Optimisation', desc: 'We establish a bespoke performance management framework that tracks the KPIs most relevant to your strategic objectives on a real-time basis. Monthly review sessions with your leadership team ensure that emerging challenges are identified and addressed promptly, and that the strategy remains calibrated to your evolving commercial environment.' },
              ].map((s, i) => (
                <div key={i} className="flex gap-5 bg-white border border-gray-100 shadow-sm rounded-xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 font-extrabold text-[15px] flex items-center justify-center shrink-0">{s.step}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-[16px]">{s.title}</h4>
                    <p className="text-slate-500 text-[14.5px] leading-[1.7]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── INFORMATION WE NEED FROM YOU ── */}
            <h3 className="text-2xl font-bold text-slate-900 mb-5">Information We Typically Need to Get Started</h3>
            <p className="text-slate-600 text-[15.5px] leading-[1.8] mb-6">To maximise the productivity of our initial engagement sessions, we typically request access to the following documents and data sources. All information shared is subject to strict confidentiality agreements executed prior to commencement.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
              {[
                'Latest 3 years of audited P&L statements and balance sheets',
                'Current organisational structure and headcount breakdown',
                'Existing strategic plan or business plan documentation',
                'Key performance indicator (KPI) dashboards and MIS reports',
                'Details of current technology infrastructure and systems',
                'Sales pipeline data and customer segmentation analysis',
                'Regulatory compliance status and recent audit reports',
                'Shareholder agreements and key contractual obligations',
                'HR data: attrition rates, compensation benchmarks, skill gaps',
                'Competitive landscape analysis (if available internally)',
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 border border-gray-200 rounded-lg px-4 py-3">
                  <CheckCircle className="text-green-500 shrink-0" size={17} />
                  <span className="text-slate-700 text-[14px]">{doc}</span>
                </div>
              ))}
            </div>

            {/* ── CONSULTING FRAMEWORKS ── */}
            <h3 className="text-2xl font-bold text-slate-900 mb-5">Consulting Frameworks We Deploy</h3>
            <div className="space-y-5 text-slate-600 text-[15.5px] leading-[1.8] mb-12">
              <p>The quality of a consulting outcome is directly proportional to the rigour and relevance of the analytical frameworks deployed. At Perfect Advice, our <strong className="text-slate-800">{dynamicTitle}</strong> team draws on a curated library of proven frameworks, adapted and localised for the Indian market and the specific characteristics of your industry sector.</p>
              <p><strong className="text-slate-800">Porter's Five Forces & Competitive Positioning</strong> — We use this foundational framework to map the competitive dynamics of your industry, identifying sources of structural advantage and areas of vulnerability. This analysis informs our recommendations on pricing strategy, channel selection, product differentiation, and market entry or exit decisions.</p>
              <p><strong className="text-slate-800">Balanced Scorecard & OKR Integration</strong> — We design performance management systems that translate high-level strategic objectives into actionable targets across financial, customer, operational, and learning perspectives. Where clients have existing OKR frameworks, we integrate and align these with the overall strategic architecture to eliminate conflicting priorities and improve organisational focus.</p>
              <p><strong className="text-slate-800">Lean Six Sigma & Process Excellence</strong> — For operational efficiency mandates, we deploy Lean and Six Sigma methodologies to systematically identify and eliminate waste, reduce process variation, and optimise throughput. Our certified practitioners work shoulder-to-shoulder with your operations team to drive sustainable improvements that outlast the engagement.</p>
              <p><strong className="text-slate-800">McKinsey 7-S Framework & Organisational Design</strong> — Structural transformation requires alignment across strategy, structure, systems, shared values, style, staff, and skills. We use the 7-S framework as a diagnostic lens to identify misalignments and design interventions that address root causes rather than surface symptoms, ensuring that organisational changes are reinforcing rather than contradictory.</p>
            </div>

            {/* ── FAQ ── */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4 mb-4">
              {[
                { q: `How long does a typical ${dynamicTitle} engagement last?`, a: 'Engagement durations vary considerably depending on scope. Focused diagnostic engagements can be completed in 4–6 weeks. Comprehensive transformation programmes — spanning strategy design, implementation support, and performance tracking — typically run for 6–18 months. We always agree the scope, timeline, and budget ceiling upfront before work commences, and we are transparent about any scope changes that arise during the engagement.' },
                { q: `What industries does your ${dynamicTitle} practice serve?`, a: 'Our consulting team has deep sector experience across financial services, manufacturing, healthcare and life sciences, technology, real estate, infrastructure, consumer goods, education, and the public sector. Our cross-industry perspective is one of our most distinctive assets — the best solutions are often inspired by approaches that have proven effective in adjacent sectors.' },
                { q: 'Do you work with early-stage companies or only large enterprises?', a: 'We work across the entire business lifecycle — from pre-revenue startups seeking to establish scalable operating models, to established mid-market companies navigating growth inflection points, to large multinationals managing complex transformation programmes. Our engagement design and fee structures are calibrated to reflect the stage and scale of each client.' },
                { q: 'How do you measure and guarantee the impact of your consulting work?', a: 'We co-design a bespoke impact measurement framework with each client at the outset of the engagement, defining the specific KPIs, baselines, and target improvements that will serve as the primary measure of success. We conduct formal post-engagement reviews 6 and 12 months after conclusion to verify that outcomes have been sustained and to identify any further optimisation opportunities.' },
                { q: 'Can we engage you for a specific, time-limited advisory project without committing to a full transformation programme?', a: 'Absolutely. We offer a range of advisory formats including one-off strategic reviews, board advisory sessions, market entry assessments, M&A due diligence support, and regulatory impact analysis. These can be structured as single-session workshops or multi-week projects without any obligation to proceed to a longer engagement.' },
              ].map((faq, i) => (
                <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-slate-800 text-[15.5px] list-none select-none hover:bg-gray-50 transition">
                    {faq.q}
                    <span className="ml-4 shrink-0 text-blue-600 text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-slate-600 text-[15px] leading-[1.75] border-t border-gray-100 pt-4">{faq.a}</div>
                </details>
              ))}
            </div>

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:w-1/3 mt-10 lg:mt-0">
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl sticky top-24 text-white">
              <h3 className="text-xl font-bold text-white mb-4">Let's discuss your project.</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                Connect with our senior consultants today to explore how our {dynamicTitle.toLowerCase()} services can drive your business forward.
              </p>
              
              <div className="space-y-4">
                <a href="tel:+919818024481" className="flex items-center justify-between bg-slate-800 border border-slate-700 p-4 rounded-lg hover:border-blue-500 transition-all group cursor-pointer">
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Direct Line</p>
                    <p className="font-bold text-white group-hover:text-blue-400 transition-colors">+91 9818024481</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </a>

                <a href="mailto:nikunj@perfectadvice.in" className="flex items-center justify-between bg-slate-800 border border-slate-700 p-4 rounded-lg hover:border-blue-500 transition-all group cursor-pointer">
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Email Desk</p>
                    <p className="font-bold text-white group-hover:text-blue-400 transition-colors truncate max-w-40">nikunj@perfectadvice.in</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </a>
              </div>

              {/* Trust signals */}
              <div className="mt-8 pt-7 border-t border-slate-700">
                <h4 className="font-bold text-slate-200 mb-4 text-[15px]">Why Global Leaders Choose Us</h4>
                <ul className="space-y-3">
                  {['2,500+ consulting projects offered', '95% client retention rate', 'Dedicated senior partner oversight', 'No junior-only engagement model', 'NDA-protected confidentiality guarantee'].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-slate-400">
                      <CheckCircle size={16} className="text-cyan-400 mt-0.5 shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Perfect Advice for {dynamicTitle}?</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">A consulting partner with the depth of a global firm and the agility and client-centricity of a boutique.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Search size={28} className="text-blue-600" />, bg: 'bg-blue-50', title: 'Evidence-Based Insights', desc: 'Every recommendation we make is grounded in rigorous data analysis, primary research, and validated benchmarks — not intuition or generic industry templates.' },
              { icon: <Lightbulb size={28} className="text-amber-500" />, bg: 'bg-amber-50', title: 'Innovative Thinking', desc: 'Our consultants are trained to challenge conventional assumptions and actively seek non-obvious solutions inspired by cross-industry innovation and emerging global practices.' },
              { icon: <Cog size={28} className="text-purple-600" />, bg: 'bg-purple-50', title: 'Execution Focus', desc: 'We don\'t stop at strategy. Our hands-on implementation support ensures that the insights we generate translate into real, measurable change on the ground.' },
              { icon: <Rocket size={28} className="text-emerald-600" />, bg: 'bg-emerald-50', title: 'Growth Acceleration', desc: 'Our programmes are designed not just to fix current problems but to build the internal capabilities and structural conditions required for sustained, scalable growth.' },
              { icon: <CheckCircle size={28} className="text-teal-600" />, bg: 'bg-teal-50', title: 'Accountable Delivery', desc: 'We co-own the outcome. Our performance tracking frameworks and post-engagement reviews ensure we remain accountable for the results we commit to.' },
              { icon: <Star size={28} className="text-rose-500" />, bg: 'bg-rose-50', title: 'Senior-Led Teams', desc: 'Unlike larger firms where junior analysts do most of the work, our engagements are led by senior consultants who bring decades of relevant sector experience to every mandate.' },
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
      <section className="bg-slate-900 py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Start Your {dynamicTitle} Journey Today
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join over 10,000 businesses that have transformed their performance with Perfect Advice. Book your complimentary strategy session now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-lg text-[16px] transition shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
              Book a Free Strategy Session <ArrowRight size={18} />
            </button>
            <button className="border-2 border-slate-700 text-slate-300 hover:border-slate-500 font-bold px-10 py-4 rounded-lg text-[16px] transition">
              Call +91 9818024481
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}