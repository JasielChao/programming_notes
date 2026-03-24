import { Sequelize } from "sequelize-typescript";

// Para acceder al fichero .env
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL, {
    models: [__dirname + '/../models/**/*.ts']
});

export default db;