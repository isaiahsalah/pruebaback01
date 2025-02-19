import dotenv from "dotenv";
import app from "./app";
import sequelize from "./config/database";

dotenv.config();

const PORT = process.env.PORT || 3001;

// Inicia el servidor y conecta a la base de datos
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Base de datos conectada");
    app.listen(PORT, () =>
      console.log(`Servidor corriendo en el puerto ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Error de texto:", process.env.DB_USER);

    console.error("Error al conectar a la base de datos:", err);
  });
