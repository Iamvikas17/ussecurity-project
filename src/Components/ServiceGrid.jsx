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
    <section className="bg-white py-12 md:py-9 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#0a1a5c] font-black text-[10px] uppercase tracking-[0.4em] mb-2">
              Tactical Expertise
            </h4>
            <h2 className="text-[#0a1a5c] text-3xl md:text-6xl font-black leading-none tracking-tighter">
              OUR CORE <br />
              <span className="text-[#fef200] drop-shadow-[1px_1px_0_rgba(10,26,92,1)]">
                SOLUTIONS.
              </span>
            </h2>
          </motion.div>
          <p className="text-gray-500 max-w-sm text-sm md:text-base font-medium border-l-2 border-[#0a1a5c] pl-4 italic">
            Providing tailored security protocols since 2010. We don't just
            provide guards; we deploy tactical solutions.
          </p>
        </div>

        {/* The Grid: Reduced heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileHover="hovered"
              whileInView={window.innerWidth < 768 ? "hovered" : "initial"}
              viewport={{ once: false, amount: 0.8 }}
              /* FIX: Reduced h-[380px] to h-[250px] on mobile and h-[450px] to h-[320px] on desktop */
              className="group relative h-[170px] md:h-[220px] overflow-hidden border border-gray-100 cursor-pointer bg-gray-50 transition-all duration-300"
            >
              {/* Front Face: Compact spacing */}
              <motion.div
                variants={{
                  initial: { opacity: 1, y: 0 },
                  hovered: { opacity: 0, y: -10 },
                }}
                className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
              >
                <service.icon
                  size={48} /* Reduced from 60 */
                  className="text-[#0a1a5c] mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-[#0a1a5c] text-lg font-black uppercase tracking-widest leading-tight">
                  {service.title}
                </h3>
              </motion.div>

              {/* Slide-Up Overlay: Optimized text fit */}
              <motion.div
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="absolute inset-0 bg-[#0a1a5c] p-6 md:p-8 flex flex-col justify-center"
              >
                <div className="mb-4">
                  <service.icon size={32} className="text-[#fef200]" />
                </div>
                <h3 className="text-white text-xl font-black uppercase mb-2 tracking-tighter italic">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-snug mb-4">
                  {service.desc}
                </p>
                <div className="h-1 w-10 bg-[#fef200]"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
