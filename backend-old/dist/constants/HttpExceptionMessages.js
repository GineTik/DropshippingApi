"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyMessages = exports.HostMessages = exports.HostAndKeysMessages = exports.UserMessages = void 0;
exports.default = {
    ActivationCodeFailed: 'Код підтвердження невірний або недійсний',
    InvalidUserId: 'Користувач не найдений',
    InvalidPassword: 'Некоректний пароль',
    RefreshTokenIsUndefined: 'Refresh token is undefined',
    UserAlreadyExists: 'User already exists',
    InvalidEmailOrPassword: 'Пошта або пароль невірний',
    InvalidDeleteOfApiKey: 'При видалені апі ключа сталась помилка',
};
exports.UserMessages = {
    ActivationCodeFailed: 'Код підтвердження невірний або недійсний',
    InvalidId: 'Користувач не найдений',
    InvalidPassword: 'Некоректний пароль',
    RefreshTokenIsUndefined: 'Refresh token is undefined',
    AlreadyExists: 'User already exists',
    InvalidEmailOrPassword: 'Пошта або пароль невірний',
};
exports.HostAndKeysMessages = {
    Limit: 'Досягнута максимальна кількість АПІ ключів та хостів',
};
exports.HostMessages = {
    NotExists: 'Даного хоста не існує',
    AlreadyAllowed: 'Даний хост вже дозволений',
    DeletionFailed: 'При видалені апі ключа сталась помилка',
};
exports.ApiKeyMessages = {
    Invalid: 'Ключ невірного формату',
    NotExists: 'Такого АПІ ключа не існує',
    DeletionFailed: 'При видалені апі ключа сталась помилка',
};
//# sourceMappingURL=HttpExceptionMessages.js.map