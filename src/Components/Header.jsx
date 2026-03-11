// import { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   // Helper for active link styling
//   const activeStyles = ({ isActive }) =>
//     isActive
//       ? "text-blue-800 border-b-2 border-blue-800 pb-1 transition-all "
//       : "hover:text-blue-800 transition-colors";

//   return (
//     <header className="bg-white border-b-4 border-uss-gold sticky top-0 z-50 shadow-md">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
//         {/* Logo Section */}
//         <Link to="/" className="flex items-center gap-2 sm:gap-3">
//           <img
//             src={logo}
//             alt="USS Logo"
//             className="h-16 sm:h-28 w-auto drop-shadow-md"
//           />
//           <span className="xs:block text-gray-900 font-black text-lg sm:text-4xl leading-tight tracking-widest uppercase">
//             U<span className="text-blue-800">.</span>S
//             <span className="text-blue-800">.</span>
//             <span className="text-blue-800"> SECURITY</span>
//             <br />
//             <span className="text-xs sm:text-xl">PROTECTION SERVICES</span>
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-12 text-gray-900 font-bold text-sm">
//           <NavLink to="/" className={activeStyles}>
//             HOME
//           </NavLink>
//           <NavLink to="/about" className={activeStyles}>
//             ABOUT US
//           </NavLink>
//           <NavLink to="/service" className={activeStyles}>
//             SERVICE
//           </NavLink>
//           <NavLink to="/contact" className={activeStyles}>
//             CONTACT
//           </NavLink>

//           <NavLink to="/training" className={activeStyles}>
//             CLIENTS
//           </NavLink>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden p-2 text-gray-900 focus:outline-none z-50"
//           aria-label="Toggle Menu"
//         >
//           <div className="space-y-1.5">
//             <span
//               className={`block h-1 w-6 bg-gray-900 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
//             ></span>
//             <span
//               className={`block h-1 w-6 bg-gray-900 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
//             ></span>
//             <span
//               className={`block h-1 w-6 bg-gray-900 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
//             ></span>
//           </div>
//         </button>
//       </nav>

//       {/* Animated Mobile Navigation Dropdown */}
//       <div
//         className={`md:hidden bg-white border-t border-gray-100 shadow-inner overflow-hidden transition-all duration-500 ease-in-out ${
//           isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="flex flex-col space-y-6 p-8 font-bold text-gray-900 text-center">
//           <NavLink to="/" onClick={toggleMenu} className={activeStyles}>
//             HOME
//           </NavLink>
//           <NavLink to="/about" onClick={toggleMenu} className={activeStyles}>
//             ABOUT
//           </NavLink>
//           <NavLink to="/service" onClick={toggleMenu} className={activeStyles}>
//             SERVICES
//           </NavLink>
//           <NavLink to="/contact" onClick={toggleMenu} className={activeStyles}>
//             CONTACT
//           </NavLink>

//           <NavLink to="/training" onClick={toggleMenu} className={activeStyles}>
//             ClIENTS
//           </NavLink>
//         </div>
//       </div>
//     </header>
//   );
// }
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo-all.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Helper for active link styling
  const activeStyles = ({ isActive }) =>
    isActive
      ? "text-uss-gold border-b-2 border-uss-gold pb-1 transition-all "
      : "hover:text-uss-gold transition-colors";

  return (
    <header className="bg-uss-navy border-b-4 border-uss-gold sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img
            src={logo}
            alt="USS Logo"
            className="h-16 sm:h-28 w-auto drop-shadow-md"
          />
          <span className="xs:block text-white font-black text-lg sm:text-4xl leading-tight tracking-widest uppercase">
            U<span className="text-white">.</span>S
            <span className="text-white">.</span>
            <span className="text-uss-gold "> SECURITY</span>
            <br />
            <span className="text-xs text-white sm:text-xl">
              PROTECTION SERVICES
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-white font-bold text-sm tracking-wide">
          <NavLink to="/" className={activeStyles}>
            HOME
          </NavLink>
          <NavLink to="/about" className={activeStyles}>
            ABOUT US
          </NavLink>
          <NavLink to="/service" className={activeStyles}>
            SERVICE
          </NavLink>
          <NavLink to="/contact" className={activeStyles}>
            CONTACT
          </NavLink>

          <NavLink to="/client" className={activeStyles}>
            CLIENTS
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-900 focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-1 w-7 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
            ></span>
            <span
              className={`block h-1 w-7 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-1 w-7 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Animated Mobile Navigation Dropdown */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 shadow-inner overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-6 p-8 font-bold text-gray-900 text-center">
          <NavLink to="/" onClick={toggleMenu} className={activeStyles}>
            HOME
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={activeStyles}>
            ABOUT
          </NavLink>
          <NavLink to="/service" onClick={toggleMenu} className={activeStyles}>
            SERVICES
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={activeStyles}>
            CONTACT
          </NavLink>

          <NavLink to="/client" onClick={toggleMenu} className={activeStyles}>
            ClIENTS
          </NavLink>
        </div>
      </div>
    </header>
  );
}
