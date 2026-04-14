"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';

const serviceCards = [
  {
    title: 'Risk and Assurance Service',
    items: [
      'Internal Audit',
      'Governance, Risk and Compliance',
      'Regulatory & Operational Risk',
      'IT Risk & Assurance',
      'Compliance and regulatory consulting',
      'Financial Risk, Transactions & Restructuring',
    ],
  },
  {
    title: 'Global Documentation',
    items: [],
  },
  {
    title: 'IFRS Conversion Services',
    items: [
      'Design IFRS Control system',
      'Determine measure for conversion from Ind-AS / USA GAP to IFRS',
    ],
  },
  {
    title: 'Value Chain Management',
    items: [
      'Design Budgetary Control system',
      'It helps the companies to integrate tax considerations.',
      'Facilitate effective tax management',
      'Helps the MNE\'s to rearrange various functions.',
      'The strategy is customized as per the specific requirement of the MNE.',
    ],
  },
  {
    title: 'Working Capital Enhancement',
    items: [
      'We help to facilitate additional growth with existing working capital.',
      'Optimize the Cash Flow.',
      'Handle procurement, accounts payable, inventory management, collection process and improvement.',
      'Reduce the exposure of Debt and managing the Cost of capital effectively.',
    ],
  },
  {
    title: 'Forensic Technology Services',
    items: [
      'Different type of Forensic Services',
      'Implementation of Forensic Services',
      'Investigations and Audit related to services',
      'Artificial intelligence and computer based forensic services',
    ],
  },
  {
    title: 'Base Erosion Profit Shifting',
    items: [
      'Base Erosion and profit shifting refer to the tax avoidance strategies that exploit gaps and mismatches in tax rules to artificially shift the profit to low or no tax locations. Under this framework, more than 100 countries and jurisdictions are cooperating to implement BEPS',
    ],
  },
  {
    title: 'Fraud and Misconduct Investigation',
    items: [
      'Fraud and Misconduct Investigation Process',
      'End-to-End Advisory services to mitigate risks',
      'Fraud Investigation Assessment',
      'Misconduct Investigation Assessment',
    ],
  },
  {
    title: 'Outbound Investment Structuring',
    items: [
      'Procedure to carry out the process of Outbound Investment Structuring',
      'Regulatory Requirements related to outbound investment',
      'Paper works to carry out outbound investment',
      'Tax Implications',
    ],
  },
  {
    title: 'Inbound Investment Structuring',
    items: [
      'Procedure for Foreign Investment in India',
      'Understanding difference between automatic and approval route',
      'Tax for investment structuring in India',
      'Paper works required for inbound investment',
    ],
  },
  {
    title: 'Fraud Risk Management',
    items: [
      'Fraud Risk Management Framework',
      'Early Detection and Prevention of Fraud',
      'Vulnerability Protocols',
      'Compliances related to Anti- Fraud Services',
    ],
  },
  {
    title: 'Technology Risk Consulting',
    items: [],
  },
  {
    title: 'Compliance Risk Management',
    items: [],
  },
  {
    title: 'Risk Management Automation',
    items: [
      'Advice on the Risk Management Automation Process.',
      'Advice on the strategies for developing the Robotic Risk Management Process.',
      'Use of Robotics in Compliance and Risk Management Workflow.',
    ],
  },
  {
    title: 'Operation and Supply Chain',
    items: [
      'Advice on Operation and Supply Chain Management Services.',
      'Developing a Strategy for an effective supply chain.',
      'Sales Forecasting Strategy.',
      'Operations Planning.',
    ],
  },
];

const ServiceCard = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div className="flex flex-col justify-between border border-gray-200 rounded-[12px] bg-white shadow-sm hover:shadow-md transition p-6 min-h-[260px]">
      {/* Card Header */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-[10px] bg-[#eef2ff] flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="font-bold text-[15.5px] text-[#111827] leading-tight">{title}</h3>
        </div>

        {/* Items list */}
        {items.length > 0 && (
          <div className="relative">
            {/* Scroll indicator top */}
            <div className="absolute top-0 right-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 2L8 5H2L5 2Z" fill="#94a3b8"/></svg>
            </div>
            <ul className="space-y-2.5 max-h-[160px] overflow-y-auto pr-1 scrollbar-thin">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="shrink-0 mt-0.5">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="1.8"/>
                      <path d="M8 12l3 3 5-5" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[13.5px] text-[#4b5563] leading-[1.55]">{item}</span>
                </li>
              ))}
            </ul>
            {/* Scroll indicator bottom */}
            <div className="absolute bottom-0 right-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 8L2 5H8L5 8Z" fill="#94a3b8"/></svg>
            </div>
          </div>
        )}
      </div>

      {/* Get Started Button */}
      <button className="mt-6 bg-[#1a73e8] hover:bg-[#155fc4] text-white font-semibold text-[14px] px-5 py-2.5 rounded-[6px] self-start transition shadow-sm">
        Get Started
      </button>
    </div>
  );
};

const RiskAdvisory = () => {
  const [search, setSearch] = useState('');

  const filtered = search.trim()
    ? serviceCards.filter(s => s.title.toLowerCase().includes(search.toLowerCase()))
    : serviceCards;

  return (
    <div className="font-sans text-[#333] bg-white">

      {/* HERO */}
      <section className="relative bg-[#1a2a85] overflow-hidden py-16 px-8 md:px-16 lg:px-28">
        {/* Gear SVG watermark */}
        <div className="absolute right-8 md:right-20 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="320" height="260" viewBox="0 0 320 260" fill="none">
            <circle cx="110" cy="110" r="60" stroke="white" strokeWidth="10"/>
            <circle cx="110" cy="110" r="28" stroke="white" strokeWidth="10"/>
            {[0,45,90,135,180,225,270,315].map((angle, i) => {
              const rad = angle * Math.PI / 180;
              const x1 = 110 + 60 * Math.cos(rad);
              const y1 = 110 + 60 * Math.sin(rad);
              const x2 = 110 + 80 * Math.cos(rad);
              const y2 = 110 + 80 * Math.sin(rad);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="14" strokeLinecap="round"/>;
            })}
            <circle cx="220" cy="170" r="45" stroke="white" strokeWidth="8"/>
            <circle cx="220" cy="170" r="20" stroke="white" strokeWidth="8"/>
            {[0,60,120,180,240,300].map((angle, i) => {
              const rad = angle * Math.PI / 180;
              const x1 = 220 + 45 * Math.cos(rad);
              const y1 = 170 + 45 * Math.sin(rad);
              const x2 = 220 + 62 * Math.cos(rad);
              const y2 = 170 + 62 * Math.sin(rad);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="11" strokeLinecap="round"/>;
            })}
            {/* Leaf shapes */}
            <ellipse cx="70" cy="190" rx="28" ry="50" stroke="white" strokeWidth="7" transform="rotate(-30 70 190)"/>
            <ellipse cx="280" cy="95" rx="22" ry="42" stroke="white" strokeWidth="7" transform="rotate(25 280 95)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-[620px]">
          <h1 className="text-[30px] md:text-[36px] font-extrabold text-white uppercase tracking-wide mb-3 leading-tight">
            Risk & Assurance <span className="text-[#22c55e]">Services</span>
          </h1>

          {/* Blue grid icon + line separator */}
          <div className="flex items-center gap-3 mb-6">
            <div className="grid grid-cols-2 gap-[3px] w-6 h-6 shrink-0">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`rounded-[2px] ${i === 0 || i === 3 ? 'bg-[#22c55e]' : 'bg-[#16a34a]'}`}></div>
              ))}
            </div>
            <div className="flex-1 h-[1px] bg-white/20 max-w-[320px]"></div>
          </div>

          <p className="text-[12px] font-bold text-white/80 tracking-widest uppercase mb-4">
            Everything at a Glance
          </p>

          {/* Search */}
          <div className="flex items-center bg-white rounded-[6px] overflow-hidden shadow-lg max-w-[440px]">
            <input
              type="text"
              placeholder="Search through all our services ..."
              className="w-full px-4 py-3.5 text-[14px] text-gray-700 placeholder:text-gray-400 focus:outline-none bg-transparent"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="px-4 py-3.5 shrink-0 text-gray-500 hover:text-[#1a73e8] transition">
              <Search size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-12 px-6 md:px-14 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="grid grid-cols-2 gap-[3px] w-7 h-7 shrink-0">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`rounded-[2px] ${i % 2 === 0 ? 'bg-[#1a73e8]' : 'bg-[#93c5fd]'}`}></div>
              ))}
            </div>
            <h2 className="text-[22px] font-bold text-[#111827]">
              <span className="text-[#1a73e8]">Risk</span> &amp; Assurance
            </h2>
          </div>
          <p className="text-[13px] text-gray-400 mb-8 ml-10">List of Perfect Advice Services</p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((card, i) => (
              <ServiceCard key={i} title={card.title} items={card.items} />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-3 py-16 text-center text-gray-400 text-[15px]">
                No services found matching <strong>"{search}"</strong>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default RiskAdvisory;