import React from "react";
import { motion } from "framer-motion";

// Import your 12-15 client logos here
import sunfarama from "../assets/clients/sun-farmalogo.png";
import scootsy from "../assets/clients/scootsy.jpeg";
import podarSc from "../assets/clients/podar_international.png";
import memom from "../assets/clients/Pantaloons_Logo.png";
import skyGlod from "../assets/clients/Sky_gold_logo.webp";
import shriMar from "../assets/clients/Shreemarutilogo.webp";

import MillenniumBuilder from "../assets/clients/MillenniumBuilders.png";
import mhada from "../assets/clients/Mhada.jpg";
import flipcart from "../assets/clients/flifcartlog.svg";
import BigBasket from "../assets/clients/BigBasket.png";
import dosti from "../assets/clients/Dosti_logo.svg";
import ceva from "../assets/clients/image.png";
import AsthaJewels from "../assets/clients/AsthaJewels.jpeg";
import in10 from "../assets/clients/in10.webp";



const clients = [
  { logo: sunfarama, name: "ChaisSolutions" },
  { logo: scootsy, name: "Apex Planet" },
  { logo: podarSc, name: "Global Industrial" },
  { logo: memom, name: "me&mom" },
  { logo: skyGlod, name: "skyGlod" },
  { logo: shriMar, name: "shrimaruti" },
  { logo: MillenniumBuilder, name: "millennimumBuilders", bg: "white" },
  { logo: mhada, name: "mhada" },
  { logo: flipcart, name: "flipcat" },
  { logo: BigBasket, name: "bigbasket" },
  { logo: dosti, name: "dosti" },
  { logo: ceva, name: "ceva" },
  { logo: AsthaJewels, name: "astha" },
  { logo: in10, name: "i10media" },

  
];
export default function ClientLogos() {
  return (
    <section className="py-24 bg-[#0a1a5c]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header: Minimalist */}
        <div className="text-center mb-20">
          <h4 className="text-[#fef200] font-black text-xs uppercase tracking-[0.6em] mb-4">
            Our Clients
          </h4>
          <h2 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter">
            TRUSTED BY{" "}
            <span className="text-[#fef200] italic">INDUSTRY LEADERS.</span>
          </h2>
        </div>

        {/* The Logo Cloud */}
        {/* FIX: Changed grid-cols-2 to grid-cols-1 on very small screens or 
            kept 2 but reduced the padding to let the logo breathe */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "rgba(254, 242, 0, 0.05)" }}
              /* FIX: Changed p-8 to p-4 on mobile so the logo can be larger */
              className="bg-[#091853] aspect-video flex items-center justify-center p-4 md:p-10 border border-white/5 group transition-all"
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{ backgroundColor: client.bg }}
                /* FIX: Added w-full and h-auto to ensure it scales to the container */
                className="max-w-[80%] max-h-[70%] md:max-w-full md:max-h-full object-contain opacity-100 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.5em]">
            Securing 1000+ Assets Across 6 Major States
          </p>
        </div>
      </div>
    </section>
  );
}
