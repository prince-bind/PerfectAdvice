"use client";

import { useState } from 'react';
import { 
  CheckCircle, PlayCircle, ChevronRight, 
  Handshake, Users, Building2, 
  Star 
} from 'lucide-react';

const RecoveryOfShares = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  return (
    <div className="font-sans text-[#333] bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f9ff] py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <svg className="absolute w-full h-[150%] -top-[25%] -left-[10%] opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,0 100,100" fill="#0ea5e9" />
              <polygon points="0,100 50,0 100,100" fill="#38bdf8" />
           </svg>
           {/* Diagonal white strips overlapping to create the pattern */}
           <div className="absolute -top-[50%] -left-[20%] w-[150%] h-[200%] bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.8)_45%,rgba(255,255,255,0.8)_55%,transparent_55%)] bg-[length:100px_100px] opacity-20"></div>
        </div>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Content */}
          <div className="flex-1 max-w-[700px]">
            <h1 className="text-[38px] md:text-[46px] leading-[1.2] font-bold text-[#1f2937] mb-6 tracking-tight">
              Recovery of <span className="text-[#1a73e8]">Shares</span> from IEPF
            </h1>
            
            <p className="text-[17px] text-[#4b5563] mb-8 leading-[1.7] pr-4">
              IEPF shares recovery is made easy with us! Get expert consulting services for the recovery of shares from IEPF for a hassle-free financial revival.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-[22px] h-[22px] text-[#1a73e8] fill-[#1a73e8] text-white shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[15.5px] text-[#374151] font-medium leading-tight">Over 12 Billion Unclaimed Shares Pending with IEPF by March 2023, with Only 1% Reclaimed</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-[22px] h-[22px] text-[#1a73e8] fill-[#1a73e8] text-white shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[15.5px] text-[#374151] font-medium leading-tight">Our Expertise in Getting Claims Worth Rs 500 Crore Approved by IEPF</span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-6 mb-12">
               <button className="bg-[#1a73e8] hover:bg-blue-600 text-white font-semibold py-[13px] px-7 rounded-[4px] flex items-center justify-center gap-2 transition shadow-sm text-[15.5px]">
                 Schedule a call <ChevronRight size={18} strokeWidth={2.5}/>
               </button>
               <button className="flex items-center gap-2 text-[#374151] hover:text-[#1a73e8] transition font-medium text-[14.5px] underline decoration-gray-300 underline-offset-4 decoration-2">
                 <PlayCircle className="text-[#10b981] fill-[#10b981] text-white w-8 h-8" strokeWidth={1.5}/>
                 See How It Works in 1 min video
               </button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-3">
                <div className="bg-[#10b981] p-2 rounded text-white flex items-center justify-center w-[46px] h-[46px]">
                  <Handshake size={24} strokeWidth={1.5}/>
                </div>
                <div>
                  <div className="font-bold text-[16.5px] text-[#111827] tracking-wider mb-0.5">5000 +</div>
                  <div className="text-[13px] text-gray-500 font-medium tracking-wide">Happy Customers</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#10b981] p-2 rounded text-white flex items-center justify-center w-[46px] h-[46px]">
                  <div className="relative">
                     <Users size={22} strokeWidth={1.5}/>
                     <Star size={10} className="fill-white absolute -top-1 -right-1" strokeWidth={0}/>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-[16.5px] text-[#111827] tracking-wider mb-0.5">100 +</div>
                  <div className="text-[13px] text-gray-500 font-medium tracking-wide">CAs, CS & Lawyers</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#10b981] p-2 rounded text-white flex items-center justify-center w-[46px] h-[46px]">
                  <Building2 size={24} strokeWidth={1.5}/>
                </div>
                <div>
                  <div className="font-bold text-[16.5px] text-[#111827] tracking-wider mb-0.5">10 +</div>
                  <div className="text-[13px] text-gray-500 font-medium tracking-wide">Offices Globally</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="w-full lg:w-[440px] shrink-0">
             <div className="bg-white rounded-[10px] shadow-[0_15px_60px_-15px_rgba(0,0,0,0.1)] p-9 relative overflow-hidden ring-1 ring-gray-100">
                {/* Decorative top-left light blue triangle */}
                <div className="absolute top-0 left-0 opacity-100">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M0 0H60L0 60V0Z" fill="#eff6ff"/>
                    <path d="M15 20L25 30L40 15" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Decorative bottom right yellow triangle */}
                <div className="absolute -bottom-6 -right-6 opacity-40">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path d="M80 0V80H0L80 0Z" fill="#fef08a"/>
                  </svg>
                </div>

                <h3 className="text-[17px] font-bold text-center text-[#111827] mb-7 mt-3 tracking-wide relative z-10 w-full flex justify-center uppercase">
                  GET FREE CONSULTATION
                </h3>

                <form className="space-y-[18px] relative z-10 pb-2" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full h-[50px] px-4 border border-gray-100 border-b-gray-200 rounded-[2px] focus:outline-none focus:border-b-[#1a73e8] text-[14.5px] placeholder:text-gray-400 bg-white"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full h-[50px] px-4 border border-gray-100 border-b-gray-200 rounded-[2px] focus:outline-none focus:border-b-[#1a73e8] text-[14.5px] placeholder:text-gray-400 bg-white"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="flex h-[50px] border border-gray-100 border-b-gray-200 rounded-[2px] bg-white focus-within:border-b-[#1a73e8]">
                    <div className="bg-[#f8fafc] px-3 flex items-center justify-center gap-2 border-r border-gray-100 shrink-0 text-[14px] text-gray-700 cursor-pointer w-[90px]">
                      <img src="https://flagcdn.com/w20/in.png" alt="India flag" className="w-[18px] h-[12px] object-cover rounded-sm shadow-sm" />
                      <span className="font-medium">+91</span>
                      <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1L4 4L7 1" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Mobile Number" 
                      className="w-full h-full px-4 focus:outline-none text-[14.5px] placeholder:text-gray-400 bg-transparent"
                      value={formData.mobile}
                      onChange={e => setFormData({...formData, mobile: e.target.value})}
                    />
                  </div>

                  <button className="w-full bg-[#1a73e8] hover:bg-[#155fc4] text-white font-bold py-[14px] rounded-[4px] mt-4 transition text-[14.5px] tracking-wide shadow-sm">
                    TALK TO AN EXPERT
                  </button>

                  <div className="flex items-center justify-center gap-1.5 pt-3">
                    <div className="flex text-[#fbbf24] gap-0.5">
                      <Star size={12} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={12} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={12} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={12} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={12} className="fill-gray-300" strokeWidth={0} />
                    </div>
                    <span className="text-[11px] text-gray-500">
                      Rated at 4.8/5 22312+ Happy Reviews
                    </span>
                  </div>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW TABLE */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
           <h2 className="text-[26px] md:text-[30px] font-bold text-[#1f2937] mb-8 tracking-tight">Recovery Of Shares From IEPF– An Overview</h2>
           
           <div className="w-full border border-gray-200 rounded-[4px] overflow-hidden bg-white shadow-sm">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-[#f8fafc] border-b border-gray-200">
                       <th className="py-5 px-6 font-semibold text-[#1a73e8] text-[16px] w-[35%] align-top">Aspect</th>
                       <th className="py-5 px-6 font-semibold text-[#1a73e8] text-[16px] w-[65%] align-top border-l border-gray-200">Details</th>
                    </tr>
                 </thead>
                 <tbody className="text-[15px] text-[#374151]">
                    
                    {/* Row 1 */}
                    <tr className="border-b border-gray-200">
                       <td className="py-6 px-6 font-bold text-[#1f2937] align-top bg-white">
                          What is the full form of IEPF?
                       </td>
                       <td className="py-6 px-6 align-top border-l border-gray-200 bg-white">
                          Investor Education and Protection Fund
                       </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="border-b border-gray-200">
                       <td className="py-6 px-6 font-bold text-[#1f2937] align-top bg-white">
                          Brief Walkthrough Investment Unclaimed
                       </td>
                       <td className="py-6 px-6 align-top border-l border-gray-200 bg-white leading-[1.8]">
                          Let us look at the categories and their associated unrecovered/unclaimed values in brief:
                          <div className="mt-4 space-y-3">
                             <p><strong className="text-[#1f2937]">Shares Difficult to Recover:</strong> ₹76,293 Crore</p>
                             <p><strong className="text-[#1f2937]">Unclaimed Insurance Funds:</strong> ₹25,000 Crore</p>
                             <p><strong className="text-[#1f2937]">Unclaimed Mutual Funds:</strong> ₹35,000 Crore</p>
                             <p><strong className="text-[#1f2937]">Stuck with EPFO:</strong> ₹27,000 Crore</p>
                             <p><strong className="text-[#1f2937]">Unclaimed Bank Deposits:</strong> ₹62,000 Crore</p>
                          </div>
                          <p className="mt-4 italic font-semibold text-[#1f2937] text-[14px]">
                             (Based on the industry standards and approximate value)
                          </p>
                       </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="border-b border-gray-200">
                       <td className="py-6 px-6 font-bold text-[#1f2937] align-top bg-white">
                          Benefits of Recovery of Shares from IEPF
                       </td>
                       <td className="py-6 px-6 align-top border-l border-gray-200 bg-white leading-[1.8]">
                          Benefits of Recovery of Shares from IEPF includes the following:
                          <ul className="mt-3 space-y-2 list-none ml-1">
                             {[
                               "Ownership Restoration",
                               "Dividend Recovery",
                               "Capital Appreciation",
                               "Corporate Benefits",
                               "Legal Compliance",
                               "Estate Planning",
                               "Tax Benefits",
                               "Hassle-Free Processing"
                             ].map((item, i) => (
                               <li key={i} className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                                 <span>{item}</span>
                               </li>
                             ))}
                          </ul>
                       </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="border-b border-gray-200">
                       <td className="py-6 px-6 font-bold text-[#1f2937] align-top bg-white">
                          Challenges Faced During Recovery of Shares from IEPF
                       </td>
                       <td className="py-6 px-6 align-top border-l border-gray-200 bg-white leading-[1.8]">
                          Challenges faced during the recovery of shares from IEPF include the following:
                          <ul className="mt-3 space-y-2 list-none ml-1">
                             {[
                               "Complex Documentation",
                               "Long Processing Time",
                               "Lack of Awareness",
                               "Poor Communication",
                               "Legal & Regulatory Compliance"
                             ].map((item, i) => (
                               <li key={i} className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                                 <span>{item}</span>
                               </li>
                             ))}
                          </ul>
                       </td>
                    </tr>

                    {/* Row 5 */}
                    <tr className="border-b border-gray-200">
                       <td className="py-6 px-6 font-bold text-[#1f2937] align-top bg-white">
                          Who is eligible to apply for IEPF share recovery?
                       </td>
                       <td className="py-6 px-6 align-top border-l border-gray-200 bg-white leading-[1.8]">
                          The list of people who are eligible to apply for share recovery from IEPF include:
                          <ul className="mt-3 space-y-2 list-none ml-1">
                             {[
                               "Original Shareholders",
                               "Successors or Legal Heirs",
                               "Nominees",
                               "Administrators or Executors",
                               "Authorized Representatives"
                             ].map((item, i) => (
                               <li key={i} className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                                 <span dangerouslySetInnerHTML={{ __html: item.replace('Legal Heirs', '<span>Legal Heirs</span>') }}></span>
                               </li>
                             ))}
                          </ul>
                       </td>
                    </tr>

                    {/* Row 6 */}
                    <tr className="border-b border-gray-200">
                       <td className="py-6 px-6 font-bold text-[#1f2937] align-top bg-white">
                          Documents required for recovery of shares from IEPF
                       </td>
                       <td className="py-6 px-6 align-top border-l border-gray-200 bg-white leading-[1.8]">
                          Various documents are required for recovery of shares from IEPF, some of which include the following:
                          <ul className="mt-3 space-y-2 list-none ml-1">
                             {[
                               "PAN Card, Aadhar Card, and Address Proof of the Claimant",
                               "Share Certificate (For Physical Shares) or Demat Account Proof",
                               "Bank Account Details",
                               "Cancelled Cheque",
                               "Death Certificate (If the Original Shareholder is Deceased)",
                               "Succession Certificate or Will (For Legal Heirs)",
                               "Duly Signed Form IEPF by the Claimant",
                               "Receipt of Acknowledgement and SRN Number",
                               "Original Indemnity Bond Signed by Claimant on a Non-judicial Stamp Paper",
                               "Copy of Demat Account's Client Master List",
                               "Proof of Entitlement Certificates - Share Certificates & Interest Warrant Application Numbers"
                             ].map((item, i) => (
                               <li key={i} className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                                 <span>{item}</span>
                               </li>
                             ))}
                          </ul>
                       </td>
                    </tr>

                    {/* Row 7 */}
                    <tr className="border-b border-gray-200">
                       <td className="py-6 px-6 font-bold text-[#1f2937] align-top bg-white">
                          Industries in which recovery of shares from IEPF is maximum
                       </td>
                       <td className="py-6 px-6 align-top border-l border-gray-200 bg-white leading-[1.8]">
                          Some of the industries where recovery of shares from IEPF is maximum include the following:
                          <ul className="mt-3 space-y-2 list-none ml-1">
                             {[
                               "Manufacturing",
                               "Real Estate & Construction",
                               "Financial Services",
                               "Technology",
                               "Hospitality"
                             ].map((item, i) => (
                               <li key={i} className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                                 <span>{item}</span>
                               </li>
                             ))}
                          </ul>
                       </td>
                    </tr>

                    {/* Row 8 */}
                    <tr className="border-b border-gray-200">
                       <td className="py-6 px-6 font-bold text-[#1f2937] align-top bg-white">
                          Timeline for Recovery of Shares from IEPF
                       </td>
                       <td className="py-6 px-6 align-top border-l border-gray-200 bg-white leading-[1.8]">
                          Recovery of shares from IEPF takes around 3 to 6 months
                       </td>
                    </tr>

                    {/* Row 9 */}
                    <tr>
                       <td className="py-6 px-6 font-bold text-[#1f2937] align-top bg-white">
                          How can Perfect Advice help you recover shares from IEPF?
                       </td>
                       <td className="py-6 px-6 align-top border-l border-gray-200 bg-white leading-[1.8]">
                          As your share recovery consultant, Perfect Advice can help you with the following:
                          <ul className="mt-3 space-y-2 list-none ml-1">
                             {[
                               "Expert guidance throughout the IEPF recovery process",
                               "Assistance in filing Form IEPF-5 accurately",
                               "Documentation support to ensure hassle-free recovery claims",
                               "Liaising with officials to expedite the verification process",
                               "Legal assistance offered for complex cases"
                             ].map((item, i) => (
                               <li key={i} className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0"></div>
                                 <span>{item}</span>
                               </li>
                             ))}
                          </ul>
                       </td>
                    </tr>

                 </tbody>
              </table>
           </div>

        </div>
      </section>

      {/* 3. WHAT IS RECOVERY OF SHARES FROM IEPF? */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto bg-white border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] rounded-[12px] p-8 md:p-14">
           <h2 className="text-[28px] md:text-[32px] font-bold text-[#1f2937] mb-6 tracking-tight">What Is Recovery Of Shares From IEPF?</h2>
           
           <div className="text-[15.5px] text-[#4b5563] space-y-6 mb-10 leading-[1.7] font-medium max-w-[1200px]">
              <p>The recovery of shares from IEPF (Investor Education and Protection Fund), is the process of reclaiming shares and dividends transferred to the IEPF owing to long investor inactivity. When shareholders fail to claim their dividends for seven consecutive years, their shares are transferred to the IEPF, managed by the Government of India under the Ministry of Corporate Affairs (MCA).</p>
              <p>The IEPF was founded under the Companies Act, 2013 to supervise unclaimed shares, dividends, and other financial assets transferred by companies after a specific time period. However, shares transferred to the IEPF can be reclaimed by the claimants by filing an online application with the IEPF Authority and meeting the compliance requirements to initiate the recovery process.</p>
              <p>While the share recovery from IEPF is a complicated process, seeking help from a professional consultant like Perfect Advice ensures a streamlined and hassle-free recovery process.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                "Comprehensive Assistance for IEPF\nRecovery of Shares",
                "Expert Consultation Available",
                "Quick Documentation Processing",
                "100+ Experts Handle Verification",
                "10+ Years of Industry Experience",
                "Ensuring Recovery within 3 to 6\nMonths"
              ].map((text, idx) => (
                <div key={idx} className="border border-blue-200 bg-white rounded-[6px] p-[20px] flex items-center gap-4 shadow-sm hover:shadow-md transition">
                  <div className="w-[24px] h-[24px] rounded-full bg-blue-50 border border-[#1a73e8] flex items-center justify-center shrink-0">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a73e8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-[#1a73e8] font-medium text-[15.5px] leading-[1.4] whitespace-pre-line">{text}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. CHALLENGES IN IEPF SHARES RECOVERY PROCESS */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto border border-[#dbeafe] bg-[#f8fbff] shadow-sm rounded-[12px] p-8 md:p-14">
           <h2 className="text-[28px] md:text-[32px] font-bold text-[#1f2937] mb-6 tracking-tight">Challenges In IEPF Shares Recovery Process</h2>
           
           <div className="text-[15.5px] text-[#4b5563] space-y-6 mb-12 leading-[1.7] font-medium max-w-[1200px]">
              <p>IEPF shares recovery process is complicated, posing various challenges for the claimant. While the most common challenge is the lack of awareness among the people related to IEPF, other significant challenges include the following:</p>
              <p>However, the private limited company is one of the most commonly used business structures in India due to its features such as limited liability protection, access to funding, perpetual success, etc.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 bg-transparent">
              {[
                { title: "Complex Documentation", desc: "Collecting and submitting the required documents, including original share certificates, proof of identity, and KYC details, is a big challenge. However, we can help relieve you of this complexity by ensuring a smooth recovery process.", icon: <svg className="w-[45px] h-[45px] text-[#60a5fa] mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"/></svg> },
                { title: "Long Processing Time", desc: "Verifying the details and getting approvals from the IEPF Authority usually takes 3 to 6 months to complete. However, our expert consultants can significantly reduce this time, relieving you of unnecessary delays and speeding up the overall process of claiming the shares.", icon: <svg className="w-[45px] h-[45px] text-[#60a5fa] mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                { title: "Lack of Awareness", desc: "The most common challenge in the IEPF shares recovery process is that shareholders are unaware of the existence of IEPF and the process for claiming shares from the fund. However, with our expert guidance, you can initiate the process to reclaim your lost shares without any hassles.", icon: <svg className="w-[45px] h-[45px] text-[#60a5fa] mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                { title: "Poor Communication", desc: "Communication gaps between the company, shareholders and regulatory authorities pose a significant challenge in claiming shares from IEPF leading to incorrect documentation and missed deadlines. However, we have the expertise and experience to mitigate this challenge and streamline your share recovery process.", icon: <svg className="w-[45px] h-[45px] text-[#60a5fa] mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg> },
                { title: "Legal & Regulatory Compliance", desc: "Understanding the complex legal and other regulatory compliances can be challenging for shareholders, obstructing the process of share recovery from the IEPF. However, our experienced consultants can simplify the compliance requirements, which can help you understand them quickly so you can easily start the recovery process.", icon: <svg className="w-[45px] h-[45px] text-[#60a5fa] mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> }
              ].map((card, idx) => (
                <div key={idx} className="flex flex-col">
                   {card.icon}
                   <h3 className="text-[20px] font-bold text-[#1f2937] mb-3">{card.title}</h3>
                   <p className="text-[14.5px] text-[#4b5563] leading-[1.7]">{card.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. PROCEDURE FOR RECOVERY OF SHARES FROM IEPF */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto bg-white border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] rounded-[12px] p-8 md:p-14">
           <h2 className="text-[28px] md:text-[32px] font-bold text-[#1f2937] mb-5 tracking-tight">Procedure For Recovery Of Shares From IEPF</h2>
           <p className="text-[15.5px] text-[#4b5563] mb-12 leading-[1.7] max-w-[1200px] font-medium">
              Recovery of shares from IEPF is a stepwise process that involves different steps, including filing claims applications, verifying documents, and adhering to regulatory compliance to reclaim shares and ownership and other benefits. The procedure includes the following:
           </p>

           <div className="space-y-6">
              {[
                { step: "Step 01", title: "Check Eligibility", desc: "The second step in the process of recovery of shares from IEPF is to confirm eligibility by ensuring the applicant is the rightful claimant (shareholder, legal heir, or nominee) of shares transferred to IEPF." },
                { step: "Step 02", title: "Gather and Attach the Required Documents", desc: "Collecting and attaching the required documents, such as PAN card, Aadhar card, share certificates, bank details, indemnity bond, and legal heirship proof (if applicable), is a must." },
                { step: "Step 03", title: "Fill and Submit the IEPF-5 Form Online to the Company", desc: "Submitting a physical copy of form IEPF-5 along with an indemnity bond and other mandatory documents to the company for verification is an important step in the process." },
                { step: "Step 04", title: "IEPF Authority Processing & Approval", desc: "Once the approval from the company is received, the claim is reviewed by the IEPF authority, and proper review takes place." },
                { step: "Step 05", title: "Shares Transferred to Demat Account", desc: "upon successful review, the recovered shares are credited to the claimant's Demat account within a desired timeline with Perfect Advice ROS experts." },
              ].map((item, idx, arr) => (
                <div key={idx} className="relative">
                  <div className="flex gap-6 md:gap-8 items-start bg-white border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] p-6 rounded-[6px] relative z-10 hover:shadow-md transition-shadow">
                    <div className="w-[85px] h-[85px] rounded border border-blue-50 bg-[#f8fbff] flex flex-col items-center justify-center shrink-0">
                       <span className="text-[#1a73e8] font-bold text-[15px] leading-tight">Step</span>
                       <span className="text-[#1a73e8] font-bold text-[20px] leading-tight">{item.step.split(' ')[1]}</span>
                    </div>
                    <div>
                       <h3 className="text-[22px] font-bold text-[#1f2937] mb-2.5">{item.title}</h3>
                       <p className="text-[#4b5563] text-[15px] leading-[1.6] md:pr-10">{item.desc}</p>
                    </div>
                  </div>
                  {/* Dotted Line connector */}
                  {idx !== arr.length - 1 && (
                    <div className="absolute left-[42.5px] top-[109px] w-[1px] h-[24px] border-l-[1.5px] border-dashed border-[#b6d4fe] z-0"></div>
                  )}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. BOTTOM BANNER SECTION */}
      <section className="px-6 md:px-12 lg:px-24 py-4 mb-20 max-w-[1550px] mx-auto">
         <div className="bg-[#1a73e8] rounded-xl overflow-hidden relative flex flex-col md:flex-row items-center justify-between shadow-lg h-auto min-h-[300px]">
           
           {/* Background subtle elements */}
           <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M54.627 0l.83.83-1.66 1.66L52.137 0l1.66-1.66 1.66 1.66zm0 14h2v2h-2v-2zM45.545 4.95l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zm-4.242 4.242l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zM32 0h2v4h-2V0zm0 18h2v12h-2V18zM0 32h4v2H0v-2zm18 0h12v2H18v-2zm-9.05-8.455l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zM4.95 24.545l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zM0 52.137l1.66-1.66 1.66 1.66-1.66 1.66-1.66-1.66zM14 54.627v-2h2v2h-2zM18 32h4v2h-4v-2zm0 8h2v2h-2v-2zm-4.242 4.242l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zm4.242-4.242l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zM32 32h2v12h-2V32zm0 18h2v4h-2v-4zm13.455-9.05l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zm4.242 4.242l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zM60 52.137l-1.66-1.66-1.66 1.66 1.66 1.66 1.66-1.66zM54.627 60H56v-2h-2v2zM56 16v-2h2v2h-2z\\' fill=\\'%23ffffff\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')"}}></div>
           
           <div className="flex-1 p-10 md:py-16 md:pl-16 relative z-10 w-full items-start flex flex-col justify-center h-full">
              <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-4 leading-[1.3] tracking-wide">
                 Recovery Of Shares From IEPF With Perfect Advice Agents
              </h2>
              <p className="text-[17px] text-blue-50 font-medium mb-8 tracking-wide opacity-90 max-w-[800px] leading-[1.6]">
                 At Perfect Advice, we can help reclaim your shares stuck in the ₹82,199 crore unclaimed investments (As of 1 August, 2024) in IEPF!
              </p>
              <button className="border-2 border-white hover:bg-white hover:text-[#1a73e8] text-white bg-transparent font-semibold py-[11px] px-8 rounded-[4px] transition text-[16px] shadow-sm">
                 Get Started Now
              </button>
           </div>
            
           {/* Illustration area replacing exact SVG from image */}
           <div className="w-full md:w-[450px] lg:w-[450px] shrink-0 h-[250px] md:h-full relative overflow-visible mt-4 md:mt-0 flex justify-end items-end md:items-center">
              <div className="w-full h-full relative z-10 hidden sm:block">
                 {/* Blue glow background */}
                 <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#2563eb] blur-3xl rounded-full opacity-60"></div>
                 
                 {/* Main illustration placeholder (Two people at desk with charts) */}
                 <svg viewBox="0 0 350 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 bottom-0 w-full h-[220px] drop-shadow-xl overflow-visible">
                    {/* Floating charts background */}
                    <circle cx="280" cy="50" r="25" fill="#3b82f6" opacity="0.4" />
                    <circle cx="280" cy="50" r="15" fill="#2563eb" opacity="0.6" />
                    <path d="M280 50 L290 35" stroke="white" strokeWidth="2" />

                    <rect x="230" y="30" width="80" height="60" rx="4" fill="#334155" opacity="0.9" />
                    <rect x="240" y="60" width="10" height="20" fill="#3b82f6" />
                    <rect x="255" y="50" width="10" height="30" fill="#60a5fa" />
                    <rect x="270" y="40" width="10" height="40" fill="#facc15" />
                    <rect x="285" y="70" width="10" height="10" fill="#f87171" />
                    
                    {/* Plant Leaves */}
                    <path d="M40 220 Q20 180 50 150 Q60 180 40 220" fill="#1e293b" opacity="0.7" />
                    <path d="M60 230 Q40 160 80 140 Q90 190 60 230" fill="#1e293b" opacity="0.9" />
                    <path d="M300 220 Q320 180 290 150 Q280 180 300 220" fill="#1e293b" opacity="0.7" />

                    {/* Desk */}
                    <rect x="60" y="160" width="220" height="8" rx="2" fill="#8B4513" />
                    <rect x="80" y="168" width="8" height="60" fill="#1e293b" />
                    <rect x="250" y="168" width="8" height="60" fill="#1e293b" />
                    
                    {/* Laptops */}
                    <rect x="110" y="145" width="40" height="25" rx="2" fill="#cbd5e1" transform="skewX(-15)" />
                    <rect x="190" y="145" width="40" height="25" rx="2" fill="#cbd5e1" transform="skewX(15)" />
                    
                    {/* Person 1 (Man left) */}
                    <path d="M100 85 Q110 75 120 85 L120 100 Q110 110 100 100 Z" fill="#fbcfe8" /> {/* face */}
                    <path d="M95 85 Q110 70 125 85 Q120 75 110 75 Q100 75 95 85" fill="#1f2937" /> {/* hair */}
                    <path d="M85 115 Q110 95 135 115 L130 160 L90 160 Z" fill="#1e293b" /> {/* suit */}
                    <path d="M110 115 L110 160" stroke="white" strokeWidth="2" /> {/* tie/shirt */}
                    <path d="M125 120 L140 145" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" /> {/* arm typing */}
                    
                    {/* Person 2 (Woman right) */}
                    <path d="M220 85 Q230 75 240 85 L240 100 Q230 110 220 100 Z" fill="#fbcfe8" /> {/* face */}
                    <path d="M215 85 Q230 70 245 85 Q255 110 245 120 Q235 100 225 120 Q215 110 215 85" fill="#1f2937" /> {/* hair */}
                    <path d="M205 115 Q230 95 255 115 L250 160 L210 160 Z" fill="#111827" /> {/* suit */}
                    <path d="M230 115 L230 160" stroke="white" strokeWidth="2" /> {/* shirt line */}
                    <path d="M215 120 L200 145" stroke="#111827" strokeWidth="7" strokeLinecap="round" /> {/* arm pointing */}
                 </svg>
              </div>
           </div>
         </div>
      </section>

    </div>
  );
};

export default RecoveryOfShares;