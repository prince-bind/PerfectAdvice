import { Calendar } from 'lucide-react';

interface NewsletterItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageTitle: string;
  category: string;
}

const newsletterData: NewsletterItem[] = [
  {
    id: 1,
    title: "RBI Issues a Circular in Regard to the Amendment of the...",
    excerpt: "RBI Issues a Circular in Regard to the Amendment of the Master Direction on KYC",
    date: "03 May, 2023",
    imageTitle: "RBI Issues a Circular in Regard to the Amendment of the Master Direction on KYC",
    category: "RBI"
  },
  {
    id: 2,
    title: "BSE Notifies in Regard to Market WidePosition Limit for...",
    excerpt: "BSE Notifies in Regard to Market WidePosition Limit for Equity Derivatives Segment",
    date: "03 May, 2023",
    imageTitle: "BSE Notifies in Regard to Market Wide Position Limit for Equity Derivatives Segment",
    category: "BSE"
  },
  {
    id: 3,
    title: "MCA Notifies in Regard to the Launch of STK-2 Form and...",
    excerpt: "MCA Notifies in Regard to the Launch of STK-2 Form and C-PACE Functionality",
    date: "02 May, 2023",
    imageTitle: "MCA Notifies in Regard to the Launch of STK-2 Form and C-PACE Functionality",
    category: "MCA"
  },
  {
    id: 4,
    title: "IRDAI Issues IRDAI Information and Cyber Security Guide...",
    excerpt: "IRDAI Issues IRDAI Information and Cyber Security Guidelines, 2023",
    date: "02 May, 2023",
    imageTitle: "IRDAI Issues IRDAI Information and Cyber Security Guidelines, 2023",
    category: "IRDAI"
  },
  {
    id: 5,
    title: "The Income Tax Department Enables e-Pay Tax Service for...",
    excerpt: "The Income Tax Department Enables e-Pay Tax Service for RBL Bank with Over Counter and Net Banking Option...",
    date: "01 May, 2023",
    imageTitle: "The Income Tax Department Enables e-Pay Tax Service for RBL Bank",
    category: "Income Tax"
  },
  {
    id: 6,
    title: "NSE Issued Changes to the Framework to Enable Verificat...",
    excerpt: "NSE Issued Changes to the Framework to Enable Verification of Upfront Collection of Margins from Clients...",
    date: "01 May, 2023",
    imageTitle: "NSE Issued Changes to the Framework to Enable Verification of Upfront Collection",
    category: "NSE"
  },
  {
    id: 7,
    title: "RBI Notified Regarding the Remittances to International...",
    excerpt: "RBI Notified Regarding the Remittances to International Financial Services Centres (IFSCs) under the Libe...",
    date: "01 May, 2023",
    imageTitle: "RBI Notified Regarding the Remittances to IFSC under LRS",
    category: "RBI"
  },
  {
    id: 8,
    title: "RBI Notifies Regarding Review of General Credit Card (G...",
    excerpt: "RBI Notifies Regarding Review of General Credit Card (GCC) Facility",
    date: "01 May, 2023",
    imageTitle: "RBI Notifies Regarding Review of General Credit Card (GCC) Facility",
    category: "RBI"
  },
  {
    id: 9,
    title: "SEBI Issues a Circular in Regard to Procedure for Imple...",
    excerpt: "SEBI Issues a Circular in Regard to Procedure for Implementation of Section 12A of the Weapons of Mass De...",
    date: "29 Apr, 2023",
    imageTitle: "SEBI Issues a Circular in Regard to Procedure for Implementation of Section 12A",
    category: "SEBI"
  }
];

const NewsletterHero = () => (
  <section className="relative bg-[#0A348E] text-white py-20 px-4 overflow-hidden border-b border-blue-900/10">
    {/* Background Shapes */}
    <div className="absolute inset-0">
      {/* Wave Blob Left */}
      <div className="absolute top-0 -left-10 w-[40%] h-full bg-[#1146B8] rounded-[0%_100%_70%_30%/0%_40%_60%_100%] opacity-40 blur-xl translate-x-[-20%]"></div>
      {/* Wave Blob Right */}
      <div className="absolute top-0 -right-10 w-[40%] h-full bg-[#1146B8] rounded-[100%_0%_30%_70%/40%_0%_100%_60%] opacity-40 blur-xl translate-x-[20%]"></div>
      {/* Small Blobs for richness */}
      <div className="absolute top-1/4 right-[10%] w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 left-[5%] w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-sm">
          Newsletter
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-white/20"></div>
          <p className="text-lg md:text-xl font-light tracking-[0.2em] uppercase opacity-90">
            Never Stop Learning
          </p>
          <div className="h-[1px] w-12 bg-white/20"></div>
        </div>
      </div>
    </div>
  </section>
);

const NewsletterCard = ({ item }: { item: NewsletterItem }) => (
  <div className="group bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100/50">
    {/* Card Header (Image Section) */}
    <div className="relative h-56 bg-gradient-to-br from-[#1257E3] to-[#0A348E] p-8 flex flex-col justify-between overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute -left-10 bottom-0 w-32 h-32 bg-blue-400/30 rounded-full blur-xl"></div>
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      </div>
      
      {/* "E" Logo top right - Styled to match images */}
      <div className="absolute top-5 right-5 flex items-center justify-center">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 border-2 border-white/40 rounded-full transition-transform duration-500 group-hover:rotate-180"></div>
          <div className="bg-white/10 backdrop-blur-md w-9 h-9 rounded-full flex items-center justify-center border border-white/50 text-white font-bold text-xl drop-shadow-md">
            E
          </div>
        </div>
      </div>

      {/* Main Illustration Text (Overlaid on Header) */}
      <div className="mt-auto relative z-10">
        <h3 className="text-white font-bold text-lg md:text-xl leading-tight drop-shadow-lg line-clamp-3">
          {item.imageTitle}
        </h3>
      </div>
      
      {/* Glassy overlay effect */}
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    {/* Card Body */}
    <div className="p-8 flex-grow flex flex-col">
      <h4 className="text-[#1A1A1A] font-bold text-xl mb-4 line-clamp-2 leading-tight group-hover:text-[#0A348E] transition-colors duration-300">
        {item.title}
      </h4>
      <p className="text-gray-500 text-sm md:text-base mb-8 line-clamp-2 flex-grow font-normal leading-relaxed">
        {item.excerpt}
      </p>

      <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
        <button className="bg-[#0A348E] hover:bg-[#1257E3] text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0">
          Read More
        </button>
        <div className="flex items-center gap-2.5 text-gray-500 font-medium">
          <Calendar size={16} className="text-[#0A348E] opacity-70" />
          <span className="text-xs uppercase tracking-wider">{item.date}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-white">
      <NewsletterHero />
      
      <main className="max-w-7xl mx-auto px-6 py-24">
        {/* Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {newsletterData.map((item) => (
            <NewsletterCard key={item.id} item={item} />
          ))}
        </div>
        
        {/* Pagination / Load More (Optional but good for UI richness) */}
        <div className="mt-20 flex justify-center">
          <button className="px-10 py-4 border-2 border-gray-200 rounded-xl font-bold text-gray-600 hover:border-[#0A348E] hover:text-[#0A348E] transition-all duration-300 hover:bg-blue-50/50">
            Show More Newsletters
          </button>
        </div>
      </main>
    </div>
  );
}