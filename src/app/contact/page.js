"use client";

import { useActionState } from "react";
import { submitForm } from "./actions";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";
import ChooseUsFeature from "@/components/contact/ChooseUsFeature";
import { ChooseUsData } from "@/components/contact/ChooseUsData";

const initialState = { status: null };

function Contact() {
  const [state, formAction, isPending] = useActionState(
    submitForm,
    initialState
  );

  const MainContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-8">
      <ContactDetails />
      <div className="bg-[#2C2C2C] p-8 rounded-lg">
        <ContactForm
          formAction={formAction}
          state={state}
          isPending={isPending}
        />
      </div>
    </div>
  );

  return (
    <div className=" bg-[#1B1B1B] flex flex-col">
      <div className="pt-[100px] md:pt-[160px] px-4 md:px-8 flex-grow">
        <div className="max-w-6xl mx-auto">{MainContent}</div>
        {/* Why Choose Us Section - Moved to end */}
        <section className="max-w-6xl mx-auto py-16">
          <h2 className="text-[#DFFF4E] font-inter-tight-medium text-3xl mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ChooseUsData.map((item, index) => (
              <ChooseUsFeature
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
