import { MailerService } from "@nestjs-modules/mailer";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { join } from "path";

@Injectable()
export class MailService {
    constructor(
        private readonly mailerService: MailerService,
    ) { }

    async sendActivationMail(to: string, code: number) {
        await this.mailerService.sendMail({
            to: to,
            subject: 'Підтвердження реєстрації',
            template: join(__dirname, './../templates', 'confirm-registration'),
            context: {
                code,
            },
        })
        .catch((e) => {
            throw new HttpException(
              `Помилка роботи почти: ${JSON.stringify(e)}`,
              500,
            );
        })
    }
}