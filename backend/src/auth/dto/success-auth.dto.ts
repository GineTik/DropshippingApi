import { Types } from "mongoose"

export class SuccessAuthDto {
    id: Types.ObjectId
    email: string
    isActivated: boolean
}