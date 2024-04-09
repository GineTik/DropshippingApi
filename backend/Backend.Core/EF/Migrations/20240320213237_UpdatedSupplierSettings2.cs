using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Core.EF.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedSupplierSettings2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "AvailableYmlRefreshTimes");
            
            migrationBuilder.DropColumn(
                name: "Time",
                table: "AvailableYmlRefreshTimes");

            migrationBuilder.AlterColumn<int>(
                name: "RefreshTimeId",
                table: "SupplierSettings",
                type: "int",
                nullable: true,
                defaultValue: 1,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Time",
                table: "AvailableYmlRefreshTimes",
                type: "int",
                nullable: false);
            
            migrationBuilder.AddColumn<int>(
                name: "TimeType",
                table: "AvailableYmlRefreshTimes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AvailableYmlRefreshTimes",
                columns: new[] { "Id", "Time", "TimeType" },
                values: new object[,]
                {
                    { 1, 5, 0 },
                    { 2, 10, 0 },
                    { 3, 30, 0 },
                    { 4, 1, 1 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AvailableYmlRefreshTimes",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "AvailableYmlRefreshTimes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "AvailableYmlRefreshTimes",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "AvailableYmlRefreshTimes",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DropColumn(
                name: "TimeType",
                table: "AvailableYmlRefreshTimes");

            migrationBuilder.AlterColumn<int>(
                name: "RefreshTimeId",
                table: "SupplierSettings",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true,
                oldDefaultValue: 1);

            migrationBuilder.AlterColumn<DateTime>(
                name: "Time",
                table: "AvailableYmlRefreshTimes",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "AvailableYmlRefreshTimes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
