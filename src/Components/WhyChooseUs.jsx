// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   Zap,
//   Users2,
//   Clock,
//   Award,
//   Briefcase,
// } from "lucide-react";

// const ReasonItem = ({ icon: Icon, title, description, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay: index * 0.1 }}
//     className="group p-10 bg-gray-50 border border-gray-100 rounded-sm hover:bg-[#0a1a5c] transition-all duration-500"
//   >
//     <div className="mb-8 p-5 bg-[#0a1a5c] rounded-sm w-fit group-hover:bg-[#fef200] transition-colors">
//       <Icon
//         className="text-[#fef200] group-hover:text-[#0a1a5c] transition-colors"
//         size={32}
//       />
//     </div>
//     <h3 className="text-[#0a1a5c] group-hover:text-white text-2xl font-black mb-4 transition-colors uppercase tracking-tight">
//       {title}
//     </h3>
//     <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">
//       {description}
//     </p>
//   </motion.div>
// );

// export default function WhyChooseUs() {
//   const reasons = [
//     {
//       icon: ShieldCheck,
//       title: "PSARA Licensed",
//       description:
//         "Fully compliant with Private Security Agencies Regulation Act standards.",
//     },
//     {
//       icon: Users2,
//       title: "Elite Force",
//       description:
//         "Rigorous tactical training and background checks for maximum reliability.",
//     },
//     {
//       icon: Clock,
//       title: "24/7 Vigilance",
//       description:
//         "Round-the-clock monitoring and rapid response deployment at any hour.",
//     },
//     {
//       icon: Award,
//       title: "15+ Years Exp.",
//       description:
//         "Over a decade of excellence in industrial and corporate security management.",
//     },
//     {
//       icon: Zap,
//       title: "Tactical Response",
//       description:
//         "Strategic protocols designed to neutralize potential threats within minutes.",
//     },
//     {
//       icon: Briefcase,
//       title: "Corporate Trust",
//       description:
//         "Trusted by 500+ prestigious clients for high-stakes security management.",
//     },
//   ];

//   return (
//     <section className="bg-white py-24 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="max-w-2xl"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <span className="h-[2px] w-12 bg-[#0a1a5c]"></span>
//               <span className="text-[#0a1a5c] font-black text-xs tracking-[0.4em] uppercase">
//                 Established 2010
//               </span>
//             </div>
//             <h2 className="text-[#0a1a5c] text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
//               THE ELITE CHOICE <br />
//               <span className="text-[#0a1a5c]/30 uppercase">
//                 For Protection.
//               </span>
//             </h2>
//           </motion.div>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-gray-500 max-w-sm text-lg border-l-4 border-[#fef200] pl-6 hidden md:block font-medium"
//           >
//             Defining the gold standard in security through discipline and
//             tactical superiority.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reasons.map((reason, index) => (
//             <ReasonItem key={index} {...reason} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Users2,
  Clock,
  Award,
  Briefcase,
} from "lucide-react";

const ReasonItem = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    /* Added mobile-specific border-l-4 for instant visual identity */
    className="group p-8 md:p-10 bg-gray-50 border-l-4 border-[#fef200] md:border-l-0 md:border border-gray-100 rounded-sm hover:bg-[#0a1a5c] transition-all duration-500 shadow-sm hover:shadow-2xl"
  >
    <div className="mb-6 md:mb-8 p-4 bg-[#0a1a5c] rounded-sm w-fit group-hover:bg-[#fef200] transition-colors">
      <Icon
        className="text-[#fef200] group-hover:text-[#0a1a5c] transition-colors"
        size={28}
      />
    </div>
    <h3 className="text-[#0a1a5c] group-hover:text-white text-xl md:text-2xl font-black mb-3 transition-colors uppercase tracking-tight">
      {title}
    </h3>
    <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">
      {description}
    </p>
  </motion.div>
);

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "PSARA Licensed",
      description:
        "Fully compliant with Govt. standards, ensuring legal protection for all assets.",
    },
    {
      icon: Users2,
      title: "Elite Force",
      description:
        "Our guards undergo rigorous tactical training and background checks.",
    },
    {
      icon: Clock,
      title: "24/7 Vigilance",
      description:
        "Round-the-clock monitoring and rapid response deployment at any hour.",
    },
    {
      icon: Award,
      title: "15+ Years Exp.",
      description:
        "Over a decade of excellence in security management across India.",
    },
    {
      icon: Zap,
      title: "Tactical Response",
      description:
        "Strategic protocols designed to neutralize threats within minutes.",
    },
    {
      icon: Briefcase,
      title: "Corporate Trust",
      description:
        "Trusted by 500+ prestigious clients for professional management.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background watermark - hidden on small mobile to avoid clutter */}
      <div className="absolute -bottom-10 -left-10 text-gray-100 text-[10rem] md:text-[20rem] font-black select-none pointer-events-none uppercase opacity-40">
        USS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-10 bg-[#0a1a5c]"></span>
              <span className="text-[#0a1a5c] font-black text-[10px] md:text-xs tracking-[0.4em] uppercase">
                Established 2010
              </span>
            </div>
            <h2 className="text-[#0a1a5c] text-4xl md:text-7xl font-black leading-[1] md:leading-[0.9] tracking-tighter">
              THE ELITE CHOICE <br />
              <span className="text-gray-300 uppercase italic">
                For Protection.
              </span>
            </h2>
          </motion.div>

          {/* Mobile-friendly subtext divider */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 max-w-sm text-base md:text-lg border-l-2 md:border-l-4 border-[#fef200] pl-4 md:pl-6 font-medium"
          >
            Defining the gold standard in security through discipline and
            tactical superiority.
          </motion.p>
        </div>

        {/* Improved mobile spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <ReasonItem key={index} {...reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
