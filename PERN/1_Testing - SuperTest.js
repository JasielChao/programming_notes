/* General Notes PERN: Testing con SuperTest  */

/* Testing con SuperTest: 
   ******************************************
   1  *** New terminal: 
         npm i -D supertest @types/supertest jest @types/jest ts-jest
      
      - Una vez instaladas las dependencias, procedemos a crear el fichero jest.config.js
        escribiendo en la terminal:

        npx ts-jest config:init 
      



   2  *** Creando carpeta para tests
      - dentro de /src/ creamos la carpeta __tests__
      - dentro la carpeta ponemos todos los ficheros de tests


   3 ***  package.json
      - Dentro del package.json agregamos el script para test

        "scripts": {
         "dev": "nodemon --exec ts-node src/index.ts",
         "test": "jest --detectOpenHandles"
      },

   4 ***  Ejecutar el test
      - En la terminal escribimos:
         npm test
   
*/
   
