// Funciones Tienda:

const comprarProducto = (camiseta) => {

    let productoExiste = carrito.find(remera => remera.id === camiseta.id);
        
    if(productoExiste === undefined){
      carrito.push({
          id: camiseta.id,
          img: camiseta.img,
          nombre: camiseta.nombre,
          precio: camiseta.precio,
          cantidad: 1
        })
    }
    else{
          productoExiste.precio = productoExiste.precio + camiseta.precio;
          productoExiste.cantidad = productoExiste.cantidad +1
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'su producto se agrego correctamente',
      showConfirmButton: false,
      timer: 1000
    });

};


