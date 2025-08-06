import { Link } from "react-router-dom";
import HeroSectionSmall from "../components/HeroSectionSmall";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle } from "lucide-react";

function Operations() {
  const process = [
    {
      step: "1",
      title: "Asset database generation",
      description:
        "We conduct a thorough evaluation of your facility to understand your specific cleaning requirements and develop a customized plan.",
    },
    {
      step: "2",
      title: "Fault detection and tracking",
      description:
        "Our team creates a detailed cleaning schedule and checklist tailored to your facility's needs, budget, and operational hours.",
    },
    {
      step: "3",
      title: "Job completion verification",
      description:
        "Our certified cleaning professionals implement the plan using industry-best practices and eco-friendly products.",
    },
    {
      step: "4",
      title: "Quarterly/annual reporting",
      description:
        "Regular inspections and feedback collection ensure consistent quality and continuous improvement of our services.",
    },
  ];
  return (
    <div>
      <HeroSectionSmall
        title="Operations & Strategy"
        subtitle="Our hybrid model ensures flexibility, scalability, and quality control."
      />
      <section className="py-12">
        <div className="xtrw">
          <p className="section-title mt-8 mb-6">Our Operations Model</p>
          <p className="text-[1.6rem] max-w-[60rem] w-full">
            We operate with a hybrid team structure: in-house facility managers
            and a vetted network of third-party contractors and specialists.
          </p>
          <p className="text-[1.8rem] tracking-[-.045em] font-bold text-gray-900 mt-4">
            Key Roles
          </p>

          <div className="max-w-[60rem] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-8 pl-12">
            {[
              "Electricians",
              "AC Technicians",
              "Janitors",
              "Generator Experts",
              "Security Personnel",
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

          {/* <div className="text-center mt-8">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Download Sample Report →
            </Link>
          </div> */}
        </div>
      </section>
      <Maintenance process={process} />
    </div>
  );
}

export default Operations;

function Maintenance({ process }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="xtrw">
        <p className="section-title mb-6">Maintenance Strategy</p>
        <p className="text-[1.6rem] max-w-[60rem] w-full">
          We follow a Planned Preventive Maintenance (PPM) approach powered by
          our Computer-Aided Facility Management (CAFM) system to track asset
          lifecycle, schedule service, and generate reports.
        </p>
        <div className="text-center mb-8">
          <p className="text-[2rem] tracking-[-.045em] font-bold text-gray-900 mb-2">
            Process Highlights
          </p>
          <p className="text-[1.2rem] tracking-[-.025em] text-gray-600 max-w-3xl mx-auto">
            A systematic approach that ensures consistent, high-quality results
            every time
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <Card
              key={index}
              className="relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className=" !px-4 text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-[1.6rem] font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <p className="text-[1.6rem] font-bold text-gray-900">
                  {step.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
