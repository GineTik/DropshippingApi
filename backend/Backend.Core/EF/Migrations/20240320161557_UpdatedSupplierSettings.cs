using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Core.EF.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedSupplierSettings : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SupplierSettings_AvailableYmlRefreshTimes_RefreshTimeId",
                table: "SupplierSettings");

            migrationBuilder.AlterColumn<int>(
                name: "YmlLoadTypeId",
                table: "SupplierSettings",
                type: "int",
                nullable: false,
                defaultValue: 1,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "YmlLink",
                table: "SupplierSettings",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<int>(
                name: "RefreshTimeId",
                table: "SupplierSettings",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "SupplierSettings",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddForeignKey(
                name: "FK_SupplierSettings_AvailableYmlRefreshTimes_RefreshTimeId",
                table: "SupplierSettings",
                column: "RefreshTimeId",
                principalTable: "AvailableYmlRefreshTimes",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SupplierSettings_AvailableYmlRefreshTimes_RefreshTimeId",
                table: "SupplierSettings");

            migrationBuilder.AlterColumn<int>(
                name: "YmlLoadTypeId",
                table: "SupplierSettings",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldDefaultValue: 1);

            migrationBuilder.AlterColumn<string>(
                name: "YmlLink",
                table: "SupplierSettings",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "RefreshTimeId",
                table: "SupplierSettings",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "SupplierSettings",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_SupplierSettings_AvailableYmlRefreshTimes_RefreshTimeId",
                table: "SupplierSettings",
                column: "RefreshTimeId",
                principalTable: "AvailableYmlRefreshTimes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
