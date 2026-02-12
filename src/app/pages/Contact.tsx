import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16 mt-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#E8B317]">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Have questions? We're here to help you find the perfect vehicle for your journey
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-[#E8B317] rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
            <p className="text-gray-600 mb-4">Available 24/7 for your convenience</p>
            <div className="space-y-2">
              <a href="tel:+263719367818" className="block text-[#E8B317] font-semibold text-lg hover:underline">
                +263 719367818
              </a>
              <a href="tel:+263773367818" className="block text-[#E8B317] font-semibold text-lg hover:underline">
                +263 773367818
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-[#E8B317] rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us your inquiries anytime</p>
            <a href="mailto:info@kcr.co.zw" className="block text-[#E8B317] font-semibold text-lg hover:underline">
              info@kcr.co.zw
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-[#E8B317] rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Visit Us</h3>
            <p className="text-gray-600 mb-4">We serve all locations across</p>
            <span className="block text-[#E8B317] font-semibold text-lg">Zimbabwe</span>
          </div>
        </div>

        {/* Assistance Banner */}
        <div className="bg-white rounded-2xl border-4 border-[#E8B317] p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Our team is ready to help you with your car rental needs
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:+263719367818"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#E8B317] text-gray-900 rounded font-semibold hover:bg-[#d4a315] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/263719367818"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded font-semibold hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
