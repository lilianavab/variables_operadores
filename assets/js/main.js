//1.Realizar el diagrama de flujo para las siguientes operaciones matemáticas: Suma, Resta, División, Multiplicación y el módulo de un número, partiendo de dos números ingresados por el usuario.*/
//la respuesta está en imagenes (img) anexo de assets/img/diagrama-flujo-operaciones

/*2. Realizar operaciones con dos números. Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos números, calcular lo siguiente:
● Suma
● Resta
● División
● Multiplicación
● Módulo*/

//Respueta: se genera un alerta, operación de sumatoria y el resultado
alert ('ingresa dos números distintos y diferente a cero');
let número1 = +prompt ('número1');
let número2 = +prompt ('número2');
document.write (`<h3> El resultado de la suma es: ${número1+número2}</h3>`);
document.write (`<h3> El resultado de la resta es: ${número1-número2}</h3>`);
document.write (`<h3> El resultado de la multiplicación es: ${número1*número2}</h3>`);
document.write (`<h3> El resultado de la división es: ${número1/número2}</h3>`);
document.write (`<h3> El resultado del módulo total es: ${número1%número2}</h3>`);

//3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit.*/

//Se hace la conversión de la temperatura Celsius a Kelvin
/*const temperaturaKelvin = 273.15;
let temperaturaCelsius = +prompt ('Ingrese la temperatura en grados Celsius');
let conversiónkelvin = temperaturaCelsius+temperaturaKelvin;
document.write (`<h1> La conversión de la temperatura Celsius a Kelvin es ${conversiónkelvin}</h1>`); 

//Se hace la conversión de la temperatura Celsius a Fahrenheit
let conversiónFahrenheit = temperaturaCelsius * (9/5) + 32;
document.write (`<h1> La conversión de la temperatura Celsius a Fahrenheit es ${conversiónFahrenheit}</h1>`)*/

/*4. Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el resultado debe ser 1 año, 1 semana y 1 día.
Se debe considerar lo siguiente:
● 1 año tiene 365 días
● 1 semana tiene 7 días
Se recomienda usar la función Math.floor para obtener la parte entera de un número decimal.*/

// Cálculo de años, semanas y días
/*cantidadDiasConsiderados = + prompt("Ingresa la cantidad de días");
let años = Math.floor(cantidadDiasConsiderados / 365);
let cantidadDiasRestantes = cantidadDiasConsiderados % 365;
let semanas = Math.floor (cantidadDiasRestantes / 7);
let días = cantidadDiasRestantes % 7;

document.write(cantidadDiasConsiderados + " es equivalente a: ")
document.write( años + " años ", + semanas + " semanas y ", + días + " días ");*/

/*5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden a continuación.
● La suma de todos los números.
● El promedio de los 5 números ingresados.*/

// Se genera la suma y el promedio
/*alert ('ingresa cinco números para generar sumas y promedios')
let número1 = +prompt('número1');
let número2 = +prompt('número2');
let número3 = +prompt('número3');
let número4 = +prompt('número4');20
let número5 = +prompt('número5');
document.write (`<h3> El resultado de la suma es: ${número1+número2+número3+número4+número5}</h3>`);
document.write (`<h3> El resultado del promedio es: ${(número1+número2+número3+número4+número5)/5}</h3>`);*/


//Hay que descomentar cada uno para poderlo procesar







