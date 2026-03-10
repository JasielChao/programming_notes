import { exit } from 'node:process'
import db from '../config/db'

/* Para limpiar la base de datos despues de cada test 
    para usarlo,

    1 - Agregamos el script al package.json
    "scripts": {
        "db": "ts-node ./src/data --clear"
    },

    2 -  escribimos en la terminal
    npm run db 

    3 - Opcionalmente si queremos que se ejecute siempre antes de los tests,
       cambiamos el script en el package.json de "db" to "pretest"
        "scripts": {
            "db": "ts-node ./src/data --clear"
        },

        de esta manera cuando ejecutamos npm test se ejecuta el pretest antes

*/
const clearDB = async () => {
    try {
        await db.sync({force:true}) // Clean the DB
        console.log('Datos eliminados correctamente')
        exit() // Finaliza el codigo sin errores
    } catch (error) {
        console.log(error)
        exit(1) // Finaliza el codigo con errores
    }
}

if(process.argv[2] === '--clear') {
    clearDB()
}

console.log(process.argv);