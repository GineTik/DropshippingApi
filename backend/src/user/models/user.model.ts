import { prop } from "@typegoose/typegoose"
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses"
import { ApiKeyModel } from "./api-key.model"

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
    @prop({unique: true, required: true})
    email: string

    @prop({required: true})
    password: string

    @prop({default: false})
    emailConfirmed: boolean

    @prop()
    activationCode: number

    @prop({default: { maxCount: 10, keys: [] }})
    apiKeys: {
        maxCount: number,
        keys: ApiKeyModel[]
    }
}