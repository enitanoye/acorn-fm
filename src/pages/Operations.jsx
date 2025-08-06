import { Link } from "react-router-dom";

function Operations() {
  return (
    <div>
  
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 strong mb-6">Operations & Strategy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our hybrid model ensures flexibility, scalability, and quality control.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Our Operations Model</h2>
          <p className="text-lg max-w-3xl">
            We operate with a hybrid team structure: in-house facility managers and a vetted network of third-party
            contractors and specialists.
          </p>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Key Roles</h3>
          <ul className="list-disc pl-5">
            <li className="mb-2">Electricians</li>
            <li className="mb-2">AC Technicians</li>
            <li className="mb-2">Janitors</li>
            <li className="mb-2">Generator Experts</li>
            <li className="mb-2">Security Personnel</li>
          </ul>
          <h2 className="text-3xl font-bold mt-8 mb-6">Maintenance Strategy</h2>
          <p className="text-lg max-w-3xl">
            We follow a Planned Preventive Maintenance (PPM) approach powered by our Computer-Aided Facility Management
            (CAFM) system to track asset lifecycle, schedule service, and generate reports.
          </p>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Process Highlights</h3>
          <ul className="list-disc pl-5">
            <li className="mb-2">Asset database generation</li>
            <li className="mb-2">Fault detection and tracking</li>
            <li className="mb-2">Job completion verification</li>
            <li className="mb-2">Quarterly/annual reporting</li>
          </ul>
          <div className="text-center mt-8">
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Download Sample Report →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Operations;