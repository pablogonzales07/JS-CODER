/* let div = document.getElementById("aplicacion");
console.log(div); 
console.log(div.innerHTML);
console.log(div.innerText); */
 
/* let divParrafo = document.getElementById("parrafo");
console.log(divParrafo);
console.log(divParrafo.innerHTML);
console.log(divParrafo.innerText); */

/* let perritos = document.getElementsByClassName("perritos");
console.log(perritos);
console.log(perritos[0].innerHTML);
console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML); */

/* let divs = document.getElementsByTagName("div");
console.log(divs); */

/* let perritos = document.getElementsByClassName("perritos");

for(const perrito of perritos){
    console.log(perrito.innerHTML);
} */


/* let titulo = document.getElementById("saludo");

titulo.innerHTML = "Hola coder"; */

/* let titulo = document.getElementById("saludos");

let sesion = prompt("Ingrese la seccion a la que desea entrar");

if(sesion === "carrito"){
    titulo.innerHTML = "<h1>Bienvenidos al carrito<h1/>";
    titulo.className = "verde";
}
else if(sesion === "favoritos"){
    titulo.innerHTML = "<h1>Bienvenidos a favoritos<h1/>";
    titulo.className = "amarillo";
}
else{
    titulo.innerHTML = "<h1>Bienvenidos a nuestra pagina<h1/>";
    titulo.className = "azul";
    
} */

/* let parrafo = document.createElement("p");
parrafo.innerHTML = "<h2>Hola coder</h2>";
document.body.append(parrafo); */

/* let contenedor = document.getElementById("contenedor");
let parrafo = document.createElement("p");
parrafo.innerHTML = "<h2>Hola coder</h2>";
contenedor.append(parrafo); */


/* let contenedor = document.getElementById("contenedor");
contenedor.remove(); */

/* let personas = document.getElementById("personas");
let nombres = ["andres", "maria", "fabian"];

nombres.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = item;
    personas.append(li);
}) */


/* let producto = {id: 1, nombre: "Camisa", precio: 1000};
let contenedor = document.getElementById("contenedor");
let div = document.createElement("div");

div.innerHTML = `
                  <h2>id: ${producto.id}</h2>
                  <p>nombre: ${producto.nombre}</p>
                  <b>precio: ${producto.precio}</b>
                `;
contenedor.append(div); */

/* let contenedor = document.getElementById("contenedor")
let productos = [
    {id: 1, nombre:"camisa", precio: 1000},
    {id: 2, nombre:"pantalon", precio: 700},
    {id: 3, nombre:"gorra", precio: 500},
    {id: 4, nombre:"zapato", precio: 1500},
]

productos.forEach(producto => {
    let item = document.createElement("div");
    item.innerHTML = `
                      <h2>id: ${producto.id}</h2>
                      <p>nombre: ${producto.nombre}</p>
                      <b>precio: ${producto.precio}</b>
                    `
    contenedor.append(item);
});
 */

/* let div = document.querySelector("#contenedor");
let parrafo = document.querySelector("#contenedor p"); */






