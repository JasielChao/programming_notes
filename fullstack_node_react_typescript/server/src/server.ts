import express from "express";
import router from "./router"
import db from "./config/db";
import colors from 'colors';


// Conectar a base de datos
async function connnectDB() {
    try {
       await db.authenticate();
       db.sync(); // sync(): es para que se mantenga sincronizado con cualquier cambio en la DB 
       console.log(colors.bgGreen.bold('Conexion exitosa a la BD'));
    } catch (error) {
        console.log(error);
        console.log('Error al conectar a la base de datos');
    }
}

connnectDB();

// Instancia de express
const server = express();

// Leer datos de formularios
server.use(express.json());

// To use the router
server.use('/', router);

export default server;
