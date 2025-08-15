import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroSectionSmall from "../components/HeroSectionSmall";
import { CheckCircle } from "lucide-react";

export default function SingleService() {
  const { slug } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    import("../data.json").then((data) => {
      const foundService = data.default.find((s) => s.slug === slug);
      setService(foundService);
    });
  }, [slug]);

  if (!service) return <div>Loading...</div>;

  console.log(service);
  return (
    <div>
      <HeroSectionSmall
        title={service.title}
        subtitle={service.description}
      />
      <section className="py-12">
        <div className="xtrw">
          <p className="section-title mt-8 mb-6">Overview</p>
          <p className="text-[1.6rem] max-w-[60rem] w-full">
          {service.overview}
          </p>
        </div>
        <section className="py-20 bg-white">
          <div className="xtrw">
            <div className="text-center mb-16">
              <p className="section-title">
                What's Included in Our Service
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service?.items?.map((feature, index) => (
                  <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200"
                >
                  <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-800 font-semibold text-[1.1rem] tracking-[-.025em]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
