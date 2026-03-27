// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Send,
//   ShieldCheck,
//   CheckCircle2,
//   ArrowRight,
// } from "lucide-react";

// export default function ContactUs() {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isSending, setIsSending] = useState(false);

//   // Prevent Default and Handle Submission Logic
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Tactical Inquiry Dispatched to USS Command Center");
//     setIsSubmitted(true);
//     setIsSending(true);
//     // Reset after 5 seconds to allow another inquiry
//     setTimeout(() => {
//       setIsSubmitted(false);
//     }, 5000);
//   };
//   const formData = {
//     name: e.target[0].value,
//     phone: e.target[1].value,
//     email: e.target[2].value,
//     service: e.target[3].value,
//     message: e.target[4].value,
//   };
//   try {
//     const response = await fetch('/api/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       setIsSubmitted(true);
//       e.target.reset();
//     }
//   } catch (error) {
//     console.error("Transmission Error:", error);
//   } finally {
//     setIsSending(false);
//   }

//   return (
//     /* Transition: Prussian Blue (#0b2545) to Black for Footer Harmony */
//     <section className="py-24 bg-gradient-to-b from-[#0b2545] via-[#05102a] to-black relative overflow-hidden">
//       {/* Tactical Background Overlay */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-12 gap-16 items-start">
//           {/* LEFT SIDE: Deployment Hub Details */}
//           <div className="lg:col-span-5 space-y-10">
//             <div>
//               <h4 className="text-[#fef200] font-black text-[10px] uppercase tracking-[0.6em] mb-4">
//                 24/7 Command Center
//               </h4>
//               <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
//                 GET IN <br />
//                 <span className="text-[#fef200] italic">TOUCH.</span>
//               </h2>
//             </div>

//             <div className="space-y-8">
//               <div className="flex items-center gap-6 group">
//                 <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#fef200] group-hover:bg-[#fef200] group-hover:text-black transition-all duration-500">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">
//                     Emergency Line
//                   </p>
//                   <p className="text-white text-xl font-bold">
//                     +91 86550 15500
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-6 group">
//                 <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#fef200] group-hover:bg-[#fef200] group-hover:text-black transition-all duration-500">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">
//                     Official Inquiry
//                   </p>
//                   <p className="text-white text-xl font-bold">
//                     info@usssecurity.com
//                   </p>
//                 </div>
//               </div>

//   <div className="flex items-center gap-6 group">
//     <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#fef200] group-hover:bg-[#fef200] group-hover:text-black transition-all duration-500">
//       <MapPin size={24} />
//     </div>
//     <div>
//       <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">
//         Operations Base
//       </p>
//       <p className="text-white text-sm font-bold leading-relaxed">
//         Mumbai, Maharashtra, India
//       </p>
//     </div>
//  </div>
//             </div>

//             <div className="pt-8 border-t border-white/5 flex items-center gap-4">
//               <ShieldCheck className="text-[#fef200]" size={32} />
//               <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] leading-tight">
//                 PSARA Licensed Agency <br />
//                 <span className="text-white">National Security Standards</span>
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SIDE: Interactive Form Container */}
//           <div className="lg:col-span-7">
//             <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative min-h-[500px] flex items-center">
//               <AnimatePresence mode="wait">
//                 {!isSubmitted ? (
//                   /* THE FORM */
//                   <motion.form
//                     key="contact-form"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     onSubmit={handleSubmit}
//                     className="w-full space-y-6"
//                   >
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div className="space-y-2">
//                         <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-1">
//                           Full Name
//                         </label>
//                         <input
//                           required
//                           type="text"
//                           className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#fef200]/50 transition-all placeholder:text-white/20"
//                           placeholder="Enter Your Name"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-1">
//                           Mobile Number
//                         </label>
//                         <input
//                           required
//                           type="tel"
//                           className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#fef200]/50 transition-all placeholder:text-white/20"
//                           placeholder="+91 00000 00000"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div className="space-y-2">
//                         <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-1">
//                           Corporate Email
//                         </label>
//                         <input
//                           required
//                           type="email"
//                           className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#fef200]/50 transition-all placeholder:text-white/20"
//                           placeholder="Enter your Email Address"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-1">
//                           Service Required
//                         </label>
//                         <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#fef200]/50 transition-all appearance-none cursor-pointer">
//                           <option className="bg-[#05102a]">
//                             Industrial Guarding
//                           </option>
//                           <option className="bg-[#05102a]">
//                             Executive Protection
//                           </option>
//                           <option className="bg-[#05102a]">
//                             Event Security
//                           </option>
//                           <option className="bg-[#05102a]">
//                             Housekeeping Ops
//                           </option>
//                         </select>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-1">
//                         Operational Brief
//                       </label>
//                       <textarea
//                         rows="4"
//                         className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#fef200]/50 transition-all resize-none placeholder:text-white/20"
//                         placeholder="Describe your security requirements..."
//                       ></textarea>
//                     </div>

//                     <button
//                       type="submit" disabled={isSending}
//                       className="w-full bg-[#fef200] text-black font-black py-5 rounded-xl uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_20px_40px_rgba(254,242,0,0.15)]"
//                     >
//                       <Send size={16} />
//                      {isSending ? "Transmitting..." : "Dispatch Inquiry"}
//                     </button>
//                   </motion.form>
//                 ) : (
//                   /* THE SUCCESS STATE */
//                   <motion.div
//                     key="success-message"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="w-full text-center space-y-6"
//                   >
//                     <div className="inline-flex items-center justify-center w-20 h-20 bg-[#fef200] rounded-full mb-4 shadow-[0_0_40px_rgba(254,242,0,0.4)]">
//                       <CheckCircle2 className="text-black" size={40} />
//                     </div>
//                     <h3 className="text-white text-3xl font-black uppercase tracking-tighter">
//                       INQUIRY{" "}
//                       <span className="text-[#fef200]">DISPATCHED.</span>
//                     </h3>
//                     <p className="text-gray-400 text-sm max-w-xs mx-auto uppercase tracking-widest font-bold leading-relaxed">
//                       Your brief has been logged at our Command Center. A
//                       tactical officer will respond within 60 minutes.
//                     </p>
//                     <div className="pt-4">
//                       <div className="inline-flex items-center gap-2 text-[#fef200] text-[10px] font-black uppercase tracking-[0.4em]">
//                         Waiting for connection{" "}
//                         <motion.span
//                           animate={{ opacity: [0, 1, 0] }}
//                           transition={{ repeat: Infinity, duration: 1.5 }}
//                         >
//                           ...
//                         </motion.span>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // FIXED: Logic must be inside the async function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // FIXED: Capture values properly from the event target
    const formData = {
      name: e.target[0].value,
      phone: e.target[1].value,
      email: e.target[2].value,
      service: e.target[3].value,
      message: e.target[4].value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset(); // Clear form after success

        // Auto-reset success state after 10 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 10000);
      } else {
        alert("Transmission failed. Please check your connection.");
      }
    } catch (error) {
      console.error("Transmission Error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0b2545] via-[#05102a] to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT SIDE: Deployment Hub Details */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h4 className="text-[#fef200] font-black text-[10px] uppercase tracking-[0.6em] mb-4">
                24/7 Command Center
              </h4>
              <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                GET IN <br />
                <span className="text-[#fef200] italic">TOUCH.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#fef200] group-hover:bg-[#fef200] group-hover:text-black transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">
                    Emergency Line
                  </p>
                  <p className="text-white text-xl font-bold">
                    +91 86550 15500
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#fef200] group-hover:bg-[#fef200] group-hover:text-black transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">
                    Official Inquiry
                  </p>
                  <p className="text-white text-xl font-bold">
                    info@usssecurity.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#fef200] group-hover:bg-[#fef200] group-hover:text-black transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">
                    Operations Base
                  </p>
                  <p className="text-white text-sm font-bold leading-relaxed">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex items-center gap-4">
              <ShieldCheck className="text-[#fef200]" size={32} />
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] leading-tight">
                PSARA Licensed Agency <br />
                <span className="text-white">National Security Standards</span>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative min-h-[500px] flex items-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="w-full space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-1">
                          Full Name
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-[#fef200]/50 transition-all placeholder:text-white/20"
                          placeholder="Enter Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-1">
                          Mobile Number
                        </label>
                        <input
                          required
                          type="tel"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-[#fef200]/50 transition-all placeholder:text-white/20"
                          placeholder="+91 00000 00000"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-1">
                          Corporate Email
                        </label>
                        <input
                          required
                          type="email"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-[#fef200]/50 transition-all placeholder:text-white/20"
                          placeholder="Enter your Email Address"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-1">
                          Service Required
                        </label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-[#fef200]/50 transition-all appearance-none cursor-pointer">
                          <option className="bg-[#05102a]">
                            Industrial Guarding
                          </option>
                          <option className="bg-[#05102a]">
                            Executive Protection
                          </option>
                          <option className="bg-[#05102a]">
                            Event Security
                          </option>
                          <option className="bg-[#05102a]">
                            Housekeeping Ops
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-1">
                        Operational Brief
                      </label>
                      <textarea
                        required
                        rows="4"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-[#fef200]/50 transition-all resize-none placeholder:text-white/20"
                        placeholder="Describe your security requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full bg-[#fef200] text-black font-black py-5 rounded-xl uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_20px_40px_rgba(254,242,0,0.15)] disabled:opacity-50"
                    >
                      <Send size={16} />
                      {isSending ? "Transmitting..." : "Dispatch Inquiry"}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full text-center space-y-6"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#fef200] rounded-full mb-4 shadow-[0_0_40px_rgba(254,242,0,0.4)]">
                      <CheckCircle2 className="text-black" size={40} />
                    </div>
                    <h3 className="text-white text-3xl font-black uppercase tracking-tighter">
                      INQUIRY{" "}
                      <span className="text-[#fef200]">DISPATCHED.</span>
                    </h3>
                    <p className="text-gray-400 text-sm max-w-xs mx-auto uppercase tracking-widest font-bold leading-relaxed">
                      Your brief has been logged at our Command Center. A
                      tactical officer will respond within 60 minutes.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
