"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitForm(prevState, formData) {
  try {
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const data = await resend.emails.send({
      from: "Faizal enquiry <onboarding@resend.dev>", // your domain-verified email
      to: "musthafamohd0@gmail.com", // your Gmail address
      subject: `New enquiry from ${body.name}`,
      html: `
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Message:</strong><br/>${body.message}</p>
      `,
    });

    return { status: "success" };
  } catch (error) {
    console.error("Resend error:", error);
    return { status: "error", message: error.message };
  }
}
