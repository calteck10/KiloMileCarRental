import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/c517f2d5bb6f716930d5b92d199df92162ba7080.png";

export function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-gray-300 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img src={logo} alt="Kilomile Car Rentals" className="h-16 sm:h-20 object-contain" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted car rental partner in Zimbabwe. We provide quality vehicles and exceptional service for all your transportation needs.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.facebook.com/KiloMileCarRental"
                className="flex items-center gap-3 bg-gray-700 hover:bg-[#E8B317] rounded px-3 py-2 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="w-5 h-5" />
                <span className="font-semibold text-gray-200">Kilo Mile Car Rental</span>
              </a>
              <a
                href="https://www.tiktok.com/@kilomilecarrental"
                className="flex items-center gap-3 bg-gray-700 hover:bg-[#E8B317] rounded px-3 py-2 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-semibold text-gray-200">@kilomilecarrental</span>
              </a>
              <a
                href="https://twitter.com/KilomileCar"
                className="flex items-center gap-3 bg-gray-700 hover:bg-[#E8B317] rounded px-3 py-2 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="w-5 h-5" />
                <span className="font-semibold text-gray-200">@KilomileCar</span>
              </a>
              <a
                href="https://wa.me/263719367818"
                className="flex items-center gap-3 bg-gray-700 hover:bg-[#E8B317] rounded px-3 py-2 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold text-gray-200">WhatsApp</span>
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
                <span className="text-gray-400">8388 Trubank Village Kadoma</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#E8B317] flex-shrink-0" />
                  <span className="text-gray-400">+263 719367818</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#E8B317] flex-shrink-0" />
                  <span className="text-gray-400">+263 773730041</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#E8B317] flex-shrink-0" />
                  <span className="text-gray-400">sales@kilomile.co.zw</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#E8B317] flex-shrink-0" />
                  <span className="text-gray-400">info@kilomile.co.zw</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2026 Kilomile Car Rental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}