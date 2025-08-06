import { ArrowRight, Shield, Users, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

function Hero({ headline, subheadline }) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="relative z-10 xtrw  py-20 flex items-center ">
        <div className="grid grid-cols-1 mdl:grid-cols-2 gap-4 items-center w-full">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <p className="text-[2rem] sm:text-[3.5rem] lg:text-[5rem] tracking-[-.025em] strong w-full font-bold leading-tight">
              {headline}
            </p>

            <p className="text-[1.6rem] sm:text-[2rem] text-blue-100  w-full leading-[2rem] sm:leading-[3rem]">
              {subheadline}
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6">
              {[
                { icon: Shield, text: "24/7 Security" },
                { icon: Wrench, text: "Expert Maintenance" },
                { icon: Users, text: "Dedicated Support" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm"
                >
                  <item.icon className="w-8 h-8 text-blue-300" />
                  <span className="text-blue-100 text-[1.1rem] font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="text-[1.4rem] tracking-[-.025em] bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group">
                Request a Quote
                <ArrowRight className="w-8 h-8 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-[1.4rem] tracking-[-.025em] border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
