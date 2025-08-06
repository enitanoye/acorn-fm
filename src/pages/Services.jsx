import { Award, Clock, Shield, Users } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { useEffect, useState } from "react";

function Services() {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   import("../data.json").then((data) => setServices(data.default));
  // }, []);
  // console.log(services)
  const serviceCategories = [
    {
      title: "Technical Maintenance",
      items: ["Generator Maintenance", "Electrical & Plumbing Systems", "Borehole and Water Treatment", "Lift and HVAC Servicing", "Power Systems Installation"],
    },
    {
      title: "Cleaning & Janitorial",
      items: ["Office & Facility Cleaning", "Façade and Glass Cleaning", "Refuse & Waste Disposal", "Drainage and Septic Tank Maintenance"],
    },
    {
      title: "Safety & Security",
      items: ["Manned Security Services", "CCTV Installation & Monitoring", "Fire Equipment Maintenance", "Access Control Systems"],
    },
    {
      title: "Facility Enhancements",
      items: ["Gardening & Landscaping", "Swimming Pool Maintenance", "Painting & Carpentry", "Fixture and Appliance Maintenance"],
    },
    {
      title: "Administrative Support",
      items: ["Procurement Services", "Handyman Staff Provision", "Tenancy & Service Charge Management", "Lease Negotiation Support"],
    },
  ];

 const benefits = [
    {
      icon: Shield,
      title: "Health & Safety Compliance",
      description: "Maintain regulatory compliance and create a healthy work environment for your employees.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Services scheduled around your business hours to minimize disruption to operations.",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with detailed quality control measures and regular inspections.",
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Trained, insured, and background-checked cleaning professionals you can trust.",
    },
  ]

  return (
    <div>
      <section className="bg-gray-100 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl strong text-gray-900 font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">We offer over 20 integrated services across five major areas.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="xtrw flex flex-col gap-4 items-center">
          <p className="section-title">Explore Our Services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <ServiceCard key={index} title={category.title} items={category.items} />
            ))}
          </div>
          <div className="text-center mt-8 ">
            <Link to="/services/generator-maintenance" className="text-blue-600 hover:underline font-semibold">
              Explore Generator Maintenance →
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="xtrw">
          <div className="text-center mb-16">
            <p className="section-title">Key Benefits</p>
            <p className="text-[1.4rem] text-center">
              Experience the advantages of professional facility management services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="!p-0 !pt-0 md:!px-6">
                  <div className="flex items-start gap-4 p-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[1.4rem] tracking-[-.045em] font-bold text-gray-900 mb-3">{benefit.title}</p>
                      <p className="text-[1.2rem] tracking-[-.025em] text-gray-600 ">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;