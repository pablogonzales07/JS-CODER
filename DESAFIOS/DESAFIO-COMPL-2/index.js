/* class Socios{
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
}    */









