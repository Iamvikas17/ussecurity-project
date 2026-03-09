import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

export default function MissionSection() {
  return (
    /* Transition: Prussian Blue (#0b2545) -> Deep Navy -> Pure Black */
    <section className="py-24 bg-gradient-to-b from-[#0b2545] via-[#05102a] to-black relative overflow-hidden">
      
      {/* Tactical Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h4 className="text-[#fef200] font-black text-[10px] uppercase tracking-[0.6em] mb-4">
            Our Core Mandate
          </h4>
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            VISION <span className="text-[#fef200] italic">&</span> MISSION
          </h2>
          <div className="h-1.5 w-40 bg-[#fef200] mx-auto mt-8 rounded-full shadow-[0_0_30px_rgba(254,242,0,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* MISSION CARD */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl group transition-all"
          >
            <div className="bg-[#fef200] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
              <Target className="text-black" size={32} />
            </div>
            <h3 className="text-white text-3xl font-black uppercase tracking-tight mb-6">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed italic">
              "To provide a standard of tactical protection that is second to none, 
              leveraging our 15+ years of leadership to secure 1000+ assets 
              with military-grade discipline and absolute integrity."
            </p>
          </motion.div>

          {/* VISION CARD */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl group transition-all"
          >
            <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/20 group-hover:-rotate-12 transition-transform">
              <Eye className="text-[#fef200]" size={32} />
            </div>
            <h3 className="text-white text-3xl font-black uppercase tracking-tight mb-6 text-[#fef200]">Our Vision</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To be recognized as India's most disciplined private security force, 
              expanding our strategic footprint across every major industrial hub 
              while maintaining the gold standard of Rapid Response.
            </p>
          </motion.div>
        </div>

        {/* Tactical Footer Tagline */}
        <div className="mt-20 pt-10 border-t border-white/5 text-center">
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.5em]">
            Precision Protection • Absolute Assurance
          </p>
        </div>
      </div>
    </section>
  );
}