import { MapPin, Phone, Mail, AlertCircle } from "lucide-react";

export function Quote() {
  return (
    <div className="pt-16 sm:pt-20 pb-16 sm:pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="mb-8 sm:mb-12 mt-10 sm:mt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Get a <span className="text-[#E8B317]">Quote</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Fill out the form and we'll send you a personalized quotation for your rental needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column - Info */}
          <div>
            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E8B317] rounded flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">All Over Zimbabwe</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E8B317] rounded flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+263 719367818</p>
                  <p className="text-gray-600">+263 773730041</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E8B317] rounded flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@kcr.co.zw</p>
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="bg-[#fffbeb] border-l-4 border-[#E8B317] p-4 sm:p-6 rounded-r-lg">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-[#E8B317] flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-bold text-gray-900">Terms & Conditions</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#E8B317] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gray-900 rounded-full" />
                  </div>
                  <span className="text-gray-700">Must have a valid driver's license (International for foreigners)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#E8B317] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gray-900 rounded-full" />
                  </div>
                  <span className="text-gray-700">Deposit required (Refundable)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#E8B317] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gray-900 rounded-full" />
                  </div>
                  <span className="text-gray-700">Booking in advance recommended</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#E8B317] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gray-900 rounded-full" />
                  </div>
                  <span className="text-gray-700">Fuel not included</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <form className="space-y-5 sm:space-y-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E8B317] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E8B317] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+263 XXX XXX XXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E8B317] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Select Vehicle <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E8B317] focus:border-transparent appearance-none bg-white">
                  <option>Choose a vehicle</option>
                  <option>Nissan Note (Economy)</option>
                  <option>Toyota Fielder (Station Wagon)</option>
                  <option>GD6 King Cab (Pickup Truck)</option>
                  <option>Axio Fielder (Sedan)</option>
                  <option>Nissan Elgrand (Luxury Van)</option>
                  <option>Fortuner (SUV)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Pick-up Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E8B317] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Return Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E8B317] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Additional Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Any special requirements or questions?"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E8B317] focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#E8B317] text-gray-900 rounded font-semibold hover:bg-[#d4a315] transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}