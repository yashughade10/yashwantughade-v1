"use server";

import { Resend } from "resend";

const resend = new Resend("re_GRE35vg1_22xDYj7EGoJ3FMCLKc1HRmrQ");

export async function sendEmailAction(formData: { name: string; email: string; message: string }) {
    try {
        const { name, email, message } = formData;

        const { data, error } = await resend.emails.send({
            from: "Contact Form <no-reply@yashwantughade.xyz>",
            to: "yashwantughade10@gmail.com",
            replyTo: email,
            subject: `Portfolio Contact from ${name}`,
            text: `Hi Yashwant,\n\nYou have received a message from your portfolio contact form.\n\nFrom: ${name} (${email})\n\nMessage:\n${message}`
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, error: error.message };
        }

        return { success: true, data };
    } catch (error) {
        console.error("Failed to send email:", error);
        return { success: false, error: "Failed to send email" };
    }
}
