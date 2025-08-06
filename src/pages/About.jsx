import { CheckCircle } from "lucide-react";
import Hero from "../components/Hero";

function About() {
  return (
    <div>
      <Hero
        headline="About Acorn Facilities Management"
        subheadline="Delivering reliable and comprehensive facility services across Nigeria."
      />
      <section className="py-12">
        <div className="xtrw">
          <p className="section-title">Who We Are</p>
          <p className="text-[1.6rem] max-w-[60rem] w-full">
            Acorn Facilities Management Services was founded to meet the growing
            need for reliable, comprehensive, and affordable facility services
            across Nigeria. From maintenance to security, our team ensures that
            buildings operate efficiently, safely, and seamlessly.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="xtrw">
          <p className="section-title mb-6">Our Mission</p>
          <p className="text-[1.6rem] max-w-[60rem] w-full">
            To deliver tailored facility management solutions that ensure
            operational efficiency, safety, and long-term value for our clients.
          </p>
          <p className="section-title mt-8 mb-6">Our Vision</p>
          <p className="text-[1.6rem] max-w-[60rem] w-full">
            To become Nigeria’s leading integrated facility management company
            through innovation, professionalism, and service excellence.
          </p>
          <p className="section-title mt-8 mb-6">Our Values</p>
          <div className="max-w-[60rem] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-8 pl-12">
            {[
              "Integrity",
              "Efficiency",
              "Excellence",
              "Safety",
              "Innovation",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200"
              >
                <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <span className="text-gray-800 font-semibold text-[1.1rem] tracking-[-.025em]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
