'use server';
import { createTransport } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function submitMessage({ from, text }: { from: string, text: string }) {
    // const transport = createTransport({
    //     host: "unknown",
    //     port: 0,
    //     auth: {
    //         user: env.SMTP_USER,
    //         pass: ""
    //     },
    //     subject: "Contact Form Submission | mikayla.dev",
    //     to: env.SMTP_USER,
    //     from,
    //     text,
    // } as SMTPTransport.Options);

    // const result = await transport.sendMail(sendMailOptions)
    // const failed = result.rejected.concat(result.pending).filter(Boolean);

    // if (failed.length) {
    //     throw new Error("Failed to send email verification");
    // }

}
