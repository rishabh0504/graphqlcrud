module.exports = [
  {
    name: "DEVELOPMENT",
    "type": "mysql",
    "host": "localhost",
    "port": 3308,
    "username": "root",
    "password": null,
    "database": "graphqlcrud",
    "synchronize": true,
    "logging": true,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
    }
  },
  {
    name: "PRODUCTION",
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false, // switch this to false once you have the initial tables created and use migrations instead
    logging: false,
    entities: ["dist/entity/**/*.js"],
    migrations: ["dist/migration/**/*.js"],
    subscribers: ["dist/subscriber/**/*.js"],
    cli: {
      entitiesDir: "dist/entity",
      migrationsDir: "dist/migration",
      subscribersDir: "dist/subscriber"
    }
  }
];
