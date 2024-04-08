using Backend.Core;
using Backend.Core.Exceptions.ServiceExceptions;
using Backend.Core.Sheduler;
using backend.Extensions;
using Backend.Infrastructure;
using Coravel;
using Coravel.Scheduling.Schedule.Interfaces;
using Microsoft.AspNetCore.Diagnostics;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddTransient<ConfigurationManager>(_ => builder.Configuration);

builder.Services.AddControllers();
builder.Services.AddFullAuth();
builder.Services.AddCore();
builder.Services.AddInfrastructure();

var app = builder.Build();

app.UseCors(policy  =>
{
    policy.WithOrigins("http://localhost:3000");
    policy.AllowCredentials();
    policy.AllowAnyHeader();
    policy.AllowAnyMethod();
});

app.UseExceptionHandler(exceptionHandlerApp =>
{
    exceptionHandlerApp.Run(async context =>
    {
        var exceptionHandlerPathFeature =
            context.Features.Get<IExceptionHandlerPathFeature>();

        Console.WriteLine(exceptionHandlerPathFeature?.Error.Message);

        if (exceptionHandlerPathFeature?.Error is ServiceException serviceException)
        {
            context.Response.StatusCode = StatusCodes.Status400BadRequest;
            await context.Response.WriteAsJsonAsync(new
            {
                StatusCode = 400,
                Message = serviceException.Message
            });
        }
    });
});

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Services.UseScheduler(scheduler =>
{
    scheduler.Schedule<UnloadOfferJob>().EveryMinute().PreventOverlapping(nameof(UnloadOfferJob)); 
}).LogScheduledTaskProgress(app.Services.GetRequiredService<ILogger<IScheduler>>());

app.Run();