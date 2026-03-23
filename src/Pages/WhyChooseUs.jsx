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
//     initial={{ opacity: 0, x: -20 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     viewport={{ once: true, amount: 0.2 }}
//     transition={{ duration: 0.5, delay: index * 0.1 }}
//     /* Added mobile-specific border-l-4 for instant visual identity */
//     className="group p-8 md:p-10 bg-gray-50 border-l-4 border-[#fef200] md:border-l-0 md:border border-gray-100 rounded-sm hover:bg-[#0a1a5c] transition-all duration-500 shadow-sm hover:shadow-2xl"
//   >
//     <div className="mb-6 md:mb-8 p-4 bg-[#0a1a5c] rounded-sm w-fit group-hover:bg-[#fef200] transition-colors">
//       <Icon
//         className="text-[#fef200] group-hover:text-[#0a1a5c] transition-colors"
//         size={28}
//       />
//     </div>
//     <h3 className="text-[#0a1a5c] group-hover:text-white text-xl md:text-2xl font-black mb-3 transition-colors uppercase tracking-tight">
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
//         "Fully compliant with Govt. standards, ensuring legal protection for all assets.",
//     },
//     {
//       icon: Users2,
//       title: "Elite Force",
//       description:
//         "Our guards undergo rigorous tactical training and background checks.",
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
//         "Over a decade of excellence in security management across India.",
//     },
//     {
//       icon: Zap,
//       title: "Tactical Response",
//       description:
//         "Strategic protocols designed to neutralize threats within minutes.",
//     },
//     {
//       icon: Briefcase,
//       title: "Corporate Trust",
//       description:
//         "Trusted by 500+ prestigious clients for professional management.",
//     },
//   ];

//   return (
//     <section className="bg-white py-16 md:py-24 relative overflow-hidden">
//       {/* Decorative background watermark - hidden on small mobile to avoid clutter */}
//       <div className="absolute -bottom-10 -left-10 text-gray-100 text-[10rem] md:text-[20rem] font-black select-none pointer-events-none uppercase opacity-40">
//         USS
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 mb-12 md:mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-2xl"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <span className="h-[2px] w-10 bg-[#0a1a5c]"></span>
//               <span className="text-[#0a1a5c] font-black text-[10px] md:text-xs tracking-[0.4em] uppercase">
//                 Established 2010
//               </span>
//             </div>
//             <h2 className="text-[#0a1a5c] text-4xl md:text-7xl font-black leading-[1] md:leading-[0.9] tracking-tighter">
//               THE ELITE CHOICE <br />
//               <span className="text-gray-300 uppercase italic">
//                 For Protection.
//               </span>
//             </h2>
//           </motion.div>

//           {/* Mobile-friendly subtext divider */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-gray-500 max-w-sm text-base md:text-lg border-l-2 md:border-l-4 border-[#fef200] pl-4 md:pl-6 font-medium"
//           >
//             Defining the gold standard in security through discipline and
//             tactical superiority.
//           </motion.p>
//         </div>

//         {/* Improved mobile spacing */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {reasons.map((reason, index) => (
//             <ReasonItem key={index} {...reason} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Users2,
  Clock,
  Award,
  Briefcase,
  Smartphone,
  Search,
  FileText,
  UserPlus,
  PhoneCall,
  BarChart3,
} from "lucide-react";

const ReasonItem = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
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

export default function WhyChooseUsPage() {
  const primaryReasons = [
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

  const recruitmentSteps = [
    "Multi-Channel Sourcing (Portals & Referrals)",
    "Initial HR Recruiter Screening",
    "Written Test: Basic Security Concepts",
    "Technical Trainer Interview",
    "Operations Manager / DGM Final Round",
    "Strict 2-Stage Police Clearance (PCC)",
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* 1. HERO HEADER */}
      <section className="pt-22 pb-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-10 bg-[#0a1a5c]"></span>
                <span className="text-[#0a1a5c] font-black text-[10px] md:text-xs tracking-[0.4em] uppercase">
                  Established 2010
                </span>
              </div>
              <h2 className="text-[#0a1a5c] text-4xl md:text-7xl font-black leading-[1] md:leading-[0.9] tracking-tighter">
                The Elite Choice <br />{" "}
                <span className="text-gray-300 uppercase italic">
                  For Protection.
                </span>
              </h2>
            </motion.div>
            <p className="text-gray-500 max-w-sm text-lg border-l-4 border-[#fef200] pl-6 font-medium italic">
              "Defining the gold standard in security through discipline and
              tactical superiority."
            </p>
          </div>
        </div>
      </section>

      {/* 2. PRIMARY REASONS GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {primaryReasons.map((reason, index) => (
            <ReasonItem key={index} {...reason} index={index} />
          ))}
        </div>
      </section>

      {/* 3. THE RECRUITMENT PROTOCOL (Black Section) */}
      <section className="py-24 bg-[#0a1a5c] text-white relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-[#fef200] font-black text-xs uppercase tracking-[0.5em] mb-6">
              Rigorous Screening
            </h4>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
              OUR SELECTION <br />{" "}
              <span className="text-[#fef200] italic">PROCESS.</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed italic">
              "At USS, our selection is designed to screen for only the most
              promising individuals. Our proven process attracts and hires only
              the best."
            </p>
            <div className="space-y-4">
              {recruitmentSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 p-4 rounded-sm border border-white/10 group hover:border-[#fef200] transition-all"
                >
                  <span className="text-[#fef200] font-black text-sm">
                    0{i + 1}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-widest group-hover:text-[#fef200] transition-colors">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-xl">
            <div className="bg-[#fef200] w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <Search className="text-black" size={32} />
            </div>
            <h3 className="text-2xl font-black uppercase mb-6">
              Background Verification
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              We conduct background police verification in two stages. We take
              Aadhaar, PAN, and Passport details and cross-reference with crime
              records through local stations via Online PCC.
            </p>
            <div className="p-6 bg-black/40 rounded-xl border border-white/10">
              <p className="text-[#fef200] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                Security Audit
              </p>
              <p className="text-white text-sm italic">
                "We do not commit anything that cannot be delivered."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VALUE ADDED SERVICES (White/Gold Section) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#0a1a5c] text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Operational <span className="text-gray-400 italic">Edge.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <PhoneCall className="text-[#0a1a5c]" />
              <h4 className="font-black uppercase text-sm tracking-widest">
                24/7 Control
              </h4>
              <p className="text-xs text-gray-500">
                Toll Free: 8657554553. Dedicated escalations and timely
                resolution.
              </p>
            </div>
            <div className="space-y-4">
              <Smartphone className="text-[#0a1a5c]" />
              <h4 className="font-black uppercase text-sm tracking-widest">
                Mobile Ecosystem
              </h4>
              <p className="text-xs text-gray-500">
                Stay up-to-date and get benefits through our innovative Mobile
                App.
              </p>
            </div>
            <div className="space-y-4">
              <BarChart3 className="text-[#0a1a5c]" />
              <h4 className="font-black uppercase text-sm tracking-widest">
                Monthly MIS
              </h4>
              <p className="text-xs text-gray-500">
                Detailed overview of incidents, night rounds, and client
                feedback.
              </p>
            </div>
            <div className="space-y-4">
              <ShieldCheck className="text-[#0a1a5c]" />
              <h4 className="font-black uppercase text-sm tracking-widest">
                Surveys & SOPs
              </h4>
              <p className="text-xs text-gray-500">
                Hazard assessments and Fire Mock drills provided as Value Added
                Services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
