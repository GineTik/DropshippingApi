import { Types } from "mongoose"
import { UserModel } from "../../../../libs/models/src/user/user.model"

export class UserProfileDto {
    id: Types.ObjectId
    email: string
    isActivated: boolean

    constructor(userModel: UserModel) {
        this.id = userModel._id
        this.email = userModel.email
        this.isActivated = userModel.emailConfirmed
    }
}