import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ConfirmChangePasswordDto } from './dto/confirm-change-password.dto';
export declare class AuthController {
    private readonly authService;
    private readonly configService;
    constructor(authService: AuthService, configService: ConfigService);
    login(dto: AuthDto, response: Response): Promise<import("./dto/success-auth.dto").SuccessAuthDto>;
    registration(dto: AuthDto, response: Response): Promise<import("./dto/success-auth.dto").SuccessAuthDto>;
    logout(response: Response): Promise<void>;
    activate(code: number, request: Request): Promise<void>;
    refresh(request: Request, response: Response): Promise<import("./dto/success-auth.dto").SuccessAuthDto>;
    changePassword(request: Request): Promise<void>;
    confirmChangePassword(confirmChangePasswordDto: ConfirmChangePasswordDto, request: Request): Promise<void>;
    test(): Promise<string>;
    private saveRefreshTokenToCookie;
}
