'use server';
import { Mailer } from "../services/sendgrid";

export async function contactFormSubmit(e: FormData) {
    const data = [e.get('email'), e.get('message'), e.get('name')].map(each => each?.valueOf());
    const mailer = new Mailer();

    data.forEach(item => {
        if (typeof item !== 'string') throw new Error('Invalid form data')
    })

    const result = await mailer.send(...data as [string, string, string]);
    return result;
}

export async function testMailerSDK(e: FormData) {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to: 'mikaylaherself@gmail.com', // Change to your recipient
    from: 'me@mikayla.dev', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error: unknown) => {
        console.error(error)
    })
}
