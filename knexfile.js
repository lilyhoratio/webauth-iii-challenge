require("dotenv").config();
module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./dev.sqlite3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  // not working :(
  // development: {
  //   client: "pg",
  //   connection: {
  //     database: "auth",
  //     port: 5432,
  //     user: "postgres",
  //     password: process.env.DB_PW
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: "./data/migrations",
  //     tableName: "knex_migrations"
  //   },
  //   seeds: {
  //     directory: "./data/seeds"
  //   }
  // },

  staging: {
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
