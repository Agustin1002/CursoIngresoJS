/*Vega, Agustín DIV D
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUno;
	var numeorDos;
	var resultado;

	numeroUno = txtIdNumeroDividendo.value;
	numeroDos = txtIdNumeroDivisor.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno % numeroDos;

	alert("El resto es: " + resultado);

}

//txtIdNumeroDividendo
//txtIdNumeroDivisor