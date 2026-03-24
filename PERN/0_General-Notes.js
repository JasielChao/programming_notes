/* General Notes PERN:   */

/* Create New Proyect - Server:
   ******************************************
   1  *** New terminal: npm init
      - Llenar la informacion del init o dar enter a todo y se crea un nuevo package.json



   2  *** En el package.json borrar el type:"" property que no se necisita para TS
      - Instalar las dependicias en la terminal: npm i -D typescript ts-node
      - A la misma altura del package.json crear el tsconfig.json y dejarlo en blanco
      - para correr el codigo: npx ts-node src/index.ts




   3 *** Watch para TS
     -  En el package.json en la propiedad scripts:{}, agregar  "dev": "npx ts-node src/index.ts"
      "scripts": {
         "dev": "npx ts-node src/index.ts"
      },

     - Ahora se puede ejecutar con: npm run dev
     - Instalar las dependicias en la terminal: npm i -D nodemon
     
     - Ahora modifcamos la propiedad scripts:{} para usar el nodemon watch 
      "scripts": {
         "dev": "nodemon --exec ts-node src/index.ts"
      },
      - Ahora el watch se puede ejecutar con: npm run dev




   4 *** Compilar TS a JS
      -  Para compilar el comando usamos el comando: npx tsc src/index.ts
      - En el tsconfig.json creado en el paso uno creamos las reglas del compilador
      {
         "compilerOptions": {
            "outDir": "./dist",
            "rootDir": "./src"
         }
      }
      - Ahora para compilar usamos el comando: npx tsc


   5 *** Express
      - Instalar las dependicias en la terminal: 
         npm i express
         npm i -D @types/express

      - Instalar para la validacion de datos: 
         npm i express-validator


    6 *** Sequelize
      - Instalar las dependicias en la terminal: 
         npm install --save sequelize

      - You'll also have to manually install the driver for your database of choice:

      # One of the following:
         $ npm install --save pg pg-hstore # Postgres
         $ npm install --save mysql2
         $ npm install --save mariadb
         $ npm install --save sqlite3
         $ npm install --save tedious # Microsoft SQL Server
         $ npm install --save oracledb # Oracle Database

      - Instalar las dependicias en la terminal: 
         npm install --save sequelize-typescript


   7 *** Variables de entorno

      - La variable de entorno (IP del servidor)
         Ejemplos: 
            DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE
            DATABASE_URL=mysql://myuser:mypassword@localhost:3306/mydatabase
            DATABASE_URL=mysql://USER:PASSWORD@SERVER_IP:3306/DATABASE
            DATABASE_URL=mysql://myuser:mypassword@123.45.67.89:3306/mydatabase

         Notas: 
            - Normalmente en CloudPanel
               HOST = localhost
               PORT = 3306

      - Instalar las dependicias en la terminal: 
         npm i dotenv

      - En la raiz del proyecto creamos el fichero .env

      // Para acceder al fichero .env desde otro fichero
      import dotenv from 'dotenv';
      dotenv.config();
      console.log(process.env.DATABASE_URL);


   8 *** Colors
      - Instalar las dependicias en la terminal: 
         npm i colors

      - Para usarlos
         import colors from 'colors';
         console.log(colors.bgGreen.bold('Conexion exitosa a la BD'));
         console.log(colors.green('Conexion exitosa a la BD'));


   9 *** Cors: Para autorizar dominios a acceder a nuestra base de datps
      Instalamos las dependecias
         - npm i cors
         - npm i -D @types/cors

      En el server\src\server.ts importamos cors

         - import cors, { CorsOptions } from 'cors';


   9 *** Morgan
      Instalamos las dependecias
         - npm i morgan
         - npm i -D @types/morgan

      En el server\src\server.ts importamos morgan
        

     

*/
   
/* Create New Proyect - Client: 
   ******************************************
   1  *** New terminal: npm create vite@latest
      Llenar la informacion del init o dar enter a todo y se crea un nuevo package.json

      -  Select a framework:  React

      - Select a variant: JavaScript + SWC

      - Use Vite 8 beta (Experimental)?: No

      - Install with npm and start now?  No


      Luego unir las dos carpetas (backend y frotend) en una sola carpeta 


      2  *** Tailwind
         - npm i tailwindcss @tailwindcss/vite

         Vamos al fichero vite.config.js y importamos tailwind

            import { defineConfig } from 'vite'
            import react from '@vitejs/plugin-react-swc'
            import tailwindcss from '@tailwindcss/vite'

            // https://vite.dev/config/
            export default defineConfig({
               plugins: [react(), tailwindcss()],
            })


         Vamos al fichero index.css y importamos tailwind

         @import "tailwindcss";


      3 *** Install more
        - npm i react-router-dom
        - npm i valibot
        - npm i axios

     


*/