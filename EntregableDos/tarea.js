//punto1
const suma = (a,b) =>{
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código
    return a + b;
    
}
console.log(suma(1,1));
//punto2
const sonIguales = (x, y)=>{
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    if (x === y){
      return true;
    } else{
      return false;
    }
    
}
console.log(sonIguales("a", 2));
//punto3
function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if (str1.length === str2.length){
      return true;
    }else{
      return false;
    }
  }
  console.log(tienenMismaLongitud("ha", "holi"));
  //punto4
  function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    // Tu código:
    if (numero > 0){
      return "Es positivo";
    }else if (numero < 0){
      return "Es negativo";
    }else if (numero === 0){
      return false;
    }
  }
  console.log(esPositivo(10))
  //punto5
  const colors = (color)=>{
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    switch(color){
      
      case "blue":
        return "this is blue";
        break;
      case "red":
        return "this is red";
        break;
      case "green":
        return "this is green";
        break;
      case "orange":
        return "this is orange";
        break;
      default:
       return "Color not found";
    }
    
  }
  console.log(colors("yellow"));
  //punto6
  const fizzBuzz = (numero) => {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if(numero % 3 === 0 && numero % 5 === 0){
    return "fizzbuzz";
    }else if (numero % 3 === 0){
      return "fizz";
    }else if (numero % 5 === 0){
      return "buzz";
    }
    else{
      return numero;
    }
  }
  console.log(fizzBuzz(5));
  //punto7
  const devolverPrimerElemento = (array) => {
    // Devuelve el primer elemento de un array
    // Tu código:
    
    return array[0];
   
  }
  array = ["cancer",2,false];
  console.log(devolverPrimerElemento(array));
  //punto8
  const agregarItemAlFinalDelArray = (array, elemento) =>{
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array;
  }
  console.log(agregarItemAlFinalDelArray(array,"persona"));
  //punto10
  const nuevoUsuario = (nombre, email, password) => {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    let usuario = {
      nombre: nombre,
      email: email,
      password: password,
    }
    return usuario;
  }
  let nombre = "Juan Perez";
  let email  = "juanitoPerez@gmail.com";
  let password = "1234";
  console.log(nuevoUsuario(nombre,email,password));

  //punto11
  const verificarPassword = (usuario, password) => {
    // Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
    if (usuario.password === password){
      return true;
    }else{
      return false;
    }
  }
  let objUsuario =  nuevoUsuario(nombre,email,password);
  console.log(verificarPassword(objUsuario,password));
  //punto12
  const actualizarPassword =(usuario, nuevaPassword) => {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
    if(usuario.password != ""){
      usuario.password = nuevaPassword;
    }
    return usuario;
  }
  console.log(actualizarPassword (objUsuario,'555555'));
  //punto13
  const agregarAmigo = (usuario, nuevoAmigo) => {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:
    usuario.amigos.push(nuevoAmigo);
    return usuario;
  }
  let amigosProve = {
    nombre: 'Carlos',
    amigos: ['mateo', 'carla'],
  }
  console.log(agregarAmigo(amigosProve, 'Raúl'));
  //punto14
  const pasarUsuarioAPremium = usuarios => {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
    usuarios.forEach(object => {
      object.esPremium = true;
    });
    return usuarios;
    
  }
  let usuarios = [];
  usuarios[0] = nuevoUsuario('pedro', 'pedro@gmail.com','33333');
  usuarios[1] = nuevoUsuario('Gabriela', 'Gabriela@gmail.com','22333');
  usuarios[2] = nuevoUsuario('Camila', 'Camila@gmail.com','55333');
  console.log(pasarUsuarioAPremium(usuarios));

  //punto15
   //punto15
   const sumarLikesDeUsuario = usuario => {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
       let cantidadLikes = 0;
        usuario.posts.forEach(element => {
          cantidadLikes += element.likes;
        });
       
        return cantidadLikes;
  }

let obj = {
  posts:[{
    id:1,
    likes:50,
  },{
    id:2,
    likes:10,
  }]
}
 console.log(sumarLikesDeUsuario(obj));
  // ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con 
  //las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }
//punto16
class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor:
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad =  edad;
      this.domicilio =  domicilio;

    }
    detalle(){
      let persona  = {
        nombre : this.nombre,
        apellido : this.apellido,
        edad : this.edad,
        domicilio : this.domicilio,
      }
      return persona;
    }
}
//punto17
const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada
    const persona = new Persona(nombre, apellido, edad, dir);
    persona.detalle();
    return persona;
    
}
console.log(crearInstanciaPersona("Juan","Perez",22,"Saavedra 123"));
//punto18
const sumarArray = (numeros,cb) =>{
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    let result = 0;
    numeros.forEach(object => {
      result += object;
    });
    cb = result;

}
let numArray = new Int32Array([1,2,3,4,5]);
console.log(sumarArray(numArray, 0));
//punto19
const copiarEach = (array, cb) =>{
    // Itera sobre la matriz "array" y pasa los valores a cb uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
    // no tienes que devolver nada
    cb = [];
    array.forEach(object => {
     cb.push(object);
      
    });
   
  }
  let entrada = [1,"dos",3.1];
  let salida = [];
  console.log(copiarEach(entrada, salida));
  //punto20
  const operacionMatematica =(n1, n2, cb) =>{
    //Vamos a recibir una función que realiza una operación matemática junto con dos números.
    //Devolver la función pasándole como argumentos los números recibidos.
    //Tu código:
    return cb(n1,n2);
    
  }
  const op = (num1,num2)=>{
    let resultado;
    resultado =  num1 * num2;
    return resultado;
  }
  console.log(operacionMatematica(1,2,op));
  //punto21
  function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
      return array.filter((datosFiltrados)=> datosFiltrados[0].toLowerCase() === 'a');
  } 
  let datosFiltrar = ["aro","pera","mono","zorro","avion",'Arena'];
  console.log(filter(datosFiltrar));


  /**
 * Por favor no borrar el código que hay de aquí en adelante.
 * Este código sirve para ejecutar las pruebas de la solución hallada para cada
 * una de las funciones creadas.
 */
module.exports = {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}

