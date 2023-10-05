import mailer, { ClientResponse, MailDataRequired, MailService } from "@sendgrid/mail";

export class Mailer {
    private mailer: MailService;

    constructor() {
        const service = mailer;
        const key = process.env.SENDGRID_API_KEY;

        if (!key) throw new Error("No SendGrid API key provided");

        service.setApiKey(key);

        this.mailer = service;
    }

    public async send(from: string, text: string, name: string) {
        const data: MailDataRequired = {
            text, from,
            cc: from,
            to: 'hello@mikayla.dev',
            subject: `Contact form submission from ${name}`
        }
        const result = await this.mailer.send(data);
        return result[0] as ClientResponse;
    }
}

