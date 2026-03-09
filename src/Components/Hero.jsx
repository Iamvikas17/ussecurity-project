import { PhoneCall, ShieldCheck, ChevronRight, Star } from "lucide-react";
import heroImage from "../assets/hero.jpeg";
export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-[#0a1a5c] overflow-hidden">
      {/* Background with focal point on the right */}
      <div className="absolute inset-0 z-0">
        {/* "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000" */}
        <img
          src={heroImage}
          alt="Security Force"
          className="w-full h-full object-cover object-right opacity-90 grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a5c] via-[#0a1a5c]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT SIDE: The Authority (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
              <ShieldCheck className="text-[#fef200]" size={18} />
              <span className="text-white text-[10px] font-black tracking-widest uppercase">
                PSARA Licensed | ISO Certified Agency
              </span>
            </div>

            <h1 className="text-white text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
              BEYOND <span className="text-[#fef200]">GUARDING.</span> <br />
              ABSOLUTE <span className="italic">VIGILANCE.</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
              Deploying India's most disciplined tactical personnel. From
              industrial complexes to high-profile executive protection, we
              deliver a standard of safety that is second to none.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="tel:+918655015500"
                className="flex items-center justify-center gap-3 bg-[#fef200] text-black px-10 py-5 rounded-sm font-black text-lg hover:bg-white transition-all shadow-[0_20px_50px_rgba(254,242,0,0.2)]"
              >
                <PhoneCall size={20} />
                SECURE NOW
              </a>
              <button className="px-10 py-5 rounded-sm border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-all">
                OUR EXPERTISE
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: The Proof (5 Columns) - Fills the empty space */}
          {/* <div className="lg:col-span-5 relative hidden lg:block">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-2xl transform hover:-rotate-2 transition-transform duration-500">
              <div className="flex justify-between items-start mb-10">
                <div className="bg-[#fef200] text-black px-4 py-1 text-[10px] font-black rounded-full uppercase">
                  Live Status: Active
                </div>
                <div className="flex gap-1 text-[#fef200]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-4xl font-black text-white">15+</span>
                  <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest leading-tight">
                    Years of Tactical <br /> Leadership
                  </span>
                </div>
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-4xl font-black text-white">500+</span>
                  <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest leading-tight">
                    Corporate Clients <br /> Nationwide
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-white">24/7</span>
                  <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest leading-tight">
                    Rapid Response <br /> Deployment
                  </span>
                </div>
              </div>

              <button className="w-full mt-10 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-xl transition-all">
                Download Profile
              </button>
            </div>

            {/* Decorative accent element */}
          {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#fef200] -z-10 rounded-full blur-3xl opacity-20"></div>
          </div> */}
          {/* RIGHT SIDE: The Proof (5 Columns) - Fills the empty space */}
          <div className="lg:col-span-5 relative block mt-12 lg:mt-0">
            {" "}
            {/* Removed 'hidden lg:block' so it shows on mobile */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-2xl lg:transform lg:hover:-rotate-2 transition-transform duration-500">
              <div className="flex justify-between items-start mb-10">
                <div className="bg-[#fef200] text-black px-4 py-1 text-[10px] font-black rounded-full uppercase">
                  Live Status: Active
                </div>
                <div className="flex gap-1 text-[#fef200]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-4xl font-black text-white">15+</span>
                  <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest leading-tight">
                    Years of Tactical <br /> Leadership
                  </span>
                </div>
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-4xl font-black text-white">500+</span>
                  <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest leading-tight">
                    Corporate Clients <br /> Nationwide
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-white">24/7</span>
                  <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest leading-tight">
                    Rapid Response <br /> Deployment
                  </span>
                </div>
              </div>

              {/* DOWNLOAD BUTTON: Replace 'your-file-path.pdf' with the actual path to your file */}
              <a
                href="/Ticket2.pdf"
                download="USS_Company_Profile.pdf"
                className="inline-flex items-center justify-center w-full mt-10 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-xl transition-all"
              >
                Download Profile
              </a>
            </div>
            {/* Decorative accent element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#fef200] -z-10 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
