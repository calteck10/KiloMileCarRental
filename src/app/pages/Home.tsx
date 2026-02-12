import { Link } from "react-router";
import { Check, ChevronDown } from "lucide-react";
import heroImage from "figma:asset/931c4460bab4d0b7765ef19b6975780cad61f7b4.png";

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[calc(100vh-5rem)] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-white mb-8">
            <span className="block text-7xl font-bold mb-2">KILOMILE</span>
            <span className="text-7xl font-bold text-[#E8B317]">///</span>
            <span className="block text-6xl font-bold mt-4">CAR RENTAL</span>
          </h1>

          {/* Feature Banner */}
          <div className="inline-flex bg-[#E8B317] text-gray-900 mb-12">
            <div className="px-8 py-4 border-r-2 border-gray-900">
              <span className="font-semibold text-lg">Daily & Weekly Rentals</span>
            </div>
            <div className="px-8 py-4">
              <span className="font-semibold text-lg">Zero Deposit</span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex justify-center gap-4 mb-12">
            <div className="bg-white rounded-lg px-6 py-4 flex items-center gap-3 shadow-lg">
              <div className="w-10 h-10 bg-[#E8B317] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-gray-900" />
              </div>
              <span className="text-gray-900 font-semibold">Daily & Weekly<br/>Rentals</span>
            </div>

            <div className="bg-white rounded-lg px-6 py-4 flex items-center gap-3 shadow-lg">
              <div className="w-10 h-10 bg-[#E8B317] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-gray-900" />
              </div>
              <span className="text-gray-900 font-semibold">Ride with style</span>
            </div>

            <div className="bg-white rounded-lg px-6 py-4 flex items-center gap-3 shadow-lg">
              <div className="w-10 h-10 bg-[#E8B317] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-gray-900" />
              </div>
              <span className="text-gray-900 font-semibold">Affordable prices</span>
            </div>

            <div className="bg-white rounded-lg px-6 py-4 flex items-center gap-3 shadow-lg">
              <div className="w-10 h-10 bg-[#E8B317] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-gray-900" />
              </div>
              <span className="text-gray-900 font-semibold">Hassle-Free<br/>Booking</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4">
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