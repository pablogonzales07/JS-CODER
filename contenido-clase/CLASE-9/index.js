/* let boton = document.getElementById("boton");

function respuesta(nombre){
    console.log("click", nombre);
}

boton.addEventListener("click", () => respuesta("andres")); */
/* boton.onclick = respuesta; */


/* let boton = document.getElementById("boton");
let saludo = document.getElementById("saludo"); */
/* boton.addEventListener("mousedown", () => console.log("mousedown"));
boton.addEventListener("mouseup", () => console.log("mouseup"));
boton.addEventListener("mouseover", () => console.log("mouseover"));
boton.addEventListener("mouseout", () => console.log("mouseout"));
boton.addEventListener("mousemove", () => console.log("mousemove"));
boton.addEventListener("click", () => console.log("click")); */

/* boton.addEventListener("mousedown", () => {
    saludo.className = "verde";
});
boton.addEventListener("mouseover", () => {
    saludo.className = "amarillo";
} );
boton.addEventListener("mouseout", () => {
    saludo.className ="rojo";
} ); */

/* let input = document.getElementById("nombre"); */

/* input.addEventListener("keydown", () => console.log("keydown"));
input.addEventListener("keyup", () => console.log("keyup")); */

/* let saludo = document.getElementById("saludo");

input.addEventListener("keyup", (e) => {
    if(e.key === "a"){
        saludo.className = "verde";
    }
    else if(e.key === "s"){
        saludo.className = "amarillo";
    }
    else{
        saludo.className = "rojo";
    }
}); */

/* input.addEventListener("input", () => {
    console.log(input.value);
})

input.addEventListener("input", () => {
    if(!input.value.includes("@")){
        saludo.innerHTML = "correo incorrecto";
        saludo.className = "rojo";
    }
    else{
        saludo.innerHTML = "correo correcto";
        saludo.className = "amarillo"
    }
}); */

/* let formulario = document.getElementById("formulario"); */

/* formulario.addEventListener("submit", () => {
    console.log("Hola");
})
 */

/* formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hola");
    
}) */

/* formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;
    console.log(inputs[0].value);
    console.log(inputs[1].value);

    if(!inputs[0].value.includes("@")){
        inputs[0].value = ""
    }

}) */

/* let productos = [
    {id: 1, nombre: "pantalon", precio: 1000},
    {id: 2, nombre: "camisa", precio: 700},
    {id: 3, nombre: "gorra", precio: 1500},
    {id: 4, nombre: "zapato", precio: 300},
]

let contenedor = document.getElementById("contenedor");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    contenedor.innerHTML = ""

    let inputs = e.target.children;

    let producto = productos.find(item => item.nombre === inputs[0].value);
    let div = document.createElement("div");
    div.innerHTML = `
                      <h2>id: ${producto.id}</h2>
                      <p>nombre: ${producto.nombre}</p>
                      <b>precio: ${producto.precio}</b>
                      `
    contenedor.append(div);
                    
}) */


//after EVENTOS Y DOM:

















