import server from "./server";
import colors from 'colors';

/* El primer parametro es el puerto que el servidor va a usar,
    en este caso 4000, pero puede ser cualquiera que queramos */

const port = process.env.PORT || 4000;
server.listen(4000, () =>{
    console.log(colors.bgMagenta(`Rest API en el puerto ${port}`))
})