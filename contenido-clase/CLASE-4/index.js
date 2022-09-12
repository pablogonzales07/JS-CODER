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

/* function saludar(palabra1, palabra2){
    console.log(`${palabra1} ${palabra2}`);
}

saludar("hola", "pablo");
 */


/* let resultado = 0;

function suma(a, b){
    resultado = a + b;
}

function mensaje(texto){
    console.log(texto);
}

suma(3, 4);
mensaje(resultado); */



//ACTIVIDADES:BOOCKLET

//1)


/* let rpPrecio = 400;
let cantidadRp = 0;
let precioFinal = 0;

alert("conversion de rp a pesos argentinos, si usted ingresa un letra o un numero menor o igual a 0 se considera que su compra ha finalizado");

function solicitarRp (){

    cantidadRp = Number(prompt("Ingrese cantidad de rp que necesita"));

    while(cantidadRp > 0){
        precioFinal = conversion(cantidadRp);
        cantidadRp = Number(prompt("Ingrese cantidad de rp que necesita"));
    }

    if((cantidadRp <= 0) || (isNaN(cantidadRp))){
        alert("usted ingreso un dato no valido por lo que su compra finaliza");
    }
      
}

function conversion(a){
    return  rpPrecio * a;
}

function salida (){
    alert(`Usted necesita ${precioFinal} pesos`)
}

solicitarRp();
salida(); */