import { User } from "./user.dto"

export type SuccessAuthDto = {
    accessToken: string
    refreshToken: string
    user: User
}