import { IsString, MinLength } from "class-validator"

export class AuthDto {
    @IsString()
    email: string

    @IsString()
    @MinLength(6, {
        message: 'Password cannot be less than 6 characters!'
    })
    password: string
}