/*Vega, Agustín DIV D
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var resultado;

	largoTerreno = txtIdLargo.value;
	anchoTerreno = txtIdAncho.value;

	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);

	resultado = ((largoTerreno + anchoTerreno) * 2) * 3;

	alert("Se deben comprar: " + resultado + " metros de alambre");
}
function Circulo () 
{
	var radio;
	var resultado;
	var alambre;

	radio = txtIdRadio.value;

	resultado = (radio * 2) * 3.14;
	alambre = resultado * 3;

	alert("Se deben comprar: " + alambre + " metros de alambre");
}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var cemento;
	var cal;
	var resultado;

	largoTerreno = parseInt(txtIdLargo.value);
	anchoTerreno = parseInt(txtIdAncho.value);

	cemento = (largoTerreno * anchoTerreno) * 2;
	cal = (largoTerreno * anchoTerreno) * 3;

	alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");

}

//txtIdLargo
//txtIdAncho
//txtIdRadio