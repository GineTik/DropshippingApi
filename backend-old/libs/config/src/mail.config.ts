import { MailerOptions } from '@nestjs-modules/mailer'
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter'
import { ConfigService } from '@nestjs/config'

export const getMailConfig = async (
	configService: ConfigService
): Promise<MailerOptions> => {
	const host = configService.get<string>('MAIL_HOST')
	const port = configService.get<string>('MAIL_PORT')
	const fromName = configService.get<string>('MAIL_FROM')
	const fromAddress = configService.get<string>('MAIL_USERNAME')
	const password = configService.get<string>('MAIL_PASSWORD')

	return {
		transport: {
			host,
			port,
			secure: false,
			auth: {
				user: fromAddress,
				pass: password
			},
			tls: {
				// do not fail on invalid certs
				rejectUnauthorized: false
			}
		},
		defaults: {
			from: `"${fromName}" <${fromAddress}>`
		},
		template: {
			adapter: new EjsAdapter(),
			options: {
				strict: false
			}
		}
	}
}
