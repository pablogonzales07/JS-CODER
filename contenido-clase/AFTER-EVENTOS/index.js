let div = document.getElementById("div");
let boton = document.getElementById("boton");
let inputAfter = document.getElementById("inputAfter");
const botonInput = document.getElementById("botonInput");
const formulario = document.getElementById("formulario");


let productos = [
    {id: 1, nombre: "pantalon", precio: 150 , img: "https://media.istockphoto.com/photos/mens-trousers-picture-id510615049?k=20&m=510615049&s=612x612&w=0&h=V2qWdnou1w6ctJnfiRlYxQp6QwgX8yRMBBOCMxm7ei0="},
    {id:2 ,nombre: "remera", precio: 100, img: "https://media1.sistemacontinuo.com.ar/5289/remera-hombre-sublimable.jpg"}
];

let carrito = [];
let usuarios = [
    {usuario: "pepito", contraseña: 123456}

]



productos.forEach(producto => {
    let caja = document.createElement("div");
    caja.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src="${producto.img}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${producto.nombre}</h5>
                          <p class="card-text">${producto.precio}$</p>                         
                      </div>
                      <button id="${producto.id}">COMPRAR</button>
                    </div>
                    

                     `;
    div.append(caja);

    const boton = document.getElementById(producto.id);
    boton.addEventListener("click", () => {
        comprarProducto(producto);
    })
});

const comprarProducto = (producto, ) => {
    let productoExiste = carrito.find(item => item.id === producto.id);
    if (productoExiste === undefined){
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            img: producto.img,
            cantidad: 1
        })

    }
    else{
        productoExiste.precio = productoExiste.precio + producto.precio
        productoExiste.cantidad = productoExiste.cantidad + 1 
    }}

const buscarProducto = (string) => {
    console.log(string);
    let productoNombre = productos.find(producto => producto.nombre.includes(string));
    console.log(productoNombre);
     inputAfter.value = "" 
 }  
    

 const guardarEmail = (e) => {
    e.preventDefault()
    /* console.log(e); */
    let usuario = e.target.children[0].value;
    let pass = Number(e.target.children[1].value);
    let userExiste = usuarios.find(user => user.usuario === usuario);
    if(userExiste.contraseña != pass){
        console.log("contraseña incorrecta");
    }
    else if(userExiste.contraseña === pass){
        console.log("contraseña correcta");
    }

    

}


formulario.addEventListener("submit", (e) => {
    guardarEmail(e)
}) 


boton.addEventListener("click", () => console.log(carrito));

/* botonInput.addEventListener("click", () => buscarProducto(inputAfter.value));  */
/* inputAfter.addEventListener("input", () => buscarProducto(inputAfter.value));  */






