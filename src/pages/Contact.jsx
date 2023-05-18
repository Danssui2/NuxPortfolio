import React from "react";
import Header from "../components/Header";
import MessageForm from "../components/MessageForm";
import Maps from "../components/Maps";

function Contact() {
  return (
    <section
      data-aos="fade-up"
      id="contact"
      className="text-gray-600 section-p"
    >
      <Header mainText="REACH ME OUT" backText="CONTACTS" align="center" />
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 xl:gap-14 mt-10">
        <div className="md:row-span-2">
          <Maps />
        </div>
        <div>
          <MessageForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
