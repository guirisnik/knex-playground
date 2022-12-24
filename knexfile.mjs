// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: "sqlite3",
  connection: {
    filename: "./db.sqlite",
  },
  migrations: {
    directory: "./migrations",
    loadExtensions: [".js"],
  },
};
export const staging = {
  client: "sqlite3",
  connection: {
    filename: "./db.sqlite",
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
export const production = {
  client: "sqlite3",
  connection: {
    filename: "./db.sqlite",
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
