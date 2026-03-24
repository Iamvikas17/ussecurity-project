import React, { useState, useEffect } from "react";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorched down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // The "Pro" smooth glide
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          group bg-brand-purple p-4 rounded-full shadow-[0_0_20px_rgba(126,34,206,0.5)] 
          border border-white/20 transition-all duration-500 hover:scale-110 active:scale-95
        `}
      >
        {/* The Arrow Icon */}
        <svg
          className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>

        {/* Tactical Glow Effect */}
        <span className="absolute inset-0 rounded-full bg-purple-400 opacity-0 group-hover:opacity-20 animate-ping"></span>
      </button>
    </div>
  );
};

export default ScrollUpButton;