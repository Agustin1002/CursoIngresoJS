/*Vega, Agustín DIV D
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeorDos;
	var resultado;

	numeroUno = txtIdNumeroUno.value;
	numeorDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeorDos = parseInt(numeorDos);

	resultado = numeroUno + numeorDos;

	alert("La suma de los numeros es: " + resultado);

}

//txtIdNumeroUno
//txtIdNumeroDos
//+;-;*;/; %

/*
Entradas
	prompt
	id.value

Procesos

Salidas
	alert
	id.value o document.getElementById("id").id
	console.log()
	document.write
*/