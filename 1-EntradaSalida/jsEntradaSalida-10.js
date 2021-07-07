/*Vega, Agustín DIV D
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeSueldo;
	var resultado;

	importeSueldo = txtIdImporte.value;
	importeSueldo = parseInt(importeSueldo);
	
	resultado = importeSueldo * 1.25;

	txtIdResultado.value = resultado;
}

//txtIdImporte
//txtIdResultado