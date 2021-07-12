/*Vega, Agustín DIV D
*/

function mostrar()
{
  var parejaUno;
  var parejaDos;
  var pesoUno;
  var pesoDos;
  var totalKilos;
  var promedioKilos;

  parejaUno = prompt("Ingresar nombre: ");
  parejaDos = prompt("Ingresar nombre: ");
  pesoUno = prompt("Ingresar peso: ");
  pesoDos = prompt("Ingresar peso: ");

  pesoUno = parseInt(pesoUno);
  pesoDos = parseInt(pesoDos);

  totalKilos = pesoUno + pesoDos;
  promedioKilos = totalKilos / 2;

  alert("Ustedes se llaman " + parejaUno + " y " + parejaDos + ", pesan " + pesoUno + " y " + pesoDos + " kilos, y su promedio de peso es de " + promedioKilos + " kilos");

}
