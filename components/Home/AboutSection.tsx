import { ArrowUpRight} from 'lucide-react';
import Link from 'next/link';

const AboutSection = ({ reverse = false }) => {
  
  const content = {
    main: {
      title: "About Perfect Advice",
      p1: "Welcome to Perfect Advice - your gateway to unparalleled business solutions! We are a dynamic community of convergent thinkers, providing end-to-end client support and innovative services to over 500 global companies.",
      p2: "With a vast network of Indian offices and a collaborative team of 50,000+ lawyers and CAs, we bring years of experience to redefine industry standards. Our client-centric philosophy, coupled with expertise in compliance, audit, global company incorporation, ESG advisory, and more, sets us apart.",
      image: "/about-img1.jpg",
    },
    fintech: {
      title: "Perfect Advice: Your trusted Fintech Consulting Partner in India",
      p1: "Perfect Advice, where innovation meets consultancy excellence. With a focus on human ingenuity, our end-to-end business solutions address diverse needs in the dynamic Fintech landscape.",
      p2: "Explore Virtual CFO Services, Growth Advisory, Fintech Licensing, Restructuring, Value Stabilization, Financial and Legal Due Diligence, and more. Elevate your business with Perfect Advice - redefining consultancy through innovation and excellence.",
      image: "/about-img2.avif",
    }
  };

  // Select data based on the 'reverse' prop
  const data = reverse ? content.fintech : content.main;

  return (
    <section className="py-20 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-4">
        
        {/* Layout Logic: 
            Default: Text Left, Image Right 
            Reverse: Image Left, Text Right (flex-row-reverse flips them) 
        */}
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* --- Text Content Side --- */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            
            {/* Headline */}
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-slate-900 leading-[1.2]">
              {data.title}
            </h2>

            {/* Paragraphs */}
            <div className="text-slate-600 text-lg leading-relaxed space-y-6 text-justify">
              <p>{data.p1}</p>
              <p>{data.p2}</p>
            </div>

            {/* Actions & Ratings Container */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-8 pt-4">
              
              {/* Call to Action Button */}
              <Link href='/company/about-us' className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-md font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200 w-fit">
                Learn More
                <ArrowUpRight size={20} />
              </Link>

              {/* Ratings Block (Only render if NOT reverse) */}
              {!reverse && (
                <div className="flex flex-col gap-2 border-l-0 sm:border-l sm:pl-8 border-gray-200">
                  
                  {/* Facebook Rating */}
                  {/* <div className="flex items-center gap-2">
                    <Facebook size={20} className="text-blue-600 fill-blue-600" />
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                  </div> */}

                  {/* Google Rating */}
                  {/* <div className="flex items-center gap-2 font-semibold text-slate-700">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span>4.9 / 5 rating</span>
                  </div> */}
                </div>
              )}
            </div>
          </div>

          {/* --- Image Side --- */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-100 bg-gray-100">
              <img 
                src={data.image} 
                alt={data.title} 
                className="w-full h-full object-cover"
              />
              
              {/* Optional overlay to match style if needed */}
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;