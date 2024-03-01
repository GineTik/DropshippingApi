import { MailerService } from "@nestjs-modules/mailer";
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendActivationMail(to: string, code: number): Promise<void>;
    sendChangePasswordMail(to: string, code: number): Promise<void>;
}
