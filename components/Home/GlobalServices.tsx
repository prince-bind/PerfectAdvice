import { MapPin, Globe } from 'lucide-react';

const GlobalServices = () => {
  const cities = ["Delhi", "Bengaluru", "Chennai", "Gurgaon"];

  return (
    <section className="py-24 bg-linear-to-b from-[#F7F7FF] to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-4">
            Our Presence
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Delivering excellence and expert advisory services with a comprehensive nationwide reach across India.
          </p>
        </div>

        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Presence Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-blue-100/50 border border-gray-100 p-8 md:p-12 mb-12 transform hover:scale-[1.01] transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              
              {/* Flag & Icon Side */}
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Globe className="text-white w-12 h-12 md:w-16 md:h-16 animate-pulse-slow" strokeWidth={1.5} />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl shadow-md p-1 border border-gray-50">
                  <img 
                    src="https://flagcdn.com/w80/in.png" 
                    alt="India flag"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-[#1e1b4b] mb-3">Headquartered in India</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Providing strategic business solutions, regulatory compliance, and advisory expertise to domestic and international clients from our core hubs in India.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                   <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 italic">#NationwideReach</span>
                   <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold border border-green-100 italic">#IndianExpertise</span>
                </div>
              </div>

            </div>
          </div>

          {/* Cities Grid */}
          <div className="text-center mb-8">
            <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
              <MapPin size={16} />
              Major Operations Hubs
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {cities.map((city) => (
                <div 
                  key={city}
                  className="bg-white/60 backdrop-blur-sm border border-gray-100 rounded-xl py-4 px-2 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all cursor-default group"
                >
                  <span className="text-gray-700 font-semibold group-hover:text-blue-600 transition-colors">
                    {city}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default GlobalServices;