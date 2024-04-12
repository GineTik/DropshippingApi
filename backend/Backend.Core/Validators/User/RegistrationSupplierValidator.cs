using Backend.Core.DTOs.User.Auth;
using Backend.Core.EF;
using FluentValidation;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Validators.User;

public class RegistrationSupplierValidator: AbstractValidator<RegistrationSupplierDto>
{
    public RegistrationSupplierValidator(DataContext dataContext)
    {
        RuleFor(o => o.Email)
            .EmailAddress()
            .WithMessage("Почта не коректна");

        RuleFor(o => o.Password)
            .MinimumLength(6)
            .WithMessage("Пароль має мати мінімум 6 символів");

        RuleFor(o => o.PublicName)
            .NotEmpty()
            .WithMessage("Публічне ім'я є обов'язковим")
            .MustAsync(async (entity, value, c) =>
            {
                return (await dataContext.SupplierSettings.AnyAsync(o => o.PublicName.ToLower() == value.ToLower(), cancellationToken: c)) == false;
            })
            .WithMessage("Таке публічне ім'я вже занято");
        
        RuleFor(o => o.ApiName)
            .NotEmpty()
            .WithMessage("Ім'я апі є обов'язковим")
            .Matches(@"^[a-z-]+$")
            .WithMessage("В апі імені доступні тільки маленькі симовли та символ \"-\"")
            .MustAsync(async (entity, value, c) =>
            {
                return (await dataContext.SupplierSettings.AnyAsync(o => o.ApiName == value, cancellationToken: c)) == false;
            })
            .WithMessage("Таке ім'я апі вже занято");
    }
}