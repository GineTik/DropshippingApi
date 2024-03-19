import { JwtAuthGuard } from '@app/auth'
import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@UseGuards(JwtAuthGuard)
	@Get('profile')
	async getProfile(@Req() request: Express.Request) {
		return await this.userService.getProfile(request['user']['_id'])
	}

	@UseGuards(JwtAuthGuard)
	@Get('max-count')
	async getMaxCountOfApiKeysAndHosts(@Req() request: Express.Request) {
		return await this.userService.getMaxCountOfApiKeysAndHosts(
			request['user']['_id']
		)
	}
}
