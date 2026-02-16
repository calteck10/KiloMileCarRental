import { MapPin, Phone, Mail, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export function Quote() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvzbrgka", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("There was a problem submitting your request. Please try again.");
      }
    } catch (error) {
      alert("There was a problem submitting your request. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <p className="text-gray-600">sales@kilomile.co.zw</p>
                  <p className="text-gray-600">info@kilomile.co.zw</p>
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
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
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
                    name="email"
                    required
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
                    name="phone"
                    required
                    placeholder="+263 XXX XXX XXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E8B317] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Select Vehicle <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="vehicle"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E8B317] focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Choose a vehicle</option>
                    <option>Nissan Note (Economy)</option>
                    <option>Toyota Fielder (Station Wagon)</option>
                    <option>GD6 King Cab (Pickup Truck)</option>
                    <option>Axio Fielder (Sedan)</option>
                    <option>Nissan Elgrand (Luxury Van)</option>
                    <option>Fortuner (SUV)</option>
                    <option>Nissan X-Trail (SUV)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Pick-up Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="pickup_date"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E8B317] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Return Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="return_date"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E8B317] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Any special requirements or questions?"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E8B317] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                {/* Hidden fields for Formspree */}
                <input type="hidden" name="_subject" value="New Quote Request - Kilomile Website" />
                <input type="text" name="_gotcha" style={{ display: "none" }} />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#E8B317] text-gray-900 rounded font-semibold hover:bg-[#d4a315] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your quote request has been sent successfully. We'll get back to you shortly with a personalized quotation.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-[#E8B317] text-gray-900 rounded font-semibold hover:bg-[#d4a315] transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}