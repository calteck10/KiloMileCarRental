import { Link } from "react-router-dom";
import { Check, ChevronDown } from "lucide-react";
import heroImage from "@/assets/931c4460bab4d0b7765ef19b6975780cad61f7b4.png";

export function Home() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section
        className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h1 className="text-white mb-6 sm:mb-8">
            <span className="block text-4xl sm:text-5xl md:text-7xl font-bold mb-2">KILOMILE</span>
            <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#E8B317]">///</span>
            <span className="block text-3xl sm:text-4xl md:text-6xl font-bold mt-2 sm:mt-4">CAR RENTAL</span>
          </h1>

          {/* Feature Banner */}
          <div className="inline-flex flex-col sm:flex-row bg-[#E8B317] text-gray-900 mb-8 sm:mb-12">
            <div className="px-6 sm:px-8 py-3 sm:py-4 sm:border-r-2 border-b-2 sm:border-b-0 border-gray-900">
              <span className="font-semibold text-base sm:text-lg">Daily & Weekly Rentals</span>
            </div>
            <div className="px-6 sm:px-8 py-3 sm:py-4">
              <span className="font-semibold text-base sm:text-lg">Zero Deposit</span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-3xl lg:max-w-none mx-auto">
            <div className="bg-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 shadow-lg">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E8B317] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
              </div>
              <span className="text-gray-900 font-semibold text-sm sm:text-base">Daily & Weekly<br/>Rentals</span>
            </div>

            <div className="bg-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 shadow-lg">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E8B317] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
              </div>
              <span className="text-gray-900 font-semibold text-sm sm:text-base">Ride with style</span>
            </div>

            <div className="bg-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 shadow-lg">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E8B317] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
              </div>
              <span className="text-gray-900 font-semibold text-sm sm:text-base">Affordable prices</span>
            </div>

            <div className="bg-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 shadow-lg">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E8B317] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
              </div>
              <span className="text-gray-900 font-semibold text-sm sm:text-base">Hassle-Free<br/>Booking</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/fleet"
              className="px-8 py-3 bg-[#E8B317] text-gray-900 rounded font-semibold hover:bg-[#d4a315] transition-colors"
            >
              View Our Fleet
            </Link>
            <Link
              to="/quote"
              className="px-8 py-3 bg-white text-gray-900 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </div>
      </section>
    </div>
  );
}