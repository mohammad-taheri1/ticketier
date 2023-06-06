using Microsoft.EntityFrameworkCore;
using ticketier_webapi.Core.AutoMapperConfig;
using ticketier_webapi.Core.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Config Database
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("local");
    options.UseSqlServer(connectionString);
});

// Config AutoMapper
builder.Services.AddAutoMapper(typeof(AutoMapperConfigProfile));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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
