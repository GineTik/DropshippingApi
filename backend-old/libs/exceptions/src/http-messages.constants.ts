// export default {
//     ActivationCodeFailed: 'Код підтвердження невірний або недійсний',
//     InvalidUserId: 'Користувач не найдений',
//     InvalidPassword: 'Некоректний пароль',
//     RefreshTokenIsUndefined: 'Refresh token is undefined',
//     UserAlreadyExists: 'User already exists',
//     InvalidEmailOrPassword: 'Пошта або пароль невірний',
//     InvalidDeleteOfApiKey: 'При видалені апі ключа сталась помилка',
// }

export const UserMessages = { 
    ActivationCodeFailed: 'Код підтвердження невірний або недійсний',
    InvalidId: 'Користувач не найдений',
    InvalidPassword: 'Некоректний пароль',
    RefreshTokenIsUndefined: 'Refresh token is undefined',
    AlreadyExists: 'User already exists',
    InvalidEmailOrPassword: 'Пошта або пароль невірний',
}

export const HostAndKeysMessages = {
    Limit: 'Досягнута максимальна кількість АПІ ключів та хостів',
}

export const HostMessages = {
    NotExists: 'Даного хоста не існує',
    AlreadyAllowed: 'Даний хост вже дозволений',
    DeletionFailed: 'При видалені апі ключа сталась помилка',
} 

export const ApiKeyMessages = {
    Invalid: 'Ключ невірного формату',
    NotExists: 'Такого АПІ ключа не існує',
    DeletionFailed: 'При видалені апі ключа сталась помилка',
}