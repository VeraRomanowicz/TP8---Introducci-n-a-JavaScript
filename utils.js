// EJERCICIO 1 //
function calcularEdad (fecha) 
{
    const hoy = new Date();
    const cumple = new Date(fecha);
    let edad;
     
    if (hoy.getMonth() > cumple.getMonth)
    {
        edad = hoy.getFullYear() - cumple.getFullYear();
    }
    else if (hoy.getMonth() == cumple.getMonth && hoy.getDay>=cumple.getDay)
    {
        edad = hoy.getFullYear() - cumple.getFullYear();
    }
    else
    {
        edad = hoy.getFullYear() - cumple.getFullYear() -1;
    }

    return edad;
}

/*Ejercicio 2*/

function Tirandofruta(fruta)
{
    const frutas = ["manzana", "banana", "durazno", "kiwi", "frutillas", "pera", "mora", "melon", "sandia", "pomelo"]
  
    frutas.forEach(function(fruta) 
    {
        console.log(fruta);
    });
}

/*Ejercicio 3*/

function ComparandoDatosYtipos()
{
    console.log(10 == '10');
    console.log(10 === '10');
    /*¿Qué diferencias encontrás?
    La diferencia es que == devuelve true ya que los valores son los mismos. 
    === compara los tipos de datos y al ser distintos devuelve false*/
    //C. ¿De qué tipo de dato es 10.6? es un number.
    console.log(true == 1); //true es igual a 1 al usar la comparación no estricta (==).
    console.log(true === 1); //true no es igual a 1 al usar la comparación estricta (===). Ya que true es un booleano y 1 es un número.

}