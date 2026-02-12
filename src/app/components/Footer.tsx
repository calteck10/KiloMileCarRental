import { Link } from "react-router";
import { Facebook, Twitter, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import logo from "figma:asset/c517f2d5bb6f716930d5b92d199df92162ba7080.png";

export function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Kilomile Car Rentals" className="h-20 brightness-0 invert" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted car rental partner in Zimbabwe. We provide quality vehicles and exceptional service for all your transportation needs.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-[#E8B317] rounded flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-[#E8B317] rounded flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-[#E8B317] rounded flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-[#E8B317] rounded flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-gray-400 hover:text-[#E8B317] transition-colors">
                Home
              </Link>
              <Link to="/fleet" className="text-gray-400 hover:text-[#E8B317] transition-colors">
                Our Fleet
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-[#E8B317] transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-[#E8B317] transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Info</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E8B317] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">All Over Zimbabwe</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#E8B317] flex-shrink-0" />
                  <span className="text-gray-400">+263 719367818</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#E8B317] flex-shrink-0" />
                  <span className="text-gray-400">+263 773367818</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#E8B317] flex-shrink-0" />
                <span className="text-gray-400">info@kcr.co.zw</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Kilomile Car Rental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}