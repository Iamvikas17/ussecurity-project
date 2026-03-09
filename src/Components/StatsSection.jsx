import { useEffect, useState, useRef } from "react";
import { Users, Globe, Smile, Trophy } from "lucide-react";

const StatItem = ({ icon: Icon, endValue, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 },
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = endValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, endValue, duration]);

  return (
    <div
      ref={elementRef}
      className="group relative z-10 flex items-center gap-6 px-8 py-12 transition-all duration-500 hover:bg-white/5 cursor-default overflow-hidden"
    >
      {/* 1. The Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#fef200]/10 via-transparent to-transparent blur-3xl"></div>
      </div>

      {/* 2. Icon with Pulse on Hover */}
      <div className="text-[#fef200] shrink-0 group-hover:scale-110 transition-transform duration-300">
        <Icon size={48} strokeWidth={1.2} />
      </div>

      {/* 3. High-Contrast Typography */}
      <div className="flex flex-col border-l border-white/10 pl-8 relative z-20">
        <span className="text-white text-5xl md:text-6xl font-black tabular-nums tracking-tighter drop-shadow-lg">
          {count}+
        </span>
        <span className="text-[#fef200] text-[10px] font-black uppercase tracking-[0.3em] mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      </div>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className="relative bg-[#0a1a5c] border-y border-white/5 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          <StatItem icon={Users} endValue={1000} label="Our Employees" />
          <StatItem icon={Globe} endValue={5} label="States Covered" />
          <StatItem icon={Smile} endValue={100} label="Happy Clients" />
          <StatItem icon={Trophy} endValue={15} label="Years of Excellence" />
        </div>
      </div>
    </section>
  );
}
