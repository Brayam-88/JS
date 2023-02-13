alert("Gracias por visitar Autos del Sur")
alert("a contituacion complete el formulario de ingreso para conocer nuestro vehiculos")

let concesionariaSur =(prompt("ingrese su nombre"));
let apellido =(prompt("ingrese su apellido"));
let edad=(prompt("ingrese edad"));
let pais=(prompt("ingrese su localidad"));

if( edad < 18){
    alert(" inhabilitado realizar esta operacion ")
}
else if ("edad > 18");
console.log(concesionariaSur);

let año = 2023;
let modelo = 2000;
while ( año > modelo){
    console.log(año)
    modelo= modelo + 1 

}
alert(" elija la marca de auto que desee");

class autosMarca {
    constructor(marca,precio) {
        this.marca = marca;
        this.precio = precio;
        
    }
}

const ford =new autosMarca("ford, 3.200.000");
const chevrolet =new autosMarca("chevrolet, 3.600.000");
const fiat =new autosMarca("fiat, 2.500.000");
const audi=new autosMarca("audi, 3.000.000");

const arraysAutos = [ford, chevrolet, fiat, audi];
console.log( "Marcas de autos disponibles");
console.log(arraysAutos);

arraysAutos.forEach(arraysAutos => console.log( autosMarca.marca));
