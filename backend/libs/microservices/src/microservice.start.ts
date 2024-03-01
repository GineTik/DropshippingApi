import { ConfigService } from '@nestjs/config'

export const defaultStartMicroservice = async (app) => {
	const configService = app.get(ConfigService)
	await app.startAllMicroservices()
	console.log('microservices started')
	await app.listen(configService.get('PORT'), '0.0.0.0')
}
