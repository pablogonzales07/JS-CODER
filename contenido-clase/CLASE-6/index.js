/* const arrelgoVacio = [];
const numeros = [1, 2, 3, 2, 4, 5, 3];
const nombres = ["camila", "andres", "juliana", "pedro", "Mario", "Mariana"];
const booleanos = [true, false];
const varios = [5, "andres", true]; */

/* console.log(numeros[2] + numeros[3]); */

/* for (let index = 0; index < nombres.length; index++) {
    const elemento = nombres[index];
    console.log(index, elemento);    
} */

/* nombres[0] = "Mateo";
console.log(nombres); */

/* const nombres = ["camila", "andres"];

nombres.push("Pedro");  //AGREGA ELEMENTO AL FINAL DEL ARREGLO
console.log(nombres);

nombres.unshift("Juliana");   //AGREGA ELEMENTO AL FINAL DEL ARREGLO
console.log(nombres); */


/* const nombres = ["camila", "andres"];

nombres.pop(nombres);  //SACAR ELEMENTO DEL FINAL
console.log(nombres); */

/* const nombres = ["camila", "andres"];

nombres.shift(nombres);  //SACAR ELEMENTO DEL INICIO
console.log(nombres);
 */

/* const nombres = ["camila", "andres", "juliana", "pedro", "Mario", "Mariana"];

nombres.splice(1, 3);  //ELIMINA DESDE LA POSICION DADA Y LA CANTIDAD
console.log(nombres); 

nombres.splice(2, 0, "gabriel") //AGREGAR UN ELEMENTO EN LA POSICION PASADA COMO PRIMER PARAMETRO
console.log(nombres);
 */

/* const nombres = ["camila", "andres", "juliana", "pedro", "Mario", "Mariana"];

console.log(nombres.join("-")); //UNE TODOS LOS ELEMENTOS DE UN ARREGLO EN UN STRING Y LOS SEPARA POR EL PARAMETRO PASADO */

/* const nombres = ["camila", "andres", "juliana", "pedro", "Mario", "Mariana"];
const perritos = ["firu", "zeus", "max"];

const varios = nombres.concat(perritos); //UNE DOS ARREGLOS EN UNO SOLO
console.log(varios); */

/* const nombres = ["camila", "andres", "juliana", "pedro", "Mario", "Mariana"];

const fragmento = nombres.slice(1, 4);  //GENERA UNA COPIA DE UN FRAGEMENTO DEL ARREGLO
console.log(fragmento); */ 

/* const nombres = ["camila", "andres", "juliana", "pedro", "Mario", "Mariana"];

console.log(nombres.indexOf("pedro")); //BUSCA LA POSICION DEL ELEMENTO PASADO POR PARAMETRO */

/* const nombres = ["camila", "andres", "juliana", "pedro", "Mario", "Mariana"];

console.log(nombres.includes("hector")); */  //BUSCA SI EL ELEMENTO SE ENCUENTRA O NO EN EL AREEGLO

/* const nombres = ["camila", "andres", "juliana", "pedro", "Mario", "Mariana"];

nombres.reverse();   //CAMBIA EL ORDEN DE LOS ELEMENTOS DEL ARREGLO, EL PRIMERO PASA A SER ULTIMO
console.log(nombres); */


/* const nombres = ["camila", "andres", "juliana", "pedro", "Mario", "Mariana"];

const eliminarNombre = (nombre) => {
        let indice = nombres.indexOf(nombre);

        if(indice != -1){
            nombres.splice(indice, 1);
        }

        console.log(nombres);

};

eliminarNombre("pedro"); */

/* const productos = [
    {id: 1, producto: "arroz"},
    {id: 2, producto: "fideo"},
    {id: 3, producto: "pan"},
]


for(const item of productos){
    console.log(item);
} */

/* class Producto{
    constructor(id, nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio

    }
}

let productos = [];

productos.push(new Producto(productos.length +1, "camisa", 1000));
productos.push(new Producto(productos.length +1, "pantalon", 2000));

console.log(productos); */







