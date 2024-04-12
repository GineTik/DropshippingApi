using Backend.Core.DTOs.User.Auth;
using FluentValidation;

namespace Backend.Core.Validators.User;

public class RegistrationDropshipperValidator : AbstractValidator<RegistrationDropshipperDto>
{
    public RegistrationDropshipperValidator()
    {
        RuleFor(o => o.Email)
            .EmailAddress()
            .WithMessage("Почта не коректна");

        RuleFor(o => o.Password)
            .MinimumLength(6)
            .WithMessage("Пароль має мати мінімум 6 символів");
    }
}