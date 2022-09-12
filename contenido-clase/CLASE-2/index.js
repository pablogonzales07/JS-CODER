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