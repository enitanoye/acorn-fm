import { Link } from "react-router-dom";

function CTA({ title, subtitle }) {
  return (
    <section className="bg-gray-100 text-white py-12 text-center">
      <div className="xtrw flex flex-col gap-4">
        <p className="text-[1.6rem] strong font-semibold text-gray-600 tracking-[-.025em]">{title}</p>
        <p className="text-[1.2rem] text-gray-600 tracking-[-.025em]">{subtitle}</p>
        <Link to="/contact" className="text-[1.4rem] max-w-[15rem] w-full mx-auto tracking-[-.025em] bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-100 px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 ">
          Contact Us Now
        </Link>
      </div>
    </section>
  );
}

export default CTA;