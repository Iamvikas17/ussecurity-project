import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock } from "lucide-react";

const SecurityLoader = () => {
  return (
    <div className="fixed inset-0 bg-[#0a1a5c] flex flex-col items-center justify-center z-[9999]">
      <div className="relative">
        {/* Outer Rotating Scan Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-24 h-24 border-2 border-dashed border-[#fef200] rounded-full opacity-30"
        />

        {/* Inner Pulsing Shield */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-[#fef200]"
        >
          <ShieldCheck size={48} strokeWidth={1.5} />
        </motion.div>
      </div>

      {/* Loading Text with "Scanning" feel */}
      <div className="mt-8 text-center">
        <motion.h2
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white font-black uppercase tracking-[0.4em] text-xs mb-2"
        >
          Initializing Secure Protocol
        </motion.h2>

        <div className="flex items-center justify-center gap-2">
          <Lock size={12} className="text-[#fef200]" />
          <span className="text-gray-400 text-[10px] uppercase tracking-widest font-medium">
            Verifying Assets...
          </span>
        </div>
      </div>

      {/* Progress Bar Line */}
      <div className="w-48 h-[2px] bg-white/10 mt-6 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#fef200] w-1/2"
        />
      </div>
    </div>
  );
};

export default SecurityLoader;
