import { UserProfileDto } from 'src/account/user/dto/user-profile.dto'

export class SuccessAuthDto {
	accessToken: string
	refreshToken: string
	user: UserProfileDto
}
