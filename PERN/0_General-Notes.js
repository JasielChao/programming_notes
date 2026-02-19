/* General Notes PERN:   */

/* Create New Proyect: 
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
      - Instalar las dependicias en la terminal: 
         npm i dotenv

      - En la raiz del proyecto creamos el fichero .env

      // Para acceder al fichero .env desde otro fichero
      import dotenv from 'dotenv';
      dotenv.config();
      console.log(process.env.EXTERNAL_DATABASE_URL);


   8 *** Colors
      - Instalar las dependicias en la terminal: 
         npm i colors

      - Para usarlos
         import colors from 'colors';
         console.log(colors.bgGreen.bold('Conexion exitosa a la BD'));
         console.log(colors.green('Conexion exitosa a la BD'));


     

*/
   
