"use client";

import { useState } from 'react';
import { Search, Activity } from 'lucide-react';
import Link from 'next/link';

// -- Types --
type ServiceItem = {
  title: string;
  items?: string[];
};

// -- Data --
const servicesData: ServiceItem[] = [
  {
    title: "Accounts Payables Services",
    items: []
  },
  {
    title: "Accounts Receivable Services",
    items: []
  },
  {
    title: "EPC Projects, O&M Accounting & Administration",
    items: [
      "Daily Accounting",
      "Petty Cash Handling",
      "Budgeting and Cash-flow",
      "Cash Book / Bank Book Reconciliation",
      "Daily Status Reports",
      "Local Procurement",
      "Administrative Works"
    ]
  },
  {
    title: "EPC Project Management",
    items: [
      "EPC project management requirements",
      "Business Plan for EPC project management",
      "EPC Project Management software",
      "End to End Support"
    ]
  },
  {
    title: "Supply Chain Management",
    items: []
  },
  {
    title: "Finance and Accounting Modernization",
    items: []
  },
  {
    title: "Employee Stock Option Plan",
    items: [
      "Helps in ESOP Valuations.",
      "Fintech Support to handle employees of the company.",
      "Assistance in Planning, Documentation, and drafting of ESOP Schemes.",
      "Educate the employee on stock action plan and guide them accordingly."
    ]
  }
];

const FintechLicensing = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#122e70] relative overflow-hidden pt-[76px] pb-24 px-6 md:px-12 lg:px-24">
        {/* Decorative Background Graphics (Gears & Leaf) */}
        <div className="absolute right-0 top-0 h-full w-[450px] pointer-events-none opacity-[0.15] flex justify-end items-center mr-12 lg:mr-32">
           <svg width="450" height="450" viewBox="0 0 200 200" fill="none" className="text-black stroke-current translate-x-12 translate-y-12" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M120 100A20 20 0 1 0 160 100A20 20 0 1 0 120 100Z" />
              <path d="M140 50 L140 40 M140 160 L140 150 M90 100 L80 100 M200 100 L190 100" />
              <path d="M104.64 64.64 L97.57 57.57 M175.36 135.36 L168.29 128.29 M104.64 135.36 L97.57 142.43 M175.36 64.64 L168.29 71.71" />
              <path d="M140 60A40 40 0 1 0 180 100A40 40 0 1 0 140 60Z" />
              
              <g transform="translate(-60, 40) scale(0.6)">
                <path d="M120 100A20 20 0 1 0 160 100A20 20 0 1 0 120 100Z" />
                <path d="M140 60A40 40 0 1 0 180 100A40 40 0 1 0 140 60Z" />
              </g>

              <path d="M140 140 C140 140, 180 140, 180 180 C180 200, 140 200, 140 200 C140 200, 100 200, 100 180 C100 140, 140 140, 140 140 Z" fill="none" strokeWidth="8"/>
           </svg>
        </div>

        <div className="max-w-[800px] relative z-10 text-white pt-4">
          <h1 className="text-[34px] md:text-[42px] font-extrabold mb-0.5 tracking-wide leading-tight">
            FINANCE & ACCOUNTING
          </h1>
          <h2 className="text-[34px] md:text-[42px] font-extrabold text-[#00c98f] mb-8 tracking-wide leading-tight">
             SERVICES
          </h2>
          
          <div className="flex items-center gap-3 mb-10">
            <div className="grid grid-cols-2 gap-1.5">
               <div className="w-[7px] h-[7px] bg-[#00c98f]"></div>
               <div className="w-[7px] h-[7px] bg-[#00c98f]"></div>
               <div className="w-[7px] h-[7px] bg-[#00c98f]"></div>
               <div className="w-[7px] h-[7px] bg-[#00c98f]"></div>
            </div>
            <div className="h-[2px] w-[350px] bg-white"></div>
          </div>

          <h3 className="text-[13px] font-bold tracking-widest uppercase mb-4 opacity-90 font-sans">
            EVERYTHING AT A GLANCE
          </h3>

          <div className="relative w-full max-w-[550px]">
             <input 
              type="text" 
              placeholder="Search through all our services ..." 
              className="w-full h-[52px] pl-4 pr-14 text-slate-800 bg-white focus:outline-none placeholder:text-slate-400 text-[15px] shadow-sm rounded-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-0 top-0 h-full w-[52px] flex items-center justify-center text-[#122e70] bg-transparent pb-0.5" aria-label="Search">
              <Search size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        {/* Header with Icon Group */}
        <div className="mb-14 max-w-[1400px] mx-auto lg:pl-1">
          <div className="flex items-center gap-4 mb-2">
             <div className="grid grid-cols-2 gap-[5px] mt-0.5">
                <div className="w-4 h-4 bg-[#1a73e8] rounded-sm"></div>
                <div className="w-4 h-4 bg-[#1a73e8] rounded-sm"></div>
                <div className="w-4 h-4 bg-[#1a73e8] rounded-sm"></div>
                <div className="w-4 h-4 bg-[#1a73e8] rounded-sm"></div>
             </div>
             <h2 className="text-[28px] font-bold text-[#1e293b] font-sans">
               <span className="text-[#1a73e8]">Finance</span> & Accounting
             </h2>
          </div>
          <p className="text-[15px] text-[#475569] font-medium font-sans">List of Perfect Advice Services</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white rounded-[14px] shadow-[0_4px_25px_-4px_rgba(0,0,0,0.06)] border border-gray-100/50 p-8 flex flex-col h-[380px]">
              
              {/* Card Header */}
              <div className="flex items-center gap-5 mb-8 shrink-0">
                <div className="w-[56px] h-[56px] rounded-xl bg-[#EBEEFF] text-[#697BF5] flex items-center justify-center shrink-0">
                  <Activity size={26} strokeWidth={2.5} />
                </div>
                <h3 className="font-bold text-[17px] text-[#0f172a] leading-tight flex-grow pr-2 font-sans tracking-wide">
                  {service.title}
                </h3>
              </div>

              {/* Scrollable Content Area */}
               <div className="flex-grow overflow-y-auto pr-7 custom-native-scrollbar relative mb-5">
                {service.items && service.items.length > 0 ? (
                  <ul className="space-y-[18px]">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-[#334155] text-[14px]">
                        {/* Custom SVG Checkmark exactly like image */}
                        <svg className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                           <circle cx="12" cy="12" r="10" />
                           <path d="M8 12.5l3 3 5-6" />
                        </svg>
                        <span className="leading-relaxed font-medium opacity-90 tracking-wide font-sans">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="h-full"></div>
                )}
              </div>

              {/* Card Footer / Button */}
              <div className="mt-auto shrink-0 pt-1">
                <Link href="#" className="inline-block bg-[#1a73e8] hover:bg-[#155fc4] text-white font-semibold text-[13.5px] px-8 py-3 rounded-md shadow-sm transition font-sans tracking-wide">
                  Get Started
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Native styled scrollbar identical to the image */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-native-scrollbar::-webkit-scrollbar {
          width: 7px;
        }
        .custom-native-scrollbar::-webkit-scrollbar-track {
          background: transparent; 
        }
        .custom-native-scrollbar::-webkit-scrollbar-thumb {
          background: #9ca3af; 
          border-radius: 10px;
        }
        .custom-native-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280; 
        }
        /* Native styled scroll buttons */
        .custom-native-scrollbar::-webkit-scrollbar-button:vertical:decrement {
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 100 100"><polygon points="50,30 80,80 20,80" fill="%236b7280"/></svg>') no-repeat center center;
          height: 18px;
        }
        .custom-native-scrollbar::-webkit-scrollbar-button:vertical:increment {
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 100 100"><polygon points="50,70 80,20 20,20" fill="%236b7280"/></svg>') no-repeat center center;
          height: 18px;
        }
      `}} />

    </div>
  );
};

export default FintechLicensing;
