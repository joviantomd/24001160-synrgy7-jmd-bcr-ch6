import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      database: "postgres",
      user: "postgres",
      password: "123456", 
      port: 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {

      directory: "./migrations"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "postgres",
      user: "admin",
      password: "123456"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
