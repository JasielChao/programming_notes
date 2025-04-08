/* General Notes JavaScript  */


/* ******************************************************************** */
/* Objects JS - Objetos JS */
/* ******************************************************************** */
document.addEventListener("DOMContentLoaded", ()=>{
   /* Los objetos en JS se crean llaves {}  */

   // Ejemplo de un objeto
   const producto = {
      nombre : "Tablet",
      precio: 300,
      disponible: false
   }

   console.log(producto)
   console.table(producto)
   console.log(producto.nombre)

   /* Destructuring
      El destructuring tiene como objetivo poder acceder directamente a una o varias 
      propiedes del objeto
   */
   const { nombre, precio, disponible } = producto
   console.log(nombre)
   console.log(precio)
   console.log(disponible)

   /* Object Literal Enhacement
      Es cuando el nombre de la propiedad coincide con el nombre de la variable que 
      le valor a la propiedad
   */
   const autenticado = true
   const usuario = "Juan"
   const nuevoObjeto = {
      autenticado,
      usuario
   }
   console.log(nuevoObjeto)

   /* Objetos - Manipulación */

   // Reescribir un valor de cualquier propiedad
   producto.disponible = true

   // Sino existe, lo va a añadir
   producto.imagen = 'imagen.jpg'

   // Eliminar propiedad
   delete producto.precio

   /* Metodo Object.freeze(nombreObjeto) 
      Congela un producto para que no pueda ser modificado
   */
   Object.freeze(producto)

   /* Metodo Object.seal(nombreObjeto) 
      Sella un producto para que no pueda se puedan agregar propiedades nuevas 
      o eliminar las existentes, pero si permite modicar el valor de las propiedades.
      En otras palabras, no permite alterar la estructura del objeto
   */
   console.log(producto)


   // Objetos - Destructuring de dos o más objetos
   const producto2 = {
      tipo : "Tablet",
      precio: 300,
      disponible: false
   }

   const cliente = {
      nombre: "Juan",
      premium: true, 
      direccion: {
         calle: "Calle México"
      }
   }

   const { tipo } = producto2
   /*  Para renombrar una variable en el destructuring, primero se pasa el nombre de la 
      variable a la que deseas acceder y luego de dos puntos el nuevo nombre 
      Ejemplo const {nombre: nombreCliente} = cliente
   */
   const { nombre: nombreCliente, direccion: { calle }} = cliente

   console.log(nombre)
   console.log(nombreCliente)
   console.log(calle)


   // Unir 2 o más objetos
   /* El operador spread debe ser usado al final */
   const nuevoCliente = {
      edad: 25,
      ...cliente
   }

      /* Lo siguiente crean un nuevo objeto con las propiedades de los 
        dos objetos que usan el spread operator  */
      const objeto2 = {
         ...cliente,
         ...producto2,
      }
      console.log(objeto2);

      /* Lo siguiente crean un nuevo objeto con las propiedades de los 
        dos objetos dentro de la funcion  Object.assign() */
      const objeto3 = Object.assign(cliente, producto2);
      console.log(objeto3);

   /* Lo siguiente crean un objeto padre con 2 objetos hijos
      los objetos hijos tendran el key del nombre del objeto  */
   const objeto4 = {
      cliente,
      producto2,
   }
   console.log(objeto4.cliente);
})

/* ******************************************************************** */
/* Template Strings y Concatenación */
/* ******************************************************************** */
document.addEventListener("DOMContentLoaded", ()=>{

   const producto = "Tablet de 12 Pulgadas"
   const precio = 400
   const marca = "Orange"

   console.log('El Producto es: ' + producto)
   console.log(`El Producto es: ${producto} `)

   console.log(producto + " $" + precio + " Dolares, marca: " +  marca)
   console.log(`${producto} $${precio} Dolares, marca: ${marca}`)

})

/* ******************************************************************** */
/* Arrays o Arreglos */
/* ******************************************************************** */
document.addEventListener("DOMContentLoaded", ()=>{

   // Arrays o Arreglos
   const tecnologias = [20, 30, 40, true, "React.js"];
   console.table(tecnologias);
   console.log(tecnologias[1]);

})




