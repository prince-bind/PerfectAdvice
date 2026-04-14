"use client";

import { useState } from 'react';
import { Handshake, Users, Building2, Star } from 'lucide-react';

const GrowthAdvisory = () => {
  const [heroForm, setHeroForm] = useState({ name: '', email: '', mobile: '' });
  const [sidebarForm, setSidebarForm] = useState({ name: '', email: '', mobile: '' });

  return (
    <div className="font-sans text-[#333] bg-white">

      {/* HERO */}
      <section className="relative bg-[#1a73e8] py-16 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 11px)' }}></div>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">

          {/* Left */}
          <div className="flex-1 max-w-[750px]">
            <h1 className="text-[38px] md:text-[46px] font-bold text-white mb-5 leading-[1.2] tracking-tight">
              Business Future Growth Analysis
            </h1>
            <p className="text-[16px] text-blue-50 mb-10 leading-[1.7] max-w-[85%]">
              Discover your business's growth potential with Perfect Advice. Get clear insights and strategies to plan for a successful future.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-8 border border-blue-400/30 bg-blue-500/10 rounded-[8px] p-5 backdrop-blur-sm max-w-max">
              <div className="flex items-center gap-4">
                <Handshake size={32} strokeWidth={1.5} className="text-white" />
                <div>
                  <div className="font-bold text-[18px] text-white mb-0.5">5000 +</div>
                  <div className="text-[13px] text-blue-50">Happy Customers</div>
                </div>
              </div>
              <div className="w-[1px] h-10 bg-blue-400/30 hidden sm:block"></div>
              <div className="flex items-center gap-4">
                <Users size={32} strokeWidth={1.5} className="text-white" />
                <div>
                  <div className="font-bold text-[18px] text-white mb-0.5">100 +</div>
                  <div className="text-[13px] text-blue-50">CAs, CS &amp; Lawyers</div>
                </div>
              </div>
              <div className="w-[1px] h-10 bg-blue-400/30 hidden md:block"></div>
              <div className="flex items-center gap-4">
                <Building2 size={32} strokeWidth={1.5} className="text-white" />
                <div>
                  <div className="font-bold text-[18px] text-white mb-0.5">10 +</div>
                  <div className="text-[13px] text-blue-50">Offices Globally</div>
                </div>
              </div>
            </div>

            {/* Google Reviews */}
            {/* <div className="flex items-center gap-4">
              <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg shrink-0">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6" />
              </div>
              <div>
                <div className="text-white font-bold text-[15px] mb-0.5">Google Reviews</div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <div className="flex text-[#fbbf24] gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#fbbf24]" strokeWidth={0} />)}
                  </div>
                  <span className="text-[13.5px] text-white font-medium ml-1">
                    <strong>4.8/5</strong> | 22756+ Global Rating by Happy Customers
                  </span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right — Form */}
          <div className="w-full lg:w-[440px] shrink-0">
            <div className="bg-white rounded-[6px] shadow-2xl p-9 ring-1 ring-gray-100">
              <h3 className="text-[17px] font-bold text-center text-[#111827] mb-7 tracking-wide uppercase">
                GET FREE CONSULTATION
              </h3>
              <form className="space-y-[18px]" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full h-[50px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#1a73e8] text-[14.5px] placeholder:text-gray-400 transition" value={heroForm.name} onChange={e => setHeroForm({ ...heroForm, name: e.target.value })} />
                <input type="email" placeholder="Email Address" className="w-full h-[50px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#1a73e8] text-[14.5px] placeholder:text-gray-400 transition" value={heroForm.email} onChange={e => setHeroForm({ ...heroForm, email: e.target.value })} />
                <div className="flex h-[50px] border border-gray-200 rounded-[4px] focus-within:border-[#1a73e8] transition overflow-hidden">
                  <div className="bg-[#f8fafc] px-3 flex items-center gap-2 border-r border-gray-200 shrink-0 text-[14px] text-gray-700 w-[90px]">
                    <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-[18px] h-[12px] object-cover rounded-sm" />
                    <span className="font-medium">+91</span>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1L4 4L7 1" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <input type="tel" placeholder="Mobile Number" className="w-full h-full px-4 focus:outline-none text-[14.5px] placeholder:text-gray-400 bg-transparent" value={heroForm.mobile} onChange={e => setHeroForm({ ...heroForm, mobile: e.target.value })} />
                </div>
                <button className="w-full bg-[#1a73e8] hover:bg-[#155fc4] text-white font-bold py-[14px] rounded-[4px] mt-4 transition text-[14.5px] tracking-wide shadow-sm">
                  TALK TO AN EXPERT
                </button>
                <div className="flex items-center justify-center gap-1.5 pt-3">
                  <div className="flex text-[#fbbf24] gap-[1px]">
                    {[...Array(4)].map((_, i) => <Star key={i} size={11} className="fill-[#fbbf24]" strokeWidth={0} />)}
                    <div className="relative"><Star size={11} className="fill-gray-300" strokeWidth={0} /><div className="absolute top-0 left-0 overflow-hidden w-[50%]"><Star size={11} className="fill-[#fbbf24]" strokeWidth={0} /></div></div>
                  </div>
                  <span className="text-[11px] text-gray-500 font-medium">Rated at <strong className="text-gray-700">4.8/5</strong> 22756+ Happy Reviews</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT + STICKY SIDEBAR */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 items-start">

          {/* Left — Main Content */}
          <div className="flex-1 space-y-12 text-[15px] text-[#4b5563] leading-[1.78] font-medium">

            {/* Section 1 */}
            <div>
              <h2 className="text-[26px] md:text-[28px] font-bold text-[#1f2937] mb-5">Unleashing Potential: Future Growth Analysis Solutions</h2>
              <div className="space-y-5">
                <p>A company's growth rate is represented as a percentage and measures particular factors connected to growth over a given period. The factors are business-specific, which means they vary from one organization to another. A business may track growth rates such as revenue, user growth, and compound annual growth rates. This metric can be measured at any stage of development and serves as a gauge of a company's profitability. Executives use the figures to plan and allocate resources, and investors use them to decide whether a company is worth investing in.</p>
                <p>Revenues and earnings, the price-to-earnings (P/E) ratio, the price-to-earnings-to-growth (PEG) ratio, and return on equity (ROE) are some of the most popular growth rate metrics investors and analysts take into account when assessing a company's prospects and suitability as an investment.</p>
                <p>From an investor's perspective, the goal of using these growth rates is to assess a company's performance and identify undervalued companies. These businesses provide possible investment opportunities that merit more thought from the investor.</p>
              </div>
            </div>

            {/* Section 2 — Challenges */}
            <div>
              <h2 className="text-[26px] md:text-[28px] font-bold text-[#1f2937] mb-4">Challenges in Future Growth Analysis</h2>
              <p className="mb-7">It is not easy for a company to analyze the future growth rate in a short period. Conducting full market research and company financial statements helps analyse growth with experts' help. Below are the main challenges in conducting growth rate analysis.</p>
              <div className="space-y-6">
                {[
                  { title: 'Analysing Current Situation:', text: "Analyzing your current business model, goods/services, and market position is difficult. A company must examine its financial data, client input, and sales performance to find strengths and weaknesses for a future growth analysis." },
                  { title: 'Know Your Customers and Your Market:', text: "Not all businesses conduct market research to understand their target audience's demands, tastes, and behaviours. Finding gaps and opportunities requires understanding competitors' strategies, which is both difficult and crucial." },
                  { title: 'Future Uncertainty and Assumptions:', text: "Different assumptions regarding the status of the market, consumer behaviour, and other factors are routinely used to calculate growth predictions. Future events are inevitably unpredictable. These assumptions may prove to be false or change." },
                  { title: 'Data Availability:', text: "It can be challenging to locate reliable and current data for analysis, especially for new markets or industries with little historical data. Changes in governmental rules and policies can significantly impact the growth of enterprises. It can be difficult to predict these developments." },
                  { title: 'Accuracy in research and a lack of Technology:', text: "For businesses with a wide range of product lines, a large geographic presence, or complex operations, accurately identifying and analyzing growth can be challenging. Rapid technological change can affect growth and disrupt economies and sectors." },
                  { title: 'Choosing the appropriate analytics tool:', text: "One might not be able to carry out the data analysis effectively and properly without the ideal instrument for your company's data analytics requirements. There are numerous analytics tools with various features. Along with picking software that matches your budget, you should also consider other aspects, such as your company's goals and the solution's scalability, integration potential, and capacity for multi-source data analysis." },
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-[16px] text-[#1f2937] mb-2">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 — Kinds of growth */}
            <div>
              <h2 className="text-[26px] md:text-[28px] font-bold text-[#1f2937] mb-4">What kinds of business growth are there?</h2>
              <p className="mb-7">We examine numerous firm growth rate measures in this part to assist you in better understanding the numbers in your company.</p>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-[16px] text-[#1f2937] mb-2">Industry Growth Rate</h3>
                  <p>Different industries have various standards and growth rates. When comparing your company, it's a good idea to compare against others in the same industry. For instance, companies working with innovative technology will have a different benchmark than the retail industry, which has been around for a while.</p>
                  <p className="mt-2">A few industries may also experience cyclical growth, with high growth during times of economic development and low growth during a recession. Even while historical data suggests growth during specific periods, it doesn't necessarily follow that you'll get the same high growth rate if a similar occurrence occurs again. The cause is that current economic and industrial conditions could be different from those in the past.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[16px] text-[#1f2937] mb-2">Seasonal Growth</h3>
                  <p>Businesses that operate seasonally typically experience growth during some seasons and decline during others. An online store may experience a surge in sales over the holidays, followed by refunds and cancellations soon after.</p>
                  <p className="mt-2">You may find it more challenging to comprehend your company's growth rate because you cannot make a month-to-month comparison. The figures won't make sense if you do. However, comparing a month's performance year over year enables you to more precisely detect trends.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[16px] text-[#1f2937] mb-2">Compound annual growth rates (CAGR)</h3>
                  <p>A business's average yearly growth rate over a given period is referred to as the compound annual growth rate. Here, it is assumed that profits will be reinvested annually and that the growth rate will eventually stay constant.</p>
                  <p className="mt-2">Growing a business while producing the same amount of money causes diminishing growth. This occurs as a result of revenue's declining as an overall revenue in percentage. Companies must exhibit compound growth, or growth that is faster each time, to expand regularly.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[16px] text-[#1f2937] mb-2">Investment Growth Rates</h3>
                  <p>Some of the most popular growth rates are those of businesses and investments. By providing a comparison to prior firm performance, these rates assess the company's performance as of late. Calculating the overall revenue growth rate may be part of this. Investors may further investigate aspects associated with this growth. Businesses utilize these rates to set a foundation for their success and growth.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[16px] text-[#1f2937] mb-2">Historical EPS Growth</h3>
                  <p>Historical EPS growth, also known as historical earnings per share growth, predicts future revenue by using a company's historical revenue. This approach may look at decades' worth of financial development or history. For many industries, it might not be the most dependable, nevertheless. For instance, technology companies that experienced considerable growth ten years ago due to an intriguing development might not experience the same success going forward.</p>
                </div>
              </div>
            </div>

            {/* Section 4 — Benefits */}
            <div>
              <h2 className="text-[26px] md:text-[28px] font-bold text-[#1f2937] mb-4">Benefits of Future Growth Analysis</h2>
              <p className="mb-7">Some of the benefits of future growth rate analysis are:</p>
              <div className="space-y-6">
                {[
                  { title: 'Attracting New Investors:', text: "A company's expansion may be able to attract new investors and finance. A company that is growing will be more alluring to potential investors. Even more growth and development can be supported with the help of this additional financing." },
                  { title: 'Formulation of a Strategy:', text: "An analysis of prospective future growth can provide a road map for strategic planning. It aids the business in achieving its goals and the processes necessary to get there." },
                  { title: 'Business Expansion:', text: "A key component of a company's health is growth. A business is said to grow if it expands and gains new clients. This bodes well for the future possibilities of the business." },
                  { title: 'Financial Planning', text: ": Growth forecasting is useful for financial planning and forecasts. Businesses can better control their cash flow, budgets, and financial resources when they have a clear growth trajectory." },
                  { title: 'Emerging trends:', text: "Staying on top of industry trends using a marketing analysis is a wonderful method to position yourself to take advantage of this knowledge. Staying ahead in business frequently involves being the first to recognize a new opportunity or trend." },
                  { title: 'Risk reduction:', text: "By having a thorough awareness of the growth rate and what it takes to succeed, you may lower the risks associated with your firm and better influence your decisions. You can also perform a SWOT analysis, which highlights your company's strengths, weaknesses, opportunities, and threats, to assist you in better safeguarding your enterprise." },
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-[16px] text-[#1f2937] mb-2">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right — Sticky Sidebar */}
          <div className="w-full lg:w-[350px] shrink-0 lg:sticky lg:top-24">
            <div className="bg-white rounded-[10px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.08)] p-6 md:p-8 border border-gray-100">
              <h3 className="text-[18px] font-bold text-center text-[#1f2937] mb-6 tracking-wide">
                Get Free Consultation
              </h3>
              <form className="space-y-[15px]" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#22c55e] text-[14px] placeholder:text-gray-500 transition" value={sidebarForm.name} onChange={e => setSidebarForm({ ...sidebarForm, name: e.target.value })} />
                <input type="email" placeholder="Email Address" className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#22c55e] text-[14px] placeholder:text-gray-500 transition" value={sidebarForm.email} onChange={e => setSidebarForm({ ...sidebarForm, email: e.target.value })} />
                <div className="flex h-[46px] border border-gray-200 rounded-[4px] focus-within:border-[#22c55e] transition overflow-hidden">
                  <div className="bg-[#f8fafc] px-3 flex items-center gap-2 border-r border-gray-200 shrink-0 text-[14px] text-gray-700 w-[90px]">
                    <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-[18px] h-[12px] object-cover rounded-sm" />
                    <span className="font-medium">+91</span>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1L4 4L7 1" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <input type="tel" placeholder="Mobile Number" className="w-full h-full px-4 focus:outline-none text-[14px] placeholder:text-gray-500 bg-transparent" value={sidebarForm.mobile} onChange={e => setSidebarForm({ ...sidebarForm, mobile: e.target.value })} />
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

export default GrowthAdvisory;