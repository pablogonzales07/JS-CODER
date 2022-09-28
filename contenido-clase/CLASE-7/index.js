/* function mayorQue(n){
    return m => m > n;
}

let mayorQueCinco = mayorQue(5);

console.log(mayorQueCinco(4));

let mayorQueSiete = mayorQue(7);
console.log(mayorQueSiete(8)); */

/* function operaciones(op){
    if(op === "sumar"){
        return (x,y) => x + y;
    }
    if(op === "restar"){
        return (x,y) => x - y;
    }
    if(op === "multiplicacion"){
        return (x,y) => x * y;
    }
    if(op === "division"){
        return (x,y) => x / y;
    }
}

let sumar = operaciones("sumar");

console.log(sumar(1, 1)); */

/* function recorrer(arreglo, fn){
    for(const numero of arreglo){
        fn(numero);
    }
}

let arreglo1 = [1,2,3,4];

recorrer(arreglo1, console.log); */

/* const cursos = [
    {nombre: "javascript", precio: 15000},
    {nombre: "reactjs", precio: 22000},
    {nombre: "angularJs", precio: 22000},
    {nombre: "Desarrollo web", precio: 16000}

] */

/* cursos.forEach(item => console.log(item.nombre)); */

/* let encontrado = cursos.find(curso => curso.nombre === "javascript");
console.log(encontrado); */

/* let nombre = prompt("Ingrese el nombre del curso a encontrar");
let encontrado = cursos.find(curso => curso.nombre === nombre);
let mensaje = `nombre: ${encontrado.nombre}
               $:${encontrado.precio}`;
alert(mensaje); */

/* let precio = prompt("Ingrese un precio minimo");

let filtrados = cursos.filter((curso) => curso.precio > precio);

filtrados.forEach(curso => {
    let mensaje = `nombre: ${curso.nombre}
                   $:${curso.precio}`;
    alert(mensaje); 

})
 */

/* let nombre = prompt("Ingrese el nombre a verificar si existe");
let existe = cursos.some(curso => curso.nombre === nombre);
alert(existe); */

/* let nombres = cursos.map(item => item.nombre);
console.log(nombres); */

/* let preciosActualizados = cursos.map(item => {
    return{
        nombre: item.nombre,
        precio: item.precio * 0.21
    }
});

console.log(preciosActualizados); */

/* const numeros = [1, 2, 3, 4, 5];
const total = numeros.reduce((acumulador, item) => acumulador + item, 0);
console.log(total); */

/* let total = cursos.reduce((acumulador, item) => acumulador + item.precio, 0);
console.log(total); */

/* const numeros = [40, 1, 5 , 400];
console.log(numeros.sort((a, b) => a - b));
console.log(numeros.sort((a, b) => b - a));
 */

/* const items = [
    {name: "Pikachu", price: 21},
    {name: "Charmaider", price: 37},
    {name: "Pidgey", price: 45},
    {name: "Squirtle", price: 60},
];

console.log(
    items.sort((a, b) => {
      if (a.name > b.name) {
          return 1;
    }
      if(a.name < b.name) {
          return -1;
    }
        
    return 0;
})) */

/* console.log(Math.E);
console.log(Math.PI); */

/* console.log(Math.max(1,2,3)); */
/* console.log(Math.seil(3.45));
console.log(Math.floor(3.454));
console.log(Math.round(3.454)); */
/* console.log(Math.sqrt(9));
console.log(Math.random()); */
/* console.log(Math.exp(3)); */

/* console.log(date());
console.log(new Date(2020, 1, 15, 23, 40, 3));
const casiNavidad = new Date ("December 15, 2022");

const hoy = new Date ("September 15, 2022")

console.log(hoy.getFullYear());
console.log(hoy.getMonth());
console.log(hoy.getDay()); */


//AFTER CLASS:

/* const productos = [
    {id: 1, nombre: "Pantalon", precio: 700},
    {id: 2, nombre: "Camisa", precio: 1500},
    {id: 3, nombre: "Gorra", precio: 300},
    {id: 4, nombre: "Zapato", precio: 2000},

]; */

/* productos.forEach(item => {
    console.log(item.id, item.nombre, item.precio);
}) */

/* let nombre = prompt("Ingrese el nombre del producto");

let encontrado = productos.find(item => item.nombre === nombre);

let mensaje = `id: ${encontrado.id} nombre: ${encontrado.nombre} precio: ${encontrado.precio}`;
alert(mensaje); */

/* let precio = parseInt(prompt("Ingrese precio minimo"));

let filtrados = productos.filter(item => item.precio > precio);

filtrados.forEach(item => {
    mensaje = `nombre: ${item.nombre} precio: ${item.precio}`
    alert(mensaje);
});
 */


/* let precios = productos.map(item => item.precio);
let nombres = productos.map(item => item.nombre);
let preciosActualizados = productos.map(item => {
    return{
        id: item.id,
        nombre: item.nombre,
        precio: item.precio + 1000
    }
})

console.log(precios);
console.log(nombres);
console.log(preciosActualizados); */

/* productos.forEach(item => {
    let mensaje = `
    nombre: ${item.nombre}
    precio: ${item.precio}   
    `

    alert(mensaje);
}) */













