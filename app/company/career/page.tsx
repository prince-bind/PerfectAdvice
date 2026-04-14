import { 
  CalendarDays, 
  Laptop, 
  Sun, 
  Globe, 
  TrendingUp, 
  FileCheck, 
  Users, 
  Cpu, 
  PartyPopper 
} from 'lucide-react';

const CareerPage = () => {
  return (
    <div className="font-sans bg-slate-50 min-h-screen pb-20">

      {/* ==============================
          1. HERO BANNER ("We're hiring now!")
      ============================== */}
      <section className="relative bg-[#1e3a8a] py-24 md:py-32 overflow-hidden">
        {/* Decorative Waves/Blobs (CSS Shapes) */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-blue-400/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-blue-500/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        
        {/* Little Plus/Circle Decorations */}
        <div className="absolute top-10 left-10 text-blue-300 text-xl opacity-50">+</div>
        <div className="absolute bottom-20 right-1/4 text-blue-300 text-xl opacity-50">+</div>
        <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full border border-red-400 opacity-60"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
            We're hiring now!
          </h1>
        </div>
      </section>

      {/* ==============================
          1.5 ABOUT US SECTION
      ============================== */}
      <section className="py-20 bg-slate-50 relative overflow-visible">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left Image + Overlapping Card Container */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
                  alt="Team outdoor meeting" 
                  className="w-full h-[450px] object-cover"
                />
              </div>

              {/* Overlapping Card */}
              <div className="absolute -bottom-10 -left-6 md:-left-12 bg-white p-8 rounded-xl shadow-xl max-w-sm border-l-4 border-[#1e3a8a] z-20">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-[#1e3a8a] pb-2 inline-block">
                  About Us
                </h2>
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  It doesn't matter where you're coming from, how you look or any other aspect about yourself. 
                  If, you're passionate about what you do, we can't wait to meet you.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="rounded-xl overflow-hidden shadow-2xl mt-12 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" 
                alt="Team working at office" 
                className="w-full h-[450px] object-cover"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* ==============================
          2. JOIN US SECTION (Image + Benefits)
      ============================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1000&auto=format&fit=crop" 
                  alt="Colleagues talking" 
                  className="w-full h-auto object-cover min-h-100"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2">
              <span className="text-blue-700 font-bold text-sm uppercase tracking-wider mb-2 block">
                ALL BENEFITS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Join us to get more experience
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Embrace challenges and innovate with us. Your journey to professional excellence starts here.
              </p>

              {/* Benefits Icons Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                
                {/* Item 1 */}
                <div className="flex flex-col items-center md:items-start gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white mb-2">
                    <CalendarDays size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Flexible work</h3>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center md:items-start gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white mb-2">
                    <Laptop size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">New devices</h3>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center md:items-start gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white mb-2">
                    <Sun size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Free holiday</h3>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==============================
          3. WHY YOU SHOULD JOIN US (Grid)
      ============================== */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why you should join us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center flex flex-col items-center h-full">
              <div className="w-16 h-16 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white mb-6">
                <Globe size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Company</h3>
              <p className="text-slate-500 text-sm">Working in Global teams, Global mindset</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center flex flex-col items-center h-full">
              <div className="w-16 h-16 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white mb-6">
                <TrendingUp size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Growing Company</h3>
              <p className="text-slate-500 text-sm">Lot of opportunities to Learn, Travel, Grow</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center flex flex-col items-center h-full">
              <div className="w-16 h-16 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white mb-6">
                <FileCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Flexible Policies</h3>
              <p className="text-slate-500 text-sm">Open work environment</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center flex flex-col items-center h-full">
              <div className="w-16 h-16 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white mb-6">
                <Users size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fluid Team Structure</h3>
              <p className="text-slate-500 text-sm">You can play different roles</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center flex flex-col items-center h-full">
              <div className="w-16 h-16 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white mb-6">
                <Cpu size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Leading Technologies</h3>
              <p className="text-slate-500 text-sm">Work on the latest & complex systems & tech.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center flex flex-col items-center h-full">
              <div className="w-16 h-16 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white mb-6">
                <PartyPopper size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">We have lots of fun</h3>
              <p className="text-slate-500 text-sm">Amazing people, lot of celebrations</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CareerPage;