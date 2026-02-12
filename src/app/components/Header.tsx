import { Link, useLocation } from "react-router";
import logo from "figma:asset/c517f2d5bb6f716930d5b92d199df92162ba7080.png";

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900">KILOMILE</span>
          <img src={logo} alt="Kilomile Car Rentals" className="h-16" />
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className={`text-base ${
              isActive("/") ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Home
          </Link>
          <Link
            to="/fleet"
            className={`text-base ${
              isActive("/fleet") ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Our Fleet
          </Link>
          <Link
            to="/services"
            className={`text-base ${
              isActive("/services") ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`text-base ${
              isActive("/contact") ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Contact
          </Link>
          <Link
            to="/quote"
            className="px-6 py-2 bg-[#E8B317] text-gray-900 rounded hover:bg-[#d4a315] transition-colors font-medium"
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}