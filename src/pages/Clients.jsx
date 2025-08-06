import ClientCard from "../components/ClientCard";
import { Link } from "react-router-dom";

function Clients() {
  const clients = [
    "Citi Bank",
    "Presidential Villa, Ilorin",
    "Coca-Cola Lagos",
    "General Electric",
    "Standard Chartered Bank",
    "Shoreline Energy",
    "Safecourt Apartments",
    "Warri Airport",
    "Freedom Foundation",
    "Festival Mall, Festac",
  ];

  return (
    <div>
      <section className="bg-gray-100 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-gray-900 strong font-bold mb-4">Our Esteemed Clients</h1>
          <p className="text-lg md:text-xl mb-8 max-w-[45rem] text-gray-600 w-full mx-auto">
            We are proud partners of organizations across sectors—from banks to government institutions.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-6">
         
            <ClientCard clients={clients} />
          {/* <div className="text-center mt-8">
            <Link to="/contact" className="text-blue-600 hover:underline font-semibold">
              View Full List →
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Clients;