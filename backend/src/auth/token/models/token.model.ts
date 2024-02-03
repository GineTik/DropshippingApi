import { prop } from "@typegoose/typegoose";
import { Types } from "mongoose";

export class TokenModel {
    @prop({ref: 'User'})
    user: Types.ObjectId

    @prop({required: true})
    refreshToken: string
}