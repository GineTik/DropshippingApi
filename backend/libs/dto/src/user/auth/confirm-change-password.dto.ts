import { IsInt, IsString, Max, Min, MinLength } from "class-validator"

export class ConfirmChangePasswordDto {
    @IsInt()
    @Min(100000, {
        message: 'Код має 6 цифр'
    })
    @Max(999999, {
        message: 'Код має 6 цифр'
    })
    code: number

    @IsString()
    @MinLength(6, {
        message: 'Пароль має бути довше 6 символів'
    })
    newPassword: string
}