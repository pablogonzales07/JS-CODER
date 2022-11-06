// funciones MICASLA

const registrarUsuario = (e) => {
    e.preventDefault();

    let nombreUsuario = document.getElementById("nombre");
    let edadUsuario = document.getElementById("edad");
    let emailUsuario = document.getElementById("correo");
    let dniUsuario = document.getElementById("dni");
    let contraseñaUsuario = document.getElementById("contraseña");
    let persona = new UsuariosInfo(nombreUsuario.value, edadUsuario.value, emailUsuario.value, dniUsuario.value, contraseñaUsuario.value);
   
    let usuarioRepetido = usuarios.find(usuario => usuario.email === emailUsuario.value);
    if(usuarioRepetido === undefined){
      usuarios.push(persona);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      alert("Se ha registrado con exito");
    }
    else{
      alert("ya hay un usuario registrado con este email")
    }
};

const loguearUsuario = () => {
    usuarioLogueado = [];
    let emailRegistrado = document.getElementById("emailRegistrado");
    let contraRegistrada = document.getElementById("contraRegistrada");
  
    let emailencontrado = usuarios.find(usuario => usuario.email === emailRegistrado.value);
    let contraEncontrada = usuarios.find(usuario => usuario.contraseña === contraRegistrada.value);
  
    if((emailencontrado === undefined) || (contraEncontrada === undefined)){
      alert("Usuario no registrado");
    }
    else{
      let usuarioEncontrado = usuarios.find(usuario => usuario.email === emailRegistrado.value);
      alert(`Bienvenido ${usuarioEncontrado.nombre}`);
      usuarioLogueado.push(usuarioEncontrado);
    }
  
    localStorage.setItem("usuarioIngresado", JSON.stringify(usuarioLogueado));
};

