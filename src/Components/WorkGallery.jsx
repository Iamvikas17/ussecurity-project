// import { motion } from "framer-motion";

// const galleryImages = [
//   { id: 1, title: "Industrial Perimeter Guarding", src: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800" },
//   { id: 2, title: "VVIP Event Security", src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800" },
//   { id: 3, title: "Elite Bouncer Deployment", src: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800" },
//   { id: 4, title: "Corporate Facility Monitoring", src: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=800" },
//   { id: 5, title: "Armed Transit Protection", src: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=800" },
//   { id: 6, title: "Crowd Control Protocols", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800" },
//   { id: 7, title: "Tactical Response Unit", src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800" },
//   { id: 8, title: "ATM Cash Management", src: "https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?q=80&w=800" },
//   { id: 9, title: "Warehouse Security Ops", src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800" },
// ];

// export default function WorkGallery() {
//   return (
//     <section className="py-24 bg-white relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Balanced Header - Fills Desktop Width */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
//           <div className="max-w-2xl">
//             <h4 className="text-[#0a1a5c] font-black text-xs uppercase tracking-[0.4em] mb-4">
//               Real-World Deployments
//             </h4>
//             <h2 className="text-[#0a1a5c] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
//               OPERATIONS <br />
//               <span className="text-[#fef200] drop-shadow-[2px_2px_0_rgba(10,26,92,1)] italic">
//                 IN ACTION.
//               </span>
//             </h2>
//           </div>
//           <p className="text-gray-500 max-w-sm text-lg font-medium border-l-4 border-[#fef200] pl-6">
//             Visual proof of our 15+ years of excellence in high-stakes security management across India.
//           </p>
//         </div>

//         {/* Tactical Image Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {galleryImages.map((image, index) => (
//             <motion.div
//               key={image.id}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               className="group relative h-[400px] overflow-hidden rounded-sm bg-gray-100 shadow-xl"
//             >
//               {/* Image with high-end overlay */}
//               <img
//                 src={image.src}
//                 alt={image.title}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
//               />

//               {/* Tactical Label Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a5c]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
//                 <p className="text-[#fef200] text-[10px] font-black uppercase tracking-widest mb-2">
//                   USS Deployment #0{image.id}
//                 </p>
//                 <h3 className="text-white text-xl font-black uppercase tracking-tight">
//                   {image.title}
//                 </h3>
//                 <div className="h-1 w-8 bg-[#fef200] mt-4"></div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import Bounser1 from "../assets/Home/Bounser.jpg";
import Bounser2 from "../assets/Home/enhancedBouncers.jpg";
import Photo1 from "../assets/Home/Gallery1.jpeg";
import Photo2 from "../assets/Home/Gallery2.jpeg";
import Photo3 from "../assets/Home/Gallery3.jpeg";
import Photo4 from "../assets/Home/Gallery4.jpeg";
import Photo5 from "../assets/Home/Gallery5.jpeg";
import Photo6 from "../assets/Home/Gallery6.jpeg";
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
    title: "Elite Bouncer Deployment",
    src: Bounser1,
  },
  {
    id: 4,
    title: "Corporate Facility Monitoring",
    src: Photo2,
  },
  {
    id: 5,
    title: "Armed Transit Protection",
    src: Photo3,
  },
  {
    id: 6,
    title: "Crowd Control Protocols",
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
    src: "https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?q=80&w=800",
  },
  {
    id: 9,
    title: "Warehouse Security Ops",
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
  },
];

export default function WorkGallery() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    /* Changed to Deep Obsidian Gradient to flow into the Black Footer */
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

        {/* Tactical Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-[#020617]"
            >
              {/* Image with Desaturation */}
              <img
                src={image.src}
                alt={image.title}
                className={`w-full h-full object-cover transition-all duration-700 
                  ${isMobile ? "grayscale-0 brightness-70" : " group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-60"}`}
              />

              {/* Information Overlay: Always visible on mobile, hover-only on desktop */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-10 transition-all duration-500 
                ${isMobile ? "opacity-100 translate-y-0" : "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"}`}
              >
                <div className="space-y-3 relative z-10">
                  <p className="text-[#fef200] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-[#fef200]"></span>
                    Deployment #0{image.id}
                  </p>
                  <h3 className="text-white text-2xl font-black uppercase tracking-tight leading-none italic">
                    {image.title}
                  </h3>
                  <div className="h-1 w-12 bg-[#fef200]"></div>
                </div>

                {/* Subtle Gradient Shadow for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
