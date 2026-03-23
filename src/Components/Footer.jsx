// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Twitter,
//   Linkedin,
//   Instagram,
//   Facebook,
//   Copy,
//   CheckCircle,
// } from "lucide-react";
// import logo from "../assets/logo-all.png";

// function Footer() {
//   const [copied, setCopied] = useState(false);
//   const email = "ussecurityprotectionservice@gmail.com";

//   // Manual Animation Logic that triggers every time
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Add the class when the footer comes into view
//             entry.target.classList.add("active");
//           } else {
//             // Remove the class when the footer leaves the view
//             entry.target.classList.remove("active");
//           }
//         });
//       },
//       {
//         threshold: 0.1, // Trigger when 10% of the footer is visible
//         rootMargin: "0px 0px -50px 0px", // Slight offset for better feel
//       },
//     );

//     const hiddenElements = document.querySelectorAll(".reveal");
//     hiddenElements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(email);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <footer className="bg-black text-white pt-16 pb-8 border-t-8 border-gray-950">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
//         {/* Column 1: Animated Slide Up */}
//         <div className="reveal col-span-1 md:col-span-1">
//           <img src={logo} alt="USS Logo" className="h-28 mb-6" />
//           <p className="text-gray-400 text-sm">
//             Professional security solutions since 2010. Elite guarding and
//             industrial protection.
//           </p>
//           <div className="flex gap-4 mt-6">
//             {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="p-2 bg-gray-900 rounded-full hover:bg-uss-gold hover:-translate-y-1 transition-all"
//               >
//                 <Icon size={18} />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Column 2: Animated Delay 1 */}
//         <div className="reveal [transition-delay:200ms]">
//           <h4 className="text-uss-gold font-black mb-6 uppercase text-sm ">
//             Our Services
//           </h4>
//           <ul className="text-gray-400 text-sm space-y-3">
//             <li className="hover:translate-x-2 transition-transform cursor-pointer hover:text-white">
//               Commercial Security
//             </li>
//             <li className="hover:translate-x-2 transition-transform cursor-pointer hover:text-white">
//               Residential Security
//             </li>
//             <li className="hover:translate-x-2 transition-transform cursor-pointer hover:text-white">
//               Event Security
//             </li>
//             <li className="hover:translate-x-2 transition-transform cursor-pointer hover:text-white">
//               House Keeping
//             </li>
//           </ul>
//         </div>

//         {/* Column 3: Animated Delay 2 */}
//         <div className="reveal [transition-delay:400ms]">
//           <h4 className="text-uss-gold font-black mb-6 uppercase text-sm">
//             Quick Links
//           </h4>
//           <ul className="text-gray-400 text-sm space-y-3 font-bold">
//             <li>
//               <Link to="/" className="hover:text-white">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-white">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/services" className="hover:text-white">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link to="/training" className="hover:text-white">
//                 Training
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Column 4: Animated Delay 3 */}
//         <div className="reveal [transition-delay:600ms]">
//           <h4 className="text-uss-gold font-black mb-6 uppercase text-sm">
//             Contact Us
//           </h4>
//           <div className="text-gray-400 text-sm space-y-4">
//             <button
//               onClick={copyToClipboard}
//               className="flex items-center gap-2 text-uss-gold hover:text-white transition-colors"
//             >
//               {email}{" "}
//               {copied ? (
//                 <CheckCircle size={14} className="text-green-500" />
//               ) : (
//                 <Copy size={14} />
//               )}
//             </button>
//             <p className="text-lg font-bold text-uss-gold">+91 86550 15500</p>
//           </div>
//         </div>
//       </div>
//       <div className="mt-12 pt-8 border-t border-gray-900 text-center text-[12px] text-gray-500 uppercase tracking-widest">
//         © 2017 US Security Protection Services. Licensed under PSARA India.
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   Twitter,
//   Linkedin,
//   Instagram,
//   Facebook,
//   Copy,
//   CheckCircle,
//   PhoneCall,
//   Mail,
// } from "lucide-react";
// import logo from "../assets/logo-all.png";

// function Footer() {
//   const [copied, setCopied] = useState(false);
//   const email = "ussecurityprotectionservice@gmail.com";

//   // Manual Animation Logic (Re-triggers every time)
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("active");
//           else entry.target.classList.remove("active");
//         });
//       },
//       { threshold: 0.1 },
//     );

//     const hiddenElements = document.querySelectorAll(".reveal");
//     hiddenElements.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(email);
//     setCopied(true);
//     // Visual "Pop" for 2 seconds
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <footer className="relative bg-black text-white pt-16 pb-8 border-t-8 border-uss-gold overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
//         {/* Column 1: Brand */}
//         <div className="reveal col-span-1">
//           <img src={logo} alt="USS Logo" className="h-28 mb-6" />
//           <p className="text-gray-400 text-sm leading-relaxed mb-6">
//             Elite bouncers and industrial security solutions across India since
//             2010.
//           </p>
//           <div className="flex gap-4">
//             {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="p-2 bg-gray-800 rounded-full hover:bg-uss-gold hover:text-black transition-all"
//               >
//                 <Icon size={18} />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Column 2: Services */}
//         <div className="reveal [transition-delay:150ms]">
//           <h4 className="text-uss-gold font-black mb-6 uppercase text-sm border-b border-gray-800 pb-2 inline-block">
//             Our Services
//           </h4>
//           <ul className="text-gray-400 text-sm space-y-3">
//             {[
//               "Commercial Security",
//               "Residential Security",
//               "Event Security",
//               "Executive Protection",
//             ].map((s) => (
//               <li
//                 key={s}
//                 className="hover:text-uss-gold hover:translate-x-1 transition-all cursor-pointer"
//               >
//                 › {s}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Column 3: Quick Links */}
//         <div className="reveal [transition-delay:300ms]">
//           <h4 className="text-uss-gold font-black mb-6 uppercase text-sm border-b border-gray-800 pb-2 inline-block">
//             Explore
//           </h4>
//           <ul className="text-gray-400 text-sm space-y-4 tracking-wide">
//             {["Home", "About", "Services", "Training"].map((l) => (
//               <li key={l}>
//                 <Link
//                   to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
//                   className="hover:text-white transition-colors"
//                 >
//                   › {l}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Column 4: Contact Us (POLISHED) */}
//         <div className="reveal [transition-delay:450ms] border-2 border-gray-800 p-6 rounded-xl bg-gray-900/30">
//           <h4 className="text-uss-gold font-black mb-6 uppercase text-sm">
//             Direct Contact
//           </h4>

//           <div className="space-y-6">
//             {/* Email Section with Copy Pop */}
//             <div className="relative group">
//               <span className="text-gray-500 text-[10px] uppercase font-bold block mb-1">
//                 Send Mail
//               </span>
//               <button
//                 onClick={copyToClipboard}
//                 className="flex items-center gap-3 text-white hover:text-uss-gold transition-colors text-sm break-all text-left"
//               >
//                 <Mail size={16} className="text-uss-gold shrink-0" />
//                 {email}
//               </button>

//               {/* Copy "Pop" Notification */}
//               {copied && (
//                 <div className="absolute -top-12 left-0 bg-green-800 text-white px-3 py-1 rounded-md text-xs font-bold shadow-xl animate-bounce flex items-center gap-2">
//                   <CheckCircle size={12} /> Email Copied!
//                 </div>
//               )}
//             </div>

//             {/* Mobile Call Section */}
//             <div>
//               <span className="text-gray-500 text-[11px] uppercase font-bold block mb-1">
//                 Call 24/7
//               </span>
//               <a
//                 href="tel:+918655015500"
//                 className="flex items-center gap-3 text-uss-gold font-black text-xl hover:scale-105 origin-left transition-transform"
//               >
//                 <PhoneCall size={20} />
//                 +91 86550 15500
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-16 pt-8 border-t border-gray-900 text-center text-[10px] text-gray-600 uppercase tracking-[0.2em]">
//         © 2017 US Security Protection Services. Licensed under PSARA India.
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Copy,
  CheckCircle,
  PhoneCall,
  Mail,
} from "lucide-react";
import logo from "../assets/logo-all.png";

function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "ussecurityprotectionservice@gmail.com";

  // Re-triggerable scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
          else entry.target.classList.remove("active");
        });
      },
      { threshold: 0.1 },
    );

    const hiddenElements = document.querySelectorAll(".reveal");
    hiddenElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // <footer className="relative bg-black text-white pt-16 pb-8  overflow-hidden">
    <footer className="relative bg-black text-white pt-16 pb-8 border-t-2 border-[#fef200]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Identity & Socials */}
        <div className="reveal col-span-1">
          <img src={logo} alt="USS Logo" className="h-28 mb-6" />
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Elite protection and industrial security solutions across India
            since 2010. Licensed under PSARA.
          </p>
          <div className="flex gap-5">
            {[
              { Icon: Twitter, color: "hover:text-blue-400" },
              { Icon: Linkedin, color: "hover:text-blue-700" },
              { Icon: Instagram, color: "hover:text-pink-500" },
              { Icon: Facebook, color: "hover:text-blue-600" },
            ].map(({ Icon, color }, i) => (
              <a
                key={i}
                href="#"
                className={`text-gray-500 ${color} transition-all duration-300 transform hover:-translate-y-1`}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="reveal transition-delay:150ms">
          <h4 className="text-uss-gold font-black mb-6 uppercase text-sm tracking-widest">
            Our Services
          </h4>
          <ul className="text-gray-400 text-sm space-y-4">
            {[
              "Commercial Security",
              "Residential Security",
              "Event Security",
              "Executive Protection",
              "Surveillance Systems",
            ].map((s) => (
              <li
                key={s}
                className="hover:text-uss-gold hover:translate-x-2 transition-all cursor-pointer flex items-center gap-2"
              >
                <span className="text-uss-gold font-bold">›</span> {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="reveal transition-delay:300ms">
          <h4 className="text-uss-gold font-black mb-6 uppercase text-sm tracking-widest">
            Quick Links
          </h4>
          <ul className="text-gray-400 text-sm space-y-4 tracking-wider">
            {["Home", "About", "Service", "Whyus", "Client"].map((l) => (
              <li key={l}>
                <Link
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="tracking-widest hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-uss-gold font-bold">›</span> {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Card (Premium Look) */}
        <div className="reveal transition-delay:450ms">
          <h4 className="text-uss-gold font-black mb-6 uppercase text-sm tracking-widest">
            Contact Us
          </h4>

          <div className="space-y-4">
            {/* Click to Copy Node-Style Email Card */}
            <div
              onClick={copyToClipboard}
              className="relative bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl cursor-pointer group hover:border-uss-gold/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
                  Click to copy email
                </span>
                {copied ? (
                  <CheckCircle size={16} className="text-green-500" />
                ) : (
                  <Copy
                    size={16}
                    className="text-zinc-600 group-hover:text-uss-gold transition-colors"
                  />
                )}
              </div>
              <p className="text-white font-bold text-sm sm:text-base break-all">
                {email}
              </p>

              {/* Popup Notification */}
              {copied && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-uss-gold text-black px-4 py-1 rounded-full text-[10px] font-black shadow-2xl animate-bounce">
                  COPIED TO CLIPBOARD!
                </div>
              )}
            </div>

            {/* Mobile Call Direct Button */}
            <a
              href="tel:+918655015500"
              className="flex items-center justify-between bg-uss-gold text-black p-5 rounded-2xl font-black hover:scale-[1.02] transition-transform hover:bg-black hover:text-uss-gold  hover: border-2 border-amber-300 "
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase opacity-70">
                  Call Now 24/7
                </span>
                <span className="text-lg">+91 86550 15500</span>
              </div>
              <PhoneCall size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Final Copyright Bar */}
      <div className="mt-16 pt-8 border-t border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em]">
          © 2017 US Security Protection Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
