let botonIsesion = document.getElementById("botonIsesion");
let botonRegistrate = document.getElementById("botonRegistrate");
let formContenedor = document.getElementById("formContenedor");
let cajaUsuarioNav = document.getElementById("usuarioContenedor");
let cajaCerrarSesion = document.getElementById("cerrarSesion");

class UsuariosInfo{
  constructor(nombre, edad, email, dni, contraseña){
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.dni = dni;
    this.contraseña = contraseña
  }
}

//formulario de registro

botonRegistrate.addEventListener("click", () => {
    formContenedor.innerHTML = "";
    location.href = "#formContenedor"

    let formRegistrate = document.createElement("div");
    formRegistrate.innerHTML = `
                                <form class="w-100" id="formularioDeRegistro">
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
                                   <input type="number" class="form-control" id="dni" aria-describedby="emailHelp"
                                       placeholder="Ingrese su dni">
                                  </div>
                                  <div class="mb-3">
                                    <label for="contraseña" class="form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="contraseña" placeholder="Ingrese su contraseña">
                                  </div>
                                  <div class="botons_form">
                                    <input type="reset" value="Cancelar" class="botonesForm">
                                    <input type="submit" value="Enviar" class="botonesForm">
                                  </div>                                
                                </form>
                               `;
    formRegistrate.className = "formularioRegistro"
    formContenedor.append(formRegistrate);
    
    let formRegistro = document.getElementById("formularioDeRegistro");
    formRegistro.addEventListener("submit", (e) => {
     registrarUsuario(e);
    });   
});

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//formulario de inicio de sesion

botonIsesion.addEventListener("click", () => {
  formContenedor.innerHTML = "";
  location.href = "#formContenedor"
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

formularioIsesion.addEventListener("submit", () => {
  loguearUsuario();
})
})

let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioIngresado")) || [];

//caja de usuario logueado 

let cajaNombreUsuario = document.createElement("div");
cajaNombreUsuario.innerHTML = `
                        <h3 class="usuarioNombre">${usuarioLogueado[0].nombre}</h3>
                        <img src="../IMAGENES/MI-CASLA/usuario.svg" class="logoUsuario" id="logoUsuario"></img>                                                                                          
                      `;
cajaNombreUsuario.className = "usuarioNavDiseño"
cajaUsuarioNav.append(cajaNombreUsuario); 

let logoUsuario = document.getElementById("logoUsuario");

logoUsuario.addEventListener("click", () => {

  let cerrarSesion = document.createElement("div");
  cerrarSesion.innerHTML = `
                             <p>NOMBRE: ${usuarioLogueado[0].nombre}</p>
                             <p>EDAD: ${usuarioLogueado[0].edad}</p>
                             <p>EMAIL: ${usuarioLogueado[0].email}</p>
                             <p>DNI: ${usuarioLogueado[0].dni}</p>
                             <button id="botonCerrarSesion" class="botonCerrarSesion">Cerrar sesion</button>                            
                           `;
  cerrarSesion.className = "cerrarSesion";
  cajaCerrarSesion.append(cerrarSesion);

  let botonCerrarSesion = document.getElementById("botonCerrarSesion");


  botonCerrarSesion.addEventListener("click", () => {
    localStorage.removeItem("usuarioIngresado");
    usuarioLogueado = [];
    cajaCerrarSesion.innerHTML = "";
    cajaNombreUsuario.innerHTML = "";
  })
});












