// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// // Use your actual assets here
// import skygold from "../assets/clients/Skygold.jpeg";
// import sunfarama from "../assets/clients/sun-farmalogo.png";
// import scootsy from "../assets/clients/scootsy.jpeg";
// import podarSc from "../assets/clients/podar_international.png";
// import memom from "../assets/clients/Pantaloons_Logo.png";
// const ClientSilder = () => {
//   const clients = [
//     { name: "Sky Gold", src: skygold },
//     { name: "Sun Pharma", src: sunfarama },
//     { name: "scootsy", src: scootsy },
//     { name: "Podar school", src: podarSc },
//     { name: "Thane Federation", src: memom },
//   ];

//   // Triple the items for a smooth, never-ending infinite scroll
//   const sliderItems = [...clients, ...clients, ...clients];

//   return (
//     <section className="py-24 bg-[#05103e] border-t border-white/5 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Elite Heading in USS Gold & White */}
//         <div className="text-center mb-20">
//           <h4 className="text-[#fef200] font-black text-xs uppercase tracking-[0.4em] mb-4">
//             Established 2010
//           </h4>
//           <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
//             <Link to="training">Our Clients</Link> <span className="text-[#fef200] italic">&</span>{" "}

//           </h2>
//           <div className="h-1.5 w-32 bg-[#fef200] mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(254,242,0,0.3)]"></div>
//         </div>

//         {/* Infinite Logo Slider using Framer Motion */}
//         <div className="relative flex items-center group">
//           <motion.div
//             className="flex items-center gap-16 md:gap-32 whitespace-nowrap"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               repeat: Infinity,
//               ease: "linear",
//               duration: 25, // Speed of the crawl
//             }}
//           >
//             {sliderItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-[180px] md:w-[220px] flex justify-center items-center"
//               >
//                 <img
//                   src={item.src}
//                   alt={item.name}
//                   className="h-16 md:h-20 w-auto object-contain brightness-125   group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 cursor-pointer"
//                 />
//               </div>
//             ))}
//           </motion.div>

//           {/* Professional Edge Gradients for Depth */}
//           {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0a1a5c] to-transparent z-10"></div>
//           <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0a1a5c] to-transparent z-10"></div> */}
//         </div>

//         {/* Trusted Footer Text */}
//         <p className="text-center mt-24 text-gray-500 text-[10px] font-bold uppercase tracking-[0.5em]">
//           Certified Security Force • Trusted by 500+ Corporate Clients
//           Nationwide
//         </p>
//       </div>
//     </section>
//   );
// };

// export default ClientSilder;
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Assets

import sunfarama from "../assets/clients/sun-farmalogo.png";
import scootsy from "../assets/clients/scootsy.jpeg";
import podarSc from "../assets/clients/podar_international.png";
import memom from "../assets/clients/Pantaloons_Logo.png";
import skyGlod from "../assets/clients/Sky_gold_logo.webp";

import Dosti from "../assets/clients/Dosti_logo.svg";
const ClientSilder = () => {
  const clients = [
    { name: "Sky Gold", src: skyGlod },
    { name: "Sun Pharma", src: sunfarama },
    { name: "Scootsy", src: scootsy },
    { name: "Podar School", src: podarSc },
    { name: "Pantaloons", src: memom },
    { name: "Dosti ", src: Dosti },
  ];

  const sliderItems = [...clients, ...clients, ...clients];

  return (
    /* Obsidian Gradient: Creates a sharp visual break from the white section above #0a1a5c #13315c */
    <section className="py-28 bg-gradient-to-b from-[#121a3a] to-[#13315c] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered Heading Section */}
        <div className="text-center mb-24">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#fef200] font-black text-[10px] uppercase tracking-[0.6em] mb-4"
          >
            Trusted Partners Since 2010
          </motion.h4>

          <Link to="training">
            {" "}
            <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              OUR{" "}
              <span className="text-[#fef200] italic text-4xl md:text-5xl"></span>{" "}
              <br />
              PRESTIGIOUS CLIENTS
            </h2>
          </Link>

          {/* Glowing Gold Divider */}
          <div className="h-1.5 w-40 bg-[#fef200] mx-auto mt-8 rounded-full shadow-[0_0_30px_rgba(254,242,0,0.5)]"></div>

          <p className="text-gray-400 mt-8 max-w-lg mx-auto text-sm font-medium uppercase tracking-widest opacity-60">
            Securing 100+ Corporate Assets Nationwide
          </p>
        </div>

        {/* Infinite Logo Slider */}
        <div className="relative flex items-center group">
          <motion.div
            className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {sliderItems.map((item, index) => (
              <Link to="training">
                {" "}
                <div
                  key={index}
                  className="flex-shrink-0 w-[160px] md:w-[360px] h-40 flex justify-center items-center px-8 py-4 bg-white/5 backdrop-blur-md rounded-xl border-2 border-white/10 hover:border-[#fef200]/40 transition-all duration-500 group"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    /* Grayscale by default, color on hover */
                    className="h-20 md:h-35 w-auto object-contain brightness-125  opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 cursor-pointer"
                  />
                </div>
              </Link>
            ))}
          </motion.div>

          {/* Side Fades for the infinite loop effect */}
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#020617] to-transparent z-10"></div> */}
        </div>
      </div>
    </section>
  );
};

export default ClientSilder;
