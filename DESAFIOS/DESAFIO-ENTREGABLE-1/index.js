let rpPrecio = 150;
let cantidadRp = 0;
let precioFinal = 0;

alert("conversion de rp a pesos argentinos, si usted ingresa un letra o un numero menor o igual a 0 se considera que su compra ha finalizado");

function solicitarRp (){

    cantidadRp = Number(prompt("Ingrese cantidad de rp que necesita"));

    while(cantidadRp > 0){
        precioFinal += conversion(cantidadRp);
        cantidadRp = Number(prompt("Ingrese cantidad de rp que necesita"));
    }

    if((cantidadRp <= 0) || (isNaN(cantidadRp))){
        alert("usted ingreso un dato no valido por lo que su compra finaliza");
    }
      
}

function conversion(a){
    return  rpPrecio * a;
}

function salida (){
    alert(`Usted necesita ${precioFinal} pesos`)
}

solicitarRp();
salida();