import { Sequelize } from "sequelize-typescript";

// Para acceder al fichero .env
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(process.env.EXTERNAL_DATABASE_URL, {
    models: [__dirname + '/../models/**/*.ts'],
    logging: false // para desactivar los console.log por default
});

export default db;