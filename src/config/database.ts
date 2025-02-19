import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import pgConect from "pg-connection-string";
import { Client } from "pg";

dotenv.config();

const connectionString = process.env.DB_URL;

if (!connectionString) {
  throw new Error("DB_URL no se encuentra");
}

export const sequelize = new Sequelize(connectionString);

/*
const { parse } = pgConect;

const connector = parse(connectionString);

export const sequelize = new Sequelize(
  connector.database as string,
  connector.user as string,
  connector.password as string,
  {
    dialect: "postgres",
    host: connector.host as string,
    dialectOptions: {
      ssl: { sslmode: "require", rejectUnauthorized: false },
    },
  }
);

/*
const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: false, // Desactiva SSL
    },
    //logging: false, // Opcional: para desactivar los logs de Sequelize en consola
  }
);

export default sequelize;*/
