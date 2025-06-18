export default function ContactForm({ formAction, state, isPending }) {
  return (
    <form action={formAction}>
      <div className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full bg-[#1B1B1B] border border-[#4B4B4B] rounded p-3 text-[#F6F6F6] font-inter-tight-regular focus:outline-none focus:border-[#DFFF4E]"
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full bg-[#1B1B1B] border border-[#4B4B4B] rounded p-3 text-[#F6F6F6] font-inter-tight-regular focus:outline-none focus:border-[#DFFF4E]"
        />
      </div>
      <div className="mb-6">
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          required
          className="w-full bg-[#1B1B1B] border border-[#4B4B4B] rounded p-3 text-[#F6F6F6] font-inter-tight-regular focus:outline-none focus:border-[#DFFF4E]"
        />
      </div>

      <div className="mb-6">
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="6"
          className="w-full bg-[#1B1B1B] border border-[#4B4B4B] rounded p-3 text-[#F6F6F6] font-inter-tight-regular focus:outline-none focus:border-[#DFFF4E]"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-[#DFFF4E] text-[#1B1B1B] font-inter-tight-regular py-3 px-6 rounded hover:bg-[#5e6439] hover:text-[#F6F6F6] transition-colors duration-300"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
      {state?.status === "success" && (
        <div className="text-green-600">Message sent successfully!</div>
      )}
      {state?.status === "error" && (
        <div className="text-red-600">
          Failed to send message. Please try again.
        </div>
      )}
    </form>
  );
}
