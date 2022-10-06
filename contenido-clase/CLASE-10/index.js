/* localStorage.setItem("nombre", "fabian");
localStorage.setItem("numero", "5");
localStorage.setItem("valor", "true");

let mensaje = localStorage.getItem("numero");
console.log(mensaje);
console.log(typeof(mensaje));

let nombre = localStorage.getItem("nombre");
let valor = localStorage.getItem("valor");
console.log(nombre);
console.log(valor);
 */

/* sessionStorage.setItem("nombre", "juan");
 */

/* localStorage.setItem("objeto", {nombre: "andres", edad: 50});
localStorage.setItem("arreglo", [1, 2, 3, 4, 5]); */

/* for(let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    console.log("clave", clave);
    console.log("valor", localStorage.getItem(clave));
} */

/* localStorage.removeItem("arreglo");
localStorage.clear();
sessionStorage.removeItem("nombre");
sessionStorage.clear(); */

/* let objeto = {nombre: "andres", edad: 50};
let arreglo = [1, 2, 3, 4, 5];


localStorage.setItem("objeto", JSON.stringify(objeto));
localStorage.setItem("arreglo", JSON.stringify(arreglo)); */


/* let objeto = JSON.parse(localStorage.getItem("objeto"))
console.log(objeto);

let arreglo = localStorage.getItem("arreglo");
console.log(JSON.parse(arreglo)); */

/* const productos = [
    {id: 1,nombre: "camisa", precio: 1000},
    {id: 2,nombre: "pantalon", precio: 700},
    {id: 3,nombre: "gorra", precio: 300},
    {id: 4,nombre: "zapato", precio: 1450}
];

const guardarStorage = (clave, valor) => {localStorage.setItem(clave, valor)};

productos.forEach(producto => {
    guardarStorage(producto.id, JSON.stringify(producto));

})

localStorage.setItem("carrito", JSON.stringify(productos)); */

/* let usuario;
let usuarioStorage = localStorage.getItem("usuario");


if(usuarioStorage){
    usuario = usuarioStorage;
    let mensaje = `Bienvenido ${usuario}`
    alert(mensaje);
}
else{
    usuario = prompt("Ingrese su usuario");
    localStorage.setItem("usuario", usuario);
} */


/* const productos = [
    {id: 1,nombre: "camisa", precio: 1000},
    {id: 2,nombre: "pantalon", precio: 700},
    {id: 3,nombre: "gorra", precio: 300},
    {id: 4,nombre: "zapato", precio: 1450}
];

localStorage.setItem("carrito", JSON.stringify(productos)); */

/* let contenedor = document.getElementById("contenedor");
let boton = document.getElementById("boton");
let carrito = [];
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
    carrito = carritoStorage;

}

carrito.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
                      <h2>id:${item.id}</h2>
                      <p>${item.nombre}</p>
                      <b>${item.precio}</b>
                    `
    contenedor.append(div);
})

boton.addEventListener("click", () => {
    localStorage.clear();
    contenedor.innerHTML = "";
    alert("productos borrados")
}) */