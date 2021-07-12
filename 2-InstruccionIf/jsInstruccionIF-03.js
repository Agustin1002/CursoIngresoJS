/*Al ingresar una edad debemos informar si la persona 
es mayor de edad, sino informar que es un menor de edad.
*/

function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad>=18)
	{
		alert("La persona es mayor de edad");
	}
	else
	{
		alert("La persona no es major de edad");
	}
}
//FIN DE LA FUNCIÓN