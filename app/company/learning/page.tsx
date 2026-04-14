import { Calendar, User } from 'lucide-react';

const articles = [
  {
    category: "Company Registration",
    title: "Japanese Company Types Explained: KK Vs. GK",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
    author: "Abhishek Kumar",
    date: "24 Mar, 2026",
    summary: "Selecting the right company type for company registration in Japan is the first step for foreign entrepreneurs planning to enter the Japanese market. Altho..."
  },
  {
    category: "Company Registration",
    title: "How To Start A Fintech Company In Canada In 2026: Compl...",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    author: "Monisha Chaudhary",
    date: "23 Mar, 2026",
    summary: "Canada's fintech industry is at an exciting stage of development and growth in 2026, fuelled by innovation, regulations, and an exceptionally s..."
  },
  {
    category: "Hong Kong Company Formation",
    title: "Tax Practices For Your Hong Kong Trading Company In 202...",
    image: "https://images.unsplash.com/photo-1507941097613-9f2157b69235?q=80&w=800&auto=format&fit=crop",
    author: "Abhishek Kumar",
    date: "21 Mar, 2026",
    summary: "Hong Kong remains a top choice for trading companies in 2026. Understanding the tax practices is crucial for global entrepreneurs looking for efficiency..."
  },
  {
    category: "Company Registration",
    title: "Singapore EntrePass Vs Tech.Pass Vs EP: Which One Fits...",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop",
    author: "Monisha Chaudhary",
    date: "19 Mar, 2026",
    summary: "Singapore's talent visa landscape is diverse. Comparing EntrePass, Tech.Pass, and the standard EP is essential for tech entrepreneurs and experts..."
  }
];

const trendingPosts = [
  {
    categories: ["SEBI", "SEBI Registration"],
    title: "SEBI Custodian Guidelines 2026: Key Chan...",
    author: "Monisha Chaudhary",
    date: "17 Mar, 2026",
    summary: "Custodians play a crucial role in the Indian securities market. They essentially safeguard..."
  },
  {
    categories: ["Insurance Business", "IRDAI Circulars"],
    title: "IRDAI Proposes Ind AS For Insurers From...",
    author: "Abhishek Kumar",
    date: "16 Mar, 2026",
    summary: "IRDAI has recently made an important proposal to ensure transparency in financial rep..."
  },
  {
    categories: ["SEBI"],
    title: "SEBI Introduces New AIF Regulatory Repor...",
    author: "Monisha Chaudhary",
    date: "13 Mar, 2026",
    summary: "India's capital market regulator SEBI has recently brought significant changes in the reporting..."
  },
  {
    categories: ["Ecb Norms"],
    title: "How Will RBI's ECB Reforms Benefit Ind...",
    author: "Monisha Chaudhary",
    date: "19 Feb, 2026",
    summary: "India's capital market regulator SEBI has recently brought significant changes in the reporting..."
  }
];

export default function Learning() {
  return (
    <div className="font-sans bg-white pb-20">
      <section className="bg-[#1e3a8a] py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 italic tracking-wide">Learning</h1>
        <p className="text-blue-200 text-xl font-medium">Never Stop Learning</p>
      </section>

      <div className="container mx-auto px-4 py-16 mt-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {articles.map((article, idx) => (
                <div key={idx} className="flex flex-col group cursor-pointer">
                  <div className="mb-4">
                    <span className="bg-[#1c75ff] text-white px-3 py-1 text-[11px] font-bold rounded-[3px] uppercase">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-[22px] font-bold text-slate-900 leading-[1.3] mb-4 group-hover:text-[#1c75ff] transition-colors">
                    {article.title}
                  </h2>
                  <div className="w-full aspect-[16/9] rounded-none overflow-hidden mb-5">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center gap-4 text-[13px] text-slate-500 mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-1.5 font-medium">
                      <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                        <User size={12} className="text-slate-500" />
                      </div>
                      {article.author}
                    </div>
                    <span>|</span>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar size={14} className="text-slate-400" />
                      {article.date}
                    </div>
                  </div>
                  <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                    {article.summary}
                  </p>
                  <button className="w-fit border border-[#1c75ff] text-[#1c75ff] px-5 py-2 text-[14px] font-bold hover:bg-[#1c75ff] hover:text-white transition-all rounded-[4px]">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-2 mb-10">
              <span className="bg-[#ff6a00] text-white px-2.5 py-1.5 text-[15px] font-black rounded-[4px] uppercase tracking-tighter self-stretch flex items-center">
                Trending
              </span>
              <h3 className="text-[28px] font-bold text-slate-700">Posted</h3>
            </div>

            <div className="flex flex-col gap-10">
              {trendingPosts.map((post, idx) => (
                <div key={idx} className="flex flex-col group cursor-pointer border-b border-slate-100 pb-10 last:border-0 hover:bg-slate-50/50 transition-colors p-2 -mx-2 rounded-lg">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((cat, i) => (
                      <span key={i} className="bg-[#1c75ff] text-white px-2.5 py-0.5 text-[10px] font-bold rounded-[3px] uppercase">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-[19px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#1c75ff] transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-3 text-[12px] text-slate-500 mb-4">
                    <div className="flex items-center gap-1.5 font-semibold">
                      <div className="w-4 h-4 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                        <User size={10} className="text-slate-500" />
                      </div>
                      {post.author}
                    </div>
                    <span>|</span>
                    <div className="flex items-center gap-1.5 font-semibold">
                      <Calendar size={12} className="text-slate-400" />
                      {post.date}
                    </div>
                  </div>
                  <p className="text-slate-600 text-[14px] leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}