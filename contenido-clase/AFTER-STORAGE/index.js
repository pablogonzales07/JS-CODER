/* const productos = [
    { id: 1, nombre: "zapato", precio: 1000 },
    { id: 2, nombre: "gorra", precio: 1000 },
    { id: 3, nombre: "camisa", precio: 1000 },
    { id: 4, nombre: "pantalon", precio: 1000 },
];

localStorage.setItem("carrito", JSON.stringify(productos));
 */




/* const cambiarPrecio = (nombre, precio) => {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let producto = carrito.find(item => item.nombre === nombre);


    producto.precio = precio;
    localStorage.setItem("carrito", JSON.stringify(carrito));
};
    
let nombre = prompt("Ingrese el nombre del producto");
let precio = prompt("Ingrese el precio del producto"); */


/* cambiarPrecio(nombre, precio); */

/* const eliminarProducto = (nombre) => {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito = carrito.filter(item => item.nombre != nombre);

    localStorage.setItem("carrito", JSON.stringify(carrito));
};

let productoEliminado = prompt("Ingrese el porducto a eliminar");

eliminarProducto(productoEliminado); */


const objeto = (nombre, precio) => {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let producto = carrito.find(item => item.nombre === nombre);

    if(producto === undefined){
        let newProducto = {
            id: carrito.length + 1,
            nombre: nombre,
            precio: precio                           
        }
        carrito.push(newProducto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    else{
        alert("el producto ya existe");
    }
}

let nombre = prompt("ingrese nombre del producto a agregar");
let precio = parseInt(prompt("Ingrece el precio del producto"));

objeto(nombre, precio);


