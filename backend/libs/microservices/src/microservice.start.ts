import { ConfigService } from '@nestjs/config'

export const defaultStartMicroservice = (app) => {
	const configService = app.get(ConfigService)
	app.startAllMicroservices()
	app.listen(configService.get('PORT'), '0.0.0.0')
}
