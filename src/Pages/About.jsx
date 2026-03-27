import React from "react";
import { motion } from "framer-motion";
import { Quote, Award, Shield, Globe } from "lucide-react";
import Owner from "../assets/AboutusPIc/Owner1.png";
import Director from "../assets/AboutusPIc/colKaplia.png";
import Director1 from "../assets/AboutusPIc/colKaplia1.png";

import VipinImg from "../assets/AboutusPIc/team-1.png";
import UpendraImg from "../assets/AboutusPIc/Team-2.jpeg";
import MissionSection from "../Components/MissionSection";

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* NEW: MISSION BRIEF / CORPORATE INTRODUCTION */}
      <section className="pt-18 pb-20 px-6 bg-[#fcfcfc] border-b border-gray-100 relative overflow-hidden">
        {/* Background Tactical Watermark */}
        <div className="absolute top-0 right-0 text-[15rem] font-black text-gray-50 select-none pointer-events-none tracking-tighter leading-none opacity-40 translate-x-20 -translate-y-10">
          ESTB.2010
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* LEFT: THE POWER HEADING */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[3px] w-12 bg-[#0a1a5c]"></span>
                <h4 className="text-[#0a1a5c] font-black text-sm uppercase tracking-[0.5em]">
                  About us
                </h4>
              </div>

              <h1 className="text-[#0a1a5c] text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.75]">
                U.S. <br />
                <span className="relative inline-block text-[#fef200] italic drop-shadow-[4px_4px_0_rgba(10,26,92,1)]">
                  SECURITY.
                </span>
              </h1>

              {/* Outlined "PROTECTION" tag */}
              <div className="mt-4">
                <span
                  className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-transparent stroke-gray-200"
                  style={{ WebkitTextStroke: "1px #e5e7eb" }}
                >
                  PROTECTION
                </span>
              </div>
            </motion.div>

            {/* RIGHT: THE HIGH-IMPACT NARRATIVE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-[40px_40px_80px_rgba(0,0,0,0.03)] border border-gray-50 space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-[#0a1a5c] text-2xl md:text-3xl font-black leading-none uppercase tracking-tighter italic border-b-4 border-[#fef200] inline-block pb-1">
                  Tactical Excellence Since Day One.
                </h3>
                <p className="text-gray-900 text-lg md:text-xl font-bold leading-tight uppercase tracking-tight">
                  Headquartered in Mumbai, we are a team of highly experienced
                  professionals dedicated to transforming global security needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="h-1 w-12 bg-[#0a1a5c]"></div>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    With years of domain expertise, we play a{" "}
                    <span className="text-[#0a1a5c] font-black italic">
                      catalytic role
                    </span>{" "}
                    in redefining safety standards across India. Every solution
                    is a custom tactical deployment.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="h-1 w-12 bg-[#fef200]"></div>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    We treat employees as{" "}
                    <span className="text-[#0a1a5c] font-black italic">
                      human assets
                    </span>
                    . Our rigorous standards translate directly into absolute
                    on-ground assurance for our elite clientele.
                  </p>
                </div>
              </div>

              {/* INTERACTIVE BADGES */}
              <div className="flex flex-wrap gap-4 pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-[#0a1a5c] px-6 py-3 rounded-xl shadow-xl"
                >
                  <Shield size={18} className="text-[#fef200]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                    PAN-India Force
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-xl border border-gray-100"
                >
                  <Globe size={18} className="text-[#0a1a5c]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0a1a5c]">
                    Customized Protocols
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. FOUNDER SECTION: Dindyal Ramraj Yadav */}
      <section className="py-14 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          {/* Left Side: Founder Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-5 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-gray-100 shadow-2xl">
              <img
                src={Owner}
                alt="Dindyal Ramraj Yadav"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Tactical Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#fef200] -z-0 rounded-full blur-3xl opacity-30"></div>
          </motion.div>

          {/* Right Side: The Story */}
          <div className="md:col-span-7 space-y-8">
            <div>
              <h4 className="text-[#0a1a5c] font-black text-xs uppercase tracking-[0.4em] mb-4">
                Founder & Chairman
              </h4>
              <h2 className="text-[#0a1a5c] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                DINDYAL RAMRAJ <br />{" "}
                <span className="text-[#fef200] italic drop-shadow-[2px_2px_0_rgba(10,26,92,1)]">
                  YADAV.
                </span>
              </h2>
            </div>

            <div className="relative">
              <Quote
                className="absolute -left-8 -top-4 text-gray-100"
                size={60}
              />
              <p className="text-gray-600 text-lg leading-relaxed relative z-10 italic">
                Starting from nothing in 2010, the journey of U.S. Security
                Protection Services was forged through fire. Dindyal Ramraj
                Yadav built this empire from the ground up, overcoming every
                rough phase with a relentless spirit of tactical superiority.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#0a1a5c]">
                <h3 className="font-black text-[#0a1a5c] text-xl mb-2">
                  1000+ Force
                </h3>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">
                  Guarding & Housekeeping Personnel
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#fef200]">
                <h3 className="font-black text-[#0a1a5c] text-xl">
                  Brilliant Leadership
                </h3>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">
                  Managing Operations to Marketing
                </p>
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed">
              Today, he manages every aspect of the company brilliantly—from
              ground operations to strategic marketing. His vision has expanded
              the company across four major states, achieving a massive
              milestone of 1000+ specialized personnel.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a1a5c] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
          {/* Left Side: Information */}
          <div className="md:col-span-7 order-2 md:order-1">
            <h4 className="text-[#fef200] font-black text-xs uppercase tracking-[0.4em] mb-4">
              Board of Director
            </h4>

            {/* Updated Heading with Director's Name */}
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">
              COL. ROHIT <br />
              <span className="text-[#fef200] italic">KAPILA.</span>
            </h2>

            <p className="text-gray-400 text-[20px] font-bold uppercase tracking-[0.2em] mb-8">
              Director
            </p>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#fef200]/50"></div>
              <p className="text-[#fef200] text-xs font-black uppercase tracking-[0.3em] italic">
                "Precision Protection, Absolute Assurance"
              </p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {/* Experties in Warehouse management and providing complete warehouse
              solution <br />
              worked along with warehouses such as Amazon,Flipkart,Voltas,DHL
              and many more in warehouse industries.
              <br />
              Working alongside the founder, Col. Rohit Kapila ensures that our
              rapid response and training protocols remain the gold standard in
              the industry, bringing military-grade discipline to every
              deployment. */}
              Specialized Protection Col Kapila, retd has joined us to work
              alongside the founder to provide complete warehouse security
              solutions, including use of latest trends in AI in security and
              surveillance, rapid response and training protocols bringing
              military-grade discipline to every deployment, to ensure our rapid
              response and training protocols remain the gold standard in the
              industry, Col Kapila has been Head Security & Loss Prevention,
              with clients like Amazon & Flipkart (including grocery) ,Zepto,
              Meesho, Kohler, Tata Motors, Wildcraft, Croma etc
            </p>

            <div className="flex gap-4 items-center">
              <Award className="text-[#fef200]" />
              <span className="font-bold uppercase text-xs tracking-widest">
                ISO 9001:2015 Certified Leadership
              </span>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="rounded-2xl border-4 border-white/10 p-2 overflow-hidden bg-white/5 shadow-2xl">
              <img
                src={Director1}
                alt="Col. Rohit Kapila - Director"
                /* Fixed h-120 to h-auto for better mobile responsiveness */
                className="w-full h-auto rounded-xl hover:grayscale-0 transition-all duration-700 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE TEAM SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-[#0a1a5c] text-4xl md:text-6xl font-black uppercase tracking-tighter">
            THE
            <span className="text-[#fef200] drop-shadow-[1px_1px_0_rgba(10,26,92,1)]">
              CORE
            </span>
            TEAM.
          </h2>
          <div className="h-1.5 w-32 bg-[#0a1a5c] mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto px-6">
          {[
            {
              name: "Vipin Yadav",
              role: "Operation Head & Business Development",
              image: VipinImg,
            },
            {
              name: "Upendra Yadav",
              role: "CFO & Financial Strategy",
              image: UpendraImg,
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 rounded-3xl shadow-xl border-b-8 border-[#0a1a5c] text-center group"
            >
              {/* FIX 1: Changed aspect-square to aspect-[3/4] to prevent vertical cropping.
        FIX 2: Added overflow-hidden to ensure the rounded corners work.
      */}
              <div className="w-full aspect-[3/4] bg-white rounded-2xl mx-auto mb-8 overflow-hidden border border-gray-200">
                <img
                  src={member.image}
                  alt={`USS Security Leadership: ${member.name}`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="text-[#0a1a5c] font-black uppercase tracking-tight text-2xl md:text-3xl leading-none mb-3">
                {member.name}
              </h3>
              <p className="text-[#0a1a5c]/60 text-xs font-black uppercase tracking-[0.4em] leading-tight">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <MissionSection />
    </main>
  );
};

export default AboutPage;
