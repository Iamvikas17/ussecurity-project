import React from "react";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck } from "lucide-react";
import IndiaMap from "../assets/IndiaMap1.png";
// Pin coordinates mapped to the SVG viewBox
const activeStates = [
  { name: "Rajasthan", x: "22%", y: "38%" },
  { name: "Gujarat", x: "11%", y: "49%" },
  { name: "Madhya Pradesh", x: "35%", y: "47%" },
  { name: "Maharashtra", x: "25%", y: "60%" },
  { name: "Goa", x: "20%", y: "70%" },
  { name: "Tamil Nadu", x: "36%", y: "84%" },
];

export default function OperationalMap() {
  return (
    <section className="py-24 bg-[#13315c] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <h4 className="text-[#fef200] font-black text-xs uppercase tracking-[0.4em] mb-4">
              Pan-India Operations
            </h4>
            <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              STRATEGIC <br />
              <span className="text-[#fef200] italic">LOCATIONS.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-lg font-medium border-l-4 border-[#fef200] pl-6">
            Establishing a gold standard of security across 6 major industrial
            states.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: The Map with Tied Pins */}
          <div className="lg:col-span-7 relative bg-black/20 rounded-3xl p-4 md:p-10 border border-white/10 backdrop-blur-sm min-h-[500px] flex items-center justify-center">
            {/* The India Map Image */}
            <div className="relative w-full max-w-[500px] aspect-[4/5]">
              <img
                src={IndiaMap}
                alt="India Map Outline"
                className="w-full h-full object-contain opacity-100 brightness-100 "
              />

              {/* Pins tied to specific coordinates */}
              {activeStates.map((state, index) => (
                <motion.div
                  key={index}
                  style={{ left: state.x, top: state.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing Radar Effect #fef200*/}
                    <div className="absolute w-12 h-12 bg-[#fef200]/20 rounded-full animate-ping"></div>

                    <MapPin
                      className="text-[#c5d610] relative z-10 drop-shadow-[0_0_10px_rgba(254,242,0,0.8)]"
                      size={32}
                      fill="red"
                    />

                    {/* Desktop Hover Label */}
                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-[#0a1a5c] px-3 py-1 rounded-sm text-[10px] font-black uppercase whitespace-nowrap shadow-2xl z-20">
                      {state.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: The Legend/State List for Mobile */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-8 italic">
              Active Deployment Zones
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {activeStates.map((state, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/10 hover:border-[#fef200]/40 transition-all group"
                >
                  <div className="bg-[#fef200] p-2 rounded-lg text-black group-hover:scale-110 transition-transform">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-white font-bold uppercase tracking-widest text-sm">
                    {state.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

