/// <reference types="mongoose/types/types" />
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
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { UserModel } from 'src/user/models/user.model';
import { MailService } from '../mail/mail.service';
import { AuthDto } from './dto/auth.dto';
import { ConfirmChangePasswordDto } from './dto/confirm-change-password.dto';
import { SuccessAuthDto } from './dto/success-auth.dto';
import { TokenService } from './token/token.service';
export declare class AuthService {
    private readonly userModel;
    private readonly tokenService;
    private readonly mailService;
    constructor(userModel: ModelType<UserModel>, tokenService: TokenService, mailService: MailService);
    login(dto: AuthDto): Promise<SuccessAuthDto>;
    registration(dto: AuthDto): Promise<SuccessAuthDto>;
    activate(_id: Types.ObjectId, activationCode: number): Promise<void>;
    refresh(refreshToken: string): Promise<SuccessAuthDto>;
    changePasswordRequest(_id: Types.ObjectId): Promise<void>;
    confirmChangePassword(_id: Types.ObjectId, { code, newPassword }: ConfirmChangePasswordDto): Promise<void>;
    private generate6NumberCode;
    private hashPassword;
}
