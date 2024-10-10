/*PROFESORES-B
En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
de la clase Cl_profesor.
Haga un programa que haga uso de la misma clase Cl_profesor del ejercicio anterior, lea los
datos de un profesor contratado y reporte su ingreso total.
*/
import Cl_Contratado from "./Cl_Contratado.js";
import Cl_Fijo from "./Cl_Fijo.js";
import Cl_Universidad from "./Cl_Universidad.js";

let contratado = new Cl_Contratado("Rafael",30, 15);
let contratado2 = new Cl_Contratado("Felicia", 30, 20);
let Universidad = new Cl_Universidad();
Universidad.procesar(contratado);
Universidad.procesar(contratado2);

let salida = document.getElementById("Salida");
salida.innerHTML = `
<br> Nombre del profesor contratado: ${contratado.nombre} 
<br> Monto del bono: $${contratado.bono}
<br> Cantidad de horas: ${contratado.cantidadHoras}
<br> Ingreso total del profesor Rafael: $${contratado.sueldo()}<br> `


salida.innerHTML += `
<br> Nombre del profesor contratado: ${contratado2.nombre} 
<br> Monto del bono: $${contratado2.bono}
<br> Cantidad de horas: ${contratado2.cantidadHoras}
<br> Ingreso total de la profesora Felicia: $${contratado2.sueldo()}`