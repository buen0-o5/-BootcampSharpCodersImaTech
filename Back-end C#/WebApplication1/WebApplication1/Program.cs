using Sample.Scheduler.Core.Extensions;
using Sample.Scheduler.Core.TimerSchedulers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCronJob<TimerSendEmail>(c => c.CronExpression = @"0 */1 * * * *");
builder.Services.AddCronJob<TimerCheckDatabase>(c => c.CronExpression = @"* * * * * *");
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
