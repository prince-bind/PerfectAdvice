import Link from "next/link";

const ESGSustainability = () => {

  const services = [
    'Sustainability and ESG Solutions',
    'ESG Assurance in Audit',
    'ESG Reporting',
    'Sustainable Supply Chain Management',
    'Sustainable Finance',
    'ESG Due Diligence',
    'BRSR Reporting',
    'Sustainability And Environmental Auditing',
  ];

  const esgCriteria = [
    {
      icon: (
        <div className="w-11 h-11 rounded-xl bg-[#e8f0fd] flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="#4f46e5" strokeWidth="1.5"/><path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" fill="#4f46e5"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
      ),
      title: 'Environmental criteria',
      text: "These considerations range from a company's carbon footprint to its handling of garbage to its usage of renewable energy. Companies wanting to lessen their environmental impact and build a sustainable future must consider these environmental criteria.",
    },
    {
      icon: (
        <div className="w-11 h-11 rounded-xl bg-[#fef9e7] flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#d97706" strokeWidth="1.5"/><path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
      ),
      title: 'Social criteria',
      text: 'Consider how a business affects employee diversity, inclusion, and human rights policies. Social criteria are crucial for businesses aiming to make a meaningful contribution to society and maintain their moral and ethical business practices.',
    },
    {
      icon: (
        <div className="w-11 h-11 rounded-xl bg-[#e6f9f0] flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#16a34a" strokeWidth="1.5"/><path d="M7 12l3 3 7-7" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      ),
      title: 'Governance Criteria',
      text: 'Board diversity, executive salary, and shareholder rights are all governance criteria. Governance standards are crucial for businesses aiming to conduct themselves properly and ethically, concentrating on openness and accountability.',
    },
  ];

  const regulatoryFrameworks = [
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#eef2ff] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3L2 9h20L12 3z" fill="#4f46e5" opacity="0.3"/><path d="M12 3L2 9h20L12 3z" stroke="#4f46e5" strokeWidth="1.5" strokeLinejoin="round"/><rect x="4" y="9" width="3" height="9" fill="#4f46e5" opacity="0.5"/><rect x="10.5" y="9" width="3" height="9" fill="#4f46e5" opacity="0.5"/><rect x="17" y="9" width="3" height="9" fill="#4f46e5" opacity="0.5"/><rect x="2" y="18" width="20" height="2" rx="1" fill="#4f46e5"/></svg>
        </div>
      ),
      title: 'Ministry of Corporate Affairs',
      text: 'In 2009, the Ministry of Corporate Affairs (MCA) released Voluntary Guidelines on Corporate Social Responsibility, introducing the idea of ESG reporting to India. The National Guidelines on Responsible Business Conduct (NGRBC) and Business Responsibility Reporting (BRR) were introduced. The adoption of sustainable practices and these guidelines for businesses promote the reporting of ESG performance.',
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#f3f4f6] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#374151" strokeWidth="1.5"/><path d="M8 8h8M8 12h8M8 16h5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
      ),
      title: 'The Companies Act 2013',
      text: 'The Indian Companies Act 2013 introduced one of the companies\' earliest ESG disclosure requirements. Under this Act, Indian companies must include details regarding energy conservation and annual financial statements in their reports. Further, the director of an Indian company has a statutory duty to act in good faith to promote the company\'s objectives for the benefit of its members and in the interests of the company, the shareholders, employees, the community, and the protection of the environment.',
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#e6f9f0] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#16a34a" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" fill="#16a34a" opacity="0.3"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
      ),
      title: 'Securities and Exchange Board of India (SEBI):',
      text: 'SEBI has introduced several guidelines related to ESG reporting in recent years. In 2021, SEBI introduced the Business Responsibility and Sustainability Reporting (BRSR) requirement for listed entities. The BRSR wants disclosures from listed entities on their performance against the nine principles given under the National Guidelines on Responsible Business Conduct. Each principle is divided into essential and leading indicators, which should be mandatorily reported. Reporting leading indicators is voluntary, but listed entities should also endeavour to report the indicators.',
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#fff7ed] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#d97706" strokeWidth="1.5"/><path d="M7 7V5a5 5 0 0110 0v2" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="13" r="2" fill="#d97706" opacity="0.5"/></svg>
        </div>
      ),
      title: 'Other Regulatory Bodies:',
      text: 'The Reserve Bank of India (RBI) and the Insurance Regulatory and Development Authority (IRDAI), in addition to MCA and SEBI, have also released recommendations for ESG reporting that are relevant to businesses operating in their respective sectors.',
    },
  ];

  const servicesOffered = [
    {
      num: '1.',
      title: 'ESG Materiality Evaluation',
      text: 'To determine the ESG aspects that are most important to a client\'s business, Perfect Advice does a materiality analysis. This aids clients in setting priorities and concentrating on the most critical ESG concerns that may affect their company.',
    },
    {
      num: '2.',
      title: 'Information Gathering and Analysis',
      text: 'Data collection and analysis for ESG variables, such as measures for social and environmental performance and governance-related aspects, are assisted by Perfect Advice for clients. This entails creating standards for data gathering, assessing the data, and spotting significant trends and insights.',
    },
    {
      num: '3.',
      title: 'Stakeholder Engagement',
      text: 'Perfect Advice assists companies in interacting with their stakeholders, including customers, employees, investors, and communities, in better understanding their expectations and worries around ESG issues. Creating a plan for engaging stakeholders, conducting surveys and interviews, and fostering stakeholder dialogue are all part of this.',
    },
    {
      num: '4.',
      title: 'ESG Disclosure and Reporting',
      text: 'In addition to sustainability reports, annual reports, and other disclosures mandated by regulators, Perfect Advice assists customers with preparing their ESG reports and disclosures. This entails creating frameworks for ESG reporting, gathering and analysing data, creating reports, and ensuring regulatory compliance.',
    },
  ];

  return (
    <div className="font-sans text-[#333] bg-white">

      {/* 1. HERO SECTION */}
      <section className="relative bg-white py-20 px-6 md:px-16 lg:px-28 overflow-hidden border-b border-gray-100">
        {/* Dashed line decorations left */}
        <div className="hidden lg:block absolute left-[10%] top-[15%] border-l-2 border-dashed border-gray-200 h-[80%]"></div>
        {/* Dashed line decorations right */}
        <div className="hidden lg:block absolute right-[10%] top-[15%] border-l-2 border-dashed border-gray-200 h-[80%]"></div>

        {/* Floating icon cards - left side */}
        <div className="hidden lg:block absolute left-[6%] top-[12%]">
          <div className="w-14 h-14 bg-white shadow-lg rounded-xl flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 17l4-8 4 4 4-6 4 4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
        <div className="hidden lg:block absolute left-[5%] top-[40%]">
          <div className="w-16 h-16 bg-white shadow-lg rounded-xl flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-lg">E</div>
          </div>
        </div>
        <div className="hidden lg:block absolute left-[8%] top-[62%]">
          <div className="w-14 h-14 bg-white shadow-lg rounded-xl flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="12" r="5" fill="#ef4444" opacity="0.2"/><circle cx="16" cy="12" r="5" fill="#3b82f6" opacity="0.2"/></svg>
          </div>
        </div>
        <div className="hidden lg:block absolute left-[4%] top-[78%]">
          <div className="bg-white shadow-md rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="text-[#ef4444]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <div><div className="font-bold text-[14px] text-[#1f2937]">$1,200</div><div className="text-[11px] text-gray-400">Received</div></div>
          </div>
          <div className="bg-white shadow-md rounded-xl px-4 py-3 flex items-center gap-3 mt-3">
            <div className="text-[#f97316]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M7 7h10M7 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <div><div className="font-bold text-[14px] text-[#1f2937]">$590</div><div className="text-[11px] text-gray-400">Refunded</div></div>
          </div>
        </div>

        {/* Floating icon cards - right side */}
        <div className="hidden lg:block absolute right-[6%] top-[10%]">
          <div className="w-20 h-20 bg-white shadow-lg rounded-xl flex items-center justify-center">
            <svg width="52" height="52" viewBox="0 0 60 60" fill="none"><circle cx="20" cy="20" r="12" fill="#fca5a5"/><circle cx="40" cy="20" r="12" fill="#fca5a5" opacity="0.6"/><rect x="10" y="35" width="40" height="18" rx="6" fill="#4f46e5" opacity="0.2"/></svg>
          </div>
        </div>
        <div className="hidden lg:block absolute right-[5%] top-[45%]">
          <div className="w-16 h-16 bg-white shadow-lg rounded-xl flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 17l3-7 4 4 3-6 4 5" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
        <div className="hidden lg:block absolute right-[4%] top-[72%]">
          <div className="w-20 h-20 bg-white shadow-lg rounded-xl flex items-center justify-center">
            <svg width="50" height="50" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="22" r="12" fill="#fde68a"/><rect x="10" y="38" width="40" height="16" rx="5" fill="#4f46e5" opacity="0.2"/></svg>
          </div>
        </div>
        <div className="hidden lg:block absolute right-[12%] top-[82%]">
          <div className="bg-white shadow-md rounded-xl px-4 py-2 flex items-center gap-2">
            <div className="text-[#16a34a]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span className="font-semibold text-[13px] text-[#1f2937]">Content</span>
            <span className="text-[11px] text-gray-400 ml-1">Sent</span>
          </div>
        </div>

        {/* Hero Center Content */}
        <div className="relative z-10 max-w-[680px] mx-auto text-center py-8">
          <h1 className="text-[46px] md:text-[54px] font-bold text-[#111827] mb-6 leading-[1.15] tracking-tight">
            ESG Consulting
          </h1>
          <p className="text-[16px] text-[#6b7280] mb-10 leading-[1.75] max-w-[520px] mx-auto">
            At Perfect Advice, we understand the importance of environmental, social, and governance (ESG) aspects in today's business world. Our ESG services enable business practices in a way that enhances their long-term sustainability, reputation, and financial performance.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/services" className="bg-[#1e2d5a] hover:bg-[#162047] text-white font-semibold px-8 py-3.5 rounded-[6px] text-[15px] transition shadow-md">
              Go for Services
            </Link>
            <button className="bg-white hover:bg-gray-50 text-[#1f2937] font-semibold px-8 py-3.5 rounded-[6px] text-[15px] transition border border-gray-200 shadow-sm">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 2. SERVICES WE OFFER */}
      <section className="py-14 px-6 md:px-16 lg:px-28 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#111827] mb-8">Services We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <div key={i} className="flex items-center justify-between border border-gray-200 rounded-[8px] px-5 py-4 bg-white hover:shadow-md transition group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#eef2ff] flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h10" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                  <span className="text-[14.5px] font-medium text-[#1f2937]">{service}</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400 shrink-0 group-hover:text-[#4f46e5] transition"><path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENVIRONMENTAL, SOCIAL, AND GOVERNANCE */}
      <section className="py-14 px-6 md:px-16 lg:px-28 bg-[#f9fafb]">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#111827] mb-5">Environmental, Social, And Governance</h2>
          <p className="text-[15.5px] text-[#4b5563] leading-[1.75] mb-10 max-w-[900px]">
            ESG investment has grown in popularity in recent years due to investors' increased awareness of the financial risks of environmental and social issues and the potential for long-term outperformance of companies concerning ESG. Investors can identify companies that manage environmental and social risks and opportunities by incorporating ESG aspects into their investing decisions. Perfect Advice offers a tailor-made solution to understand business opportunities; investing in ESG, investors can use capital markets to assess businesses and be informed in their investment decisions.
          </p>
          <div className="space-y-10">
            {esgCriteria.map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="font-bold text-[18px] text-[#111827]">{item.title}</h3>
                </div>
                <p className="text-[15px] text-[#4b5563] leading-[1.75] max-w-[860px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REGULATORY FRAMEWORK */}
      <section className="py-14 px-6 md:px-16 lg:px-28 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#111827] mb-10">Regulatory Framework For ESG</h2>
          <div className="space-y-10">
            {regulatoryFrameworks.map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="font-bold text-[18px] text-[#111827]">{item.title}</h3>
                </div>
                <p className="text-[15px] text-[#4b5563] leading-[1.75] max-w-[900px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICE OFFERED BY PERFECT ADVICE */}
      <section className="py-14 px-6 md:px-16 lg:px-28 bg-[#f9fafb]">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#111827] mb-5">Service Offered By Perfect Advice</h2>
          <p className="text-[15.5px] text-[#4b5563] leading-[1.75] mb-10 max-w-[900px]">
            ESG reporting can help companies protect and create value for the business, people, society and the world, which can be done through the guidance of a recognised leader in ESG Reporting like Perfect Advice. Perfect Advice offers the following services in this regard:
          </p>
          <div className="space-y-10">
            {servicesOffered.map((item, i) => (
              <div key={i}>
                <h3 className="font-bold text-[18px] text-[#111827] mb-3">{item.num} {item.title}</h3>
                <p className="text-[15px] text-[#4b5563] leading-[1.75] max-w-[900px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ESGSustainability;