using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Core.EF.Migrations
{
    /// <inheritdoc />
    public partial class UpdateSupplierTagRelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SupplierSettings_Tags_TagId",
                table: "SupplierSettings");

            migrationBuilder.DropIndex(
                name: "IX_SupplierSettings_TagId",
                table: "SupplierSettings");

            migrationBuilder.DropColumn(
                name: "TagId",
                table: "SupplierSettings");

            migrationBuilder.CreateTable(
                name: "SupplierSettingsTag",
                columns: table => new
                {
                    SupplierSettingsId = table.Column<int>(type: "int", nullable: false),
                    TagsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SupplierSettingsTag", x => new { x.SupplierSettingsId, x.TagsId });
                    table.ForeignKey(
                        name: "FK_SupplierSettingsTag_SupplierSettings_SupplierSettingsId",
                        column: x => x.SupplierSettingsId,
                        principalTable: "SupplierSettings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SupplierSettingsTag_Tags_TagsId",
                        column: x => x.TagsId,
                        principalTable: "Tags",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SupplierSettingsTag_TagsId",
                table: "SupplierSettingsTag",
                column: "TagsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SupplierSettingsTag");

            migrationBuilder.AddColumn<int>(
                name: "TagId",
                table: "SupplierSettings",
                type: "int",
                nullable: true);

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
    }
}
