////Ejercicios JavaScript Nivel 1
///////////////////// Ejercicio 1 

//Mostrar por consola, tu nombre, apellido, comisión y hobbies 

var nombre = "Gian";
var apellido = "Montero"
var comision = "23549"
var  hobbies = "DEV"

console.log(nombre + " " + apellido + " " + comision +" "+ hobbies);

//////////////////// Ejercicio 2

//Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.
//Recuerda que para pedirle al usuario que escriba una frase debes utilizar el método prompt() y para escribir
//en la consola debes utilizar el método console.log().

// const frase = prompt("Ingresar frase:");

// console.log(frase);

//////////////////// Ejercicio 3

//Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un
//signo de exclamación. 

// const saludo = prompt("¿Cual es tu nombre: ?");

// console.log("¡Hola " + saludo + "!")

/////////////////////// Ejercicio 4

//Escribe un programa que le pida al usuario su nombre y apellido y lo imprima por consola

// const nombape = prompt("Escribe tu nombre y apellido");

// console.log(nombape);

//////////////////////// Ejercicio 5

//Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola
//con la frase "Tienes X años". 

// var anoNac = prompt("Por favor, ingresa tu año de nacimiento:");

// var edadActual = new Date().getFullYear();
// var edad = edadActual - parseInt(anoNac);

// console.log("Tienes " + edad + " años.");

//////////////////////// Ejercicio 6

//El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de
//grasa de una persona.
//El BMI se calcula con la siguiente formula:
//peso / altura^2
//Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X"

// var peso = prompt("Poner su peso(KG):");
// var altura = prompt("Poner su Altura:");

// var bmi = peso / (altura * altura);

// console.log("Tu BMI es " + bmi);

//////////////////////// Ejercicio 7

//Declarar una variable de nombre cantidadDeVentanas y asignarle la cantidad de ventanas que hay en
//tu casa. Mostrar el valor de la variable por la consola

// var cantidadDeVentanas = prompt("¿Cuantas ventanas tenes en tu casa?");

// console.log(cantidadDeVentanas);

//////////////////////// Ejercicio 8

//Declarar una variable de nombre soyHumano y asignarle el valor true (verdadero). Mostrar el valor de
//la variable por la consola. 

var soyHumano = true;

console.log(soyHumano);

//////////////////////// Ejercicio 9

//Declarar una variable de nombre miGustoDePizza y asignarle la variedad de pizza que más te guste
//usando un String (cadena de caracteres). Mostrar el valor de la variable por la consola. 

var miGustoDePizza = "Pepperoni";

console.log(miGustoDePizza);

//////////////////////// Ejercicio 10

//Mostrar por la consola los siguientes valores false, 'Hola', 0 y 'Minions' usando la misma variable. 

var variable = false;
console.log(variable);

variable = 'Hola';
console.log(variable);

variable = 0;
console.log(variable);

variable = 'Minions';
console.log(variable);

//////////////////////// Ejercicio 11

//Crear un programa que dado la base y la altura de un triangulo calcule la superficie y el perímetro. 

// function calcularArea(base, altura) {
//     return (base * altura) / 2;
// }

// function calcularPerimetro(base) {
//     return 3 * base;
// }


// const base = prompt("Ingrese la base del triángulo:");
// const altura = prompt("Ingrese la altura del triángulo:");


// const area = calcularArea(base, altura);
// const perimetro = calcularPerimetro(base);

// console.log("El área del triángulo es: " + area);
// console.log("El perímetro del triángulo es: " + perimetro);

//////////////////////// Ejercicio 12

//Crear un programa que, al pasar los datos del peso de una persona en libras, haga la conversión a
//kilogramos 

// function convertirLibrasAKilogramos(pesoLibras) {
//     const factorConversion = 0.453592;
//     const pesoKilogramos = pesoLibras * factorConversion;
//     return pesoKilogramos;
// }


// const pesoLibras = parseFloat(prompt("Ingrese el peso en libras:"));

// if (!isNaN(pesoLibras)) {
//     const pesoKilogramos = convertirLibrasAKilogramos(pesoLibras);

//     console.log(pesoLibras + " libras son aproximadamente " + pesoKilogramos.toFixed(2) + " kilogramos.");
// }

//////////////////////// Ejercicio 13

//Crear un programa que al ingresar el sueldo de un trabajador, aplique el 15% de aumento y lo muestre
//en la consola. 

// function aumentoSueldo(sueldo) {
//     const aumento = 0.15;
//     const sueldoActual = sueldo + sueldo * aumento;
//     return sueldoActual;
// }

// const sueldo = parseFloat(prompt("Ingrese su sueldo:"));
// if (!isNaN(sueldo)) {  
//     const sueldoActual = aumentoSueldo(sueldo);  

// console.log("Su sueldo con el aumento quedaría en " + sueldoActual);
// }

//////////////////////// Ejercicio 14

//Crear un programa que al ingresar una nota de un alumno, muestre con un alert() si el alumno esta
//“aprobado” (se aprueba con una nota mayor a 7) y “reprobado” en caso contrario 

// function calificacion(nota) {
//     if (nota => 7) {
//         alert("Aprobado");
//     } else {
//         alert("Reprobado");
//     }
// }

// const nota = parseFloat(prompt("Ingrese la nota del alumno:"));

// if (!isNaN(nota)) {
//     calificacion(nota);
// } else {
//     alert("Por favor, ingrese una nota válida.");
// }

//////////////////////// Ejercicio 15

//Crear un programa tal que dado como datos la categoría y el sueldo de un trabajador, calcule el
//aumento correspondiente teniendo en cuenta la siguiente tabla. Mostrar con un Alert() la categoría y
//el nuevo sueldo 

// function calcularAumento(categoria, sueldo) {
//     let aumento = 0;

//     switch (categoria) {
//         case 1:
//             aumento = sueldo * 0.1;
//             break;
//         case 2:
//             aumento = sueldo * 0.07;
//             break;
//         case 3:
//             aumento = sueldo * 0.05;
//             break;
//         default:
//             alert("Categoría no válida");
//             return;
//     }

//     const nuevoSueldo = sueldo + aumento;
//     alert(`Categoría: ${categoria}\nNuevo Sueldo: $${nuevoSueldo.toFixed(2)}`);
// }

// const categoria = parseInt(prompt("Ingrese la categoría del trabajador (1, 2 o 3):"));
// const sueldo = parseFloat(prompt("Ingrese el sueldo del trabajador:"));

// if (!isNaN(categoria) && !isNaN(sueldo)) {
//     calcularAumento(categoria, sueldo);
// } else {
//     alert("Por favor, ingrese valores numéricos válidos.");
// }

//////////////////////// Ejercicio 16

//Crear un programa tal que dado como datos la matrícula y 5 calificaciones de un alumno; imprima la
//matricula, el promedio y la palabra “aprobado” si el alumno tiene un promedio mayor o igual que 7, y
//la palabra “no aprobado” en caso contrario 

// function calcularPromedio(calificaciones) {
//     const sumaCalificaciones = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
//     return sumaCalificaciones / calificaciones.length;
// }

// function determinarEstado(promedio) {
//     if (promedio >= 7) {
//         return "aprobado";
//     } else {
//         return "no aprobado";
//     }
// }

// const matricula = prompt("Ingrese la matrícula del alumno:");
// const calificaciones = [];

// for (let i = 1; i <= 5; i++) {
//     const calificacion = parseFloat(prompt(`Ingrese la calificación ${i}:`));
//     if (!isNaN(calificacion)) {
//         calificaciones.push(calificacion);
//     } else {
//         alert("Por favor, ingrese una calificación válida.");
//         break;
//     }
// }

// if (calificaciones.length === 5) {
//     const promedio = calcularPromedio(calificaciones);
//     const estado = determinarEstado(promedio);

//     alert(`Matrícula: ${matricula}\nPromedio: ${promedio.toFixed(2)}\nEstado: ${estado}`);
// }

//////////////////////// Ejercicio 17

//Dado 3 números enteros, determinar cual de ellos es el mayor, tenga en cuenta que los números
//pueden ser iguales. 

// function encontrarMayor(num1, num2, num3){
// if (num1 >= num2 && num1 >= num3) {
//     return num1;
// } else if (num2 >= num1 && num2 >= num3){
//     return num2;
// } else {
//     return num3;
//  }
// }

// const numero1 = parseInt(prompt("Ingrese el primer número:"));
// const numero2 = parseInt(prompt("Ingrese el segundo número:"));
// const numero3 = parseInt(prompt("Ingrese el tercero número:"));

// if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
//     const mayor = encontrarMayor(numero1, numero2, numero3);

//     alert(`El número mayor es: ${mayor}`);
// } else {
//     alert("Por favor, ingrese números enteros válidos.");
// }

////Ejercicios JavaScript Nivel 2
//////////////////////// Ejercicio 1

//Crear un programa que defina tres variables llamadas “variable_a”, “variable_b” y
//“variable_resultado”. Cargar las primeras dos con los valores numéricos 33 y 77. Sumar ambas
//variables y guardar el resultado en la variable “variable_resultado”. Imprimir el resultado por
//consola.

var variable_a = 33;
var variable_b = 77;

var variable_resultado = variable_a + variable_b;

console.log(variable_resultado)

//////////////////////// Ejercicio 2

//Crear un programa que defina 5 variables llamadas “a”,“b”...“e” y una sexta variable llamada
//“promedio”. Cargar las 5 variables con valores y calcular el promedio de los mismos. Imprimir el
//resultado por consola. 

var a = 10;
var b = 15;
var c = 20;
var d = 25;
var e = 30;

var promedio = (a + b + c + d + e) / 5;

console.log("El promedio es: " + promedio);

//////////////////////// Ejercicio 3

//Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a ambas.
//Comparar si “nota1” es mayor a “nota2” e imprimir el resultado de la comparación. 

var nota1 = 7;
var nota2 = 3;

var compararNotas = nota1 > nota2 ;

console.log(compararNotas);

//////////////////////// Ejercicio 4

//Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor a 100 pesos. Escribir
//un programa que, dado el monto de una compra como valor numérico, diga cuanto debe abonar
//el cliente aplicando el descuento si es necesario. 

// function calcularDescuento(compra) {
//     const descuento = 0.15; 
//     if (compra => 100) {
//         const descuentoAplicado = compra * descuento;
//         const totalConDescuento = compra - descuentoAplicado;
//         return totalConDescuento;
//     } else {
//         return compra; 
//     }
// }

// const compra = parseFloat(prompt("Ingrese el valor de su compra:"));

// if (!isNaN(compra)) {
//     const totalConDescuento = calcularDescuento(compra);
//     console.log("El total a pagar con descuento es: " + totalConDescuento);
// } else {
//     console.log("Por favor, ingrese un valor numérico válido.");
// }

//////////////////////// Ejercicio 5

//Crear un programa que calcule el pago que hacen un grupo de personas para ver una película
//teniendo en cuenta que si el grupo es menor de 8 personas el pago es de 1.5 pesos por persona y
//para grupos de 8 personas o más el pago es 0.5 pesos por persona.

// function calcularPagoPorGrupo(cantidadPersonas) {
//     if (cantidadPersonas < 8) {
//         return cantidadPersonas * 1.5;
//     } else {
//         return cantidadPersonas * 0.5;
//     }
// }

// const cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas en el grupo:"));

// if (!isNaN(cantidadPersonas)) {
//     const pagoTotal = calcularPagoPorGrupo(cantidadPersonas);
//     console.log("El pago total por el grupo es de " + pagoTotal + " pesos.");
// } else {
//     console.log("Por favor, ingrese un número válido para la cantidad de perosnas");
// }

//////////////////////// Ejercicio 6

//Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a ambas.
//Comparar si “nota1” es mayor a “nota2” imprimir el mensaje “Nota1 es mayor” o “Nota2 es
//mayor” según el resultado de la comparación. 

var nota1 = 85;
var nota2 = 75;


if (nota1 > nota2) {
    console.log("Nota1 es mayor");
} else if (nota2 > nota1) {
    console.log("Nota2 es mayor");
} else {
    console.log("Las notas son iguales");
}

//////////////////////// Ejercicio 7

//Las puntuaciones de las películas se clasifican en:
//0: mala, 1: regular, 2: buena,3: muy buena, 4: excelente
//Crear un programa donde se pide al usuario que ingrese un valor entre 0 a 4. Imprimir la
//clasificación de la película según el valor numérico. 

// const valor = parseInt(prompt("Ingrese un valor entre 0 y 4"));

// if(!isNaN(valor)&& valor >= 0 && valor <=4) {
// switch(valor) {
//     case 0:
//       console.log("La película es mala.");
//       break;
//     case 1:
//         console.log("La película es regular.");
//       break;
//       case 2:
//         console.log("La película es buena.");
//       break;
//       case 3:
//         console.log("La película es muy buena.");
//       break;
//       case 4:
//         console.log("La película es excelente.");
//       break;
//     default:
//   }
// } else{
//     console.log("El valor ingresado no está en el rango válido (0-4) o no es un número.");
// }

//////////////////////// Ejercicio 8

//Crear un programa que imprima una cuenta regresiva de 59 a 0. 

// for (let i = 59; i >=0; i--) {
//     console.log(i);
// }

//////////////////////// Ejercicio 9

//Crear un programa que imprima los números pares de 0 a 100. 

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//////////////////////// Ejercicio 10

//Crear un programa para imprimir todos los números de 100 a 0 inclusive

// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

//////////////////////// Ejercicio 11

//Crear un programa en donde el usuario ingresa números y se guardan en un array. Al ingresar “-1”
//se imprimirán los números ingresado junto con sus posiciones dentro del array. 

// const numeros = [];

// while (true) {
//     const valor = parseInt(prompt("Ingrese un número (-1 para finalizar):"));
    
//     if (valor === -1) {
//         break; 
//     }
    
//     numeros.push(valor);
// }

// if (numeros.length === 0) {
//     console.log("No se ingresaron números.");
// } else {
//     console.log("Números ingresados junto con sus posiciones en el array:");

//     for (let i = 0; i < numeros.length; i++) {
//         console.log(`Número: ${numeros[i]}, Posición: ${i}`);
//     }
// }

//////////////////////// Ejercicio 12

//Crear un programa en donde el usuario ingresa números hasta que ingresa “-1”, en dicho caso el
//programa termina e imprime el promedio de los números ingresados. 

// const numeros = [];
// let total = 0;

// while (true) {
//     const valor = parseFloat(prompt("Ingrese un número (-1 para finalizar):"));

//     if (isNaN(valor)) {
//         console.log("¡Entrada no válida! Ingrese un número válido.");
//         continue; 
//     }

//     if (valor === -1) {
//         break;
//     }

//     numeros.push(valor);
//     total += valor;
// }

// if (numeros.length === 0) {
//     console.log("No se ingresaron números.");
// } else {
//     const promedio = total / numeros.length;
//     console.log(`El promedio de los números ingresados es: ${promedio}`);
// }

//////////////////////// Ejercicio 13

//Crear un programa en donde el usuario ingrese el nombre y el precio de 5 productos, al finalizar,
//se listarán en pantalla el nombre y el precio de los productos. 

// const nombreUsuario = prompt("Ingrese su nombre: ");
// const preciosProductos = [];

// for (let i = 1; i <= 5; i++) {
//     const precio = parseFloat(prompt(`Ingrese el precio del producto ${i}: `));
//     if (!isNaN(precio)) {
//         preciosProductos.push(precio);
//     } else {
//         console.log("Precio no válido. Intente nuevamente.");
//         i--; // Decrementa i para volver a ingresar el mismo producto.
//     }
// }

// console.log(`\nNombre del Usuario: ${nombreUsuario}`);
// console.log("Precios de los productos ingresados:");

// for (let i = 0; i < preciosProductos.length; i++) {
//     console.log(`Producto ${i + 1}: ${preciosProductos[i]} pesos`);
// }

//////////////////////// Ejercicio 14

//Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la altura promedio de las
//personas.

// const n = parseInt(prompt("Ingrese la cantidad de alturas a ingresar: "));
// let sumaAlturas = 0;

// for (let i = 1; i <= n; i++) {
//     const altura = parseFloat(prompt(`Ingrese la altura de la persona ${i} en centímetros: `));
    
//     if (!isNaN(altura)) {
//         sumaAlturas += altura;
//     } else {
//         console.log("Altura no válida. Intente nuevamente.");
//         i--;
//     }
// }

// if (n > 0) {
//     const alturaPromedio = sumaAlturas / n;
//     console.log(`La altura promedio de las ${n} personas es de ${alturaPromedio} centímetros.`);
// } else {
//     console.log("No se ingresaron alturas válidas.");
// }

//////////////////////// Ejercicio 15

//Crear un Programa que pida al usuario un número entre 0 y 25, deberá mostrar por pantalla su
//significado en el bingo. Ej: 14 = "Borracho" 

// const significadosBingo = [
//     "Borracho", "Dama", "La cama", "San Martín", "La loma",
//     "El soldado", "La cocha", "La yapa", "La palma", "El beso",
//     "El ancho", "El loco", "La niña bonita", "San Juan", "La borracha",
//     "El 15", "La virgen", "San Pedro", "La hermosa", "La tostada",
//     "La vitrina", "La cotorra", "La curva", "El pato", "El pescado"
// ];

// const numero = parseInt(prompt("Ingrese un número entre 0 y 25: "));

// if (!isNaN(numero) && numero >= 0 && numero <= 25) {
//     const significado = significadosBingo[numero];
//     console.log(`${numero} = "${significado}"`);
// } else {
//     console.log("Número fuera de rango o no válido.");
// }

//////////////////////// Ejercicio 16

//Crear 2 Vectores, uno corresponderá a los nombres y otro a los apellidos de 10 compañeros del
//curso de Fullstack de codo a codo 

// const nombres = [
//     "Gian",
//     "María",
//     "Carlos",
//     "Ana",
//     "Luis",
//     "Sofía",
//     "Pedro",
//     "Laura",
//     "Fernando",
//     "Elena"
// ];

// const apellidos = [
//     "Montero",
//     "Rodríguez",
//     "Martínez",
//     "López",
//     "Pérez",
//     "Gómez",
//     "Torres",
//     "Díaz",
//     "Fernández",
//     "Sánchez"
// ];

// for (let i = 0; i < 10; i++) {
//     console.log(`Compañero ${i + 1}: ${nombres[i]} ${apellidos[i]}`);
// }