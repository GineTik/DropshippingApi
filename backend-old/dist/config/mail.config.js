"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMailConfig = void 0;
const ejs_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/ejs.adapter");
const getMailConfig = async (configService) => {
    const host = configService.get('MAIL_HOST');
    const port = configService.get('MAIL_PORT');
    const fromName = configService.get('MAIL_FROM');
    const fromAddress = configService.get('MAIL_USERNAME');
    const password = configService.get('MAIL_PASSWORD');
    return {
        transport: {
            host,
            port,
            secure: false,
            auth: {
                user: fromAddress,
                pass: password,
            },
            tls: {
                rejectUnauthorized: false
            },
        },
        defaults: {
            from: `"${fromName}" <${fromAddress}>`,
        },
        template: {
            adapter: new ejs_adapter_1.EjsAdapter(),
            options: {
                strict: false,
            },
        },
    };
};
exports.getMailConfig = getMailConfig;
//# sourceMappingURL=mail.config.js.map