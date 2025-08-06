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
      </section>
    </div>
  );
}

export default GeneratorMaintenance;