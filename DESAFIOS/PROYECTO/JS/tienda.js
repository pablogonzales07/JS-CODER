let contenedor = document.getElementById("contenedor");
let verCarrito = document.getElementById("carrito");
let modalConteiner = document.getElementById("modalConteiner");

const traerProductos = async () => {
    const response = await fetch("../productos.json");
    const data = await response.json();

    data.forEach(camiseta => {
        let caja = document.createElement("div");
        caja.className = "card";
        caja.innerHTML = `
                           <img src=${camiseta.img}>
                           <h3>${camiseta.nombre}</h3>
                           <p class="parrafo">${camiseta.precio}$</p>
                         `
        contenedor.append(caja);
        let comprar = document.createElement("button");
        comprar.innerText = "COMPRAR";
        comprar.className = "comprar"
        caja.append(comprar);

        comprar.addEventListener("click", () => {
            comprarProducto(camiseta);
        })
    })
};

traerProductos();

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//MODAL:

verCarrito.addEventListener("click", () => {
    
    //HEADER DEL MODAL

    modalConteiner.innerHTML = "";
    modalConteiner.style.display = "flex";
    const modalHeader = document.createElement("div");
    const modalBody = document.createElement("div");
    modalBody.className = "cardsEstilo"
    modalBody.id = "carritoContenedor"
    modalHeader.className = "modalHeader";
    modalHeader.innerHTML = `<div class="tituloModal">
                                <h1 class="modalHeaderTitle">CARRITO</h1>
                                <h2 class="modalButtonEstilo" id="cierreModal">X</h2>
                              </div>                          
                            `;
    modalConteiner.append(modalHeader);
    modalConteiner.append(modalBody);
    let botonDeCierre = document.getElementById("cierreModal");
    botonDeCierre.addEventListener("click", () => {
        modalConteiner.style.display = "none";
    })
    
    //BODY DEL MODAL

    carrito.forEach(producto => {
        let carritoContenido = document.createElement("div");
        carritoContenido.className = "modalContenido";
        carritoContenido.innerHTML = `
                                       <img src="${producto.img}">
                                       <h3>${producto.nombre}</h3>
                                       <p>${producto.precio}$</p>
                                       <span>${producto.cantidad}</span>
                                       <button class="eliminarProductoCarrito" id=${producto.id}>X</button>
                                     `;
        let carritoContenedor = document.getElementById("carritoContenedor");
        carritoContenedor.append(carritoContenido);
    
        let botonEliminarCarrito = document.getElementById(producto.id);
        botonEliminarCarrito.addEventListener("click", () => {
        
        let botonEliminarProducto = carrito.find(remera => remera.id === producto.id);
        let indice = carrito.indexOf(botonEliminarProducto);
        carrito.splice(indice, 1);
        carritoContenido.innerHTML = "";
        carrito.filter(remeras => remeras.id != producto.id);        
        localStorage.setItem("carrito", JSON.stringify(carrito));
        let precioTotal = document.getElementById("totalDeCompra");
        let nuevoPrecio = carrito.reduce((acc, el) => acc + el.precio, 0);
        precioTotal.innerHTML = `total a pagar ${nuevoPrecio}$`
        })
    });

    //FOOTER DEL MODAL

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalDeCompra = document.createElement("div");
    totalDeCompra.className = "totalDeCompra";
    totalDeCompra.id = "totalDeCompra";
    totalDeCompra.innerHTML = `total a pagar ${total}$`;
    modalConteiner.append(totalDeCompra);

    const eliminarCarrito = document.createElement("button");
    eliminarCarrito.className = "botonEliminarCarrito";
    eliminarCarrito.innerText = "eliminar carrito";
    modalConteiner.append(eliminarCarrito);
    eliminarCarrito.addEventListener("click", () => {
        let carritoContenedor = document.getElementById("carritoContenedor");
        let totalDeCompra = document.getElementById("totalDeCompra");
        localStorage.removeItem("carrito");
        totalDeCompra.innerHTML = "";
        carritoContenedor.innerHTML = "";
        carrito = [];              
    });  
});








            











