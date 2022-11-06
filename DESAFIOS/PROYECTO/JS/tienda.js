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

    modalHeader();
    
    //BODY DEL MODAL

    carrito.forEach(producto => {
      modalBody(producto)
    });

    //FOOTER DEL MODAL

     footerModal();  
});








            











