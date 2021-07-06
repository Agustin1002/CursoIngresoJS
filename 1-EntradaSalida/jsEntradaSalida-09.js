/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importeSueldo;
	var resultado;

	importeSueldo = txtIdSueldo.value;
	importeSueldo = parseInt(importeSueldo);
	
	resultado = importeSueldo * 1.1;

	txtIdResultado.value = resultado;

}

//txtIdSueldo--> entrada
//txtIdResultado--> salida

/*
que entra?
	el importe del dueldo
que procesa?
	sumer al sueldo el 10%
que sale?
	el importe con el aumento del 10%
*/