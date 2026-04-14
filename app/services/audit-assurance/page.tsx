"use client";

import { useState } from 'react';
import { Handshake, Users, Building2, Star } from 'lucide-react';

const AuditAssurance = () => {
  const [heroForm, setHeroForm] = useState({ name: '', email: '', mobile: '' });
  const [sidebarForm, setSidebarForm] = useState({ name: '', email: '', mobile: '' });

  const differences = [
    "Auditing is the process of presenting an organization's financial statements by performing the examination of all the accounting information presented. One of the auditing's primary responsibilities is to make sure that the financial reports are maintained accurately, presented relatively, and prepared deliberately.",
    "Assurance is a compilation of processes of analyzing and assessing the process, operations, procedures, etc. Assurance also assesses accounting information and financial records. The primary concern of assurance is to check the accuracy of the accounting information and its financial records. By way of assurance, the stakeholders are provided regular updates on financial reports and ensure that there are no red flags, irregularities, and false representation.",
    "Auditing is needed for all the financial practices regulation, such as auditing the individual's financial record for taxation. Auditing also controls the fraudulent business activities or improper utilization of the funds or misrepresentation of the financial statements, embezzlement, etc.",
    "The main motive of assurance is not the correction of issues specified in the accounting records but to measure the appropriateness according to the accounting standards, principles and follow its compliance. Moreover, assurance applies to other aspects, such as to assess the procedures followed in operations. In this type of case, the processes and operations are strictly observed, and assurance will be provided on the basis of a specified procedure to obtain maximum results."
  ];

  const principles = [
    { title: "Integrity, Objectivity, and Independence", text: "According to this principle, the auditor must be straight forward, fair, honest, sincere, and transparent regarding his performance with regard to professional duties." },
    { title: "Confidentiality", text: "As per this principle, the auditor must not disclose any information gained by him during the course of audit work to any individual." },
    { title: "Skills and Competence", text: "As per this principle, the audit work must be performed. The auditor must prepare the audit report with due professional care by persons who have adequate experience, training, and competence in auditing." },
    { title: "Work Performed by Others", text: "This principle indicates the events when the auditor delegates his work to third-parties. That individual will still continue to be responsible for implementing and expressing his opinion on financial statements." },
    { title: "Documentation", text: "According to this principle, all the Documents collected during the Audit must be Documented appropriately as a collection of evidence." },
    { title: "Planning", text: "This principle suggests that the auditor should plan his work accordingly to conduct an effective audit in an efficient and timely manner." },
    { title: "Audit Evidence", text: "As per this principle, the auditor must obtain sufficient audit evidence to draw reasonable conclusions." },
    { title: "Accounting System and Internal Control", text: "The auditor with regards to this principle must assure himself that the accounting system and internal control are adequate." },
    { title: "Audit Conclusion and Reporting", text: "As per this principle, the auditor should review and assess the conclusions that are drawn from the audit evidence obtained." }
  ];

  const processSteps = [
    { num: "01", text: "Leadership responsibilities for quality within the firm." },
    { num: "02", text: "Ethical requirements." },
    { num: "03", text: "Acceptance and continuance of client relationships and specific engagements." },
    { num: "04", text: "Human resources." },
    { num: "05", text: "Engagement performance." },
    { num: "06", text: "Monitoring." }
  ];

  return (
    <div className="font-sans text-[#333] bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#1a73e8] py-16 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Subtle diagonal stripes background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 11px)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a73e8] via-transparent to-transparent opacity-80 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Content */}
          <div className="flex-1 max-w-[750px]">
            <h1 className="text-[38px] md:text-[46px] leading-[1.2] font-bold text-white mb-5 tracking-tight">
              Audit and Assurance
            </h1>
            
            <p className="text-[16px] text-blue-50 mb-10 leading-[1.7] pr-4 max-w-[85%]">
              Ensure accuracy, transparency, and trust with Perfect Advice's Audit and Assurance services. Trusted by leading businesses, our experts deliver thorough, compliant audits that stand up to scrutiny. Strengthen stakeholder confidence. Partner with Perfect Advice today.
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
                      <strong className="font-bold">4.8/5</strong> | 22376+ Global Rating by Happy Customers
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
                      <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1L4 4L7 1" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
                         <div className="absolute top-0 left-0 overflow-hidden w-[50%]">
                            <Star size={11} className="fill-[#fbbf24]" strokeWidth={0} />
                         </div>
                      </div>
                    </div>
                    <span className="text-[11px] text-gray-500 font-medium">
                      Rated at <strong className="font-bold text-gray-700">4.8/5</strong> 22376+ Happy Reviews
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
               
               {/* Intro text */}
               <div>
                  <h2 className="text-[26px] md:text-[28px] font-bold text-[#1f2937] mb-5 tracking-tight">Audit and Assurance Services</h2>
                  <div className="text-[15.5px] text-[#4b5563] space-y-5 leading-[1.7] font-medium">
                     <p>
                        An audit is a systematic review and assessment of all the information or Documents. There are different Audit types, but in context to professional services, an audit is generally considered financial. The primary intention of Audit is to provide reasonable assurance, but not absolute assurance that the <a href="#" className="text-[#1a73e8] hover:underline">financial statements</a> give an accurate and fair view with regard to the financial reporting framework.
                     </p>
                     <p>
                        Assurance is a professional service provided with the aim of improving the quality and transparency of information. It also reduces the chance of problems that occurs due to incorrect information. An audit is a type of assurance service. Audit and assurance services can be regulatory or compliance-based. They work to ensure that the company or an organization follows the guidelines, rules, policy and provides both internal and external confidence for financial statements.
                     </p>
                  </div>
               </div>

               {/* Differences Section */}
               <div>
                  <h3 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">What is the Difference Between Audit and Assurance?</h3>
                  <p className="text-[15.5px] font-bold text-[#1f2937] mb-6">The primary difference between Audit and assurance are explained below:</p>
                  
                  <ul className="space-y-5">
                    {differences.map((diff, i) => (
                       <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0 mt-[10px]"></div>
                          <p className="text-[15px] text-[#4b5563] leading-[1.7] font-medium">
                            <span dangerouslySetInnerHTML={{ __html: diff.replace('Auditing', '<span class="text-[#1a73e8] hover:underline cursor-pointer">Auditing</span>') }} />
                          </p>
                       </li>
                    ))}
                  </ul>
               </div>

               {/* Principles Section */}
               <div>
                  <h3 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">What are the Basic Principles Governing an Audit and Assurance?</h3>
                  <p className="text-[15.5px] font-bold text-[#1f2937] mb-8">The basic principles governing an audit and assurance are as follows:</p>
                  
                  <div className="space-y-7">
                    {principles.map((principle, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-2 mb-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                           <h4 className="font-bold text-[#1f2937] text-[16px]">{principle.title}</h4>
                        </div>
                        <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium">{principle.text}</p>
                      </div>
                    ))}
                  </div>
               </div>

               {/* Standard Setting Process Section (Infographic) */}
               <div>
                  <h3 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">What is the Standard Setting Process of Audit and Assurance?</h3>
                  <p className="text-[15.5px] text-[#4b5563] leading-[1.7] font-medium mb-12">
                     The organization must establish a system of quality control designed to provide it with reasonable assurance that the business and its employees comply with professional standards, regulatory requirements, and legal requirements. The reports issued by the company or its engagement partner must be appropriate as per the circumstances.
                  </p>
                  
                  {/* Infographic Container */}
                  <div className="flex flex-col items-center max-w-[500px] mt-8 mb-8 pb-4">
                    {processSteps.map((step, i) => {
                      const isEven = i % 2 === 0;

                      return (
                        <div key={i} className="flex relative w-full h-[70px] mb-8 justify-center items-center">
                           
                           {/* Decorative zig-zag arrows connecting the rows */}
                           {i < 5 && (
                             <div className={`absolute top-[45px] w-[50px] h-[55px] z-0 hidden sm:block ${isEven ? 'right-[90px]' : 'left-[90px]'}`}>
                                <svg viewBox="0 0 50 60" fill="none" className={`w-full h-full text-[#38bdf8] drop-shadow-sm ${!isEven ? 'scale-x-[-1]' : ''}`}>
                                  {/* Beautiful curved arrow path mimicking the image */}
                                  <path d="M 20,0 C 20,25 -5,30 -5,55" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                                  <polygon points="-12,45 2,45 -5,55" fill="currentColor" />
                                </svg>
                             </div>
                           )}

                           {isEven ? (
                             // Layout for 01, 03, 05 (Left Text, Right Hex)
                             <div className="flex items-center drop-shadow-md z-10">
                               <div className="bg-gradient-to-r from-blue-50 to-blue-200 py-3 pr-10 pl-6 text-center text-[13px] font-bold text-[#1e293b] w-[230px] h-[70px] flex items-center justify-center relative z-10 -mr-6"
                                    style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 8% 50%)' }}>
                                  {step.text}
                               </div>
                               <div className="w-[70px] h-[70px] bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] text-white flex items-center justify-center text-[24px] font-bold relative z-20 shadow-[-4px_0_10px_rgba(0,0,0,0.1)]"
                                    style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                                  {step.num}
                               </div>
                             </div>
                           ) : (
                             // Layout for 02, 04, 06 (Left Hex, Right Text)
                             <div className="flex items-center drop-shadow-md z-10">
                               <div className="w-[70px] h-[70px] bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] text-white flex items-center justify-center text-[24px] font-bold relative z-20 shadow-[4px_0_10px_rgba(0,0,0,0.1)]"
                                    style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                                  {step.num}
                               </div>
                               <div className="bg-gradient-to-l from-blue-50 to-blue-200 py-3 pl-10 pr-6 text-center text-[13px] font-bold text-[#1e293b] w-[230px] h-[70px] flex items-center justify-center relative z-10 -ml-6"
                                    style={{ clipPath: 'polygon(15% 0%, 100% 0%, 92% 50%, 100% 100%, 15% 100%, 0% 50%)' }}>
                                  {step.text}
                               </div>
                             </div>
                           )}

                        </div>
                      )
                    })}
                  </div>

               </div>

               {/* Detailed Process Steps */}
               <div className="space-y-12">
                  <div>
                    <h4 className="font-bold text-[#1f2937] text-[18px] mb-4">Leadership Responsibilities for Quality</h4>
                    <div className="text-[15px] text-[#4b5563] space-y-4 leading-[1.7] font-medium">
                      <p>The policies and procedures in an organization must be designed to promote an internal culture quality that is essential in performing engagements. If appropriate, the organization's highest authority must assume ultimate responsibility for system quality control of Audit and assurance.</p>
                      <p>Any individual who is assigned the responsibility for a quality control system must have sufficient and appropriate experience and adequate authority.</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1f2937] text-[18px] mb-4">Ethical Requirements</h4>
                    <div className="text-[15px] text-[#4b5563] space-y-4 leading-[1.7] font-medium">
                      <p>The firm must set a proper policy and procedure for Audit and assurance, which must be complied by all concerned persons with relevant ethical requirements.</p>
                      <p>The Policies and procedures must focus on the fundamental principles, For example.</p>
                      <ul className="space-y-2 list-none ml-1">
                        {["The leadership of the organization.", "Education and training.", "Monitoring and.", "A process for dealing with non-compliance."].map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1f2937] text-[18px] mb-4">Acceptance and Continuance of Client Relationships and Specific Engagements</h4>
                    <div className="text-[15px] text-[#4b5563] space-y-4 leading-[1.7] font-medium">
                      <p>For the purpose of audit and assurance the policies and procedures for the acceptance and continuance of client relationships under the specific engagements are designed to provide it with reasonable assurance to undertake and continue the commitments in the following circumstances:</p>
                      <ul className="space-y-2 list-none ml-1">
                        {["Has considered the integrity of the customer.", "It is capable and also has time and resources to do so.", "Must comply with all the ethical requirements and it also needs to Document how the issues regarding the ethical requirements were resolved."].map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1f2937] text-[18px] mb-4">Human Resources</h4>
                    <p className="text-[15px] text-[#4b5563] leading-[1.7] font-medium">The policies here for the purpose of Audit and assurance are designed to provide assurance with regard to sufficient personnel with the capabilities and competence.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1f2937] text-[18px] mb-4">Engagement Performance</h4>
                    <p className="text-[15px] text-[#4b5563] leading-[1.7] font-medium">Audit and assurance for the purpose of engagement performance are designed to assure that the engagements are performed according to the specified professional standards and regulatory legal requirements.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1f2937] text-[18px] mb-4">Monitoring</h4>
                    <div className="text-[15px] text-[#4b5563] space-y-4 leading-[1.7] font-medium">
                      <p>The policies and procedures for the purpose of monitoring include an ongoing consideration and evaluation of the firm's system of quality control. It includes a periodic inspection of a selection of completed engagements.</p>
                      <p>Assess the impact of deficiencies noted because of the monitoring process and must determine</p>
                      <ul className="space-y-2 list-none ml-1">
                        {["Instances that do not really show that arrangement of quality control is inadequate to furnish it with the sensible assurance that it consents to professional standards and regulatory and legal requirements.", "Systemic, tedious or other critical deficiencies that require prompt corrective action."].map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p>The firm ought to convey to pertinent commitment accomplices, and other fitting faculty lacks noted because of the observing procedure and suggestions for suitable healing activity.</p>
                      <p>The company's assessment of each kind of lack should bring about suggestions for at least one of the accompanying:</p>
                      <ul className="space-y-2 list-none ml-1">
                        {[
                          "Taking appropriate remedial action according to an individual commitment or workforce;",
                          "The correspondence of the discoveries to those answerable for preparing and expertly turn of events;",
                          "Changes to the quality control arrangements and techniques; and",
                          "Disciplinary activity against the individuals who neglect to agree to the firm's approaches and methods, particularly the individuals who do so over and again."
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p>The firm ought to figure out what further activity is fitting to conform to significant expert gauges and administrative and lawful necessities, including acquiring legitimate exhortation.</p>
                      <p>Every year, the firm ought to convey the consequences of checking its quality control framework to suitable people inside the firm, including the association's CEO or, if proper, it's overseeing partner(s) empower them to make instant and fitting move vital as per their characterized jobs and obligations. Data imparted ought to incorporate the accompanying:</p>
                      <ul className="space-y-2 list-none ml-1">
                        {["A depiction of the checking techniques performed.", "The conclusions are drawn from the checking systems.", "Where applicable, a portrayal of foundational, tedious or other critical lacks and the activities taken to determine or change those."].map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
               </div>

               {/* ICAI Standards Table */}
               <div>
                  <h3 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">What are the Various Audit and Assurance Standards Issued by ICAI?</h3>
                  <p className="text-[15.5px] text-[#4b5563] leading-[1.7] font-medium mb-8">The audit and assurance standards issued by ICAI are explained in the table below:</p>
                  
                  <div className="w-full border border-gray-200 rounded-[4px] overflow-hidden bg-white shadow-sm">
                    <table className="w-full text-left border-collapse">
                       <thead>
                          <tr className="bg-[#1a73e8]">
                             <th className="py-8 px-6 font-bold text-white text-[16px] w-[35%] align-top border-r border-white/20">Audit and Assurance Standards</th>
                             <th className="py-8 px-10 font-bold text-white text-[16px] w-[65%] align-top">Title</th>
                          </tr>
                       </thead>
                       <tbody className="text-[15px] text-[#374151]">
                          {[
                            { id: "AAS 1", title: "Basic principles Governing Audit" },
                            { id: "AAS 2", title: "Objective and Scope of Financial Audit" },
                            { id: "AAS 3", title: "Documentation" },
                            { id: "AAS 4", title: "Fraud and Error" },
                            { id: "AAS 5", title: "Audit Evidence" },
                            { id: "AAS 6", title: "Risk Assessment and Internal Control" },
                            { id: "AAS 7", title: "Relying upon work of an internal auditor" },
                            { id: "AAS 8", title: "Audit Planning" },
                            { id: "AAS 9", title: "Using the work of an expert" },
                            { id: "AAS 10", title: "Using the work of another auditor" },
                            { id: "AAS 11", title: "Representation by Management" },
                            { id: "AAS 12", title: "Responsibility by Joint Auditors" }
                          ].map((std, i) => (
                            <tr key={i} className={`border-b border-gray-200 ${i % 2 !== 0 ? 'bg-[#eef5ff]' : 'bg-white'}`}>
                               <td className="py-6 px-6 font-medium text-[#4b5563] align-top bg-transparent">
                                  {std.id}
                               </td>
                               <td className="py-6 px-10 align-top border-l border-gray-100 bg-transparent text-[#111827] font-medium">
                                  {std.title}
                               </td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                  </div>
               </div>
               
            </div>

            {/* Right Sticky Sidebar (Sticky Form) */}
            <div className="w-full lg:w-[350px] shrink-0 lg:sticky lg:top-24">
               <div className="bg-white rounded-[10px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.08)] p-6 md:p-8 border border-gray-100">
                  <h3 className="text-[18px] font-bold text-center text-[#1f2937] mb-6 tracking-wide relative z-10">
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
                        <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1L4 4L7 1" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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

export default AuditAssurance;