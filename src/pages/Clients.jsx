import ClientCard from "../components/ClientCard";
import { Link } from "react-router-dom";
import HeroSectionSmall from "../components/HeroSectionSmall";

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
      <HeroSectionSmall
        title="Our Esteemed Clients"
        subtitle="We are proud partners of organizations across sectors—from banks to government institutions."
      />
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
