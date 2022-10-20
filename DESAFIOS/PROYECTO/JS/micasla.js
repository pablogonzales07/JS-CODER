let botonIsesion = document.getElementById("botonIsesion");
let botonRegistrate = document.getElementById("botonRegistrate");
let formContenedor = document.getElementById("formContenedor");
let cajaUsuarioNav = document.getElementById("usuarioContenedor");

class UsuariosInfo{
  constructor(nombre, edad, email, dni, contraseña){
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.dni = dni;
    this.contraseña = contraseña
  }
}

/* let usuarios = []; */

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

      localStorage.setItem("usuarios", JSON.stringify(usuarios));


    });   
});

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

botonIsesion.addEventListener("click", () => {
  formContenedor.innerHTML = "";
  let formIsesion = document.createElement("div");
  formIsesion.innerHTML = `
                          
                           <form id="formularioIsesion" class="w-50 p-4 my-4 formularioEstilo">
                            <div class="mb-3">
                             <label for="mailRegistrado" class="form-label">Email</label>
                             <input type="email" class="form-control" id="emailRegistrado" aria-describedby="emailHelp">
                             </div>                         
                            <div class="mb-3">
                             <label for="contraRegistrada" class="form-label">Contraseña</label>
                             <input type="password" class="form-control" id="contraRegistrada">
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

  let formularioIsesion = document.getElementById("formularioIsesion");

  formularioIsesion.addEventListener("submit", (e) => {

    e.preventDefault();
    let emailRegistrado = document.getElementById("emailRegistrado");
    let contraRegistrada = document.getElementById("contraRegistrada");

    let emailencontrado = usuarios.find(usuario => usuario.email === emailRegistrado.value);
    if(emailencontrado === undefined){
      alert("usuario no registrado");
    }
    else{
      let contraEncontrada = usuarios.find(usuario => usuario.contraseña === contraRegistrada.value);
      if(contraEncontrada === undefined){
        alert("contraseña no encontrada")
      }
      else{
/*         let usuarioEncontrado = usuarios.filter(usuario => usuario.contraseña === contraRegistrada.value);
        console.log(usuarioEncontrado);
        alert(`bienvenido ${usuarioEncontrado[0].nombre}`); */
        let usuarioEncontrado = usuarios.find(usuario => usuario.contraseña === contraRegistrada.value);
        usuarioLogueado = [];
        usuarioLogueado.push(usuarioEncontrado);

        localStorage.setItem("usuarioIngresado", JSON.stringify(usuarioLogueado));
      }
    }
  })
});

let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioIngresado")) || [];

let cajaNombreUsuario = document.createElement("div");
cajaNombreUsuario.innerHTML = `
                                <h3>${usuarioLogueado[0].nombre}</h3>
                                <img src="../IMAGENES/MI-CASLA/usuario.svg"></img>                                       
                              `;
cajaUsuarioNav.append(cajaNombreUsuario);




