// import React from "react";
// import { motion } from "framer-motion";
// import { ShieldCheck, Dumbbell, Target, Award } from "lucide-react";

// // Importing the 8 images from your assets folder
// import Training1 from "../assets/Training/T4.jpeg";
// import Training2 from "../assets/Training/T10.jpeg";
// import Training3 from "../assets/Training/t16.jpeg";
// import Training4 from "../assets/Training/T5.jpeg";
// import Training5 from "../assets/Training/NewT2.webp";
// import Training6 from "../assets/Training/NewT1.webp";
// import Training7 from "../assets/Training/NewT4.jpg";
// import Training8 from "../assets/Training/NewT3.avif";

// const trainingPhotos = [
//   {
//     src: Training1,
//     gridClass: "md:col-span-6 md:row-span-2",
//     label: "Fire Safety Drill",
//   },
//   {
//     src: Training2,
//     gridClass: "md:col-span-3 md:row-span-1",
//     label: "Physical Rigor",
//   },
//   {
//     src: Training3,
//     gridClass: "md:col-span-3 md:row-span-1",
//     label: "SOP Training",
//   },
//   {
//     src: Training4,
//     gridClass: "md:col-span-3 md:row-span-2",
//     label: "Fire Training",
//   },
//   {
//     src: Training5,
//     gridClass: "md:col-span-3 md:row-span-1",
//     label: "Rapid Response",
//   },
//   {
//     src: Training6,
//     gridClass: "md:col-span-3 md:row-span-1",
//     label: "Training",
//   },
//   {
//     src: Training7,
//     gridClass: "md:col-span-3 md:row-span-1",
//     label: "Self Defense",
//   },
//   {
//     src: Training8,
//     gridClass: "md:col-span-3 md:row-span-1",
//     label: "First Aid",
//   },
// ];

// export default function TrainingGallery() {
//     const trainingFeatures = [
//     { icon: <ShieldCheck />, title: "SOP Discipline" },
//     { icon: <Dumbbell />, title: "Physical Rigor" },
//     { icon: <Target />, title: "Tactical Response" },
//   ];
//   return (
//     <section className="py-24 bg-[#05102a] relative overflow-hidden">
//       {/* Background Subtle Texture */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* Header: Tactical Narrative */}
//         <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
//           <div className="max-w-2xl">
//             <h4 className="text-[#fef200] font-black text-xs uppercase tracking-[0.6em] mb-4">
//               Behind the Force
//             </h4>
//             <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
//               ELITE <br />
//               <span className="text-[#fef200] italic">TRAINING.</span>
//             </h2>
//           </div>

//           <div className="hidden lg:flex gap-12 mb-4">
//             <div className="flex gap-8 mb-4">
//             {trainingFeatures.map((f, i) => (
//               <div key={i} className="text-center group">
//                 <div className="text-[#fef200] mb-2 flex justify-center group-hover:scale-110 transition-transform">
//                   {f.icon}
//                 </div>
//                 <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
//                   {f.title}
//                 </span>
//               </div>
//             ))}
//           </div>
//             <div className="text-center">
//               <ShieldCheck className="text-[#fef200] mx-auto mb-2" size={24} />
//               <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
//                 PSARA Certified
//               </span>
//             </div>
//             <div className="text-center">
//               <Target className="text-[#fef200] mx-auto mb-2" size={24} />
//               <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
//                 Tactical SOP
//               </span>
//             </div>
//           </div>

//         </div>

//         {/* 8-Photo Bento Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[200px] gap-4">
//           {trainingPhotos.map((photo, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.05 }}
//               whileHover={{ scale: 0.98 }}
//               className={`${photo.gridClass} relative rounded-3xl overflow-hidden group border border-white/5 shadow-2xl`}
//             >
//               {/* Animated Overlay for Info */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>

//               <img
//                 src={photo.src}
//                 alt={photo.label}
//                 className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-1000"
//               />

//               {/* Tactical Label */}
//               <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
//                 <div className="flex items-center gap-2">
//                   <div className="h-px w-6 bg-[#fef200]"></div>
//                   <span className="text-[#fef200] text-[10px] font-black uppercase tracking-[0.3em]">
//                     {photo.label}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Training Stat Bar: Providing "Absolute Assurance" */}
//         <div className="mt-16 p-8 bg-white/5 border-l-4 border-[#fef200] rounded-r-3xl flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
//           <div className="flex items-center gap-6">
//             <div className="bg-[#fef200] p-4 rounded-2xl text-black">
//               <Award size={32} />
//             </div>
//             <div>
//               <p className="text-white font-black text-xl uppercase tracking-tighter">
//                 15-Day Intensive SOP Training
//               </p>
//               <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">
//                 Mandatory for every member of our 1000+ force
//               </p>
//             </div>
//           </div>

//           <div className="text-center md:text-right">
//             <p className="text-[#fef200] text-xs font-black uppercase tracking-[0.4em] mb-1">
//               Status: Active
//             </p>
//             <p className="text-white/30 font-mono text-[10px] tracking-widest uppercase">
//               USS-TRN-PROT-2026
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Dumbbell, Target, Award } from "lucide-react";

// Imports remain the same as your provided code
import Training1 from "../assets/Training/T4.jpeg";
import Training2 from "../assets/Training/T10.jpeg";
import Training3 from "../assets/Training/t16.jpeg";
import Training4 from "../assets/Training/T5.jpeg";
import Training5 from "../assets/Training/NewT2.webp";
import Training6 from "../assets/Training/NewT1.webp";
import Training7 from "../assets/Training/NewT4.jpg";
import Training8 from "../assets/Training/NewT3.avif";

const trainingPhotos = [
  {
    src: Training1,
    gridClass: "md:col-span-6 md:row-span-2 col-span-2",
    label: "Fire Safety Drill",
  },
  {
    src: Training2,
    gridClass: "md:col-span-3 md:row-span-1 col-span-1",
    label: "Physical Rigor",
  },
  {
    src: Training3,
    gridClass: "md:col-span-3 md:row-span-1 col-span-1",
    label: "SOP Training",
  },
  {
    src: Training4,
    gridClass: "md:col-span-3 md:row-span-2 col-span-1",
    label: "Fire Training",
  },
  {
    src: Training5,
    gridClass: "md:col-span-3 md:row-span-1 col-span-1",
    label: "Rapid Response",
  },
  {
    src: Training6,
    gridClass: "md:col-span-3 md:row-span-1 col-span-1",
    label: "Training",
  },
  {
    src: Training7,
    gridClass: "md:col-span-3 md:row-span-1 col-span-1",
    label: "Self Defense",
  },
  {
    src: Training8,
    gridClass: "md:col-span-3 md:row-span-1 col-span-1",
    label: "First Aid",
  },
];

export default function TrainingGallery() {
  const trainingFeatures = [
    { icon: <ShieldCheck />, title: "SOP Discipline" },
    { icon: <Dumbbell />, title: "Physical Rigor" },
    { icon: <Target />, title: "Tactical Response" },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#05102a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h4 className="text-[#fef200] font-black text-xs uppercase tracking-[0.6em] mb-4">
              Behind the Force
            </h4>
            <h2 className="text-white text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              ELITE <br />{" "}
              <span className="text-[#fef200] italic">TRAINING.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-12">
            {trainingFeatures.map((f, i) => (
              <div key={i} className="text-center">
                <div className="text-[#fef200] mb-2 flex justify-center">
                  {f.icon}
                </div>
                <span className="text-gray-500 text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                  {f.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 8-Photo Bento Grid: Optimized for Mobile Touch */}
        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[150px] md:auto-rows-[200px] gap-3 md:gap-4">
          {trainingPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${photo.gridClass} relative rounded-2xl md:rounded-3xl overflow-hidden group border border-white/5 shadow-2xl`}
            >
              {/* Overlay: Always visible on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 z-10"></div>

              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover transition-all duration-1000 lg:group-hover:scale-110"
              />

              {/* Label: Always visible on mobile for clarity */}
              <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                  <div className="h-px w-4 md:w-6 bg-[#fef200]"></div>
                  <span className="text-[#fef200] text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">
                    {photo.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Training Stat Bar */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-white/5 border-l-4 border-[#fef200] rounded-r-2xl md:rounded-r-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 backdrop-blur-sm">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="bg-[#fef200] p-3 md:p-4 rounded-xl md:rounded-2xl text-black">
              <Award size={24} className="md:w-8 md:h-8" />
            </div>
            <div>
              <p className="text-white font-black text-lg md:text-xl uppercase tracking-tighter leading-tight">
                15-Day Intensive SOP Training
              </p>
              <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">
                Mandatory for every member of our 1000+ force
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto flex justify-between md:flex-col items-center md:items-end border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
            <p className="text-[#fef200] text-[10px] font-black uppercase tracking-[0.4em]">
              Status: Active
            </p>
            <p className="text-white/30 font-mono text-[8px] md:text-[10px] tracking-widest uppercase">
              USS-TRN-PROT-2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
