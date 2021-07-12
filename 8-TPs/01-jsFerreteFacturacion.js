/*Vega, Agustín DIV D
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUna;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	resultado = precioUno + precioDos + precioTres;

	alert("La suma es: " + resultado);
	
}
function Promedio () 
{
	var precioUna;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	resultado = (precioUno + precioDos + precioTres) / 3;

	alert("El promedio es: " + resultado);
}
function PrecioFinal () 
{
	var precioUna;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	resultado = (precioUno + precioDos + precioTres) * 1.21;

	alert("El precio final es: " + resultado);
}

//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres