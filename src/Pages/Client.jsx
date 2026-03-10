// import WorkInProgress from "../Components/WorkInProgress";

// import React from "react";
// import { motion } from "framer-motion";
// import { Handshake, Building, ShieldCheck, Globe } from "lucide-react";

// // List of 12-15 Clients
// const clientList = [
//   { name: "ChaisSolutions", sector: "Tech & Infrastructure" },
//   { name: "Apex Planet", sector: "Logistics" },
//   { name: "Global Industrial Hub", sector: "Manufacturing" },
//   { name: "Western Corporate Park", sector: "Real Estate" },
//   { name: "Tamil Nadu Textiles", sector: "Textiles" },
//   { name: "Goa Resort & Spa", sector: "Hospitality" },
//   { name: "Gujarat Refinery", sector: "Energy" },
//   { name: "Rajasthan Stone Works", sector: "Industrial" },
//   { name: "MP Power Grid", sector: "Infrastructure" },
//   { name: "Metro Retail Chain", sector: "Retail" },
//   { name: "Elite Housing Soc.", sector: "Residential" },
//   { name: "National Bank Hub", sector: "Finance" },
// ];

// export default function ClientsPage() {
//   return (
//     <main className="bg-white">
//       {/* 1. Header Section */}
//       <section className="pt-32 pb-20 px-6 bg-gray-50 border-b border-gray-100">
//         <div className="max-w-7xl mx-auto">
//           <h4 className="text-[#0a1a5c] font-black text-xs uppercase tracking-[0.6em] mb-4">
//             Strategic Alliances
//           </h4>
//           <h2 className="text-[#0a1a5c] text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
//             TRUSTED <br />
//             <span className="text-[#fef200] italic drop-shadow-[3px_3px_0_rgba(10,26,92,1)]">
//               PARTNERS.
//             </span>
//           </h2>
//           <p className="text-gray-500 max-w-2xl text-lg font-medium border-l-4 border-[#fef200] pl-6 italic">
//             Providing absolute assurance to industry leaders across 6 states.
//           </p>
//         </div>
//       </section>

//       {/* 2. Client Grid: Dark Tactical Mode */}
//       <section className="py-24 bg-[#0a1a5c] relative overflow-hidden">
//         <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {clientList.map((client, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -5, scale: 1.02 }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-[#fef200]/50 transition-all aspect-square md:aspect-video"
//               >
//                 <div className="bg-white/10 p-4 rounded-full mb-4 group-hover:bg-[#fef200] transition-colors duration-500">
//                   <Building
//                     className="text-[#fef200] group-hover:text-black"
//                     size={24}
//                   />
//                 </div>
//                 <h3 className="text-white font-black uppercase tracking-tight text-sm md:text-base">
//                   {client.name}
//                 </h3>
//                 <p className="text-gray-500 text-[8px] font-bold uppercase tracking-widest mt-2 group-hover:text-white/60">
//                   {client.sector}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. National Reach Stat Bar */}
//       <section className="py-12 bg-[#fef200]">
//         <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-8">
//           <div className="text-center">
//             <p className="text-black font-black text-3xl">1000+</p>
//             <p className="text-black/60 text-[10px] font-bold uppercase tracking-widest">
//               Active Personnel
//             </p>
//           </div>
//           <div className="text-center">
//             <p className="text-black font-black text-3xl">15+</p>
//             <p className="text-black/60 text-[10px] font-bold uppercase tracking-widest">
//               Years of Trust
//             </p>
//           </div>
//           <div className="text-center">
//             <p className="text-black font-black text-3xl">6</p>
//             <p className="text-black/60 text-[10px] font-bold uppercase tracking-widest">
//               States Covered
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
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

// ... add the rest up to BigBasket.png

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

  // ... add all imported logos to this array
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "rgba(254, 242, 0, 0.05)" }}
              className="bg-[#091853] aspect-video flex items-center justify-center p-8 border border-white/5 group transition-all"
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{ backgroundColor: client.bg }}
                /* Grayscale by default, full color/bright on hover */
                className="max-w-full max-h-full object-contain opacity-100 bg-[client.color]  group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
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
