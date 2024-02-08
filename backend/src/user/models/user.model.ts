import { prop } from "@typegoose/typegoose"
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses"
import { AllowedHostModel } from "../allowed-hosts/models/allowed-host.model"
import { ApiKeyModel } from "../api-keys/models/api-key.model"

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

    @prop({default: []})
    apiKeys: ApiKeyModel[]

    @prop({default: []})
    allowedHosts: AllowedHostModel[]

    @prop({default: 10})
    limitOfApiKeysAndHosts: number
}