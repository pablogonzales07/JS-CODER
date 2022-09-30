let contenedor = document.getElementById("contenedor");
let verCarrito = document.getElementById("carrito");
let modalConteiner = document.getElementById("modalConteiner");
const camisetas = [
    {id:1 , nombre: "camiseta titular año 2014" , precio: 8500, img: "https://img.planetafobal.com/2014/03/camiseta-titular-lotto-san-lorenzo-2014.jpg"},
    {id:2 , nombre: "camiseta suplente año 2014" , precio: 7000, img: "https://img.planetafobal.com/2014/03/camiseta-suplente-lotto-san-lorenzo-2014.jpg"},
    {id:3 , nombre: "camiseta titular año 2015", precio: 9000, img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/384/008/products/casla-20151-ca1b3f9434452e183416186659212949-640-0.png"},
    {id:4 , nombre: "camiseta suplente año 2015", precio: 7900, img: "https://img.planetafobal.com/2015/01/camiseta-suplente-nike-san-lorenzo-2015-frente.jpg"},
    {id:5 , nombre: "camiseta titular año 2016", precio: 10000, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/220/451/products/779817-mla42007570297_052020-f-0cbe3134964bf6584015919179258888-1024-1024.jpg"},
    {id:6 , nombre: "camiseta suplente año 2016", precio: 9600, img: "https://http2.mlstatic.com/D_NQ_NP_652408-MLA51512680564_092022-O.webp"},
    {id:7 , nombre: "camiseta titular año 2017", precio: 12000, img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/384/008/products/numeros-velez-sarfield-titutar-y-suplente-umbro-2015-902111-mla20474858408_112015-o-500x5001-a7d57a00fc0b657f1616357296099377-640-0.jpg"},
    {id:8 , nombre: "camiseta suplente año 2017", precio: 10500, img: "https://http2.mlstatic.com/D_NQ_NP_882728-MLA29468470321_022019-O.jpg"},
];

let carrito = [];

camisetas.forEach(camiseta => {
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
        carrito.push({
            id: camiseta.id,
            img: camiseta.img,
            nombre: camiseta.nombre,
            precio: camiseta.precio
        })
        console.log(carrito);
    })



});

verCarrito.addEventListener("click", () => {
    modalConteiner.innerHTML = "";
    modalConteiner.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader";
    modalHeader.innerHTML = `
                              <h2 class="modalHeaderTitle">CARRITO</h2>
                            `;
    modalConteiner.append(modalHeader);
    
    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modalButtonEstilo";
    modalButton.addEventListener("click", () => {
        modalConteiner.style.display = "none";
    })

    modalHeader.append(modalButton);   

    carrito.forEach(producto => {
        let carritoContenido = document.createElement("div");
        carritoContenido.className = "modalContenido";
        carritoContenido.innerHTML = `
                                       <img src="${producto.img}">
                                       <h3>${producto.nombre}</h3>
                                       <p>${producto.precio}$</p>
                                     `;
        modalConteiner.append(carritoContenido);

    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalDeCompra = document.createElement("div");
    totalDeCompra.className = "totalDeCompra";
    totalDeCompra.innerHTML = `total a pagar ${total}$`;
    modalConteiner.append(totalDeCompra);



});



            











