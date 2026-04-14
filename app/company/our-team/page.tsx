
export default function OurTeam() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Header Content - Left Aligned */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[34px] md:text-[38px] font-bold text-[#1a1147] leading-tight mb-6">
              Meet Our Decision Makers
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              Network of 10,000+ Professionals with 10+ years of experience from 50+ countries to empower millions of entrepreneurs like you.
            </p>
            <button className="bg-[#1a3a8a] text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-[#152e6e] transition-colors shadow-lg w-fit">
              View All
            </button>
          </div>

          {[
            { name: "CA NIKUNJ ANAND", role: "Chartered Accountant | Founder", image: "/team/owner-photo.png" },
            { name: "CA NITIN GOEL", role: "Chartered Accountant", image: "/team/CA_NitinGoel.jpeg" },
          ].map((member, i) => (
            <div key={i} className="w-full">
              <TeamCard {...member} />
            </div>
          ))}
        </div>

        {/* Bottom Row: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "CA PIYUSH JAIN", role: "Chartered Accountant", image: "/team/CA_PiyushJain.png" },
            { name: "CA RAVI PANDEY", role: "Chartered Accountant", image: "/team/Ravi.jpeg" },
            { name: "ADV. ANSHUL BANSAL", role: "Advocate", image: "/team/AnshulBansal.png" },
            { name: "ADV. RAZESH KUMAR SHARMA", role: "Advocate", image: "/team/Advocate_Razesh_Kumar_Sharma.jpeg" },
          ].map((member, i) => (
            <div key={i}>
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </section>
  );
}

const TeamCard = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <div className="bg-gray-100 rounded-none overflow-hidden flex flex-col items-center group transition-all duration-300">
    <div className="w-full aspect-[4/5] overflow-hidden p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover grayscale0"
      />
    </div>
    <div className="p-6 pt-5 w-full flex flex-col items-center text-center">
      <h3 className="text-[17px] font-bold text-[#1a1147] mb-1">{name}</h3>
      <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
      <p className="text-[#6b7280] text-xs font-medium mb-4">{role}</p>
    </div>
  </div>
);