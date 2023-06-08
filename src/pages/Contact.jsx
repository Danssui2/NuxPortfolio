import React from "react";
import Header from "../components/Header";
import DetailsForm from "../components/DetailsForm";
import Maps from "../components/Maps";

function Contact() {
/* This is a React functional component that renders a section with an id of "contact" and some
classes for styling. Inside the section, it renders a Header component with some props for the
main text, back text, and alignment. It also renders a grid with two columns, where the first
column contains a Maps component and the second column contains a MessageForm component. The
section has a fade-up animation effect applied to it using the data-aos attribute. */

  return (
    <section
      data-aos="fade-up"
      id="contact"
      className="text-gray-600 w-full section-p"
    >
      <Header mainText="REACH ME OUT" backText="CONTACTS" align="center" />
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 xl:gap-14 mt-10">
        <div className="md:row-span-2">
          <Maps />
        </div>
        <div>
          <DetailsForm/>
        </div>
      </div>
    </section>
  );
}

export default Contact;
