/* let edad = 45;
const ALTURA = 180;
let numeroUnoBonito; */


/* let numeroUno = 5;
let numeroDos = 10;
let suma = numeroUno + numeroDos; */


/* let nombre = prompt("ingresa tu nombre");
alert(nombre); */

/* let nombre = "san lorenzo"
let grande = "lo mas grande que hay"

let mensaje = `${nombre} es ${grande} por lejos`;
console.log(mensaje);
 */

/* let hinchaDe = prompt("ingrese de que club es hincha");
let club = "usted es de" + " " + hinchaDe
alert(club);
 */

//BOOCKLET:

/* let nombre = "Homero";
let apellido = "simpson";
let edad = 47;

const CIUDAD1 = "trelew";
const CIUDAD2 = "madryn";
const CIUDAD3 = "gaiman";
const CIUDAD4 = "dolavon";
const CIUDAD5 = "playa union";
 */

/* let integrante1 = prompt("Ingrese nombre del integrante de la familia");
let integrante2 = prompt("Ingrese nombre del integrante de la familia");
let integrante3 = prompt("Ingrese nombre del integrante de la familia");
let integrante4 = prompt("Ingrese nombre del integrante de la familia");
let integrante5 = prompt("Ingrese nombre del integrante de la familia");


let mensaje = `${integrante1}, ${integrante2}, ${integrante3}, ${integrante4} y ${integrante5} son parte de la familia`;
alert(mensaje);
 */

/* let precio = parseFloat(prompt("ingresar precio"));

let descuento1 = precio - (precio * 0.2);
let descuento2 = precio - (precio * 0.3);

alert(descuento1);
alert(descuento2); */

/* let nombre = "pablo";
let apellido = "Gonzales Trebotich";
let nacimiento = 13/05/1999;
let codigo = "e5erf1554rge"

let carnet = 
             `NOMBRE: ${nombre}
              APELLIDO: ${apellido}
              FECHA DE NACIMIENTO: ${nacimiento}
              CODIGO: ${codigo}`

console.log(carnet); */

//EJERCICIO DADO POR EL PROFE:

/* let entrada = prompt("ingresar una letra");
let salida = `${entrada} ingresada`
alert(salida); */

//DESAFIO DE LA CLASE 1

/* let libertadores = parseInt (prompt("ingrese cuantas libertadores tiene su club"));
let sudamericanas = parseInt (prompt("ingrese cuantas sudamericanas tiene"));

let titulosInternacionales = libertadores + sudamericanas;
alert(titulosInternacionales);
 */


//CLASE 2

/* let nombre = prompt("ingrese su nombre");

if((nombre != "" ) && ((nombre === "delfina") || (nombre === "delfi"))){
    alert("vos sos mi amorchito");
}
else{
    alert("quien sos intrusa, no sos mi amorchito");
}
 */
/* let wensi = prompt("usted paseo a wensi");

if(wensi === "si"){
    alert("wensi ta feliz");
}
else if(wensi === "no"){
    alert("wensi esta enojao");
}
else{
    alert("no pusiste nada");
} */

/*ejercicio que dio el profe*/

/* let respuesta = prompt("terminaste la tarea");

if(respuesta === "si"){
    alert("puede salir a jugar");
}
else if(respuesta === "no"){
    alert("no puede salir a jugar")
}
else{
    alert("responda si o no")
}
 */

 
//DESAFIO DE LA CLASE 2:

/* let titulos = prompt("cuantos titulos tiene su club");

if(titulos <= 2){
    alert("su club no existe");
}
else if(titulos <= 6){
    alert("es un club chico")
}
else if(titulos <= 9){
    alert("estas comenzando a considerarte grande")
}
else{
    alert("sos un club grande")
}
 */

//actividades

/* let nombre = prompt("ingrese un nombre");
let nombreActividad = "josefina"

if(nombre === nombreActividad){
    alert("FUI YO");
}
else{
    alert("YO NO FUI");
}
 */


/* let caracter = prompt("ingrese un caracter");

if((caracter === "y") || (caracter === "Y")){
    alert("Correcto");
}
else{
    alert("Error");
} */

/* /* let numero = parseInt(prompt("ingrese un numero del 1 al 4"));

if(numero === 1){
    alert("elegiste a homero");
}
else if(numero === 2){
    alert("elegiste a marge");
}
else if(numero === 3){
    alert("elegiste a bart");
}
else if(numero === 4){
    alert("elegiste a lisa");
}
else{
    alert("no ingresaste lo que se pidio");
}  */

/* 
let numero = parseInt(prompt("ingrese un numero"));

if((numero >= 0) && (numero <= 1000)){
    alert("presupuesto bajo");
}
else if((numero > 1000) && (numero <= 3000)){
    alert("presupuesto medio");
}
else if(numero > 3000){
    alert("presupuesto alto");
}
else{
    alert("no ingresarte un dato correcto");
}
 */

/* let producto1 = prompt("ingrese el primer producto");
let producto2 = prompt("ingrese el segundo producto");
let producto3 = prompt("ingrese el tercer producto");
let producto4 = prompt("ingrese el cuarto producto");

if((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")){

    let mensaje = `${producto1} ${producto2} ${producto3} ${producto4} ingresados`;
    alert(mensaje);
}
else{
    alert("por favor ingrese los productos");
} */

//after class condicionales y sintaxis

//1)pedir un numero mediante prompt y si es mayor a 1000 mostrar un alert
//2)pedir un texto mediante prompt, y si es igual a "hola" mostrar un mensaje en un alert o consola
//3)pedir un numero por prompt y evaluar si esta entre 10 y 50. en caso positivo mostrar un alert


//EJERCICIO 1

/* let numero = parseInt(prompt("ingrese un numero"));

if(numero > 1000){
    alert(`el numero ${numero} es mayor a 1000`);
}
else if(numero < 1000){
    alert(`el numero ${numero} es menor a 1000`);
}
else{
    alert(`el numero ${numero} es igual a 1000`);
} */


//EJERCICIO 2

/* let palabra = prompt("escriba hola por favor");
palabra = palabra.toLowerCase();

if(palabra === "hola"){
    alert("felicitaciones introduciste la palabra correcta")
}
else{
    alert("lo siento no introduciste la palabra correcta")
} */

//EJERCICIO 3

/* let numero = parseInt(prompt("ingrese un numero entre el 10 y 50"));

if((numero >= 10) && (numero <= 50)){
    alert(`el numero ${numero} cumple lo pedido`);
}
else if(Number.isNaN(numero)){
    alert("el valor ingresado es una letra, por favor ingrese un numero")
}
else{
    alert(`el numero ${numero} no cumple lo pedido`);
} */



//CLASE 3:

/* let numero = parseInt(prompt("ingrese un numero"));

for(let index = 0; index <= 10; index++){
    let resultado = numero * index;
    let mensaje = `${numero} * ${index} = ${resultado}`;
    alert(mensaje);
} */

/* for(let turno = 1; turno <= 7; turno++){
    let nombre = prompt("ingrese su nombre");
    let mensaje = `turno #${turno} NOMBRE= ${nombre}`
    alert(mensaje);
} */

/* for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }

    console.log(i);
}

console.log("terminamos"); */

/* for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }

    console.log(i);
}
 */

/*  let entrada = prompt("ingrese un dato");

 while(entrada != "ESC"){
    let mensaje = `ingresaste ${entrada}`
    alert(mensaje);

    let entrada = prompt("ingrese un dato");
    }
 */

/* let entrada = prompt("ingrese el usuario");

while(entrada != "andres"){
    alert("usuario incorrecto");
    entrada = prompt("ingrese el usuario");
}

alert(`BIENVENIDO ${entrada}`); 
 */
/* let valor = false;

do{
    console.log("entramos");
}
while(valor);
 */
/* let numero;

do{
    numero = prompt("ingresar numero");
    console.log(numero);
}
while(parseInt(numero)); */

/* let moneda = "usd";

switch (moneda) {
    case "cop":
        console.log("es de colombia");
        break;
    
    case "clp":
        console.log("es de chile");
        break;

    case "ars":
        console.log("es de argentina");
        break;

    default:
        console.log("moneda no identificada");
        break;
    }
 */

/* let entrada = prompt("ingrese un nombre");

while(entrada != "esc"){
    switch(entrada){
        case "delfi":
            alert("HOLA DELFI");
            break;
        
        case "pablo":
            alert("HOLA PABLO");
            break;
        case "eva":
            alert("HOLA EVA");
            break;
        default:
            alert("QUIEN SOS");
            break;
    }

    entrada = prompt("ingrese un nombre");
    
} */

//after de control de flujos

/*  let edad = parseInt(prompt("Ingrese su edad por favor"));

while(edad != "ESC"){
    if(edad < 15){
        alert(`lo siento tienes ${edad} años, no puedes entrar`)
    }
    else if(edad < 18){
        alert(`como tienes ${edad} puedes entrar pero con un adulto`);
    }
    else if(Number.isNaN(edad)){
        alert("el valor ingresado es una letra, por favor ingrese un numero");
    }
    else{
        alert(`como tienes ${edad} años ya eres mayor y puedes entrar`)
    }

    edad = parseInt(prompt("ingrese su edad por favor"));
} */


/* let numero = parseInt(prompt("Ingrese un numero"));

while(numero != "ESC"){
    if(numero % 2 === 0){
        alert(`el numero ${numero} ES un numero par`);
    }
    else if(Number.isNaN(numero)){
        alert("el valor ingresado ES una letra, por favor ingrese un numero");
    }    
    else{
        alert(`el numero ${numero} NO es un numero par`);
    }

   numero = parseInt(prompt("Ingrese un numero"));
} */


//EJERCICIOS:

//ejercicio 3=

/*  let alumnos = ""

for (let i = 0; i < 10; i++){
    
    alumnos += prompt("ingrese nombre del alumno") +"\n";
} 

alert(alumnos);  */

//ejercicio 4=

/* let nombre = prompt("ingresar nombre");
let ingresados = ""

while(nombre != "Voldemort"){
     ingresados += nombre +"\n";
     nombre = prompt("ingresar nombre");
}

alert(ingresados);
 */


//ejercicio 5=


/* let producto = prompt("seleccione un producto del 1 al 4");

while(producto != "ESC"){
    switch(producto){
        
        case "1":
            alert("Tomate");
            break;
        case "2":
            alert("Papa");
            break;
        case "3":
            alert("Carne");
            break;
        case "4":
            alert("Pollo");
            break;
        default:
            alert("No ingresaste el valor correcto");
            break;
    }

    producto = prompt("seleccione un producto del 1 al 4");
}

alert("terminaste el ciclo"); */

//actividad 2:
/* 
let lados = prompt("ingrese la cantidad de lados");

for(let i = 0; i < lados; i++){
    if(lados > 3){
        break;
    }
    alert("lado");
}
 */

//EJERCICIOS DE PRACTICA:

/* for(let i = 1; i <= 10; i++){
    let nombre = prompt("ingrese su numbre");
    let mensaje = `NOMBRE: ${nombre} TURNO: ${i}`;
    alert(mensaje); 
} */

/* for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    alert(i);
}
 */

/* let numero = 0;

do{
    numero = prompt("ingrese un numero");
    alert(numero);

}
while(parseInt(numero));
 */

//CLASE 4:

/* function saludar(){
    let nombre = prompt("Ingrese su nombre");
    let mensaje = `Hola ${nombre}`;
    alert(mensaje);
}

saludar(); */

/* function saludar(nombre, edad){
    let mensaje = `hola ${nombre} tienes ${edad} años de edad`
    alert(mensaje);
}

let nombrePersona = prompt("Ingrese su nombre");
let edadPersona = prompt("Ingrese su edad");

saludar(nombrePersona, edadPersona); */

/* function sumar(numero1, numero2){
    console.log(numero1 + numero2);
}

sumar(3, 4);
 */

/* function sumar(numero1, numero2){
  return numero1 + numero2;
}

let resultado = sumar(5, 4);

console.log(resultado * 6); */


/* function calculadora(num1, num2, operacion){
    switch(operacion){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        default:
            return "operacion no disponible";
            break;
    }
    }

console.log(calculadora(3, 4, "/")); */

/* let nombre = "pablo";

function saludar(){
    let nombre = "delfi";
    console.log(nombre);
}

console.log(nombre);

saludar(); */

/* function suma(num1, num2){
    return num1 * num2;

}

let resultado = suma(3, 3);
console.log(resultado);
  */

/* function suma(num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

function resta(num1, num2){
    let resultado = num1 - num2;
    return resultado;
} */

/* let suma = (a, b) => {return a + b};

console.log(suma(2, 1)); */

/* let suma = (a, b) => a + b;

console.log(suma(1, 1)); */

/* let suma = (a, b) => a + b;
let resta = (a, b) => a - b;
let iva = x => x * 0.21;

let precioProducto = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento); */

//AFTER DE FUNCIONES:

/* let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

function ingresarPrecio() {
    precioProducto = Number(prompt("Ingrese el precio del producto" + (contador + 1) + ":"));

    while (precioProducto > 0) {
        gastoTotal = calcularTotal(precioProducto);
        contador++;
        precioProducto = Number(prompt("Ingrese el precio del producto" + (contador + 1) + ":"));
          
    }

    if((precioProducto <= 0) || (isNaN(precioProducto))){
        console.log("Ha introduciodo un numero menor o igual a cero o un valor no numerico, por lo que hemo dejado de calcular el total");
    }
}

function calcularTotal(precioProducto){
    return gastoTotal + precioProducto;
     
}

function mostrarTotal() {
    console.log(`cantidad de productos: ${contador}`);
    console.log(`El precio total es: ${gastoTotal}$`);
}


ingresarPrecio();
mostrarTotal();
 */

/* let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

const ingresarPrecio = function () {
    precioProducto = Number(prompt("Ingrese el precio del producto" + (contador + 1) + ":"));

    while (precioProducto > 0) {
        gastoTotal = calcularTotal(precioProducto);
        contador++;
        precioProducto = Number(prompt("Ingrese el precio del producto" + (contador + 1) + ":"));
          
    }

    if((precioProducto <= 0) || (isNaN(precioProducto))){
        console.log("Ha introduciodo un numero menor o igual a cero o un valor no numerico, por lo que hemos dejado de calcular el total");
    }
}

const calcularTotal = function (precioProducto){
    return gastoTotal + precioProducto;
     
}

const mostrarTotal = function () {
    console.log(`cantidad de productos: ${contador}`);
    console.log(`El precio total es: ${gastoTotal}$`);
}


ingresarPrecio();
mostrarTotal(); */

/* let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

const ingresarPrecio = () => {
    precioProducto = Number(prompt("Ingrese el precio del producto" + (contador + 1) + ":"));

    while (precioProducto > 0) {
        gastoTotal = calcularTotal(precioProducto);
        contador++;
        precioProducto = Number(prompt("Ingrese el precio del producto" + (contador + 1) + ":"));
          
    }

    if((precioProducto <= 0) || (isNaN(precioProducto))){
        console.log("Ha introduciodo un numero menor o igual a cero o un valor no numerico, por lo que hemos dejado de calcular el total");
    }
}

const calcularTotal = precioProducto => gastoTotal + precioProducto;


const mostrarTotal = () =>  {
    console.log(`cantidad de productos: ${contador}`);
    console.log(`El precio total es: ${gastoTotal}$`);
}


ingresarPrecio();
mostrarTotal(); */

























