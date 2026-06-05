import express from "express";
import router from "./router"
import db from "./config/db";
import colors from 'colors';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';


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

// Permitir conexiones
const corsOptions : CorsOptions = {
    origin: function(origin, callback) {
        if(origin === process.env.FRONTEND_URL){
            callback(null, true) // permitir la conexion
            console.log("permitir conexion")
        }else{
            console.log("No permitir conexion: " + origin)
            callback(new Error('Ups! CORS Error')) 
        }
    }
}

server.use(cors(corsOptions))

// Leer datos de formularios
server.use(express.json());

server.use(morgan('dev'))


server.use('/api/products', router)

// To use the router
server.use('/', router);

export default server;
