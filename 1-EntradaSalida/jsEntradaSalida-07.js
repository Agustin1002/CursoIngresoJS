/*Vega, Agustín DIV D
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeorDos;
	var resultado;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos;

	alert("La suma es: " + resultado);

}

function restar()
{
	var numeroUno;
	var numeorDos;
	var resultado;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno - numeroDos;

	alert("La suma es: " + resultado);
}

function multiplicar()
{ 
	var numeroUno;
	var numeorDos;
	var resultado;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno * numeroDos;

	alert("La suma es: " + resultado);
}

function dividir()
{
	var numeroUno;
	var numeorDos;
	var resultado;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno / numeroDos;

	alert("La suma es: " + resultado);
}

//txtIdNumeroUno//
//txtIdNumeroDos//