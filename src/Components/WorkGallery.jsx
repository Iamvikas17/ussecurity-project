import { motion } from "framer-motion";
import Bounser1 from "../assets/Home/Bounser.jpg";
import Bounser2 from "../assets/Home/enhancedBouncers.jpg";
import Photo1 from "../assets/Home/Gallery1.jpeg";
import Photo2 from "../assets/Home/Gallery2.jpeg";
import Photo3 from "../assets/Home/Gallery3.jpeg";
import Photo4 from "../assets/Home/Gallery4.jpeg";
import Photo5 from "../assets/Home/Gallery5.jpeg";
import Photo6 from "../assets/Home/Gallery6.jpeg";
import Photo7 from "../assets/Home/Gallery7.jpeg";
import Photo8 from "../assets/Home/Gallery8.jpeg";
import Photo9 from "../assets/Home/Gallery9.jpeg";
const galleryImages = [
  {
    id: 1,
    title: "Industrial Perimeter Guarding",
    src: Photo1,
  },
  {
    id: 2,
    title: "VVIP Event Security",
    src: Photo6,
  },
  {
    id: 3,
    title: "Security Checking",
    src: Photo3,
  },
  {
    id: 4,
    title: "Corporate Facility Monitoring",
    src: Photo2,
  },
  {
    id: 5,
    title: "Elite Bouncer Deployment",
    src: Bounser1,
  },
  {
    id: 6,
    title: "Our Event Bounser",
    src: Photo4,
  },
  {
    id: 7,
    title: "Tactical Response Unit",
    src: Photo5,
  },
  {
    id: 8,
    title: "ATM Cash Management",
    src: Photo7,
  },
  {
    id: 9,
    title: "Warehouse Security Ops",
    src: Photo9,
  },
  {
    id: 10,
    title: "Warehouse Security Ops",
    src: Photo8,
  },
];

// export default function WorkGallery() {
//   const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

//   return (
//     /* Changed to Deep Obsidian Gradient to flow into the Black Footer */
//     <section className="py-24 bg-gradient-to-b from-[#0b2545] via-[#020617] to-[#0b2545] border-t border-white/5 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Balanced Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
//           <div className="max-w-2xl">
//             <h4 className="text-[#fef200] font-black text-xs uppercase tracking-[0.4em] mb-4">
//               Operational Proof
//             </h4>
//             <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
//               FIELD <br />
//               <span className="text-[#fef200] italic">DEPLOYMENTS.</span>
//             </h2>
//           </div>
//           <p className="text-gray-400 max-w-sm text-lg font-medium border-l-4 border-[#fef200] pl-6">
//             Visual proof of our 15+ years of excellence in high-stakes security
//             management across India.
//           </p>
//         </div>

//         {/* Tactical Image Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {galleryImages.map((image, index) => (
//             <motion.div
//               key={image.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group relative h-[450px] overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-[#020617]"
//             >
//               {/* Image with Desaturation */}
//               <img
//                 src={image.src}
//                 alt={image.title}
//                 className={`w-full h-full object-cover transition-all duration-700
//                   ${isMobile ? "grayscale-0 brightness-70" : " group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-60"}`}
//               />

//               {/* Information Overlay: Always visible on mobile, hover-only on desktop */}
//               <div
//                 className={`absolute inset-0 flex flex-col justify-end p-10 transition-all duration-500
//                 ${isMobile ? "opacity-100 translate-y-0" : "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"}`}
//               >
//                 <div className="space-y-3 relative z-10">
//                   <p className="text-[#fef200] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
//                     <span className="w-8 h-[1px] bg-[#fef200]"></span>
//                     Deployment #0{image.id}
//                   </p>
//                   <h3 className="text-white text-2xl font-black uppercase tracking-tight leading-none italic">
//                     {image.title}
//                   </h3>
//                   <div className="h-1 w-12 bg-[#fef200]"></div>
//                 </div>

//                 {/* Subtle Gradient Shadow for text readability */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export default function WorkGallery() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section className="py-24 bg-gradient-to-b from-[#0b2545] via-[#020617] to-[#0b2545] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Balanced Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <h4 className="text-[#fef200] font-black text-xs uppercase tracking-[0.4em] mb-4">
              Operational Proof
            </h4>
            <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              FIELD <br />
              <span className="text-[#fef200] italic">DEPLOYMENTS.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-lg font-medium border-l-4 border-[#fef200] pl-6">
            Visual proof of our 15+ years of excellence in high-stakes security
            management across India.
          </p>
        </div>

        {/* Tactical Image Grid: Columns use masonry-style flow */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              /* REMOVED: Fixed height h-[450px] */
              className="group relative inline-block w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-[#020617]"
            >
              {/* Image Fix: w-full h-auto and object-contain ensures no cropping */}
              <img
                src={image.src}
                alt={image.title}
                className={`w-full h-auto block transition-all duration-700 
                  ${isMobile ? "grayscale-0 brightness-70" : "group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-60"}`}
              />

              {/* Information Overlay */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-6 md:p-10 transition-all duration-500 
                ${isMobile ? "opacity-100 translate-y-0" : "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"}`}
              >
                <div className="space-y-3 relative z-20">
                  <p className="text-[#fef200] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-[#fef200]"></span>
                    Deployment #0{image.id}
                  </p>
                  <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight leading-none italic">
                    {image.title}
                  </h3>
                  <div className="h-1 w-12 bg-[#fef200]"></div>
                </div>

                {/* Gradient for readability: Only covers the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
