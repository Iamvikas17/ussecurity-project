import { Phone, ShieldAlert, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function EmergencyCTA() {
  return (
    /* Transition: Prussian Blue (#0b2545) -> Deep Navy -> Pure Black */
    <section className="py-24 bg-gradient-to-b from-[#0b2545] via-[#05102a] to-black relative overflow-hidden border-t border-white/5">
      {/* Tactical Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fef200]/5 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-20 rounded-3xl shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content: The "Hook" */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#fef200] px-4 py-2 rounded-full">
                <ShieldAlert className="text-black" size={18} />
                <span className="text-black text-[10px] font-black uppercase tracking-widest">
                  24/7 Rapid Response Active
                </span>
              </div>

              <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                SECURE YOUR <br />
                <span className="text-[#fef200] italic">ASSETS TODAY.</span>
              </h2>

              <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                Whether you need elite bouncers for a VVIP event or 24/7
                industrial guarding, U.S Security provides the gold standard in
                tactical protection since 2010.
              </p>
            </div>

            {/* Right Content: The Action */}
            <div className="lg:col-span-4">
              <div className="flex flex-col gap-4">
                <motion.a
                  href="tel:+918655015500"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-between bg-[#fef200] p-6 rounded-xl shadow-[0_0_30px_rgba(254,242,0,0.2)] hover:shadow-[0_0_50px_rgba(254,242,0,0.4)] transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-black p-3 rounded-lg text-[#fef200]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-black text-[10px] font-black uppercase tracking-widest opacity-60">
                        Call Now
                      </p>
                      <p className="text-black text-xl font-bold tracking-tight">
                        +91 86550 15500
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-black group-hover:translate-x-2 transition-transform" />
                </motion.a>

                <Link to="contact">
                  <button className="w-full py-5 border border-white/20 text-white font-bold text-xs tracking-[0.3em] uppercase hover:bg-white/5 transition-all rounded-xl cursor-pointer">
                    {/* Request a Custom Quote */} Contact US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Tagline */}
        <p className="text-center mt-16 text-gray-600 text-[10px] font-bold uppercase tracking-[0.5em]">
          Certified PSARA Agency • India's Most Disciplined Force
        </p>
      </div>
    </section>
  );
}
