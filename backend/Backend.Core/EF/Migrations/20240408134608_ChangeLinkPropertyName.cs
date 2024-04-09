using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Core.EF.Migrations
{
    /// <inheritdoc />
    public partial class ChangeLinkPropertyName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Links_SupplierSettings_SupplierSettings",
                table: "Links");

            migrationBuilder.DropColumn(
                name: "SupplierId",
                table: "Links");

            migrationBuilder.RenameColumn(
                name: "SupplierSettings",
                table: "Links",
                newName: "SupplierSettingsId");

            migrationBuilder.RenameIndex(
                name: "IX_Links_SupplierSettings",
                table: "Links",
                newName: "IX_Links_SupplierSettingsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Links_SupplierSettings_SupplierSettingsId",
                table: "Links",
                column: "SupplierSettingsId",
                principalTable: "SupplierSettings",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Links_SupplierSettings_SupplierSettingsId",
                table: "Links");

            migrationBuilder.RenameColumn(
                name: "SupplierSettingsId",
                table: "Links",
                newName: "SupplierSettings");

            migrationBuilder.RenameIndex(
                name: "IX_Links_SupplierSettingsId",
                table: "Links",
                newName: "IX_Links_SupplierSettings");

            migrationBuilder.AddColumn<int>(
                name: "SupplierId",
                table: "Links",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Links_SupplierSettings_SupplierSettings",
                table: "Links",
                column: "SupplierSettings",
                principalTable: "SupplierSettings",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
