/* let nombre = "pepito";
let edad = 56;
let direccion = "AV"; 

let persona1 = {
    nombre: "pepito",
    edad: 56,
    direccion: "AV"
}; */

/* console.log(persona1); */

/* console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.direccion); */

/*  let valor = "nombre";

 console.log(persona1[valor]);
 console.log(persona1["edad"]);
 console.log(persona1["direccion"]); */

/* let persona1 = {
    nombre: "pepito",
    edad: 56,
    direccion: "AV"
};

persona1.nombre = "ramon";
persona1["edad"] = 100;

console.log(persona1); */

/* function Persona(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
}

let edad1 = prompt("Ingrese su edad por favor");

const persona1 = new Persona("andres", edad1, "AV");

console.log(persona1.nombre);

const persona2 = new Persona("pepito", 60, "AV1");

console.log(persona2.nombre); */


/* function Producto(imagen, nombre, precio, envio = "gratis"){
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.envio = envio;
}

const producto1 = new Producto("htttp", "monitor curvo blabla", 2145000, "no es gratis");

console.log(producto1); */

/* function Producto(info, altura){
    this.imagen = info.imagen;
    this.nombre = info.nombre;
    this.precio = info.precio;
    this.envio = info.envio;
    this.altura = altura
}

let producto1 = new Producto (
    {
      imagen: "vfvewvr",
      nombre: "tv",
      precio: 1234,
      envio: "gratis"
    },
    55
)

console.log(producto1); */

/* function Producto(info, altura){
    this.img = info.img;
    this.nombre = info.nombre;
    this.precio = info.precio;
    this.envio = info.envio;
    this.altura = altura
}

let info = {
    img: "rfwefreferf",
    nombre: "Pablo",
    precio: 123,
    envio: "gratis",
}

let producto1 = new Producto(info, 55);

console.log(producto1); */


/* function Persona(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
    this.hablar = function(){console.log(`Hola soy ${this.nombre}`);}
}

const persona1 = new Persona("andres", 50, "AV");

persona1.hablar(); */

/*  function Persona(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
   }

const persona1 = new Persona("andres", 50, "AV");

for(const clave in persona1){
    console.log(clave);
    console.log(persona1[clave]);
} */


/* function Persona(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
    this.hablar = function(){console.log(`Hola soy ${this.nombre}`);}
   } */

/*    class Persona{
    constructor(nombre, edad, direccion){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

    hablar(){
        console.log(`Hola soy ${this.nombre}`);
    }
   }

   const persona1 = new Persona("andres", 50, "AV");
   persona1.hablar();
 */

/* class Producto{
    constructor(nombre, imagen, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.vendido = false;
        this.cantidad = cantidad;
    }

    vender(){
        this.vendido = true
        this.cantidad = this.cantidad - 1;
    }

}

const producto1 = new Producto("monitor", "rfwefrewferw", 1234, 5);
console.log(producto1);

producto1.vender();
console.log(producto1);

producto1.vender();
console.log(producto1);
 */


//EJERCICIOS:

//1)

/* class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

let tienda1 = new Tienda("Los amores", "AV. HIRIGOLLEN", "Pepito", "Heladeria");
let tienda2 = new Tienda("Bombke", "Mitre", "Juancito", "Heladeria");
let tienda3 = new Tienda("Via Roca", "Portugal", "Santiago", "Heladeria");

console.log(tienda1);
console.log(tienda2);
console.log(tienda3); */

//2)

/* alert("Por favor registre su tienda");

class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

let ingresados = "";

for (let i = 0; i < 5; i++){
    let tienda = new Tienda(prompt("Ingrese el nombre de su tienda"),
                            prompt("Ingrese la direccion de su tienda"),
                            prompt("Quien es el propietario de la tienda"),
                            prompt("Especifique el rubro de la tienda"));
    
    ingresados+= ` Tienda = ${tienda.nombre}
                   direccion = ${tienda.direccion}
                   propietario = ${tienda.propietario}
                   rubro = ${tienda.rubro}`
                            
}


alert(ingresados); */

//3)

/* class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    estaAbierto(hora){
        if(((hora >= 8) && (hora <=12)) || ((hora >= 15) && (hora <= 19))){
            return true
        }
        else{
            return false
        }
    }
}


const tienda1 = new Tienda("Los amores", "Av Hirygollen", "Pepito", "Heladeria");

let horaUsuario = "";

for (i = 0; i < 3; i++){
    horaUsuario = parseInt(prompt("Por favor ingrese una hora para ver si esta abierto"));
    if(tienda1.estaAbierto(horaUsuario)){
        alert(`Las puertas estan ABIERTAS a las ${horaUsuario}`)
    }
    else{
        alert(`Las puertas estan CERRADAS a las ${horaUsuario}`)
    }
}

alert("FINALIZO LA ACTIVIDAD"); */

//4)

/* class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    nombrePropietario(nombrePropietario){
        if((nombrePropietario === "Pepito") || (nombrePropietario === "Juancito") || (nombrePropietario === "Santiago")){
            return true
        }
        else{
            return false
        }
    }
}

const tienda1 = new Tienda("Los amores", "AV. HIRIGOLLEN", "Pepito", "Heladeria");
const tienda2 = new Tienda("Bombke", "Mitre", "Juancito", "Heladeria");
const tienda3 = new Tienda("Via Roca", "Portugal", "Santiago", "Heladeria");

let nombreUsuario = "";
for (let i = 0; i < 5; i++){

    nombreUsuario = prompt("Por favor ingrese su nombre");

    if((tienda1.nombrePropietario(nombreUsuario)) || (tienda2.nombrePropietario(nombreUsuario)) || (tienda3.nombrePropietario(nombreUsuario))){
        alert(`${nombreUsuario} es PROPIETARIO de una de las tiendas`);
    }
    else{
        alert(`${nombreUsuario} NO es PROPIETARIO de ninguna tienda`)
    }

}

alert("FINALIZO la actividad"); */

/* class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    nombrePropietario(nombre){
        this.propietario === nombre;
    }
}

const tienda1 = new Tienda("Los amores", "AV. HIRIGOLLEN", "Pepito", "Heladeria");
const tienda2 = new Tienda("Bombke", "Mitre", "Juancito", "Heladeria");
const tienda3 = new Tienda("Via Roca", "Portugal", "Santiago", "Heladeria");


for (let i = 0; i < 5; i++){

    let nombreUsuario = prompt("Por favor ingrese su nombre");

    if(nombreUsuario === nombrePropietario(nombreUsuario)){
        alert(`${nombreUsuario} es propietario de la tienda ${tienda1.nombre}`)
    }
    if(nombreUsuario === nombrePropietario(nombreUsuario)){
        alert(`${nombreUsuario} es propietario de la tienda ${tienda2.nombre}`)
    }
    if(nombreUsuario === nombrePropietario(nombreUsuario)){
        alert(`${nombreUsuario} es propietario de la tienda ${tienda3.nombre}`)
    }
    else[
        alert(`${nombreUsuario} NO es propietario de ninguna tienda`)
    ]
}

alert("FINALIZO la actividad"); */

//5)

/* class Cliente{
    constructor(nombre, presupuesto, descuento, telefono){
        this.nombre = nombre;
        this.presupuesto = Number(presupuesto);
        this.descuento = descuento;
        this.telefono = telefono;
    }

    transferirDinero(valor){

    }
}
 */






 
