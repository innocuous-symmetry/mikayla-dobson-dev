'use server';
import { createTransport } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { env } from "../../env.mjs"

export async function submitMessage({ from, text }: { from: string, text: string }) {
    const options = {
        host: env.SMTP_HOST,
        port: 587,
        auth: {
            user: env.SMTP_USER,
            pass: env.SMTP_PASS,
        },
    } as SMTPTransport.Options;

    // console.log({ options });

    // const transport = createTransport(options);

    // const result = await transport.sendMail({
    //     subject: "Contact Form Submission | mikayla.dev",
    //     to: env.SMTP_TO,
    //     from,
    //     text,
    // });

    // const failed = result.rejected.concat(result.pending).filter(Boolean);

    // if (failed.length) {
    //     throw new Error("Failed to send email verification");
    // }
}
