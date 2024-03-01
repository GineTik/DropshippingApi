import { ConfigService } from '@nestjs/config';
import { MailerOptions } from '@nestjs-modules/mailer';
export declare const getMailConfig: (configService: ConfigService) => Promise<MailerOptions>;
