import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-16 sm:pt-20 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center mb-10 sm:mb-16 mt-10 sm:mt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#E8B317]">Touch</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Have questions? We're here to help you find the perfect vehicle for your journey
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E8B317] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
            <p className="text-gray-600 mb-4">Available 24/7 for your convenience</p>
            <div className="space-y-2">
              <a href="tel:+263719367818" className="block text-[#E8B317] font-semibold text-base sm:text-lg hover:underline">
                +263 719367818
              </a>
              <a href="tel:+263773730041" className="block text-[#E8B317] font-semibold text-base sm:text-lg hover:underline">
                +263 773730041
                
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E8B317] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us your inquiries anytime</p>
            <a href="mailto:info@kcr.co.zw" className="block text-[#E8B317] font-semibold text-base sm:text-lg hover:underline">
              info@kcr.co.zw
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E8B317] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Visit Us</h3>
            <p className="text-gray-600 mb-2">We serve all locations across Zimbabwe</p>
            <span className="block text-[#E8B317] font-semibold text-base sm:text-lg">
              8388 Trubank Village Kadoma
            </span>
          </div>
        </div>

        {/* Assistance Banner */}
        <div className="bg-white rounded-2xl border-4 border-[#E8B317] px-6 py-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
            Our team is ready to help you with your car rental needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="tel:+263719367818"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#E8B317] text-gray-900 rounded font-semibold hover:bg-[#d4a315] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/263719367818"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded font-semibold hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Facebook</h3>
            <a
              href="https://www.facebook.com/KiloMileCarRental"
              className="text-[#E8B317] font-semibold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Kilo Mile Car Rental
            </a>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">TikTok</h3>
            <a
              href="https://www.tiktok.com/@kilomilecarrental"
              className="text-[#E8B317] font-semibold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              @kilomilecarrental
            </a>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Twitter</h3>
            <a
              href="https://twitter.com/KilomileCar"
              className="text-[#E8B317] font-semibold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              @KilomileCar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
