import WorkInProgress from "../Components/WorkInProgress";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Building2, Users, HardHat, Zap, Landmark } from "lucide-react";
import TrainingGallery from "../Components/TrainingGallery";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Industrial Guarding",
    desc: "Tactical security for manufacturing plants and warehouses with 24/7 perimeter monitoring.",
    icon: <Building2 size={32} />,
    stat: "400+ Personnel",
  },
  {
    title: "Corporate Security",
    desc: "Professional concierge and access control for high-rise corporate hubs and offices.",
    icon: <Shield size={32} />,
    stat: "ISO 9001:2015",
  },
  {
    title: "Executive Protection",
    desc: "Elite close-protection details for high-net-worth individuals and corporate leadership.",
    icon: <Users size={32} />,
    stat: "Armed/Unarmed",
  },
  {
    title: "Housekeeping Ops",
    desc: "Premium facility management and industrial cleaning services for large-scale complexes.",
    icon: <HardHat size={32} />,
    stat: "500+ Staff",
  },
  {
    title: "Event Security",
    desc: "Crowd management and rapid response for large-scale public and private gatherings.",
    icon: <Zap size={32} />,
    stat: "Rapid Response",
  },
  {
    title: "Financial Institutions",
    desc: "Bank-grade security protocols for financial centers and high-security currency vaults.",
    icon: <Landmark size={32} />,
    stat: "SOP Driven",
  },
];

export default function Expertise() {
  return (
    <main className="bg-white">
      {/* 1. HERO HEADER: Professional & Clean */}
      <section className="pt-32 pb-20 px-6 bg-gray-50 mt-[-3rem]">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-[#0a1a5c] font-black text-xs uppercase tracking-[0.6em] mb-4">
            Operational Intelligence
          </h4>
          <h2 className="text-[#0a1a5c] text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
            OUR <br />
            <span className="text-[#fef200] italic drop-shadow-[3px_3px_0_rgba(10,26,92,1)]">
              EXPERTISE.
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg font-medium border-l-4 border-[#fef200] pl-6 italic">
            Delivering precision protection across India with a force of 1000+
            dedicated personnel.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID: Prussian Blue Contrast #134074 #0a1a5c*/}
      <section className="py-24 bg-[#13315c] relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl group hover:border-[#fef200]/50 transition-all"
            >
              <div className="text-[#fef200] mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-[#fef200] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {service.desc}
              </p>
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full">
                <span className="text-[#fef200] text-[10px] font-black uppercase tracking-widest">
                  {service.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <TrainingGallery />
      {/* 3. TACTICAL CTA: Transition to Footer */}
      <section className="py-20 bg-gradient-to-b from-[#020c34] to-black text-center px-6">
        <h3 className="text-white text-3xl font-black uppercase tracking-tighter mb-8">
          Ready for <span className="text-[#fef200]">Deployment?</span>
        </h3>
        <Link to={"/contact"}>
          <button className="bg-[#fef200]  text-black px-12 py-5 rounded-sm font-black text-xs uppercase tracking-[0.4em] hover:bg-white transition-all shadow-2xl cursor-pointer">
            Request Site Survey
          </button>
        </Link>
      </section>
    </main>
  );
}
