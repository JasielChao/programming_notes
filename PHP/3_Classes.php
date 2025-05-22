<?php
include 'includes/header.php';

/* Crear una nueva clase para la Herencia 

    Las clases abstractas no se pueden instanciar directamente, su
    finalidad es usarla unicamente para la herencia como plantilla,
    ya que sus clases hijas podran instanciar todos metodos y atributos
    publicos
*/
abstract class Persona {

    /* Atributos de la clase:
        Los atributos de una clase deben comenzar con un modificador de acceso (Public, Private and Protected)

        Public: 
         - Accesible desde cualquier parte: dentro de la clase, desde clases hijas, y desde fuera de la clase
         - Es el acceso más abierto.

        Private: 
         - Solo accesible desde dentro de la misma clase.
         - No se puede acceder desde fuera de la clase, ni siquiera desde clases hijas (heredadas).

        Protected: 
         - Accesible dentro de la clase y en clases que la extienden (herencia).
         - No es accesible desde fuera de la clase.
    */
    public $nombre; 
    public $apellido;
    public $phone;
    public static $email; // Atributo static

    /* Constructor de la clase 
        El Constructor de una clase es invocado de manera automatica tan pronto
        se llama a la clase
    */
    public function __construct($nombre, $apellido, $phone, $email){
        /* Para acceder a los atributos de la clase nombrados previamente
            desde el mismo constructor se debe hacer con $this->atributoName
        */
        $this->$nombre = $nombre;
        $this->apellido = $apellido;
        $this->phone = $phone;
        self::$email = $email; // Para asignar el valor a un atributo static
    }

    /* Metodos de la clase 
        Los metodos de la clase son funciones dentro de la clase. Para llamar a un metodo
        se usa la $instancia->nombreMetedo(); 
        Ej. $empleado->nombreEmpleado();

        Para llamarlo dentro del constructor: $this->nombreMetedo(); 
    */

    /* Metodo Get */
    public function getInformation(){
        // Para obtener el valor de un atributo static
        echo 'Nombre: ' . $this->$nombre . ' ' . $this->apellido . ', Phone: ' . $this->phone . ', email: ' . self::$email;
    }

    public function getNombre(){
        echo $this->nombre . ' ' . $this->apellido;
    }

    public function getEmail(){
        echo $this->nombre . ' ' . $this->apellido;
    }

    /* Metodo Set */
    public function setNombre($email){
        self::$email = $email; // Para asignar el valor a un atributo static
    }

    /* Metodos static
        Los metodos static no necesitan ser instanciados a traves de la clase para ser usados
        se usa la NombreClase::getSaludo();nombreMetedo(); 
        Ej. $empleado->nombreEmpleado();

        Para llamarlo dentro del constructor: $this->nombreMetedo(); 
    */
    public static function getSaludo(){
        echo "Saludos desde la clase stactic";
    }
    
}

// Crear una nueva clase 
class Empleado extends Persona {

    /* Clase hija:
        Hereda los constructores, metodos y atributos de la clase padre
    */
    public $departamento;

    /* Constructor de la clase  */
    public function __construct($nombre, $apellido, $phone, $email, $departamento = "No tiene"){
        /*  parent::
            Para pasar los atributos al constructor padre
        */
        parent::__construct($nombre, $apellido, $phone, $email);
        $this->departamento = $departamento;
    }

    /* Para sobreescribir un metodo de la clase padre solo debemos re-declararlo  */
     /* Metodo Get */
     public function getInformation(){
        echo 'Nombre: ' . $this->nombre . ' ' . $this->apellido . ', Phone: ' . $this->phone . ', email: ' . $this->email
        . ', departamento: ' . $this->departamento;
    }

}

class Proveedor extends Persona {
    
    // Atributos de la clase:
    public $empresa;

    // Constructor de la clase 
    public function __construct($nombre, $apellido, $phone, $email, $empresa){

        parent::__construct($nombre, $apellido, $phone, $email);
        $this->empresa = $empresa;
    }
}

/* Para instaciar una clase usamos la palabra new y el mobre de la clase
    entonces debemos guardarla en una variable que almacenara el objeto

    Note: Se puede tener multiples instancias de la misma clase
*/

// Instaciar clase
$empleado = new Empleado('Jasiel', 'Chao', '7866301280', 'email@email.com', 'Web');
$proveedor = new Proveedor('Jose', 'Chao', '7866301280', 'email@email.com', 'Samsung');

echo "<pre>";
var_dump($empleado);
echo "</pre>";

//Para acceder a un atributo
$empleado->nombre;

// Para asignar un valor a un atributo u objeto
$empleado->nombre = 'Jasiel';

// Para instanciar un metodo
$empleado->getInformation();

// Llamando metodo static
Empleado::getSaludo();