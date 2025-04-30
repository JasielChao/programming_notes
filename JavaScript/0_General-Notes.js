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
   const miArray = [20, 30, 40, true, "React.js"];
   console.table(miArray);
   console.log(miArray[1]);

   const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js'];


   // Para agregar un elemento al final de un arreglo o array
   tecnologias.push('Node.js'); // push no se recomienda con react porque muta el state
   console.log(tecnologias);

   // Para agregar uno o más elementos al final de un arreglo o array podemos usar el operador spread
   const tecnologias2 = [...tecnologias, 'Node.js'];
   console.log(tecnologias2);

   // Con .filter() podemos recorrer un array viendo cada elemento sin retornar elementos vacios en caso de que la condicion no se cumpla
   // Devuelve un nuevo array con los elementos que cumplen una condición (true en el callback).
   const tecnologias3 = tecnologias.filter(function(item) {
         // Guardamos en el nuevo arreglo todos los elementos que no sean igual a HTML
         if(item !== 'HTML') {
            return item;
        }
    })
    console.log(tecnologias3);

   // .filter() en arrow function
   // Hace lo mismo que la de arriba, pero más compacta
   const tecnologias3_2 = tecnologias.filter(item => item !== 'HTML')
   console.log(tecnologias3_2);

   // Con .map() podemos recorrer un array viendo cada elemento, a diferencia de .filter() este va a retornar algo en cada caso
   // Devuelve un nuevo array con el resultado de aplicar una función a cada elemento.
   const tecnologias4 = tecnologias.map(function(item) {
      if(item === 'Node.js') {
         return 'Nest.js'
      } else {
         return item
      }
   });

   console.log(tecnologias4);


   // Destructuring arrays
   /* En este caso, el destructuring del array nos daria como resultado
      que podamos llamar el valor array[3] por el nombre reactjs

      Las comas vacias son como brinco de posiciones, por lo que el console.log(reactjs)
      va a retornar la tercera posicion, que en este caso seria 'React.js'
   */
   const [ , , , reactjs] = tecnologias
   console.log(reactjs)

   // Recorrer arrays
   // for()
   for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
   }

   // forEach()
   array.forEach(element => {
      console.log(element);
   });

   // map()
   /* La diferencia entre .map() y forEach() es que map debe retornar algo y generaria un arreglo nuevo */
   const arrayMap = array.map(element => {
       return element;
   });

   // Si usamos () en vez de {} no tenermos que escribir return
   const arrayMap2 = array.map(element => (
      element
   ));

   // for ... of
   for(let element of array){
      console.log(element);
   }


   // Metodos utiles
   /* array.includes('anyString') devuelve true o false dependiendo si el valor deseado existe dentro del array */
   let resultado = tecnologias.includes('CSS');

   // Some - Devuelve si al menos uno cumple la condición
   resultado = numeros.some( numero => numero > 15 )

   // Find - Devuelve el primer elemento que cumple una condición
   resultado = numeros.find( numero => numero > 20 )

   // Every - Retorna true o false si todos cumplen la condición
   resultado = numeros.every( numero => numero > 5 )

   // Reduce - Retorna un acumulado del total
   resultado = numeros.reduce( (total, numero) =>  total + numero, 0)

   console.log(resultado)

})


/* ******************************************************************** */
/* Functions - Funciones */
/* ******************************************************************** */
document.addEventListener("DOMContentLoaded", ()=>{
   // Regular Function Declaration
   function sumar(numero1 = 0, numero2 = 0) {
      console.log(numero1 + numero2)
   }

   /** Function Expression
    *  A diferencia de la expresion regular, las Functions Expression deben ser declaradas 
    * antes de ser usadas, ya que cuentan como variables
    */
   const sumar = function(numero1 = 0, numero2 = 0) {
      console.log(numero1 + numero2)
   }

   /** Arrow Functions
    *  A diferencia de la expresion regular, las Arrow Functions tambien deben ser 
    * declaradas antes de ser usadas, ya que cuentan como variables
    */
   const sumar = (numero1 = 0, numero2 = 0) => console.log(numero1 + numero2)


  
})





