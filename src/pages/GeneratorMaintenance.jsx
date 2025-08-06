import { Link } from "react-router-dom";

function GeneratorMaintenance() {
  return (
    <div>
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4  max-w-[50rem] w-full mx-auto">Generator Maintenance & Power Solutions</h1>
          <p className="text-lg md:text-xl mb-8 max-w-[45rem] w-full mx-auto">
            We provide routine servicing of generators every 200 hours, ensuring optimal performance and reduced downtime.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg max-w-3xl">
            Our maintenance includes oil and filter changes, emergency response, and power audits to keep your generators
            running smoothly.
          </p>
          <h2 className="text-3xl font-bold mt-8 mb-6">What’s Included</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">Scheduled generator servicing</li>
            <li className="mb-2">24/7 emergency support</li>
            <li className="mb-2">Supply of parts from certified vendors</li>
            <li className="mb-2">Clean, organized generator areas</li>
            <li className="mb-2">Fuel consumption tracking</li>
          </ul>
          <div className="text-center mt-8">
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Request a Generator Audit →
            </Link>
          </div>
        </div>
        {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included in Our Service</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning solutions designed to meet all your facility maintenance needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceData.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
              >
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      </section>
    </div>
  );
}

export default GeneratorMaintenance;