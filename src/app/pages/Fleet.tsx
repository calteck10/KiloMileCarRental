import { Link } from "react-router";
import { Calendar } from "lucide-react";

const vehicles = [
  {
    name: "NISSAN NOTE",
    category: "Economy",
    image: "https://images.unsplash.com/photo-1687730594701-88cdea1ef5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG5pc3NhbiUyMG5vdGUlMjBoYXRjaGJhY2t8ZW58MXx8fHwxNzcwOTA1NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    dailyRate: { currency: "USD", amount: 50 },
    weeklyRate: { currency: "USD", amount: 40 },
  },
  {
    name: "TOYOTA FIELDER",
    category: "Station Wagon",
    image: "https://images.unsplash.com/photo-1642635852887-05a76551216a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRveW90YSUyMGZpZWxkZXIlMjBzdGF0aW9uJTIwd2Fnb258ZW58MXx8fHwxNzcwOTA1NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    dailyRate: { currency: "USD", amount: 50 },
    weeklyRate: { currency: "USD", amount: 40 },
  },
  {
    name: "GD6 KING CAB",
    category: "Pickup Truck",
    image: "https://images.unsplash.com/photo-1714213624189-9a9fc8a0736a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRveW90YSUyMGhpbHV4JTIwcGlja3VwJTIwdHJ1Y2t8ZW58MXx8fHwxNzcwOTA1NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    dailyRate: { currency: "USD", amount: 180 },
    weeklyRate: { currency: "USD", amount: 160 },
  },
  {
    name: "AXIO FIELDER",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1762195340046-415140d8b1b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNlZGFuJTIwY2FyJTIwc2hvd3Jvb218ZW58MXx8fHwxNzcwOTA0NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    dailyRate: { currency: "USD", amount: 50 },
    weeklyRate: { currency: "USD", amount: 40 },
  },
  {
    name: "NISSAN ELGRAND",
    category: "Luxury Van",
    image: "https://images.unsplash.com/photo-1562443946-1f2a13b2ebba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibHVlJTIwbWluaXZhbnxlbnwxfHx8fDE3NzA5MDQ3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    dailyRate: { currency: "USD", amount: 60 },
    weeklyRate: { currency: "USD", amount: 55 },
  },
  {
    name: "FORTUNER",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1654704089788-5ac8eb863818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMFNVViUyMHRveW90YSUyMGZvcnR1bmVyfGVufDF8fHx8MTc3MDkwNDc5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    dailyRate: { currency: "USD", amount: 200 },
    weeklyRate: { currency: "USD", amount: 180 },
  },
];

export function Fleet() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16 mt-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#E8B317]">Fleet</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Choose from our premium selection of vehicles
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Vehicle Image */}
              <div className="relative h-64">
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