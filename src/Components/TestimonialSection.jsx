// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Quote, ArrowRight } from "lucide-react";
// import podar from "../assets/clients/podar_international.png";
// import scootsy from "../assets/clients/scootsy.jpeg";
// import Sm from "../assets/clients/Shreemarutilogo.webp";
// import BigBasket from "../assets/clients/BigBasket.png";
// import ceva from "../assets/clients/CEVA_Logistics_New_Logo.png";
// import { Link } from "react-router-dom";

// const testimonials = [
//   {
//     id: 1,
//     client: "Scootsy Logistics",
//     logo: scootsy,
//     text: "The security team present on the ground has worked tirelessly and shown great commitment to the duties assigned to them on time. We also received great support from your management team.",
//   },
//   {
//     id: 2,
//     client: "Podar International School",
//     logo: podar,
//     text: "Thank you for your constant check on the guards. We appreciate your entire support extended to us & keep doing the good work",
//   },
//   {
//     id: 3,
//     client: "Shree Maruti",
//     logo: Sm,
//     text: "We are grateful & thankful to U.S Security for providing excellent and uninterrupted security services at all locations",
//   },
//   {
//     id: 4,
//     client: "Big Basket",
//     logo: BigBasket,
//     text: "Going through the past 2 years from the day of inception to till date, the whole housekeeping services have been handled really well",
//   },
//   {
//     id: 5,
//     client: "Ceva Logistics",
//     logo: ceva,
//     text: "Your timely acknowledgment of our queries, maintaining a quick turn-around time and reverting promptly with a solution, are all commendable! Keep up your good work and all the very best",
//   },
//   // Add more testimonials as needed
// ];

// export default function TestimonialSection() {
//   const [current, setCurrent] = useState(0);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="py-24 bg-[#f8f9fc] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side: Branding & CTA */}
//           <div className="space-y-8">
//             <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
//               <span className="text-[#0a1a5c] font-black text-[10px] uppercase tracking-widest">
//                 Success Stories ~
//               </span>
//             </div>

//             <h2 className="text-[#0a1a5c] text-5xl md:text-6xl font-black leading-tight tracking-tighter">
//               Here’s What{" "}
//               <span className="text-purple-700">
//                 Our <br /> Clients
//               </span>{" "}
//               Have Said.
//             </h2>

//             <p className="text-gray-500 text-lg leading-relaxed max-w-md italic">
//               Discover how our security solutions have safeguarded businesses
//               and communities, earning trust through innovation, reliability,
//               and excellence.
//             </p>

//             <Link to={"/service"}><button className="flex items-center gap-3 bg-gradient-to-r from-purple-400 to-purple-800 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-purple-200 transition-all group">
//               Explore Our Services
//               <ArrowRight
//                 size={18}
//                 className="group-hover:translate-x-2 transition-transform"
//               />
//             </button></Link>
//           </div>

//           {/* Right Side: Animated Testimonial Card */}
//           <div className="relative min-h-[400px] flex flex-col justify-center">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={current}
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//                 className="space-y-8"
//               >
//                 <div className="flex items-start gap-6">
//                   <div className="relative">
//                     <Quote
//                       className="text-purple-600 mb-4"
//                       size={48}
//                       fill="currentColor"
//                     />
//                     {/* Client Logo Circle */}
//                     <div className="w-24 h-24 rounded-full border-2 border-purple-600 flex items-center justify-center p-4 bg-white shadow-xl">
//                       <img
//                         src={testimonials[current].logo}
//                         alt={testimonials[current].client}
//                         className="w-full object-contain"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex-1 pt-12">
//                     <p className="text-gray-600 text-xl md:text-2xl leading-relaxed font-medium italic">
//                       "{testimonials[current].text}"
//                     </p>
//                     <h4 className="mt-6 text-[#0a1a5c] font-black uppercase tracking-widest">
//                       {testimonials[current].client}
//                     </h4>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Navigation Dots */}
//             <div className="flex gap-3 mt-12 ml-32">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrent(i)}
//                   className={`h-3 w-3 rounded-full transition-all duration-300 ${
//                     current === i
//                       ? "bg-purple-700 w-8 ring-4 ring-purple-100"
//                       : "bg-gray-300 hover:bg-purple-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// Assets (Imports remain the same as your code)
import podar from "../assets/clients/podar_international.png";
import scootsy from "../assets/clients/scootsy.jpeg";
import Sm from "../assets/clients/Shreemarutilogo.webp";
import BigBasket from "../assets/clients/BigBasket.png";
import ceva from "../assets/clients/CEVA_Logistics_New_Logo.png";

const testimonials = [
  {
    id: 1,
    client: "Scootsy Logistics",
    logo: scootsy,
    text: "The security team present on the ground has worked tirelessly and shown great commitment to the duties assigned to them on time. We also received great support from your management team.",
  },
  {
    id: 2,
    client: "Podar International School",
    logo: podar,
    text: "Thank you for your constant check on the guards. We appreciate your entire support extended to us & keep doing the good work",
  },
  {
    id: 3,
    client: "Shree Maruti",
    logo: Sm,
    text: "We are grateful & thankful to U.S Security for providing excellent and uninterrupted security services at all locations",
  },
  {
    id: 4,
    client: "Big Basket",
    logo: BigBasket,
    text: "Going through the past 2 years from the day of inception to till date, the whole housekeeping services have been handled really well",
  },
  {
    id: 5,
    client: "Ceva Logistics",
    logo: ceva,
    text: "Your timely acknowledgment of our queries, maintaining a quick turn-around time and reverting promptly with a solution, are all commendable! Keep up your good work and all the very best",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    /* Section is now white with a subtle top border to transition from the dark slider above */
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Visual Connection: A subtle glow matching your dark slider theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Branding & CTA */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-gray-50 rounded-full shadow-sm border border-gray-100">
              <span className="text-[#0a1a5c] font-black text-[10px] uppercase tracking-widest">
                Success Stories ~
              </span>
            </div>

            <h2 className="text-[#0a1a5c] text-5xl md:text-6xl font-black leading-tight tracking-tighter">
              Here’s What{" "}
              <span className="text-purple-700">
                Our <br /> Clients
              </span>{" "}
              Have Said.
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed max-w-md italic">
              Discover how our security solutions have safeguarded businesses
              and communities, earning trust through innovation, reliability,
              and excellence.
            </p>

            <Link to={"/service"} >
              <button className="flex items-center gap-3 bg-[#0a1a5c] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-gray-200 transition-all group cursor-pointer">
                Explore Our Capabilities
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </Link>
          </div>

          {/* Right Side: Animated Testimonial Card */}
          <div className="relative min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="space-y-8"
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <Quote
                      className="text-purple-600 mb-4"
                      size={48}
                      fill="currentColor"
                    />
                    <div className="w-24 h-24 rounded-full border-2 border-purple-600 flex items-center justify-center p-4 bg-white shadow-xl">
                      <img
                        src={testimonials[current].logo}
                        alt={testimonials[current].client}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 pt-12">
                    <p className="text-gray-600 text-xl md:text-2xl leading-relaxed font-medium italic">
                      "{testimonials[current].text}"
                    </p>
                    <h4 className="mt-6 text-[#0a1a5c] font-black uppercase tracking-widest">
                      {testimonials[current].client}
                    </h4>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* UPDATED: Continuous Navigation Numbers */}
            <div className="flex items-center gap-6 mt-12 ml-4">
              {/* Number Indicator */}
              <div className="flex items-center gap-2">
                <span className="text-[#0a1a5c] font-black text-2xl">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-300 font-light text-xl">/</span>
                <span className="text-gray-400 font-bold text-sm">
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>

              {/* Minimalist Progress Line */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      current === i
                        ? "bg-purple-700 w-12"
                        : "bg-gray-200 w-4 hover:bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
