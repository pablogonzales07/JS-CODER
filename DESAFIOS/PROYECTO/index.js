alert("Bienvenidos al sitio oficial del club atletico san lorenzo de almagro");
alert("Lo invitamos a asociarse al club mas hermoso del mundo")
alert("A continuacion complete los datos que se piden, recuerde que solo puede hacerlo de 8AM A 19PM")
class Socios{
    constructor(sociosInfo){
        this.nombre = sociosInfo.nombre;
        this.apellido = sociosInfo.apellido;
        this.edad = sociosInfo.edad;
        this.numeroDeSocio = sociosInfo.nSocio;
        this.hora = sociosInfo.hora;    
    }    
}

let sociosActivos = [];
let socioDatos;

function formularioSocios(){
    socioDatos = new Socios(
        {
            nombre: prompt("Por favor ingrese su nombre"),
            apellido: prompt("Por favor ingrese su apellido"),
            edad: parseInt(prompt("Ingrese su edad por favor")),
            nSocio: sociosActivos.length +1,
            hora: prompt("Ingrese la hora por favor")
        }

    )

    while((socioDatos.hora >= 8) && (socioDatos.hora <= 19)){
        sociosActivos.push(socioDatos);
        alert(`Bienvenido ${socioDatos.nombre} al club San Lorenzo de almagro`);
        socioDatos = new Socios(
            {
                nombre: prompt("Por favor ingrese su nombre"),
                apellido: prompt("Por favor ingrese su apellido"),
                edad: parseInt(prompt("Ingrese su edad por favor")),
                nSocio: sociosActivos.length +1,
                hora: parseInt(prompt("Ingrese la hora por favor"))
            }
        )

        if((socioDatos.hora < 8) || (socioDatos.hora > 19) || (isNaN(socioDatos.hora))){
            alert("Lo siento por el momento no podemos registrarlo intente nuevamente en otro horario")

        }
        
    }

}

formularioSocios();
if(sociosActivos.length >= 1){
    alert(`Socios incorados en el dia de hoy:/n ${JSON.stringify(sociosActivos)}`);
}
else {
    alert("No se registraron nuevos socios")
}  

alert("Ya esta asociado? VERIFIQUELO");

let nombreSocioActivo;
let apellidoSocioActivo;
let socioEncontrado;
let mensajeParaSocio;

function reconocerSocio(){
     nombreSocioActivo = prompt("Ingrese su nombre");
     apellidoSocioActivo = prompt("Ingrese su apellido");
     
     socioEncontrado = sociosActivos.find(socio =>{
        return (socio.nombre === nombreSocioActivo) && (socio.apellido === apellidoSocioActivo)
     })
     if(socioEncontrado !== undefined){
     mensajeParaSocio = `${socioEncontrado.nombre} ${socioEncontrado.apellido} se encuentra registrado correctamente`;
     alert(mensajeParaSocio);
    }
    else{
        alert("Los sentimos no estas verificado")
    }
     
}

reconocerSocio();

alert("los invitamos a ver nuestros productos");


let camisetas = [
    {id: 1, nombre: "camiseta titular año 2014", precio: 6900, img: "https://img.planetafobal.com/2014/03/camiseta-titular-lotto-san-lorenzo-2014.jpg"},
    {id: 2, nombre: "camiseta suplente año 2014", precio: 6000, img: "https://pbs.twimg.com/media/BkKib46CAAAAONE.jpg:large"},
    {id: 3, nombre: "camiseta titular año 2015", precio: 7000, img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/384/008/products/casla-20151-ca1b3f9434452e183416186659212949-640-0.png"},
    {id: 4, nombre: "camiseta suplente año 2015", precio: 6800, img: "https://img.planetafobal.com/2015/01/camiseta-suplente-nike-san-lorenzo-2015-frente.jpg"},
    {id: 5, nombre: "camiseta titular año 2016", precio: 8900, img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/384/008/products/casla-20151-ca1b3f9434452e183416186659212949-640-0.png"},
    {id: 6, nombre: "camiseta suplente año 2016", precio: 8000, img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/384/008/products/sanlorenzo20161-e523f3a8fd39f2634816269734091132-640-0.jpg"},
];

let pantalones = [
    {id: 1, nombre: "pantalon negro de san lorenzo", precio: 5000, img: "https://www.digitalsport.com.ar/files/products/5c4b76e30ad3e-462581-500x500.jpg"},
    {id: 2, nombre: "pantalon san lorenzo squad ", precio: 4400, img: "https://marcadegol.com/fotos//2017/02/ropa-de-entrenamiento-nike-de-san-lorenzo-2017-pantalon.jpg"},
    {id: 3, nombre: "pantalon de joggin san lorenzo", precio: 4300, img: "https://http2.mlstatic.com/D_NQ_NP_820335-MLA31100493183_062019-O.jpg"},
    {id: 4, nombre: "pantalon black dri-fit academy", precio: 4000, img: "https://www.digitalsport.com.ar/files/products/5e7b825a5c3be-488821-500x500.jpg"},
];


let seleccion = parseInt(prompt("igrese 1 para ver nuestras camisetas en stock o 2 para ver los pantalones"));
let contenedor = document.getElementById("stockCamisetas");
let caja;

if(seleccion === 1){
    camisetas.forEach(item => {
        caja = document.createElement("div");
        caja.innerHTML = `
                          <h2>nombre: ${item.nombre}</h2>
                          <p>precio: ${item.precio}</p>
                          <img src=${item.img}>
                         `
        contenedor.append(caja)

    })
}
else if(seleccion === 2){
    pantalones.forEach(item => {
        caja = document.createElement("div");
        caja.innerHTML = `
                         <h2>nombre: ${item.nombre}</h2>
                         <p>precio: ${item.precio}</p>
                         <img src=${item.img}>
                         `
        contenedor.append(caja)

    })

}
else{
    alert("Usted a seleccionado un dato incorrecto");
}



            











