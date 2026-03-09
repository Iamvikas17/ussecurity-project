import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const WorkInProgress = ({ pageName }) => {
  return (
    /* Background: Prussian Blue to Black transition to match your footer */
    <div className="min-h-[80vh] bg-gradient-to-b from-[#0b2545] to-black flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        {/* Animated Icon */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="inline-flex items-center justify-center w-24 h-24 bg-[#fef200] rounded-3xl mb-10 shadow-[0_0_50px_rgba(254,242,0,0.3)]"
        >
          <Construction className="text-black" size={48} />
        </motion.div>

        <h4 className="text-[#fef200] font-black text-xs uppercase tracking-[0.6em] mb-4">
          Status: Deployment Active
        </h4>
        
        <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
          {pageName} <br /> 
          <span className="text-[#fef200] italic">UNDER REVIEW.</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg mx-auto">
          Our tactical team is currently finalizing the <span className="text-white font-bold">{pageName}</span> protocols. 
          Expect a full operational rollout shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-3 bg-[#fef200] text-black px-8 py-4 rounded-sm font-black text-sm hover:bg-white transition-all"
          >
            <ArrowLeft size={18} />
            RETURN TO BASE
          </Link>
          
          <div className="flex items-center gap-3 px-8 py-4 border border-white/20 rounded-sm">
            <ShieldAlert className="text-[#fef200]" size={18} />
            <span className="text-white font-bold text-xs uppercase tracking-widest">
              SECURE ACCESS ONLY
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative Serial Number */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <p className="text-white/10 font-mono text-[10px] tracking-[1em] uppercase">
          USS-SYS-REV-2026-v2
        </p>
      </div>
    </div>
  );
};

export default WorkInProgress;