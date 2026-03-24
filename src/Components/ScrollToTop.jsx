// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Snap to the very top of the page on every route change
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  useEffect(() => {
    // This handles both:
    // 1. Route changes (clicking a Nav Link)
    // 2. Initial mount (Manual page reload)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "instant" to avoid the "sliding" look during page transitions
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
