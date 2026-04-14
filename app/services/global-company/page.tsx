"use client";

const regions = [
  {
    name: 'America',
    countries: [
      { name: 'USA', code: 'us' },
      { name: 'British Virgin Island', code: 'vg' },
      { name: 'Cayman Islands', code: 'ky' },
      { name: 'Panama', code: 'pa' },
      { name: 'Bermuda', code: 'bm' },
      { name: 'Belize', code: 'bz' },
      { name: 'St. Kitts and Nevis', code: 'kn' },
      { name: 'Canada', code: 'ca' },
      { name: 'Argentina', code: 'ar' },
      { name: 'Barbados', code: 'bb' },
      { name: 'Brazil', code: 'br' },
      { name: 'Venezuela', code: 've' },
      { name: 'Dominica', code: 'dm' },
      { name: 'St Lucia', code: 'lc' },
      { name: 'Antigua and Barbuda', code: 'ag' },
      { name: 'Grenada', code: 'gd' },
    ],
  },
  {
    name: 'Africa',
    countries: [
      { name: 'Jersey Islands', code: 'je' },
      { name: 'Liberia', code: 'lr' },
      { name: 'Egypt', code: 'eg' },
      { name: 'Mauritius', code: 'mu' },
      { name: 'Seychelles', code: 'sc' },
      { name: 'Morocco', code: 'ma' },
      { name: 'South Africa', code: 'za' },
    ],
  },
  {
    name: 'Europe',
    countries: [
      { name: 'Netherlands', code: 'nl' },
      { name: 'Switzerland', code: 'ch' },
      { name: 'Luxembourg', code: 'lu' },
      { name: 'Gibraltar', code: 'gi' },
      { name: 'Anguilla', code: 'ai' },
      { name: 'Norway', code: 'no' },
      { name: 'Poland', code: 'pl' },
      { name: 'United Kingdom', code: 'gb' },
      { name: 'Germany', code: 'de' },
      { name: 'Ireland', code: 'ie' },
      { name: 'France', code: 'fr' },
      { name: 'Greece', code: 'gr' },
      { name: 'Russia', code: 'ru' },
      { name: 'Malta', code: 'mt' },
      { name: 'Sweden', code: 'se' },
      { name: 'Spain', code: 'es' },
    ],
  },
  {
    name: 'Asia',
    countries: [
      { name: 'Singapore', code: 'sg' },
      { name: 'Hong Kong', code: 'hk' },
      { name: 'Bangladesh', code: 'bd' },
      { name: 'Myanmar', code: 'mm' },
      { name: 'Sri Lanka', code: 'lk' },
      { name: 'Vietnam', code: 'vn' },
      { name: 'Cambodia', code: 'kh' },
      { name: 'Indonesia', code: 'id' },
      { name: 'Thailand', code: 'th' },
      { name: 'Philippines', code: 'ph' },
      { name: 'Turkey', code: 'tr' },
      { name: 'Saudi Arabia', code: 'sa' },
      { name: 'Israel', code: 'il' },
      { name: 'Japan', code: 'jp' },
      { name: 'Malaysia', code: 'my' },
      { name: 'China', code: 'cn' },
      { name: 'Bahrain', code: 'bh' },
      { name: 'Cyprus', code: 'cy' },
      { name: 'Oman', code: 'om' },
      { name: 'Kuwait', code: 'kw' },
      { name: 'Jordan', code: 'jo' },
      { name: 'East Timor', code: 'tl' },
      { name: 'Yemen', code: 'ye' },
      { name: 'Bhutan', code: 'bt' },
      { name: 'Brunei', code: 'bn' },
      { name: 'Georgia', code: 'ge' },
      { name: 'Iran', code: 'ir' },
      { name: 'Iraq', code: 'iq' },
    ],
  },
  {
    name: 'Oceania',
    countries: [
      { name: 'Bahamas', code: 'bs' },
      { name: 'Australia', code: 'au' },
      { name: 'New Zealand', code: 'nz' },
      { name: 'Vanuatu', code: 'vu' },
      { name: 'Papua New Guinea', code: 'pg' },
    ],
  },
  {
    name: 'Middle East',
    countries: [
      { name: 'UAE', code: 'ae' },
    ],
  },
];

const GlobalCompany = () => {
  return (
    <div className="font-sans bg-white text-[#1f2937]">

      {/* HERO */}
      <section className="relative bg-[#1535a3] overflow-hidden py-14 px-6 text-center">
        {/* Wave-like blobs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full opacity-20" fill="none">
            <path d="M0,100 C200,180 400,20 600,100 C800,180 1000,20 1200,100 C1350,160 1400,80 1440,100 L1440,200 L0,200Z" fill="white"/>
          </svg>
          <div className="absolute top-[-60px] left-[-80px] w-[340px] h-[340px] bg-[#2563eb] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-[-80px] right-[-60px] w-[300px] h-[300px] bg-[#1d4ed8] rounded-full opacity-20 blur-3xl"></div>
        </div>

        {/* Breadcrumb */}
        <div className="relative z-10 flex items-center gap-1.5 justify-start max-w-6xl mx-auto text-[13px] text-blue-200 mb-8">
          <span className="hover:text-white cursor-pointer transition">Home</span>
          <span className="text-blue-300">/</span>
          <span className="text-white">Global Company Formation</span>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-[36px] md:text-[44px] font-extrabold text-white tracking-widest uppercase mb-4 leading-tight">
            GLOBAL COMPANY FORMATION
          </h1>
          <p className="text-[16px] text-blue-100 font-medium">
            We offer services in <span className="font-bold text-white">80+</span> countries.
          </p>
        </div>
      </section>

      {/* REGIONS */}
      <section className="py-12 px-6 md:px-14 lg:px-24 max-w-[1400px] mx-auto space-y-14">
        {regions.map((region) => (
          <div key={region.name}>
            {/* Section header */}
            <div className="flex items-center gap-3 mb-6">
              {/* Blue grid icon */}
              <div className="grid grid-cols-2 gap-[3px] w-7 h-7 shrink-0">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`rounded-[2px] ${i === 0 || i === 3 ? 'bg-[#1a73e8]' : 'bg-[#93c5fd]'}`}></div>
                ))}
              </div>
              <h2 className="text-[22px] md:text-[24px] font-bold text-[#111827]">
                Supporting Entrepreneurial Dreams in{' '}
                <span className="text-[#1a73e8]">{region.name}</span>
              </h2>
            </div>

            {/* Country grid */}
            <div className="border border-gray-200 rounded-[12px] p-6 bg-white shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {region.countries.map((country) => (
                  <button
                    key={country.name}
                    className="flex items-center justify-between gap-3 border border-gray-200 rounded-[8px] px-4 py-3 bg-white hover:border-[#1a73e8] hover:shadow-md transition group text-left"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={`https://flagcdn.com/w40/${country.code}.png`}
                        alt={country.name}
                        className="w-7 h-5 object-cover rounded-sm shrink-0 shadow-sm"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://flagcdn.com/w40/un.png';
                        }}
                      />
                      <span className="text-[13.5px] font-medium text-[#374151] truncate group-hover:text-[#1a73e8] transition">
                        {country.name}
                      </span>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#1a73e8] shrink-0 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default GlobalCompany;