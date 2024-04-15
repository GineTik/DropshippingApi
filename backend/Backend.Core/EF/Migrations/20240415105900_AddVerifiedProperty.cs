using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Core.EF.Migrations
{
    /// <inheritdoc />
    public partial class AddVerifiedProperty : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SupplierSettingsId",
                table: "Tags");

            migrationBuilder.AddColumn<bool>(
                name: "Verified",
                table: "Tags",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "TagId",
                table: "SupplierSettings",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Verified",
                table: "Links",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_SupplierSettings_TagId",
                table: "SupplierSettings",
                column: "TagId");

            migrationBuilder.AddForeignKey(
                name: "FK_SupplierSettings_Tags_TagId",
                table: "SupplierSettings",
                column: "TagId",
                principalTable: "Tags",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SupplierSettings_Tags_TagId",
                table: "SupplierSettings");

            migrationBuilder.DropIndex(
                name: "IX_SupplierSettings_TagId",
                table: "SupplierSettings");

            migrationBuilder.DropColumn(
                name: "Verified",
                table: "Tags");

            migrationBuilder.DropColumn(
                name: "TagId",
                table: "SupplierSettings");

            migrationBuilder.DropColumn(
                name: "Verified",
                table: "Links");

            migrationBuilder.AddColumn<int>(
                name: "SupplierSettingsId",
                table: "Tags",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
