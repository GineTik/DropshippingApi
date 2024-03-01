/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { Types } from "mongoose";
import { TokenModel } from "./models/token.model";
export declare class TokenService {
    private readonly jwtService;
    private readonly configService;
    private readonly tokenModel;
    constructor(jwtService: JwtService, configService: ConfigService, tokenModel: ModelType<TokenModel>);
    generateTokens(_id: Types.ObjectId): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    saveToken(token: TokenModel): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, TokenModel> & Omit<TokenModel & {
        _id: Types.ObjectId;
    }, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    generateAndSaveToken(_id: Types.ObjectId): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    removeRefreshToken(refreshToken: string): Promise<void>;
    validateRefreshToken(refreshToken: string): Promise<{
        successfully: boolean;
        userId: Types.ObjectId | undefined;
        error: any;
    }>;
    validateAccessToken(accessToken: string): Promise<{
        successfully: boolean;
        userId: Types.ObjectId | undefined;
    }>;
}
