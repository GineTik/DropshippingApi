import { UserProfileDto } from "src/user/user-profile.dto"

export class SuccessAuthDto {
    accessToken: string
    refreshToken: string
    user: UserProfileDto
}