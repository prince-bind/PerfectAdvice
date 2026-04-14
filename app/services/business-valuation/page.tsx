"use client";

import { useState } from 'react';
import { Handshake, Users, Building2, Star } from 'lucide-react';

const BusinessValuation = () => {
  const [heroForm, setHeroForm] = useState({ name: '', email: '', mobile: '' });
  const [sidebarForm, setSidebarForm] = useState({ name: '', email: '', mobile: '' });

  return (
    <div className="font-sans text-[#333] bg-white">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#1a73e8] py-16 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 11px)' }}></div>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">

          {/* Left Content */}
          <div className="flex-1 max-w-[750px]">
            <h1 className="text-[38px] md:text-[46px] leading-[1.2] font-bold text-white mb-5 tracking-tight">
              Business Valuation Services
            </h1>
            <p className="text-[16px] text-blue-50 mb-10 leading-[1.7] pr-4 max-w-[85%]">
              Do you wish to determine the fair market value of your business but are unaware of the process? Get economical Business valuation services from Perfect Advice.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-8 border border-blue-400/30 bg-blue-500/10 rounded-[8px] p-5 backdrop-blur-sm max-w-max">
              <div className="flex items-center gap-4">
                <Handshake size={32} strokeWidth={1.5} className="text-white" />
                <div>
                  <div className="font-bold text-[18px] text-white tracking-wide mb-0.5">5000 +</div>
                  <div className="text-[13px] text-blue-50 font-medium tracking-wide">Happy Customers</div>
                </div>
              </div>
              <div className="w-[1px] h-10 bg-blue-400/30 hidden sm:block"></div>
              <div className="flex items-center gap-4">
                <Users size={32} strokeWidth={1.5} className="text-white" />
                <div>
                  <div className="font-bold text-[18px] text-white tracking-wide mb-0.5">100 +</div>
                  <div className="text-[13px] text-blue-50 font-medium tracking-wide">CAs, CS &amp; Lawyers</div>
                </div>
              </div>
              <div className="w-[1px] h-10 bg-blue-400/30 hidden md:block"></div>
              <div className="flex items-center gap-4">
                <Building2 size={32} strokeWidth={1.5} className="text-white" />
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
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#fbbf24]" strokeWidth={0} />)}
                  </div>
                  <span className="text-[13.5px] text-white font-medium ml-1">
                    <strong className="font-bold">4.8/5</strong> | 22778+ Global Rating by Happy Customers
                  </span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Content - Hero Form */}
          <div className="w-full lg:w-[440px] shrink-0">
            <div className="bg-white rounded-[6px] shadow-2xl p-9 ring-1 ring-gray-100">
              <h3 className="text-[17px] font-bold text-center text-[#111827] mb-7 tracking-wide uppercase">
                GET FREE CONSULTATION
              </h3>
              <form className="space-y-[18px]" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full h-[50px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#1a73e8] text-[14.5px] placeholder:text-gray-400 bg-white transition" value={heroForm.name} onChange={e => setHeroForm({ ...heroForm, name: e.target.value })} />
                <input type="email" placeholder="Email Address" className="w-full h-[50px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#1a73e8] text-[14.5px] placeholder:text-gray-400 bg-white transition" value={heroForm.email} onChange={e => setHeroForm({ ...heroForm, email: e.target.value })} />
                <div className="flex h-[50px] border border-gray-200 rounded-[4px] bg-white focus-within:border-[#1a73e8] transition overflow-hidden">
                  <div className="bg-[#f8fafc] px-3 flex items-center justify-center gap-2 border-r border-gray-200 shrink-0 text-[14px] text-gray-700 w-[90px]">
                    <img src="https://flagcdn.com/w20/in.png" alt="India flag" className="w-[18px] h-[12px] object-cover rounded-sm" />
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
                  <span className="text-[11px] text-gray-500 font-medium">Rated at <strong className="font-bold text-gray-700">4.8/5</strong> 22778+ Happy Reviews</span>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 2. MAIN CONTENT + SIDEBAR */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 items-start">

          {/* Left Main Content */}
          <div className="flex-1 space-y-12">

            {/* Overview */}
            <div>
              <h2 className="text-[26px] md:text-[28px] font-bold text-[#1f2937] mb-5">Business Valuation Services- An Overview</h2>
              <div className="text-[15.5px] text-[#4b5563] space-y-5 leading-[1.75] font-medium">
                <p>Determining the monetary worth of a company is crucial, and that's where business valuation comes into play. At Perfect Advice, we offer top-notch business valuation services by thoroughly assessing your company and business. Our services include cost segregation analysis, legal and compliance duties, fair market value reporting, <a href="#" className="text-[#1a73e8] hover:underline">equity valuation</a>, tax reporting, etc. Our certified business valuation analysts are registered with appropriate domestic and international regulatory authorities and are fully equipped to perform a business valuation.</p>
                <p>A business valuation or company valuation is a process of ascertaining a company's or business's economic worth. In this process, all areas of a business are inspected to know their value and the value of their units.</p>
                <p>Our business valuation consultants are well-versed with the latest and conventional valuation methods, and they incorporate multiple methodologies prevailing in the market in the valuation process. Our experts work diligently to ensure that you receive the best possible business valuation services to meet all your business needs.</p>
              </div>
            </div>

            {/* Need for Business Valuation */}
            <div>
              <h2 className="text-[26px] md:text-[28px] font-bold text-[#1f2937] mb-4">What is the Need for Business Valuation Services in India?</h2>
              <p className="text-[15.5px] text-[#4b5563] leading-[1.75] font-medium mb-7">Have a look at the below-mentioned points to understand the need for business valuation services in India-</p>
              <div className="space-y-7">
                {[
                  { title: 'Purchasing', text: 'Buyers and sellers may have differing opinions on the value of a company. Still, the price that buyers are willing to pay represents the true commercial value of the firm. To determine the feasibility of an investment, it is important to engage the services of a professional business valuation provider.' },
                  { title: 'Fundraising', text: 'When dealing with banks or any other potential investors, obtaining an unbiased and independent assessment of your business is often necessary. A formal report of your company\'s value is frequently required to instil confidence in lenders regarding the worth of the business.' },
                  { title: 'Business Sale', text: 'When selling a business to a third party, it is important to ensure that you receive the best possible price while still making the asking price attractive to potential buyers. Our business valuation services will help you in setting the best possible price.' },
                  { title: 'Exit Strategy', text: 'When planning to exit a business, determining its value is crucial. Business owners should estimate cash flow and obtain an initial company valuation to understand their finances. A business valuation service provider at Perfect Advice helps determine the value of a business in the most efficient and precise way.' },
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-[16px] text-[#1f2937] mb-2">{item.title}</h3>
                    <p className="text-[15px] text-[#4b5563] leading-[1.75] font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Three Major Steps */}
            <div>
              <h2 className="text-[26px] md:text-[28px] font-bold text-[#1f2937] mb-4">Three Major Steps of Business Valuation</h2>
              <p className="text-[15.5px] text-[#4b5563] leading-[1.75] font-medium mb-7">Given below are the three significant steps of business valuation-</p>
              <div className="space-y-7">
                {[
                  { title: 'Valuation of Business Interest', text: 'Business valuation incorporates the services of both valuation opinion and valuation consulting services for the valuation of whole business interests or business enterprises.' },
                  { title: 'Intangible Asset Valuation', text: 'This step includes the offerings for valuation opinion or valuation consultancy for single or many intangible assets or liabilities, including intellectual properties.' },
                  { title: 'Fairness Opinion', text: 'This step involves creating a report addressed typically to the board of directors, describing the details of buying or selling of any asset or other business interest.' },
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-[16px] text-[#1f2937] mb-2">{item.title}</h3>
                    <p className="text-[15px] text-[#4b5563] leading-[1.75] font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Methods of Valuation */}
            <div>
              <h2 className="text-[26px] md:text-[28px] font-bold text-[#1f2937] mb-4">Methods of Valuation under Business Valuation Services</h2>
              <p className="text-[15.5px] text-[#4b5563] leading-[1.75] font-bold mb-7">There are numerous ways to determine the value of a business with our business valuation services. Some of them are listed below-</p>
              <div className="space-y-10">
                {[
                  {
                    title: 'Market Capitalization Method under Business Valuation Services',
                    paragraphs: [
                      'The market capitalization or market cap method denotes how much a business is worth as established by the stocks. It is denoted as the total market value of all remaining shares. To compute a business\'s market cap, multiply the remaining shares by the present market worth of a single share. Businesses are generally segregated according to market capitalization as small-cap ($300 Million to $2 billion), min-cap ($2 Billion to $10 Billion), and large-cap ($10 Billion and more).',
                      'Market cap is often utilized to determine a company\'s dimension. In vesting, businesses with greater market capitalization are usually safer investments as they denote more acclaimed businesses with typically a wider history in the market. This method is a faster and easier method for establishing a business\'s worth by deducing what the market thinks is valued for publically traded enterprises. For such cases, valuers normally multiply the share price by the amount of shares available. It is crucial to understand if a company\'s share price is $50 and another\'s may be $100, it doesn\'t necessarily mean that the latter is twice as large as the first one.',
                    ],
                  },
                  {
                    title: 'Times Revenue Method under Business Valuation Services',
                    paragraphs: [
                      'The times revenue approach is utilized to establish the maximum worth of a business. It\'s meant to produce a degree of value for a company based on the company\'s profits or revenue for a period that occurred in the past. The time-revenue valuation will differ from one industry to another because of the domain\'s growth potential. That makes paralleling the businesses misleading. This approach is not always a dependable indicator of the worth of a company as income does not necessarily mean profit, or in other words, an increment in the revenue doesn\'t always mean an increment in the profits. This approach has the benefit of being easy to compute, specifically if the business already has a record of financial declarations with dependable revenue totals.',
                    ],
                  },
                  {
                    title: 'Earnings Multiples under Business Valuation Services',
                    paragraphs: [
                      'The earnings multiples method is also known as the income-based approach for valuation. This method is a real estate evaluation approach that utilizes the income the possession produced to determine the fair value. It is computed by dividing the total operating income by the capitalization rate. A buyer must pay close attention to the circumstances of the property, performance efficiency, and vacancy when utilizing the income-based approach for valuation.',
                      'This method is one of the three methods to evaluate real estate. The others are the cost-based method and the comparison multiples method. The income-based method for real estate evaluation is similar to the DCF (discounted cash flow) for finance. This method discounts the upcoming worth of rents by the capitalization rate. While using this method, an investor contemplates the amount of income produced and other attributes to establish how much the property could sell for in the present market circumstances.',
                    ],
                  },
                  {
                    title: 'Discounted Cash Flow (DCF) Method',
                    paragraphs: [
                      'The DCF (discounted cash flow) analysis aids in establishing the worth of an investment with respect to its future cash streams. The current value of presumed future cash streams is attained by utilizing a projected discount rate. If the discounted cash flow is greater than the present cost of the investment, the chance can possibly result in beneficial returns and may be worth the wait.',
                      'Businesses generally utilize the WACC (weighted average cost of capital) for the discounted rate since it accounts for the degree of profits expected by the stakeholders. The dependence on the determination of future cash streams proves to be a disadvantage as it can prove to be inaccurate. This method can help those investors who are contemplating whether to buy a company or acquire securities. The DCF analysis method also aids business proprietors and administrators in shaping capital budgeting or making expenditure decisions.',
                    ],
                  },
                  {
                    title: 'Book Value Method under Business Valuation Services',
                    paragraphs: [
                      'A business\'s book value is the summation of all the line attributes in the stakeholder\'s equity segment of a company\'s statement of financial position or a balance sheet. Typically, the book value is different than a business\'s market worth. The BVPS (Book value per share) and the P/B ratio (Price-to-book ratio) are used in fundamental analysis.',
                    ],
                  },
                ].map((method, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-[16px] text-[#1f2937] mb-3">{method.title}</h3>
                    <div className="space-y-4">
                      {method.paragraphs.map((p, j) => (
                        <p key={j} className="text-[15px] text-[#4b5563] leading-[1.75] font-medium">{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sticky Sidebar */}
          <div className="w-full lg:w-[350px] shrink-0 lg:sticky lg:top-24">
            <div className="bg-white rounded-[10px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.08)] p-6 md:p-8 border border-gray-100">
              <h3 className="text-[18px] font-bold text-center text-[#1f2937] mb-6 tracking-wide">
                Get Free Consultation
              </h3>
              <form className="space-y-[15px]" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#22c55e] text-[14px] placeholder:text-gray-500 bg-white transition" value={sidebarForm.name} onChange={e => setSidebarForm({ ...sidebarForm, name: e.target.value })} />
                <input type="email" placeholder="Email Address" className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#22c55e] text-[14px] placeholder:text-gray-500 bg-white transition" value={sidebarForm.email} onChange={e => setSidebarForm({ ...sidebarForm, email: e.target.value })} />
                <div className="flex h-[46px] border border-gray-200 rounded-[4px] bg-white focus-within:border-[#22c55e] transition overflow-hidden">
                  <div className="bg-[#f8fafc] px-3 flex items-center justify-center gap-2 border-r border-gray-200 shrink-0 text-[14px] text-gray-700 w-[90px]">
                    <img src="https://flagcdn.com/w20/in.png" alt="India flag" className="w-[18px] h-[12px] object-cover rounded-sm" />
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

export default BusinessValuation;