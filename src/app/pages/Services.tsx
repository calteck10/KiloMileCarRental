import { Link } from "react-router-dom";
import { Calendar, Car, Tag, Shield } from "lucide-react";

export function Services() {
  return (
    <div className="pt-16 sm:pt-20 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center mb-10 sm:mb-16 mt-10 sm:mt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#E8B317]">Kilomile</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Experience the best car rental service in Zimbabwe with our commitment to quality and customer satisfaction
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200 hover:border-[#E8B317] transition-colors">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E8B317] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-gray-900" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Daily & Weekly Rentals</h3>
            <p className="text-gray-600 leading-relaxed">
              Flexible rental periods to suit your needs
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200 hover:border-[#E8B317] transition-colors">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E8B317] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Car className="w-7 h-7 sm:w-8 sm:h-8 text-gray-900" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Ride with Style</h3>
            <p className="text-gray-600 leading-relaxed">
              Modern and well-maintained vehicles
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200 hover:border-[#E8B317] transition-colors">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E8B317] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Tag className="w-7 h-7 sm:w-8 sm:h-8 text-gray-900" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Affordable Prices</h3>
            <p className="text-gray-600 leading-relaxed">
              Competitive rates across all vehicle categories
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-[#E8B317] shadow-lg">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E8B317] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-gray-900" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Hassle-Free Booking</h3>
            <p className="text-gray-600 leading-relaxed">
              Simple and quick reservation process
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#E8B317] rounded-2xl px-6 py-10 sm:p-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-gray-900 text-base sm:text-lg mb-6 sm:mb-8">
            Book your perfect vehicle today and enjoy hassle-free car rental service
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/fleet"
              className="px-8 py-3 bg-gray-900 text-white rounded font-semibold hover:bg-gray-800 transition-colors"
            >
              View Our Fleet
            </Link>
            <Link
              to="/quote"
              className="px-8 py-3 bg-white text-gray-900 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
