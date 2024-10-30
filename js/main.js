/*console.log("hola")
const nombre = prompt("ingrese un nombre");
console.log(nombre)

alert("Bienvenido "  + nombre)*/

// Ejemplo con decimales 


/*const precio1 = parseFloat (prompt(" Ingrese precio 1 del supermercado"));
const precio2 = parseFloat (prompt("Ingrese precio 2 del supermercado"));

console.log();
console.log(precio2);

const suma = precio1 + precio2;

console.log("La suma es: " + suma);*/  



//EJERCICIOS

 /** VARIABLES */
//const base = parseFloat(prompt("Ingrese el valor de la base"));
//const altura = parseFloat(prompt("Ingrese el valor de la altura"));
//const areaTriangulo = base*altura
//console.log("El area del triangulo es "+areaTriangulo);

//const lado1 = parseFloat(prompt("Ingrese el valor de uno de los lados"));


//const perimetroCuadrado = lado1*4

//console.log("el perimetro del cuadrado es "+perimetroCuadrado);

//const gradosCelsius = parseFloat(prompt("Igrese los grados Celsius a convertir"));

//const convertorCelsiusFahrenheit = gradosCelsius*9/5+32;
//const gradosFahrenheit = convertorCelsiusFahrenheit;
//console.log(gradosCelsius+ " grados Celsius " +"son "
//    + gradosFahrenheit+ " grados Fahrenheit");

/** CONDICIONALES */

//let num1 = parseInt(prompt("Ingrese un numero"));
//let num2 = parseInt(prompt("Ingrese otro numero"));

//if (num1>num2) {
//    console.log("El primer numero es el mayor");
    
//} else if (num1<num2){
//    console.log("El segundo numero es el mayor");
//}else {
//   console.log("Ambos numeros son iguales");}


/* const Helados = parseInt(prompt("Ingrese la cantidad de helados que desea"));

const valorHelado = 5

const precioHelados = Helados * valorHelado
const descuento = precioHelados * 90 / 100;

if (isNaN(Helados)) {
    console.log("Ingrese un valor numerico");
    
}else if(Helados>10){
    const precioDesc = precioHelados - descuento

    console.log("Gracias al descuento ustede debe pagar $"+precioDesc+ " por "+ Helados + " helados" );
}
else{
console.log("Debe pagar $" + precioHelados + " por " + Helados + " helados");
}
*/

let textos = " "

do {
    ingreseTexto = prompt("Ingrese el texo aqui o escriba (salir) para finalizar ")
    if (ingreseTexto !== "salir"){
        if(textos === " "){
        textos = ingreseTexto;
        } else {console.log(textos);
            textos += ", " + ingreseTexto ;
        }
    }


} while (ingreseTexto !== "salir" );
alert (textos);
