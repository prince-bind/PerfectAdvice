import { 
  FileText, 
  ClipboardCheck, 
  Globe, 
  Users, 
  Lightbulb, 
  Megaphone, 
  TrendingUp, 
  HandCoins, 
  ArrowUpRight 
} from 'lucide-react';
import Link from 'next/link';

const offerings = [
  { title: "Fintech Licensing", link: "/services/fintech-licensing", icon: <FileText size={28} /> },
  { title: "Audit & Assurance", link: "/services/audit-assurance", icon: <ClipboardCheck size={28} /> },
  { title: "Global Company", link: "/services/global-company", icon: <Globe size={28} /> },
  { title: "Virtual CFO Services", link: "/services/virtual-cfo-services", icon: <Users size={28} /> },
  { title: "ESG Sustainability", link: "/services/esg-sustainability", icon: <Lightbulb size={28} /> },
  { title: "Risk Advisory", link: "/services/risk-advisory", icon: <Megaphone size={28} /> },
  { title: "Recovery of Shares", link: "/services/recovery-of-shares", icon: <Megaphone size={28} /> },
  { title: "Business Valuation", link: "/services/business-valuation", icon: <HandCoins size={28} /> },
  { title: "Growth Advisory", link: "/services/growth-advisory", icon: <TrendingUp size={28} /> },
];

const Offerings = () => {
  return (
    <section className="py-20 bg-[#F7F7FF]">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Our Best Offerings
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {offerings.map((item, index) => (
            <div 
              key={index}
              className="
                group 
                flex items-center justify-between p-8 rounded-xl border border-gray-200 bg-white
                transition-all duration-300 ease-in-out
                hover:shadow-xl hover:-translate-y-1 hover:bg-blue-600 hover:border-blue-600
              "
            >
              {/* Left Content */}
              <div className="flex flex-col gap-4">
                {/* Title: Increased size (text-2xl) and weight (font-bold) */}
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                
                {/* Link: Increased size (text-base) and weight (font-semibold) */}
                <Link 
                  href={item.link}
                  className="text-base font-semibold text-blue-600 group-hover:text-white flex items-center gap-2 transition-colors"
                >
                  Get Started
                </Link>
              </div>

              {/* Right Icon Circle - Slightly larger to match text increase */}
              <div className="
                w-16 h-16 rounded-full flex items-center justify-center shrink-0
                bg-blue-50 text-blue-600
                group-hover:bg-white group-hover:text-blue-600
                transition-colors
              ">
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center">
          <Link href="/services" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200 text-lg">
            All Services
            <div className="border-[1.5px] border-[#122e70] border-white rounded-full p-[1px]">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Offerings;