import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
const fortunerImage = new URL("../../assets/fortuner.png", import.meta.url).href;
const axioFielderImage = new URL("../../assets/axio-fielder.jpg", import.meta.url).href;
const nissanElgrandImage = new URL("../../assets/nissan-elgrand.png", import.meta.url).href;

const vehicles = [
  {
    name: "NISSAN NOTE",
    category: "Economy",
    image: new URL("../../assets/nissan-note.jpg", import.meta.url).href,
    dailyRate: { currency: "USD", amount: 50 },
    weeklyRate: { currency: "USD", amount: 40 },
  },
  {
    name: "TOYOTA FIELDER",
    category: "Station Wagon",
    image: new URL("../../assets/fielder.jpg", import.meta.url).href,
    dailyRate: { currency: "USD", amount: 50 },
    weeklyRate: { currency: "USD", amount: 40 },
  },
  {
    name: "GD6 KING CAB",
    category: "Pickup Truck",
    image: new URL("../../assets/gd6-king-cab.png", import.meta.url).href,
    dailyRate: { currency: "USD", amount: 180 },
    weeklyRate: { currency: "USD", amount: 160 },
  },
  {
    name: "AXIO FIELDER",
    category: "Sedan",
    image: axioFielderImage,
    dailyRate: { currency: "USD", amount: 50 },
    weeklyRate: { currency: "USD", amount: 40 },
  },
  {
    name: "NISSAN ELGRAND",
    category: "Luxury Van",
    image: nissanElgrandImage,
    dailyRate: { currency: "USD", amount: 60 },
    weeklyRate: { currency: "USD", amount: 55 },
  },
  {
    name: "FORTUNER",
    category: "SUV",
    image: fortunerImage,
    dailyRate: { currency: "USD", amount: 200 },
    weeklyRate: { currency: "USD", amount: 180 },
  },
  {
    name: "NISSAN X-TRAIL",
    category: "SUV",
    image: new URL("../../assets/nissan-xtrail.jpg", import.meta.url).href,
    dailyRate: { currency: "USD", amount: 65 },
    weeklyRate: { currency: "USD", amount: 60 },
  },
];

export function Fleet() {
  return (
    <div className="pt-16 sm:pt-20 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center mb-10 sm:mb-16 mt-10 sm:mt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#E8B317]">Fleet</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Choose from our premium selection of vehicles
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Vehicle Image */}
              <div className="relative h-48 sm:h-64">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#E8B317] text-gray-900 px-4 py-1 rounded font-semibold">
                  {vehicle.category}
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{vehicle.name}</h3>

                {/* Pricing */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-[#E8B317]" />
                      <span>Daily Rate</span>
                    </div>
                    <div className="font-semibold text-gray-900">
                      <span className="text-sm text-gray-500">{vehicle.dailyRate.currency}</span>{" "}
                      <span className="text-2xl">${vehicle.dailyRate.amount}</span>
                      <span className="text-sm text-gray-500">/day</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-[#E8B317]" />
                      <span>3-7 Days</span>
                    </div>
                    <div className="font-semibold text-gray-900">
                      <span className="text-sm text-gray-500">{vehicle.weeklyRate.currency}</span>{" "}
                      <span className="text-2xl">${vehicle.weeklyRate.amount}</span>
                      <span className="text-sm text-gray-500">/day</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to="/quote"
                  className="block w-full py-3 bg-[#E8B317] text-gray-900 text-center rounded font-semibold hover:bg-[#d4a315] transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional vehicles message */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Looking for something specific?{" "}
            <Link to="/contact" className="text-[#E8B317] font-semibold hover:underline">
              Contact us
            </Link>{" "}
            for more options
          </p>
        </div>
      </div>
    </div>
  );
}