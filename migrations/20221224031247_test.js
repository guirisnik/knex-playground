/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up (knex) {
  await knex.schema.createTableIfNotExists("test", function (tableBuilder) {
    tableBuilder.increments("id");
    tableBuilder.text("name");
  });

  return knex("test").insert([{ name: "test_1" }, { name: "test_2" }]);
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down (knex) {
  knex.schema.dropTableIfExists("test");
}
