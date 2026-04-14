"use client";

import { useState } from 'react';
import { 
  CheckCircle, PlayCircle, ChevronRight, 
  Handshake, Users, Building2, 
  Star, PieChart, Briefcase, Home, 
  FileText, TrendingUp, Gavel, 
  MonitorSmartphone, RefreshCw, ShieldCheck 
} from 'lucide-react';

const VirtualCFOServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const typesData = [
    {
      title: "General Virtual CFO",
      desc: "A general virtual CFO offers comprehensive VCFO services that include financial planning, budgeting, cash flow management and financial analysis across different industries and different-sized businesses.",
      icon: <PieChart size={40} className="text-[#3b82f6] stroke-[1.5]" />
    },
    {
      title: "Project-Based Virtual CFO",
      desc: "A project-based virtual CFO delivers virtual CFO solutions to businesses that have a specific project to complete. Remote CFO services help manage these projects, including mergers, acquisitions, or expansions.",
      icon: <Briefcase size={40} className="text-[#3b82f6] stroke-[1.5]" />
    },
    {
      title: "Interim Virtual CFO",
      desc: "An interim CFO offers virtual CFO services temporarily and is hired to fill the role for a short period. During the tenure, an interim CFO handles financial operations and fills the leadership void or transition to ensure the business does not suffer financially.",
      icon: <Home size={40} className="text-[#3b82f6] stroke-[1.5]" />
    },
    {
      title: "Industry-Specific Virtual CFO",
      desc: "An industry-specific CFO delivers remote CFO services customized specifically for the industry or sectors, including IT, manufacturing, or retail. Their role is to ensure their financial strategies align with the specific industry for smooth operations.",
      icon: <FileText size={40} className="text-[#3b82f6] stroke-[1.5]" />
    },
    {
      title: "Strategic Virtual CFO",
      desc: "The role of a strategic virtual CFO is to help businesses align their financial goals and objectives through long-term financial planning and strategy, facilitating sustainable growth and informed decision making.",
      icon: <TrendingUp size={40} className="text-[#3b82f6] stroke-[1.5]" />
    },
    {
      title: "Operational Virtual CFO",
      desc: "An operational virtual CFO is one who helps streamline financial operations, optimize everyday financial processes and attain efficiency through cost savings and cash flow management.",
      icon: <Gavel size={40} className="text-[#3b82f6] stroke-[1.5]" />
    },
    {
      title: "Growth-Oriented Virtual CFO",
      desc: "A growth-oriented virtual CFO is an expert in helping businesses scale up and expand. Such VCFO services include drafting financial strategies for mergers, acquisitions, partnerships and funding, and their priority lies in securing capital for growth.",
      icon: <MonitorSmartphone size={40} className="text-[#3b82f6] stroke-[1.5]" />
    },
    {
      title: "Turnaround Virtual CFO",
      desc: "Turnaround virtual CFOs specialize in bringing back loss-making businesses to profitability. Their role is to evaluate the financial health of the business to identify the core issues and implement financial strategies to achieve profitability goals.",
      icon: <RefreshCw size={40} className="text-[#3b82f6] stroke-[1.5]" />
    },
    {
      title: "Compliance-Focused CFO",
      desc: "Remote CFO services as a compliance-focused CFO manages the organization's financial compliance and regulatory requirements. Such a CFO has in-depth knowledge of maintaining financial transparency and avoiding legal issues.",
      icon: <ShieldCheck size={40} className="text-[#3b82f6] stroke-[1.5]" />
    }
  ];

  return (
    <div className="font-sans text-[#333] bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#f0f8ff] via-white to-[#f0f8ff] pt-20 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Subtle background abstract shapes */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20 flex justify-end">
           <svg className="w-[800px] h-[800px] text-blue-100/50 mix-blend-multiply translate-x-1/4 -translate-y-1/4" fill="currentColor" viewBox="0 0 200 200">
             <path d="M44.7,-76.4C58.3,-69.2,70.1,-57.8,79.5,-44.6C88.9,-31.4,95.9,-15.7,96.3,0.2C96.7,16.2,90.4,32.4,81,45.6C71.6,58.8,59.1,69.1,45.1,75.4C31.1,81.7,15.6,83.9,0.3,83.4C-15,82.9,-30,79.8,-43.3,73.1C-56.6,66.4,-68.2,56,-76.6,43.4C-85,30.8,-90.2,15.4,-90.6,-0.2C-91,-15.8,-86.6,-31.6,-78.2,-44.4C-69.8,-57.2,-57.4,-67.2,-43.8,-74.4C-30.2,-81.6,-15.1,-86,-0.1,-85.9C14.9,-85.7,29.8,-81,44.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
           </svg>
           {/* Cross lines pattern like image 1 background */}
           <div className="absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: "linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.5}}></div>
        </div>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Content */}
          <div className="flex-1 max-w-[700px]">
            <h1 className="text-[38px] md:text-[46px] leading-[1.2] font-bold text-[#1f2937] mb-7 tracking-tight font-sans">
              Virtual CFO Services for <span className="text-[#1a73e8]">Startups and MSMEs</span>
            </h1>
            
            <p className="text-[17px] text-[#4b5563] mb-8 leading-relaxed pr-4 font-sans font-medium">
              Are you eyeing improving the financial health of your business? Get Virtual CFO services from Perfect Advice and streamline your financial operations.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3.5">
                <CheckCircle className="w-[22px] h-[22px] text-[#1a73e8] fill-[#1a73e8] text-white shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[15.5px] text-[#4b5563] font-medium leading-tight pt-0.5">Delivered Virtual CFO Solutions to Over 500+ Companies in India</span>
              </li>
              <li className="flex items-start gap-3.5">
                <CheckCircle className="w-[22px] h-[22px] text-[#1a73e8] fill-[#1a73e8] text-white shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[15.5px] text-[#4b5563] font-medium leading-tight pt-0.5">30% Quick Turnaround Time for Startups and Small Businesses</span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-6 mb-16">
               <button className="bg-[#1a73e8] hover:bg-blue-600 text-white font-semibold py-[14px] px-7 rounded-[4px] flex items-center justify-center gap-2.5 transition shadow-sm text-[15px]">
                 Schedule a call <ChevronRight size={18} strokeWidth={3}/>
               </button>
               <button className="flex items-center gap-2.5 text-[#374151] hover:text-[#1a73e8] transition font-semibold text-[14px] underline decoration-[#d1d5db] underline-offset-4 decoration-2">
                 <PlayCircle className="text-[#10b981] fill-[#10b981] text-white w-9 h-9" strokeWidth={1.5}/>
                 See How It Works in 1 min video
               </button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-3.5">
                <div className="bg-[#10b981] p-2.5 rounded text-white flex items-center justify-center w-12 h-12">
                  <Handshake size={24} strokeWidth={1.5}/>
                </div>
                <div>
                  <div className="font-extrabold text-[17px] text-[#111827] tracking-wider mb-0.5">5000 +</div>
                  <div className="text-[13px] text-gray-500 font-medium">Happy Customers</div>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="bg-[#10b981] p-2.5 rounded text-white flex items-center justify-center w-12 h-12">
                  <div className="relative">
                     <Users size={22} strokeWidth={1.5}/>
                     <Star size={10} className="fill-white absolute -top-1 -right-1" strokeWidth={0}/>
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-[17px] text-[#111827] tracking-wider mb-0.5">100 +</div>
                  <div className="text-[13px] text-gray-500 font-medium">CAs, CS & Lawyers</div>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="bg-[#10b981] p-2.5 rounded text-white flex items-center justify-center w-12 h-12">
                  <Building2 size={24} strokeWidth={1.5}/>
                </div>
                <div>
                  <div className="font-extrabold text-[17px] text-[#111827] tracking-wider mb-0.5">10 +</div>
                  <div className="text-[13px] text-gray-500 font-medium">Offices Globally</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="w-full lg:w-[460px] shrink-0 mt-8 lg:mt-0">
             <div className="bg-white rounded-[10px] shadow-[0_10px_50px_-15px_rgba(0,0,0,0.15)] p-9 relative overflow-hidden ring-1 ring-gray-100/50">
                {/* Decorative top-left blue checklist graphic overlay */}
                <div className="absolute top-0 left-0 opacity-100">
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <path d="M0 0H70L0 70V0Z" fill="#eff6ff"/>
                    <path d="M15 25L25 35L45 15" stroke="#7cb1fa" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Decorative bottom right yellow triangle */}
                <div className="absolute -bottom-8 -right-8 opacity-40">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path d="M100 0V100H0L100 0Z" fill="#fef08a"/>
                    <path d="M80 40V80H40L80 40Z" fill="#fde047"/>
                  </svg>
                </div>

                <h3 className="text-[18px] font-bold text-center text-[#111827] mb-8 mt-4 tracking-wide relative z-10">
                  GET FREE CONSULTATION
                </h3>

                <form className="space-y-[22px] relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full h-[52px] px-4 border border-gray-100 border-b-gray-200 rounded-[2px] focus:outline-none focus:border-b-[#1a73e8] text-[15px] placeholder:text-gray-400 bg-white"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full h-[52px] px-4 border border-gray-100 border-b-gray-200 rounded-[2px] focus:outline-none focus:border-b-[#1a73e8] text-[15px] placeholder:text-gray-400 bg-white"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="flex h-[52px] border border-gray-100 border-b-gray-200 rounded-[2px] bg-white focus-within:border-b-[#1a73e8]">
                    <div className="bg-[#f8fafc] px-3 flex items-center justify-center gap-2 border-r border-gray-100 shrink-0 text-[14px] text-gray-700 cursor-pointer w-[100px]">
                      <img src="https://flagcdn.com/w20/in.png" alt="India flag" className="w-[22px] h-[15px] object-cover rounded-sm shadow-sm" />
                      <span className="font-medium">+91</span>
                      <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1L4 4L7 1" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Mobile Number" 
                      className="w-full h-full px-4 focus:outline-none text-[15px] placeholder:text-gray-400 bg-transparent"
                      value={formData.mobile}
                      onChange={e => setFormData({...formData, mobile: e.target.value})}
                    />
                  </div>

                  <button className="w-full bg-[#1a73e8] hover:bg-[#155fc4] text-white font-bold py-[15px] rounded-[4px] mt-4 transition text-[15px] tracking-wide shadow-md">
                    TALK TO AN EXPERT
                  </button>

                  <div className="flex items-center justify-center gap-1.5 pt-4 pb-2">
                    <div className="flex text-[#fbbf24] gap-0.5">
                      <Star size={13} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={13} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={13} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={13} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={13} className="fill-gray-200" strokeWidth={0} />
                    </div>
                    <span className="text-[12px] text-gray-500">
                      <strong className="text-gray-700">Rated at 4.8/5</strong> 22081+ Happy Reviews
                    </span>
                  </div>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT ARE VIRTUAL CFO SERVICES? */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto rounded-[12px] border border-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] p-8 md:p-12 bg-white">
           <h2 className="text-[28px] md:text-[32px] font-bold text-[#1f2937] mb-6 tracking-tight">What Are Virtual CFO Services?</h2>
           
           <div className="text-[16px] text-[#4b5563] space-y-6 mb-12 leading-[1.7] max-w-[1300px] font-medium">
              <p>
                Virtual CFO services are sought after by various businesses, including startups and small ventures that cannot afford to onboard a full-time CFO to meet their organization's financial requirements. Various virtual CFO firms offer their services, helping businesses align their needs with eligible professionals. Virtual CFO solutions are cost-efficient and allow businesses to focus on financial planning, compliance, and strategic decision-making. A virtual CFO is a professional financial expert who offers his services in a remote setup.
              </p>
              <p>
                The best outsourced CFO services provide economical solutions to optimize cash flow, manage financial risks, and guarantee regulatory compliance. Virtual CFO solutions empower businesses to handle their financial complexities. Hiring a virtual CFO for startups and small businesses helps organizations leverage the expertise of professionals to improve their financial health.
              </p>
           </div>

           {/* 6 Grid items List */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                "Ensure Sound Financial Health",
                "Cash flow improvement by 25%",
                "Better Financial Decisions",
                "Compliance adherence boost by 40%",
                "Sustainable Business Growth",
                "Financial Expert Availability 24x7"
              ].map((text, idx) => (
                <div key={idx} className="border border-[#bfdbfe] bg-[#f8fafc]/50 rounded-[4px] p-[18px] flex items-center gap-3.5 hover:shadow-sm transition">
                  <CheckCircle className="w-[20px] h-[20px] text-white fill-[#1a73e8] shrink-0" strokeWidth={2} />
                  <span className="text-[#1a73e8] font-medium text-[15px] leading-tight">{text}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. BLUE BANNER */}
      <section className="px-6 md:px-12 lg:px-24 py-4 mb-16 max-w-[1550px] mx-auto">
         <div className="bg-[#1a73e8] rounded-xl overflow-hidden relative flex flex-col md:flex-row items-center justify-between shadow-lg">
           
           {/* Background subtle elements */}
           <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M54.627 0l.83.83-1.66 1.66L52.137 0l1.66-1.66 1.66 1.66zm0 14h2v2h-2v-2zM45.545 4.95l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zm-4.242 4.242l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zM32 0h2v4h-2V0zm0 18h2v12h-2V18zM0 32h4v2H0v-2zm18 0h12v2H18v-2zm-9.05-8.455l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zM4.95 24.545l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zM0 52.137l1.66-1.66 1.66 1.66-1.66 1.66-1.66-1.66zM14 54.627v-2h2v2h-2zM18 32h4v2h-4v-2zm0 8h2v2h-2v-2zm-4.242 4.242l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zm4.242-4.242l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zM32 32h2v12h-2V32zm0 18h2v4h-2v-4zm13.455-9.05l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zm4.242 4.242l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zM60 52.137l-1.66-1.66-1.66 1.66 1.66 1.66 1.66-1.66zM54.627 60H56v-2h-2v2zM56 16v-2h2v2h-2z\\' fill=\\'%23ffffff\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')"}}></div>
           
           <div className="flex-1 max-w-[800px] p-10 md:py-16 md:pl-16 relative z-10 w-full items-start flex flex-col justify-center h-full">
              <h2 className="text-[28px] md:text-[34px] font-bold text-white mb-5 leading-[1.3] tracking-wide">
                 60% Savings On CFO Costs & Cash Flow Improvement Guaranteed!
              </h2>
              <p className="text-[17px] text-blue-50 font-medium mb-10 tracking-wide opacity-90">
                 Contact Perfect Advice experts to leverage the best of virtual CFO services.
              </p>
              <button className="border-2 border-white hover:bg-white hover:text-[#1a73e8] text-white bg-transparent font-semibold py-[11px] px-8 rounded-[4px] transition text-[16px]">
                 Get Started Now
              </button>
           </div>
            
           {/* Illustration area replacing exact SVG from image */}
           <div className="w-full md:w-[450px] lg:w-[500px] shrink-0 h-[220px] md:h-[340px] relative mt-4 md:mt-0 px-8 flex justify-end items-end md:items-center">
              {/* Creating a pseudo-illustration using CSS elements to mimic the style of the screenshot's vector art */}
              <div className="w-full h-full relative z-10 hidden sm:block">
                 {/* Blue glow behind */}
                 <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-[#2563eb] blur-3xl rounded-full opacity-60"></div>
                 {/* Decorative elements representing abstract business charts/nodes on the wall */}
                 <div className="absolute top-12 left-12 w-20 h-14 bg-gray-800/40 rounded shadow-sm border border-white/20 flex gap-1 p-2 items-end justify-center backdrop-blur-sm">
                   <div className="w-2 h-4 bg-white/70 rounded-t-sm"></div>
                   <div className="w-2 h-7 bg-white/70 rounded-t-sm"></div>
                   <div className="w-2 h-5 bg-white/70 rounded-t-sm"></div>
                   <div className="w-2 h-9 bg-[#10b981] rounded-t-sm"></div>
                 </div>
                 <div className="absolute top-20 right-20 w-16 h-16 rounded-full border-[4px] border-white/20 border-t-white bg-gray-800/30 flex items-center justify-center backdrop-blur-sm -rotate-45"></div>
                 
                 {/* Main illustration placeholder (Two people sitting at desk) */}
                 <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 bottom-4 w-[350px] h-auto drop-shadow-xl overflow-visible">
                    {/* Desk */}
                    <rect x="20" y="140" width="260" height="8" rx="2" fill="#8B4513" />
                    <rect x="40" y="148" width="8" height="60" fill="#2d3748" />
                    <rect x="252" y="148" width="8" height="60" fill="#2d3748" />
                    
                    {/* Plant */}
                    <path d="M10 170 Q20 120 40 160 Q20 180 10 170" fill="#1f2937" opacity="0.8" />
                    <path d="M30 170 Q40 130 50 160 Q30 180 30 170" fill="#1f2937" opacity="0.6" />
                    <rect x="15" y="165" width="20" height="30" rx="3" fill="#374151" />
                    
                    {/* Computer */}
                    <rect x="120" y="105" width="60" height="35" rx="3" fill="#1f2937" />
                    <polygon points="120,140 180,140 170,143 130,143" fill="#374151" />
                    
                    {/* Person 1 (Man left) */}
                    <circle cx="85" cy="80" r="14" fill="#fbcfe8" /> {/* face */}
                    <path d="M75 75 Q85 65 95 75 Q95 70 85 60 Q75 70 75 75" fill="#1f2937" /> {/* hair */}
                    <path d="M65 110 Q85 90 105 110 L105 140 L65 140 Z" fill="#1e293b" /> {/* suit */}
                    <path d="M85 110 L85 140" stroke="#f8fafc" strokeWidth="2" /> {/* shirt/suit line */}
                    {/* arm typing */}
                    <path d="M70 115 L95 130 L115 130" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                    
                    {/* Person 2 (Woman right) */}
                    <circle cx="215" cy="85" r="13" fill="#fbcfe8" /> {/* face */}
                    <path d="M205 85 Q215 75 225 85 Q230 100 225 115 Q215 90 205 115 Q200 100 205 85" fill="#1f2937" /> {/* hair */}
                    <path d="M195 115 Q215 95 235 115 L235 140 L195 140 Z" fill="#0f172a" /> {/* suit */}
                    <path d="M215 115 L215 140" stroke="#f8fafc" strokeWidth="2" /> {/* shirt/suit line */}
                    {/* arm holding paper */}
                    <path d="M230 120 L205 130 L195 125" stroke="#0f172a" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                    
                    {/* Documents */}
                    <rect x="195" y="138" width="15" height="10" transform="rotate(-15 195 138)" fill="white" />
                 </svg>
              </div>
           </div>
         </div>
      </section>

      {/* 4. TYPES OF VIRTUAL CFO */}
      <section className="py-12 px-6 md:px-12 lg:px-24 mb-10">
        <div className="max-w-[1400px] mx-auto bg-white border border-gray-100/50 shadow-sm rounded-xl p-8 lg:p-14">
           <h2 className="text-[28px] md:text-[32px] font-bold text-[#1f2937] mb-5 tracking-tight">What Are The Types Of Virtual CFO Services In India?</h2>
           
           <p className="text-[16px] text-[#4b5563] mb-12 leading-[1.7] max-w-[1100px]">
              Virtual CFO services deliver customized and comprehensive financial solutions and expertise to businesses. Not just startups but even established businesses seek the best outsourced CFO services to address their financial complexities. Different types of virtual CFOs include the following:
           </p>

           {/* 3x3 Grid Container */}
           <div className="bg-[#eff6ff]/30 rounded-[6px] border border-[#e2e8f0] overflow-hidden">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-transparent">
                {typesData.map((type, idx) => (
                  <div key={idx} className="p-10 border-r border-b border-[#e2e8f0] last:border-b-0 lg:last:border-r-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0 group bg-white hover:bg-[#fafafa] transition-colors duration-300">
                     <div className="w-[60px] h-[60px] rounded mb-6 text-[#1a73e8] bg-[#f0f7ff] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        {type.icon}
                     </div>
                     <h3 className="text-[19px] font-bold text-[#1f2937] mb-4 tracking-wide">
                        {type.title}
                     </h3>
                     <p className="text-[15px] text-[#4b5563] leading-[1.7]">
                        {type.desc}
                     </p>
                  </div>
                ))}
             </div>
           </div>

         </div>
      </section>

      {/* 5. OUR PROCESS TO GET VCFO SERVICES */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto bg-white border border-gray-100 shadow-sm rounded-[12px] p-8 md:p-14">
           <h2 className="text-[28px] md:text-[32px] font-bold text-[#1f2937] mb-5 tracking-tight">Our Process to Get VCFO Services for You</h2>
           <p className="text-[16px] text-[#4b5563] mb-12 leading-[1.7] max-w-[1200px] font-medium">
              VCFO services are important for businesses to manage their financial health and improve performance by hiring a specialized financial professional. We deliver efficient virtual CFO solutions through a systematic approach. As the best outsourced CFO services, we offer customized financial solutions to our clients to ensure strategic success and operational efficiency. The stepwise process includes:
           </p>

           <div className="space-y-6">
              {[
                { step: "Step 01", title: "Step 1 - Business Analysis", desc: "The first step in the process of delivering CFO virtual services includes the evaluation of the business's financial requirements and goals. This step takes up to 1 week to complete." },
                { step: "Step 02", title: "Step 2 - Strategy Development", desc: "The next taken by virtual CFO firms to design a customized plan to deliver optimum virtual CFO solutions takes between 2 to 3 weeks." },
                { step: "Step 03", title: "Step 3 - Documentation", desc: "Preparing and reviewing important financial records of the business is a crucial step in the process of delivering virtual CFO services and takes about 2 weeks to complete." },
                { step: "Step 04", title: "Step 4 - Implementation", desc: "Executing strategies and integrating tools to ensure seamless remote CFO services takes 4 to 6 weeks." },
                { step: "Step 05", title: "Step 5 - Ongoing Support", desc: "Once the above steps are complete, the last phase of VCFO services involves monitoring performance, meeting compliance and adapting strategies to align with the business objectives. This is an ongoing process." },
              ].map((item, idx, arr) => (
                <div key={idx} className="relative">
                  <div className="flex gap-6 md:gap-8 items-start bg-white border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] p-6 rounded-[6px]">
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
                    <div className="absolute left-[42.5px] top-[109px] w-[1px] h-[24px] border-l-[1.5px] border-dashed border-[#b6d4fe]"></div>
                  )}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. WHAT IS INCLUDED IN VIRTUAL CFO SERVICES? */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto bg-white border border-gray-100 shadow-sm rounded-[12px] p-8 md:p-14">
           <h2 className="text-[28px] md:text-[32px] font-bold text-[#1f2937] mb-5 tracking-tight">What is Included in Virtual CFO Services?</h2>
           <p className="text-[16px] text-[#4b5563] mb-12 leading-[1.7] max-w-[1200px] font-medium">
              Virtual CFO services include a comprehensive package by financial experts to boost the financial health of an organization. From streamlining financial management to decision-making and achieving operational efficiency, here is what Virtual CFO services include:
           </p>
           
           <div className="flex flex-col">
              {[
                { id: "1", title: "Financial Strategy\nDevelopment", desc: "Virtual CFO services include designing a customized financial strategy to meet long-term business goals and achieve sustainable growth and profitability." },
                { id: "2", title: "Budgeting and Forecasting", desc: "Virtual CFO solutions deliver precise budgeting, financial forecasting, and analysis, which helps a business drive its financial planning and resource allotment." },
                { id: "3", title: "Cash Flow Management", desc: "VCFO services facilitate the monitoring and optimization of cash flow to enable businesses to maintain liquidity and meet financial commitments efficiently." },
                { id: "4", title: "Financial Reporting and\nAnalysis", desc: "CFO virtual services help businesses manage regular financial reports, facilitate data-driven decisions, and track performance against industry standards." },
                { id: "5", title: "Risk Management and\nCompliance", desc: "Virtual CFO services enable businesses to determine financial risks, adhere to compliance, and implement strategies to mitigate any financial disruptions." },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-10 py-7 border-b border-gray-200 last:border-b-0 items-start">
                   <div className="flex gap-4 md:w-[320px] shrink-0 font-bold text-[#1a73e8] text-[17px]">
                      <span>{item.id}</span>
                      <h3 className="whitespace-pre-line leading-tight">{item.title}</h3>
                   </div>
                   <p className="text-[#374151] text-[15px] leading-[1.7] flex-1">
                      {item.desc}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 7. RESPONSIBILITIES OF VCFOS */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto bg-white border border-gray-100 shadow-sm rounded-[12px] p-8 md:p-14">
           <h2 className="text-[28px] md:text-[32px] font-bold text-[#1f2937] mb-4 tracking-tight">Responsibilities of VCFOs under Remote CFO Services</h2>
           <p className="text-[16px] text-[#4b5563] mb-10 leading-[1.7] font-medium">
              Responsibilities of VCFOs under remote CFO services include the following:
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                "Strategic Financial Planning & Forecasting",
                "Optimizing & Monitoring Cash Flow",
                "Preparing & Managing Organizational Budgets",
                "Analysis & Reporting of Financial Performance",
                "Assessing Financial Risks & Suggesting Mitigation Strategies",
                "Ensuring Regulatory, Legal & Tax Compliance",
                "Preparing Compelling Fundraising Pitches",
                "Facilitating Cost Effectiveness via Cost-Control Measures",
                "Delivering Business Growth & Expansion Strategies",
                "Offering Actionable Insights for Informed Decision-Making"
              ].map((text, idx) => (
                <div key={idx} className="flex gap-4 items-center border border-blue-200 bg-white rounded-[6px] p-4 shadow-sm hover:shadow-md transition">
                  {/* Checkbox with blue check */}
                  <div className="w-[22px] h-[22px] rounded-full bg-[#1a73e8] flex items-center justify-center shrink-0">
                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-[#1a73e8] font-medium text-[15.5px] tracking-wide">{text}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. BOTTOM HERO / CTA WITH ILLUSTRATION */}
      <section className="py-12 px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-[1400px] mx-auto bg-white border border-gray-100 shadow-sm rounded-[12px] p-8 md:p-14 overflow-hidden relative">
           
           <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
              <div className="flex-1">
                 <h2 className="text-[28px] md:text-[34px] font-bold text-[#1f2937] mb-6 tracking-tight leading-[1.2]">
                    Cherish 10X Revenue Growth with VCFO Services by Perfect Advice
                 </h2>
                 <div className="text-[15.5px] text-[#4b5563] space-y-6 leading-[1.7] max-w-[800px]">
                    <p>Perfect Advice helps startups and small businesses that cannot hire a full-time CFO yet are committed to their organization's financial well-being leverage VCFO services to benefit the business. Our virtual CFO solutions have indeed revolutionized the financial management landscape.</p>
                    <p>From offering cost-effective financial solutions to strategic financial advice, as one of the prominent virtual CFO firms, we ensure our clients experience unparalleled business growth. Our virtual CFO solutions are designed to propel your revenue by 10X.</p>
                    <p>Given the role's complexity, our virtual CFO services play a critical role in the modern business climate, helping manage your business' intricate financial needs against competitors. As the best outsourced CFO services, we strive to ensure detailed financial planning, compliance management, and strategic guidance. Our virtual CFO solutions have proven to improve the cash flow, allowing our clients to monitor their financial health to make informed decisions.</p>
                 </div>
              </div>

              {/* Illustration Block representing people building blocks */}
              <div className="w-[380px] shrink-0 h-[300px] relative hidden md:block">
                 <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full drop-shadow-lg">
                    {/* Background framed picture */}
                    <rect x="230" y="30" width="40" height="50" rx="2" stroke="#e5e7eb" strokeWidth="3" fill="#f8fafc" />
                    <rect x="235" y="35" width="20" height="20" rx="1" fill="#bae6fd" />
                    
                    {/* Calendar layout */}
                    <rect x="170" y="40" width="40" height="30" rx="2" fill="#e5e7eb" />
                    <rect x="175" y="45" width="30" height="20" rx="1" fill="#cbd5e1" />

                    {/* Blue Blocks Tower */}
                    <rect x="130" y="240" width="80" height="40" fill="#3b82f6" />
                    <rect x="135" y="245" width="70" height="30" fill="#2563eb" />
                    <path d="M140 250 H200" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="10 5" />
                    
                    <rect x="130" y="200" width="80" height="40" fill="#3b82f6" />
                    <rect x="135" y="205" width="70" height="30" fill="#2563eb" />
                    
                    <rect x="150" y="160" width="40" height="40" fill="#3b82f6" />
                    <rect x="155" y="165" width="30" height="30" fill="#2563eb" />
                    
                    <rect x="130" y="120" width="80" height="40" fill="#3b82f6" />
                    <rect x="135" y="125" width="70" height="30" fill="#2563eb" />
                    
                    {/* Person 1 (Climbing) left */}
                    <path d="M100 240 L80 160 L130 140" fill="none" stroke="#1f2937" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M110 238 L95 190" stroke="#1f2937" strokeWidth="12" strokeLinecap="round" />
                    <path d="M80 160 L75 120" fill="none" stroke="#f1f5f9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="75" cy="100" r="16" fill="#8B4513" />
                    
                    {/* Person 2 (Top) right */}
                    <path d="M170 120 V80 Q170 60 190 60" fill="none" stroke="#f1f5f9" strokeWidth="16" strokeLinecap="round" />
                    <path d="M170 120 L200 125" stroke="#f1f5f9" strokeWidth="16" strokeLinecap="round" />
                    <circle cx="170" cy="50" r="14" fill="#fbcfe8" />
                    <path d="M160 50 Q170 40 180 50 Q180 44 170 40 Q160 44 160 50" fill="#1f2937" />
                    
                    {/* Person 3 (Holding block right) */}
                    <path d="M260 210 L250 150" stroke="#1f2937" strokeWidth="12" strokeLinecap="round" />
                    <path d="M275 220 L260 160" stroke="#1f2937" strokeWidth="12" strokeLinecap="round" />
                    <path d="M250 150 Q260 120 280 120" stroke="#334155" strokeWidth="18" strokeLinecap="round" />
                    <circle cx="280" cy="95" r="14" fill="#fed7aa" />
                    {/* Holding a blue block */}
                    <polygon points="210,100 280,110 270,140 200,130" fill="#2563eb" />
                    <polygon points="215,105 275,114 265,135 205,125" fill="#3b82f6" />
                    
                 </svg>
              </div>
           </div>

           {/* Features Ribbon */}
           <div className="border border-[#bfdbfe] bg-[#f8fbff]/50 rounded-[8px] flex flex-wrap justify-between items-center py-6 px-10 mb-10 gap-8 shadow-sm">
              <div className="flex flex-col items-center flex-1 min-w-[180px] gap-3">
                 <div className="w-[50px] h-[50px] bg-blue-50 rounded-full flex items-center justify-center text-[#1a73e8]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                 </div>
                 <span className="font-semibold text-[15px] text-[#1f2937] text-center">10,000+ Experienced Professionals</span>
              </div>
              <div className="flex flex-col items-center flex-1 min-w-[180px] gap-3">
                 <div className="w-[50px] h-[50px] bg-blue-50 rounded-full flex items-center justify-center text-[#1a73e8]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                 </div>
                 <span className="font-semibold text-[15px] text-[#1f2937] text-center">Comprehensive Guidance</span>
              </div>
              <div className="flex flex-col items-center flex-1 min-w-[180px] gap-3">
                 <div className="w-[50px] h-[50px] bg-blue-50 rounded-full flex items-center justify-center text-[#1a73e8]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/><path d="M12 21v-3"/><path d="M12 11h.01"/><path d="M10.5 14 C10.5 14, 11 15, 12 15 C13 15, 13.5 14, 13.5 14"/></svg>
                 </div>
                 <span className="font-semibold text-[15px] text-[#1f2937] text-center">98% Client Retention Rate</span>
              </div>
              <div className="flex flex-col items-center flex-1 min-w-[180px] gap-3">
                 <div className="w-[50px] h-[50px] bg-blue-50 rounded-full flex items-center justify-center text-[#1a73e8]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>
                 </div>
                 <span className="font-semibold text-[15px] text-[#1f2937] text-center">Round-the-clock Support</span>
              </div>
           </div>

           <div className="flex justify-center">
              <button className="bg-[#1a73e8] hover:bg-[#155fc4] text-white font-medium py-3 px-10 rounded-[4px] transition text-[15.5px] shadow-sm tracking-wide">
                 Schedule Meeting
              </button>
           </div>
        </div>
      </section>

    </div>
  );
};

export default VirtualCFOServices;