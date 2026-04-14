import {
  Phone,
  MessageCircle,
  MapPin,
  Briefcase,
  FileText,
  Plus,
} from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="font-sans bg-slate-50 min-h-screen pb-20">

      {/* ==============================
          1. HERO BANNER
      ============================== */}
      <section className="relative bg-[#1a73e8] py-10 overflow-hidden">

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase mb-4 tracking-wide">
            CONTACT US
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            However, if you are not satisfied with our services, please get in touch with us immediately.
          </p>
        </div>
      </section>

      {/* ==============================
          2. MAIN CONTENT (Info + Form)
      ============================== */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

            {/* --- LEFT COLUMN: QUICK ENQUIRY INFO --- */}
            <div className="w-full lg:w-1/2 flex flex-col gap-10">
              <h2 className="text-3xl font-bold text-[#1e1b4b]">Quick Enquiry</h2>

              {/* 1. Global Sales */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center shrink-0 text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Global Sales Enquiries</h3>
                  <p className="text-red-500 text-sm mb-1">(+91) 9818024481 (India)</p>
                  {/* <p className="text-red-500 text-sm mb-1">(+1) 6292766228 (USA)</p> */}
                  {/* <p className="text-red-500 text-sm">(+44) 480486372 (UK)</p> */}
                </div>
              </div>

              {/* 2. Whatsapp */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center shrink-0 text-white">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Global Sales Enquiries on Whatsapp</h3>
                  <p className="text-red-500 text-sm">(+91) 9818024481 (Whatsapp No.)</p>
                </div>
              </div>

              {/* Grid for smaller items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Complaints */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center shrink-0 text-white">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Complaints</h3>
                    <p className="text-red-500 text-sm">nikunj@perfectadvice.in</p>
                  </div>
                </div>

                {/* Careers */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-500 flex items-center justify-center shrink-0 text-white">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Careers</h3>
                    <p className="text-red-500 text-sm">nikunj@perfectadvice.in</p>
                  </div>
                </div>
              </div>

              {/* Head Office */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-sky-400 flex items-center justify-center shrink-0 text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Head Office</h3>
                  <div className="space-y-4 mt-2">
                    {[
                      {
                        city: "CHENNAI",
                        address: "164, Linghi Chetty Street, Singapore Plaza, 2nd Floor, Parrys, Chennai-600001, INDIA"
                      },
                      {
                        city: "BENGALURU",
                        address: "56, Yamuna Bai Road, Madhava Nagar, Gandhi Nagar, Bengaluru, Karnataka-560001, INDIA"
                      },
                      {
                        city: "DELHI",
                        address: "07, 1st Floor, Bharat Chambers, Scindia House, Connaught Place, New Delhi-110001, INDIA"
                      },
                      {
                        city: "GURGAON",
                        address: "LGF, 1101, Sector-43, Gurgaon-122002, INDIA"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="font-bold text-[#1a73e8] text-xs tracking-wider mb-1">
                          {item.city} :
                        </span>
                        <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                          {item.address}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* --- RIGHT COLUMN: CONTACT FORM --- */}
            <div className="w-full lg:w-1/2">
              <div className="bg-[#1a73e8] rounded-lg p-6 md:p-8 shadow-2xl h-full">

                <form className="flex flex-col gap-5">

                  {/* Row 1: Name & Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name*"
                      className="w-full px-4 py-3 rounded bg-white text-slate-800 placeholder:text-slate-500 text-sm outline-none"
                    />

                    <div className="flex bg-white rounded overflow-hidden">
                      <div className="flex items-center justify-center px-3 bg-gray-100 border-r border-gray-200 text-sm text-slate-600 gap-1 min-w-17.5">
                        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-auto" />
                        +91
                      </div>
                      <input
                        type="tel"
                        placeholder="Mobile Number*"
                        className="w-full px-3 py-3 text-slate-800 placeholder:text-slate-500 text-sm outline-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email Id*"
                    className="w-full px-4 py-3 rounded bg-white text-slate-800 placeholder:text-slate-500 text-sm outline-none"
                  />

                  {/* Description */}
                  <textarea
                    rows={4}
                    placeholder="Briefly describe the service you want or your issues."
                    className="w-full px-4 py-3 rounded bg-white text-slate-800 placeholder:text-slate-500 text-sm outline-none resize-none"
                  />

                  {/* Captcha */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <label className="text-white text-sm font-bold md:col-span-2">
                      Are you Human? : (1) + (9) =
                    </label>
                    <input
                      type="text"
                      placeholder="Answer"
                      className="w-full px-4 py-3 rounded bg-white text-slate-800 placeholder:text-slate-500 text-sm outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="button"
                    className="w-3/4 md:w-1/2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-3 rounded mt-2 transition-colors self-start shadow-lg"
                  >
                    Send Message
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==============================
          3. INDIA BRANCHES
      ============================== */}
      <section className="py-12 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1e1b4b] mb-8">
            India Branches
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Noida', 'Delhi', 'Mumbai', 'Bengaluru', 'Chennai'].map((city) => (
              <div key={city} className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600 fill-current" size={20} />
                  <span className="font-bold text-slate-800 text-lg">{city}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Plus size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;