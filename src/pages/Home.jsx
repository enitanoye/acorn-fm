import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ClientCard from "../components/ClientCard";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";

function Home() {
  const services = [
    {
      title: "Generator Maintenance & Power Supply",
      items: ["Routine servicing", "Emergency response", "Power audits"],
    },
    {
      title: "Plumbing & Electrical Maintenance",
      items: ["Repairs", "Installations", "Preventive maintenance"],
    },
    {
      title: "Security & CCTV Systems",
      items: ["Manned security", "CCTV monitoring", "Access control"],
    },
  ];

  const clients = [
    "Citi Bank",
    "General Electric",
    "Warri Airport",
    "The Presidential Villa Ilorin",
    "Coca-Cola Lagos",
  ];

  return (
    <div>
      <Hero
        headline="Professional Facility Management, Delivered with Precision"
        subheadline="We maintain, service, and enhance your spaces—so you can focus on what matters."
      />
      <section className="py-12">
        <div className="xtrw">
          <p className="section-title">About Acorn</p>
          <p className="text-[1.6rem] max-w-[60rem] w-full">
            Acorn Facilities Management Services is a proudly Nigerian-owned
            company, delivering world-class facility management solutions to
            residential, commercial, and industrial clients. We are known for
            our proactive service, hands-on operations model, and data-driven
            maintenance approach.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="xtrw ">
          <p className="section-title">Core Services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pt-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                items={service.items}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="text-blue-600 text-[1.6rem] hover:underline font-semibold"
            >
              See All Services →
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 ">
        <div className="xtrw ">
          <p className="section-title">Why Choose Us</p>
          <ul className="list-disc pl-16 flex flex-col gap-4">
            <li className="text-[1.4rem] font-medium">
              Preventive Maintenance Strategy (PPM)
            </li>
            <li className="text-[1.4rem] font-medium">
              Trained and Vetted Technicians
            </li>
            <li className="text-[1.4rem] font-medium">
              Computer-Aided FM Software
            </li>
            <li className="text-[1.4rem] font-medium">
              24/7 Support for Emergencies
            </li>
            <li className="text-[1.4rem] font-medium">
              Trusted by Top Brands Nationwide
            </li>
          </ul>
        </div>
      </section>
      <section className="py-12">
        <div className="xtrw px-6">
          <p className="section-title">Client Showcase</p>
          <p className="text-[1.4rem] font-medium mb-6">
            Trusted by 40+ businesses and institutions, including:
          </p>

          <ClientCard clients={clients} />
          <div className="text-center mt-8">
            <Link
              to="/clients"
              className="text-blue-600 text-[1.6rem] hover:underline font-semibold"
            >
              View Full Client List →
            </Link>
          </div>
        </div>
      </section>
      <CTA
        title="Let’s take the stress off your facilities."
        subtitle="Our expert team is ready to optimize your space."
      />
    </div>
  );
}

export default Home;
