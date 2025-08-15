import { Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";

function Contact() {
  const [state, handleSubmit] = useForm("xqaljlja");
  const formRef = useRef(null)
  if (state.succeeded) {
    alert("Thank you for your message.")
    formRef.current.reset()
  }
  return (
    <div>
      {/* <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl mb-8">Have a facility need? Let’s talk.</p>
          </div>
        </section> */}
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 py-20 text-white">
        <div className="xtrw">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <Badge className="bg-indigo-600/20 text-[1.4rem] text-indigo-200 border-indigo-400/30 px-4 py-2">
                Get In Touch
              </Badge>

              <p className="section-title !text-white">
                Ready to Transform Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                  {" "}
                  Facility Management?
                </span>
              </p>

              <p className="text-[1.2rem] text-indigo-100 leading-relaxed">
                Get your free consultation today.
                {/*
               Let's discuss how our comprehensive facility management solutions can streamline your operations and
                reduce costs.
              */}
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    text: "+234 802 699 0807",
                    label: "Call Us",
                    link: "tel:+234 802 699 0807",
                  },
                  {
                    icon: Phone,
                    text: "+234 809 111 7890",
                    label: "Call Us",
                    link: "tel:+234 809 111 7890",
                  },
                  {
                    icon: Mail,
                    text: "services@acornfacilitiesmanagement.com",
                    label: "Email Us",
                    link: "mailto:services@acornfacilitiesmanagement.com",
                  },
                  {
                    icon: MapPin,
                    text: "The Mezzanine, Bookshop House, 50–52 Broad Street, Lagos, Nigeria",
                    label: "Visit Us",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                  >
                    <contact.icon className="w-8 h-8 text-indigo-300" />
                    <div>
                      <div className="text-[1.4rem] text-indigo-200">
                        {contact.label}
                      </div>
                      {contact.link ? (
                        <a className="text-[1.4rem]" href={contact.link}>
                          {contact.text}
                        </a>
                      ) : (
                        <div className="text-[1.4rem] font-medium">
                          {contact.text}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
         
            {/* Right Form Preview */}
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <p className="section-title">Quick Contact Form</p>
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <LabelText text={"Name"} />
                  <InputText
                    name={"name"}
                    place={"Your Name"}
                    type={"text"}
                  />
                  <ValidationError
                  className="text-red-500 text-[1.1rem]"
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div> 
                <div className="flex flex-col gap-4">
                  <LabelText text={"Email"} />
                  <InputText
                    name={"email"}
                    place={"Your Email Address"}
                    type={"email"}
                  />
                  <ValidationError
                  className="text-red-500 text-[1.1rem]"
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <LabelText text={"Message"} />
                  <TextArea />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-indigo-600 text-[1.2rem] cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

const LabelText = ({ text }) => {
  return <label className="xs-text !text-[#111111] font-medium ">{text}</label>;
};
const InputText = ({ name, type, place }) => {
  return (
    <input
      type={type}
      name={name}
      required
      placeholder={place}
      className="border border-[#E6E6E6] rounded-[1.2rem] py-[1.2rem] px-[1.6rem] xs-text !text-[#11111180]"
    />
  );
};

const TextArea = () => {
  return (
    <textarea
      placeholder={"Tell us about your facility management needs..."}
      rows={5}
      name="message"
      required
      className="h-[8.8rem] resize-none border border-[#E6E6E6] rounded-[1.2rem] py-[1.2rem] px-[1.6rem] xs-text !text-[#11111180]"
    />
  );
};
