import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const ConsultationBanner = () => {
  return (
    <section className="bg-[#0b2553] pt-12 md:pt-16 overflow-hidden relative font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between relative z-10">
        
        {/* Left Content */}
        <div className="md:w-[55%] pb-12 md:pb-16 z-20">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.2] mb-8">
            Still Confused About Your Business Needs? Consult With Our Experts Today To Know More!
          </h2>
          <Link href="/schedule-meeting" className="bg-white text-black font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-sm w-fit">
            Schedule a Meeting 
            <div className="border-[1.5px] border-[#122e70] rounded-full p-[1px]">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </div>
          </Link >
        </div>
        {/* Right Content - Image and Circle */}
        <div className="md:w-[45%] h-full flex justify-center md:justify-end items-end relative mt-8 md:mt-0 pt-10 md:pt-0">
          {/* Circle Background */}
          <div className="absolute right-0 bottom-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] bg-[#1a4b9c] rounded-full translate-x-12 translate-y-12 md:translate-x-16 lg:translate-x-20 -z-10 shadow-inner"></div>
          
          {/* Main Image */}
          {/* If you have the exact transparent image of the woman, replace this src below */}
          <img 
            src="/girl.png" 
            alt="Consultant Expert" 
            className="relative z-10 w-full max-w-[300px] md:max-w-[380px] lg:max-w-[420px] object-cover object-top"
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              height: 'auto',
              maxHeight: '450px',
              borderRadius: '250px 250px 0 0'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
