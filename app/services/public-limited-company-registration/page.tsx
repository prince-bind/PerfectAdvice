"use client";

import { useState } from 'react';
import { Handshake, Users, Building2, Star, CheckCircle2, ChevronDown, ChevronRight, FileText, FileCheck, Headphones } from 'lucide-react';

const PublicLimitedCompanyRegistration = () => {
  const [heroForm, setHeroForm] = useState({ name: '', email: '', mobile: '' });
  const [sidebarForm, setSidebarForm] = useState({ name: '', email: '', mobile: '' });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toc = [
    "Law", "Why is it Beneficial?", "Eligibility Criteria", "Process", "Is it beneficial?", "Documents required", "Perfect Advice Advantage", "How to reach Perfect Advice?", "Frequently Asked Questions"
  ];

  const benefits = [
    {
      title: "Shares can be transferred easily",
      desc: "Shares are legal Documents which can be transferred as per the Indian Contract Act, 1872. Under the Companies Act, 2013, these instruments can be transferred easily with minimum compliance requirements. Apart from this, a listing of shares in a stock exchange, make it easier for transfer of shares from one party to another."
    },
    {
      title: "Increased Borrowing Capacity",
      desc: "In the eyes of the law, public companies are reputed when it comes to borrowing money from banks and other financial institutions. An added advantage of being a public company would give the company recognition."
    },
    {
      title: "Separate Legal Entity",
      desc: "The principle of separate legal entity is enjoyed by the directors and shareholders (members) of a public limited company. This means that the liability of the members and directors is only limited to a specific amount. Creditors cannot approach the members in case of any debts owed by the public company."
    },
    {
      title: "Shares can be listed in the Stock Exchange",
      desc: "Shares of a public company can be listed in a stock exchange. However, compliance has to be followed by the public company in listing its shares in a stock exchange. Through this process, the public company can raise secondary finance. Hence an applicant must consider the above when going for public limited company registration."
    }
  ];

  const eligibilityCriteria = [
    { num: "01", title: "Minimum Amount of Shareholders" },
    { num: "02", title: "Minimum Amount of Directors" },
    { num: "03", title: "Digital Signature Certificate one Director" },
    { num: "04", title: "DIN for all Directors" },
    { num: "05", title: "Company to Pursue Activities in Objects Clause" },
    { num: "06", title: "Submission of Documents" },
  ];

  const differences = [
    { diff: "Incorporation", private: "Online and Offline Mode", public: "Online and Offline Mode" },
    { diff: "Directors", private: "Two directors have required for a setting up a private limited company.", public: "Three directors are required for the public limited company registration process." },
    { diff: "Independent Directors", private: "There is no requirement to have Independent directors for a private limited company.", public: "For a public limited company, independent directors must be recruited by the Board." },
    { diff: "Members or Shareholders", private: "Three Members are required for a private limited company", public: "A minimum of seven members is required public limited company registration" },
    { diff: "Share Capital", private: "There is no minimum share capital requirement for a private limited company.", public: "Previously there was a requirement for the company to have minimum share capital. However, this requirement has been removed." },
    { diff: "IPO", private: "A private company cannot go for an initial public offering.", public: "A public company can go for an initial public offering. However, compliances have to be met in accordance with the requirements of the SEBI and listing regulations." },
    { diff: "Foreign Direct Investment", private: "Foreign Direct Investment is allowed for a private limited company", public: "This facility is also permitted for a public limited company. However, there are specific requirements which have to be adhered for securing foreign direct investment." },
  ];

  const documents = [
    "Identity Proof- Such as PAN Card, Aadhaar Card, Driving License and Voter ID",
    "Utility Bills- Electricity, Water and Rent",
    "Registered Office Address- Any utility bill can be utilised for this purpose",
    "Address of the Shareholders",
    "Digital Signature Certificate",
    "Directors Identification Number",
    "MOA and AOA"
  ];

  const advantage = [
    "Experts at Perfect Advice have conducted different forms of registration activities with the primary objective of adding value to your business.",
    "Our team of professionals comprising of Chartered Accountants, Company Secretaries, Lawyers, and Financial Executives.",
    "We have experience in registering different forms of entities.",
    "Constant monitoring and 24*7 customer service."
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
      q: "What is a public limited company? How is it different from a private limited company?",
      a: "As per the Companies Act, 2013 a public limited company is an entity that offers shares to the public. Public limited companies are different from private limited companies. Private limited companies do not offer shares to public."
    },
    {
      q: "What are the requirements for public limited company registration?",
      a: "The requirements for public limited company registration are as follows:\n\n• Minimum amount of Shareholders and Directors\n• Submitting respective Documents in companies' registry and MCA."
    },
    {
      q: "How many independent directors have to be present in a public limited company?",
      a: "Under the companies act, 2013 a public company has to have one independent director. Independent directors are determined based on their actions carried out for the welfare of the organisation. Their integrity is determined based on independent decision making functions which are carried out on day to day basis."
    },
    {
      q: "Is foreign direct investment allowed for a public limited company?",
      a: "Up to certain extent FDI is allowed for a public limited company."
    },
    {
      q: "Are foreigners and Non-resident Indians allowed to be recruited as directors for a public limited company?",
      a: "Yes foreigners and non-resident Indians are allowed to be recruited as directors for a public limited company. However, any entrepreneur going for public limited company registration has to secure requisite Paper works such as foreign passports and visas. These Documents have to be submitted to the registrar of companies."
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
              Public Limited Company Registration
            </h1>
            
            <p className="text-[16px] text-blue-50 mb-10 leading-[1.7] pr-4 max-w-[95%]">
              Public Limited Company is an entity which has to be differentiated from a private limited company. The requirement for having a specific amount of shareholders and directors for a public limit company is mandatory. The minimum amount of shareholders and directors of a public limited company is seven and three, respectively.
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
                  <h2 className="text-[24px] md:text-[26px] font-bold text-[#1f2937] mb-5 tracking-tight">Overview of Public Limited Company Registration</h2>
                  <div className="text-[15.5px] text-[#4b5563] space-y-5 leading-[1.7] font-medium">
                     <p>
                        A public limited company is an entity that has its shares listed in a public stock exchange. An individual going for public limited company registration must differentiate the meaning of public limited company from a private limited company. Shares are offered in the stock exchange to raise money. An offering of shares in a stock exchange for the first time by a company is known as a primary offering. Public companies can go for secondary offerings based on the requirements. However, these offerings can only be given to a particular class of shareholders known as preference shareholders.
                     </p>
                     <p>
                        Under section 2(71) of the Companies Act, 2013, a public company is understood as an entity which is not classified as a private limited company. Apart from this, the minimum paid-up share capital of a public company is prescribed as per the requirement of the companies act. A public company can also be understood as an entity which is not a subsidiary of a private limited company.
                     </p>
                     <p>
                        Usually, these forms of business structures are considered by companies that have a large form of infrastructural plans. Some examples of public companies would include Biotechnology Companies and Information Technology Companies. These companies usually raise capital through primary and secondary issues, apart from securing regular profits.
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

               {/* Law Related */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-5 tracking-tight">Law related to Public Limited Company Registration in India</h2>
                  <div className="text-[15.5px] text-[#4b5563] space-y-5 leading-[1.7] font-medium">
                     <p>Like private limited companies, public limited companies are regulated by the Companies Act, 2013 and previous company law 1956.</p>
                     <p>The meaning of a public company is present under the Companies Act, 2013. As per section 2(71), a public company is an entity which does not have the meaning of a private company. Apart from this, the share capital of the public company can be changed. A public company does not need to have a specific amount of share capital.</p>
                     <p>The structure of the public company allows it to raise some form of finance through primary and secondary issues. When going for a primary issue, a prospectus is offered to the public. Under section 2(70) of the Companies Act 2013, a prospectus can be understood as a Document which includes a notice or an invitation to the public to subscribe to the shares of the company.</p>
                     <p>Hence when the company issues a prospectus to the public, it is an invitation to the public to subscribe to the shares of the company.</p>
                     <p>Minimum three directors and seven shareholders or members are required for a public limited company.</p>
                     <p>As per the Companies (Amendment) Act, 2015, there is no requirement for the company to have a minimum amount of share capital.</p>
                     <p>When it comes to registration of shares in a public stock exchange, then compliance has to be maintained by the public company. For instance, when listing shares in the stock exchange compliances has to be maintained as per the rules of the listing agreement.</p>
                     <p>The public company must also comply with the requirements of the SEBI (LODR) Regulations, 2015.</p>
                     <p>A subsidiary of a public company is also treated as a public limited company. This would be considered even if the company is a private company.</p>
                  </div>
               </div>

               {/* Benefits */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Why is Public Limited Company Registration Beneficial?</h2>
                  <p className="text-[15.5px] font-medium text-[#4b5563] mb-8">Public Limited Company Registration is beneficial for the following reasons:</p>
                  
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
                 <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Eligibility Criteria for Public Limited Company Registration</h2>
                 <p className="text-[15.5px] font-medium text-[#4b5563] mb-10">The following criteria are required by the entity to be eligible to be registered as a public company:</p>

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
                         Eligibility Criteria for Public Limited Company Registration
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
                         <h4 className="font-bold text-[#1f2937] text-[16px]">Minimum Amount of Shareholders</h4>
                      </div>
                      <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium">
                        Like a private limited company, a public limited company must have a minimum amount of shareholders. As per the requirements of the Companies Act, 2013 the minimum amount of shareholders for a public limited company is seven. There could be penalties imposed if compliance is not met with the requirement of the number of shareholders of the company.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                         <h4 className="font-bold text-[#1f2937] text-[16px]">Minimum Amount of Directors</h4>
                      </div>
                      <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium">
                        Every Company is required to have a minimum number of directors. Be it a private company or a public company, it is a statutory requirement for the company to have a minimum amount of directors. Under Section 149 to 172 deals with the requirement for the appointment of directors under the Companies Act, 2013. Hence a public limited company must have a minimum of three directors on the board. Apart from this, there is a requirement for appointment of independent directors under the Companies Act, 2013. This requirement is present under section 149(4) of the Companies Act, 2013. Hence a public company has to have directors who are classified as independent directors and executive directors.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                         <h4 className="font-bold text-[#1f2937] text-[16px]">Digital Signature Certificate of the Director</h4>
                      </div>
                      <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium mb-3">
                        This is one of the important requirement for forming a public limited company. An individual or entrepreneur going for public limited company registration must carry out the formalities and apply for the digital signature certificate. This requirement is needed for at least one director in the public company.
                      </p>
                      <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium">
                        A digital signature certificate will allow the applicant to sign Documents in electronic form. Apart from this, Documents are signed through this method can be delivered electronically. The requirement of a DSC is mandatory as per the law.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                         <h4 className="font-bold text-[#1f2937] text-[16px]">DIN for all Directors</h4>
                      </div>
                      <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium">
                        DIN is an abbreviation for a director identification number. Under section 153 and 154 of the Companies Act, 2013, this number is allocated to a director. A director identification number (DIN) is an eight-digit number allocated to the director when the company recruits them. The application for the DIN has to be filed in accordance with the provisions of FORM- DIR 3. However, the above requirement is simplified, and directors would receive the DIN number through filing SPICe form with the MCA. Through this method, it is become straightforward to secure the DIN.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                         <h4 className="font-bold text-[#1f2937] text-[16px]">Company to Pursue Activities in Objects Clause</h4>
                      </div>
                      <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium">
                        The memorandum of association of the company contains different clauses. Some of the clauses included are the name clause and objects clause. The activities of the organisation must be under the objects clause filed with the registrar of companies. However, there are specific instances where the activities carried out by an entity can be incidental to the main objects. Hence, the company must ensure to carry out activities which are present in the objects clause of the organisation.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                         <h4 className="font-bold text-[#1f2937] text-[16px]">Submission of Documents</h4>
                      </div>
                      <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium">
                        Once all the formalities of the company are fulfilled, all the Documents must be submitted by the company. These Documents include the incorporation Documents, shareholders certifications, Articles of Association and Memorandum of Association. Once these Documents are submitted to the MCA and ROC, the public limited company registration process is almost complete.
                      </p>
                    </div>
                 </div>
               </div>

               {/* Process */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Process for Public Limited Company Registration</h2>
                  <p className="text-[15.5px] font-medium text-[#4b5563] mb-6">
                    The process for public limited company registration is similar to private company registration. The following steps are required to be followed for public limited company registration:
                  </p>
                  <ul className="space-y-4">
                     {["Obtain DSC and DIN for Directors", "Name Approval through RUN or SPICe+ Part A", "Drafting of Memorandum and Articles of Association", "Filing of incorporation forms (SPICe+ Part B) with MCA", "Issuance of Certificate of Incorporation with PAN and TAN"].map((step, idx) => (
                       <li key={idx} className="flex items-start gap-3">
                         <div className="w-6 h-6 rounded-full bg-[#1a73e8]/10 text-[#1a73e8] flex items-center justify-center font-bold text-[12px] shrink-0 mt-0.5">{idx + 1}</div>
                         <p className="text-[15.5px] text-[#4b5563] leading-[1.6] font-medium">{step}</p>
                       </li>
                     ))}
                  </ul>
               </div>

               {/* Differences Table */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Is it beneficial to go for public limited company registration or private limited company registration?</h2>
                  <p className="text-[15.5px] font-medium text-[#4b5563] mb-8">When critically analysing the differences between both the entities, the following can be understood:</p>
                  
                  <div className="w-full border border-gray-200 rounded-[4px] overflow-x-auto bg-white shadow-sm mb-6">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                       <thead>
                          <tr className="bg-[#1a73e8]">
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[20%] border-r border-white/20">Difference</th>
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[40%] border-r border-white/20">Private Limited Company</th>
                             <th className="py-5 px-6 font-bold text-white text-[15px] w-[40%]">Public Limited Company Registration</th>
                          </tr>
                       </thead>
                       <tbody className="text-[14.5px] text-[#374151]">
                          {differences.map((row, i) => (
                            <tr key={i} className={`border-b border-gray-200 ${i % 2 !== 0 ? 'bg-[#f4f8ff]' : 'bg-white'}`}>
                               <td className="py-5 px-6 font-bold text-[#1f2937] align-top bg-transparent">
                                  {row.diff}
                               </td>
                               <td className="py-5 px-6 align-top border-l border-gray-100 bg-transparent text-[#4b5563] font-medium">
                                  {row.private}
                               </td>
                               <td className="py-5 px-6 align-top border-l border-gray-100 bg-transparent text-[#4b5563] font-medium">
                                  {row.public}
                               </td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                  </div>

                  <p className="text-[15px] text-[#4b5563] leading-[1.7] font-medium">
                    From the above differentiation, it is clear that both private limited company and public limited companies have their benefits and disadvantages. Hence, depending on the requirement of the entrepreneur establishing such forms of business entities should be analysed in depth.
                  </p>
               </div>

               {/* Documents */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-5 tracking-tight">Documents required for incorporation of a public limited company</h2>
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
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-5 tracking-tight">Perfect Advice Advantage- Public Limited Company Registration</h2>
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

export default PublicLimitedCompanyRegistration;
