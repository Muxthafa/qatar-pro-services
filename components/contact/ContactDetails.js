import React from "react";
import Image from "next/image";

const ContactDetails = () => {
  return (
    <div>
      <h1 className="text-[#F6F6F6] font-inter-tight-medium text-3xl md:text-5xl mb-6">
        Get in Touch
      </h1>
      <p className="text-[#B1B1B1] font-inter-tight-regular text-lg mb-8">
        I&rsquo;m always interested in new photography opportunities and
        collaborations. Whether you&rsquo;re looking to commission work or just
        want to discuss photography, I&rsquo;d love to hear from you.
      </p>

      <Image
        src="/images/business.jpg"
        alt="Business in Qatar"
        className="object-cover"
        priority
        width={900}
        height={700}
      />
      <div className="space-y-6">
        <div>
          <h3 className="text-[#DFFF4E] font-inter-tight-medium text-xl mb-2 mt-4">
            Location
          </h3>
          <p className="text-[#B1B1B1] font-inter-tight-regular">
            Building no.14, Matar Qadeem PO Box 22200
            <br />
            Doha, Qatar
          </p>
        </div>
        <div>
          <h3 className="text-[#DFFF4E] font-inter-tight-medium text-xl mb-2">
            Email
          </h3>
          <p className="text-[#B1B1B1] font-inter-tight-regular">
            its.qatar@outlook.com
          </p>
        </div>
        <div>
          <h3 className="text-[#DFFF4E] font-inter-tight-medium text-xl mb-2">
            Phone
          </h3>
          <p className="text-[#B1B1B1] font-inter-tight-regular">
            +974 70604042
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
