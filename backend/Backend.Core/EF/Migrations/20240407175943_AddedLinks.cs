using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Core.EF.Migrations
{
    /// <inheritdoc />
    public partial class AddedLinks : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Links",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SupplierId = table.Column<int>(type: "int", nullable: false),
                    SupplierSettings = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Links", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Links_SupplierSettings_SupplierSettings",
                        column: x => x.SupplierSettings,
                        principalTable: "SupplierSettings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Links_SupplierSettings",
                table: "Links",
                column: "SupplierSettings");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Links");
        }
    }
}
