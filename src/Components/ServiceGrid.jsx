// import { motion } from "framer-motion";
// import {
//   Shield,
//   Users,
//   Landmark,
//   Factory,
//   Construction,
//   Siren,
// } from "lucide-react";

// const services = [
//   {
//     icon: Users,
//     title: "Elite Bouncers",
//     desc: "Highly disciplined personnel for high-end clubs, events, and private security across Mumbai and beyond.",
//   },
//   {
//     icon: Factory,
//     title: "Industrial Security",
//     desc: "Comprehensive protection for manufacturing units and warehouses with 24/7 tactical monitoring.",
//   },
//   {
//     icon: Landmark,
//     title: "Corporate Guarding",
//     desc: "Professional, uniformed security for corporate offices, banks, and high-stakes commercial assets.",
//   },
//   {
//     icon: Shield,
//     title: "Armed Protection",
//     desc: "Licensed armed guards for specialized transit and high-risk facility protection.",
//   },
//   {
//     icon: Construction,
//     title: "Project Security",
//     desc: "Securing large-scale infrastructure and construction sites against theft and unauthorized entry.",
//   },
//   {
//     icon: Siren,
//     title: "Event Management",
//     desc: "End-to-end security logistics for large gatherings, celebrity management, and VIP escorting.",
//   },
// ];

// export default function ServicesGrid() {
//   return (
//     <section className="bg-white py-24 relative">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Balanced Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-[#0a1a5c] font-black text-xs uppercase tracking-[0.4em] mb-4">
//               Tactical Expertise
//             </h4>
//             <h2 className="text-[#0a1a5c] text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
//               OUR CORE <br />
//               <span className="text-[#fef200] drop-shadow-[2px_2px_0_rgba(10,26,92,1)]">
//                 SOLUTIONS.
//               </span>
//             </h2>
//           </motion.div>
//           <p className="text-gray-500 max-w-sm text-lg font-medium border-l-4 border-[#0a1a5c] pl-6">
//             Providing tailored security protocols since 2010. We don't just
//             provide guards; we deploy solutions.
//           </p>
//         </div>

//         {/* The Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group relative h-[400px] overflow-hidden border border-gray-100 cursor-pointer bg-gray-50"
//             >
//               {/* Icon & Initial Title */}
//               <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 group-hover:opacity-0">
//                 <service.icon
//                   size={60}
//                   className="text-[#0a1a5c] mb-6"
//                   strokeWidth={1}
//                 />
//                 <h3 className="text-[#0a1a5c] text-xl font-black uppercase tracking-widest">
//                   {service.title}
//                 </h3>
//               </div>

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-[#0a1a5c] translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-10 flex flex-col justify-end">
//                 <div className="mb-auto">
//                   <service.icon size={40} className="text-[#fef200]" />
//                 </div>
//                 <h3 className="text-white text-2xl font-black uppercase mb-4 tracking-tighter italic">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-6">
//                   {service.desc}
//                 </p>
//                 <div className="h-1 w-12 bg-[#fef200]"></div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Landmark,
  Factory,
  Construction,
  Siren,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Elite Bouncers",
    desc: "Highly disciplined personnel for high-end clubs, luxury events, and private security across Mumbai and beyond. Licensed and trained for crowd control.",
  },
  {
    icon: Factory,
    title: "Industrial Security",
    desc: "Comprehensive protection for manufacturing units, warehouses, and industrial plants with 24/7 tactical monitoring.",
  },
  {
    icon: Landmark,
    title: "Corporate Guarding",
    desc: "Professional, uniformed security for corporate offices, banks, and commercial assets. Focused on perimeter safety.",
  },
  {
    icon: Shield,
    title: "Specialize Protection",
    desc: "Trained guards for specialized transit, cash-in-transit, and high-risk facility protection.",
  },
  {
    icon: Construction,
    title: "Project Security",
    desc: "Securing large-scale infrastructure and redevelopment projects against theft, vandalism, and unauthorized entry.",
  },
  {
    icon: Siren,
    title: "Event Management",
    desc: "End-to-end security logistics for large gatherings, celebrity management, and VIP escorting.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Balanced Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#0a1a5c] font-black text-xs uppercase tracking-[0.4em] mb-4">
              Tactical Expertise
            </h4>
            <h2 className="text-[#0a1a5c] text-4xl md:text-7xl font-black leading-[1] md:leading-[0.9] tracking-tighter">
              OUR CORE <br />
              <span className="text-[#fef200] drop-shadow-[2px_2px_0_rgba(10,26,92,1)]">
                SOLUTIONS.
              </span>
            </h2>
          </motion.div>
          <p className="text-gray-500 max-w-sm text-base md:text-lg font-medium border-l-4 border-[#0a1a5c] pl-6 italic">
            Providing tailored security protocols since 2010. We don't just
            provide guards; we deploy tactical solutions.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="initial"
              // Desktop: only hover. Mobile: trigger on scroll.
              whileHover="hovered"
              whileInView={window.innerWidth < 768 ? "hovered" : "initial"}
              viewport={{ once: false, amount: 0.7 }}
              className="group relative h-[380px] md:h-[450px] overflow-hidden border border-gray-100 cursor-pointer bg-gray-50"
            >
              {/* Front Face */}
              <motion.div
                variants={{
                  initial: { opacity: 1, y: 0 },
                  hovered: { opacity: 0, y: -20 },
                }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
              >
                <service.icon
                  size={60}
                  className="text-[#0a1a5c] mb-6"
                  strokeWidth={1}
                />
                <h3 className="text-[#0a1a5c] text-xl font-black uppercase tracking-widest leading-tight">
                  {service.title}
                </h3>
              </motion.div>

              {/* Slide-Up Overlay */}
              <motion.div
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="absolute inset-0 bg-[#0a1a5c] p-8 md:p-12 flex flex-col justify-end"
              >
                <div className="mb-auto">
                  <service.icon size={40} className="text-[#fef200]" />
                </div>
                <h3 className="text-white text-2xl font-black uppercase mb-4 tracking-tighter italic">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div className="h-1 w-12 bg-[#fef200]"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
