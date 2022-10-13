let botonIsesion = document.getElementById("botonIsesion");
let botonRegistrate = document.getElementById("botonRegistrate");
let formContenedor = document.getElementById("formContenedor");

botonIsesion.addEventListener("click", () => {
    formContenedor.innerHTML = "";
    let formIsesion = document.createElement("div");
    formIsesion.innerHTML = `
                            
                             <form class="w-50 p-4 my-4 formularioEstilo">
                              <div class="mb-3">
                               <label for="exampleInputEmail1" class="form-label">Email</label>
                               <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                               </div>                         
                              <div class="mb-3">
                               <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                               <input type="password" class="form-control" id="exampleInputPassword1">
                              </div>
                              <button type="submit" class="btn my-4">Ingresar</button>
                             </form>
                            <div class="w-50 p-4">
                              <img class="w-100 my-4" src="../IMAGENES/MI-CASLA/micasla-uno.jpeg"
                                  alt="">
                            </div>                           
                            `;
    formIsesion.className = "formIsesion"
    formContenedor.append(formIsesion);
});


class UsuariosInfo{
  constructor(nombre, edad, email, dni, contraseña){
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.dni = dni;
    this.contraseña = contraseña
  }
}

let usuarios = [];

botonRegistrate.addEventListener("click", () => {
    formContenedor.innerHTML = "";
    let formRegistrate = document.createElement("div");
    formRegistrate.innerHTML = `
                                <form id="formularioDeRegistro">
                                   <div class="mb-3">
                                    <label for="nombre" class="">Nombre y Apellido</label>
                                    <input type="name" class="form-control" id="nombre" aria-describedby="emailHelp"
                                       placeholder="Ingrese su nombre y apellido">
                                   </div>
                                   <div class="mb-3">
                                    <label for="edad" class="">Edad</label>
                                    <input type="number" class="form-control" id="edad" aria-describedby="emailHelp"
                                     placeholder="Ingrese su edad">
                                   </div>
                                   <div class="mb-3">
                                    <label for="correo" class="">Email</label>
                                    <input type="email" class="form-control" id="correo" aria-describedby="emailHelp"
                                      placeholder="Ingrese su email">
                                  </div>
                                  <div class="mb-3">
                                   <label for="dni" class="">Dni</label>
                                   <input type="number" class="form-control mb" id="dni" aria-describedby="emailHelp"
                                       placeholder="Ingrese su dni">
                                  </div>
                                  <div class="mb-3">
                                    <label for="contraseña" class="form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="contraseña">
                                  </div>
                                  <div class="botons_form">
                                    <input type="reset" value="Cancelar" class="boton_cancelar">
                                    <input type="submit" value="Enviar" class="boton_enviar">
                                  </div>                                
                                </form>
                               `;
    formContenedor.append(formRegistrate);

    let formRegistro = document.getElementById("formularioDeRegistro");

    formRegistro.addEventListener("submit", (e) => {
      e.preventDefault();

      let nombreUsuario = document.getElementById("nombre");
      console.log(nombreUsuario.value);
      let edadUsuario = document.getElementById("edad");
      console.log(edadUsuario.value);
      let emailUsuario = document.getElementById("correo");
      console.log(emailUsuario.value);
      let dniUsuario = document.getElementById("dni");
      console.log(dniUsuario.value);
      let contraseñaUsuario = document.getElementById("contraseña");
      console.log(contraseñaUsuario.value);

      let persona = new UsuariosInfo(nombreUsuario.value, edadUsuario.value, emailUsuario.value, dniUsuario.value, contraseñaUsuario.value);
      usuarios.push(persona);
    });
    
});





