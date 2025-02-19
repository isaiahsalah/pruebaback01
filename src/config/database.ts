import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import pgConect from "pg-connection-string";
import { Client } from "pg";

dotenv.config();

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

export default sequelize;
