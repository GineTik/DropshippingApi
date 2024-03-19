import { MailerService } from '@nestjs-modules/mailer'
import { HttpException, Injectable } from '@nestjs/common'
import { join } from 'path'

@Injectable()
export class MailService {
	constructor(private readonly mailerService: MailerService) {}

	async sendActivationMail(to: string, code: number) {
		await this.mailerService
			.sendMail({
				to: to,
				subject: 'Підтвердження реєстрації',
				template: join(
					__dirname,
					'./../libs/mail/src/templates',
					'confirm-registration'
				),
				context: {
					code
				}
			})
			.catch((e) => {
				throw new HttpException(
					`Помилка роботи почти: ${JSON.stringify(e)}`,
					500
				)
			})
	}

	async sendChangePasswordMail(to: string, code: number) {
		await this.mailerService
			.sendMail({
				to: to,
				subject: 'Підтвердити зміну паролю',
				template: join(__dirname, './templates', 'confirm-change-password'),
				context: {
					code
				}
			})
			.catch((e) => {
				throw new HttpException(
					`Помилка роботи почти: ${JSON.stringify(e)}`,
					500
				)
			})
	}
}
