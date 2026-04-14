import { ArrowUpRight } from 'lucide-react';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full font-sans">
      
      {/* --- 1. Top CTA Banner --- */}
      <div className="bg-[#122e70] py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
          <h2 className="text-xl md:text-[24px] font-bold text-white text-center md:text-left leading-snug">
            Get ready to enhance your business and emerge with the correct<br className="hidden md:block" /> approach
          </h2>
          <Link href="/company/contact-us" className="bg-white text-[#122e70] px-6 py-3 rounded font-bold hover:bg-gray-100 transition flex items-center gap-2 shrink-0 text-[16px] shadow-sm">
            Request a Call Back
            <div className="border-[1.5px] border-[#122e70] rounded-full p-px">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </div>

      {/* --- 2. Main Links Section --- */}
      <div className="bg-[#f8fafc] pt-16 pb-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          
          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 text-sm">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-slate-900 text-base">Tax Advisory</h3>
              <a href="#" className="text-slate-600 hover:text-blue-600">Corporate Tax (R&D Tax)</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">International Tax Advisory Services</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">Transfer Pricing in India</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">Corporate Tax and Regulatory Compliance</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">GST Appeal</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-slate-900 text-base">Virtual CFO</h3>
              <a href="#" className="text-slate-600 hover:text-blue-600">Financial Reporting</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">Revenue Recognition</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">Finance And Accounting Outsourcing</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">IFRS Reporting</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">Financial Process Outsourcing</a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-slate-900 text-base">Regulatory</h3>
              <a href="#" className="text-slate-600 hover:text-blue-600">NBFC Registration</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">RBI Services</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">SEBI Related Approvals</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">Insurance-Tech Advisory</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">Risk & Assurance</a>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-slate-900 text-base">ESG Advisory</h3>
              <a href="#" className="text-slate-600 hover:text-blue-600">India Entry Advisory</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">Global Expansion Advisory</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">FinTech Advisory</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">M & A Services</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">Industries Services</a>
            </div>

            {/* Column 5 */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-slate-900 text-base">Business Expansion</h3>
              <a href="#" className="text-slate-600 hover:text-blue-600">Sustainability and ESG Solutions</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">ESG Assurance in Audit</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">ESG Reporting</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">Sustainable Supply Chain Management</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">Sustainable Finance</a>
            </div>

          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-8 border-t border-gray-200 pt-8">
            <a href="#" aria-label="Facebook" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" aria-label="X" className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
              <span className="font-bold text-lg leading-none block w-5 h-5 text-center">X</span>
            </a>
            <a href="#" aria-label="LinkedIn" className="bg-[#0077b5] text-white p-2 rounded-full hover:opacity-90 transition">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
              <FaYoutube size={20} />
            </a>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs font-bold text-slate-600 uppercase tracking-wide">
            <Link href="/company/about-us" className="hover:text-blue-600">About Us</Link>
            <a href="#" className="hover:text-blue-600">TM Search</a>
            <Link href="/company/learning" className="hover:text-blue-600">Learning</Link>
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Refund Policy</a>
            <a href="#" className="hover:text-blue-600">Data Storage Policy</a>
            <a href="#" className="hover:text-blue-600">Terms & Condition</a>
            <Link href="/company/career" className="hover:text-blue-600">Careers</Link>
            <a href="#" className="hover:text-blue-600">Reviews</a>
          </div>
          
        </div>
      </div>

      {/* --- 3. Disclaimer Section --- */}
      <div className="bg-[#f8fafc] py-6 border-b border-gray-200">
        <div className="container mx-auto px-4 text-xs text-slate-500 leading-relaxed text-justify">
          <span className="font-bold text-slate-700">Disclaimer:</span> Perfect Advice together operate as a Legaltech platform, not affiliated with any government authority. Services are delivered either by our in-house experts or independent professionals from our global network. All services are professional and chargeable. By using this site, you agree to these terms.
        </div>
      </div>

      {/* --- 4. Copyright --- */}
      <div className="bg-[#0f172a] text-white py-4 text-center text-sm font-medium">
        Perfect Advice : Your Trusted Partner
      </div>

    </footer>
  );
};

export default Footer;