import { Types } from "mongoose"

export class SuccessAuthDto {
    accessToken: string
    refreshToken: string
    user: {
        id: Types.ObjectId
        email: string
        isActivated: boolean
    }
}