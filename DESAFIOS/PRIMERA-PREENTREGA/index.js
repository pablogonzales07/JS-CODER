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
     
     socioEncontrado = sociosActivos.find(socio => ((socio.nombre === nombreSocioActivo) && (socio.nombre === apellidoSocioActivo)));
     mensajeParaSocio = `${socioEncontrado.nombre} ${socioEncontrado.apellido} se encuentra registrado correctamente`
     
}

reconocerSocio();




