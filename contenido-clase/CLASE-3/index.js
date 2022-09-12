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