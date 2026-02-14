import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/c517f2d5bb6f716930d5b92d199df92162ba7080.png";

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `text-base ${isActive(path) ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={() => setMenuOpen(false)}>
          <span className="text-xl sm:text-2xl font-bold text-gray-900">KILOMILE</span>
          <img src={logo} alt="Kilomile Car Rentals" className="h-10 sm:h-16" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/fleet" className={linkClass("/fleet")}>Our Fleet</Link>
          <Link to="/services" className={linkClass("/services")}>Services</Link>
          <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
          <Link
            to="/quote"
            className="px-6 py-2 bg-[#E8B317] text-gray-900 rounded hover:bg-[#d4a315] transition-colors font-medium"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 flex flex-col gap-4">
          <Link to="/" className={linkClass("/")} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/fleet" className={linkClass("/fleet")} onClick={() => setMenuOpen(false)}>Our Fleet</Link>
          <Link to="/services" className={linkClass("/services")} onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/contact" className={linkClass("/contact")} onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link
            to="/quote"
            className="px-6 py-2 bg-[#E8B317] text-gray-900 rounded hover:bg-[#d4a315] transition-colors font-medium text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Quote
          </Link>
        </nav>
      )}
    </header>
  );
}