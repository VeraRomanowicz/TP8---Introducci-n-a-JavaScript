// EJERCICIO 1 //

function calcularEdad (fecha) 
{
    const cumple = new Date(fecha);
    const hoy = new Date();
    
    let edad = hoy.getFullYear() - cumple.getFullYear();
    const mesNacimiento = cumple.getMonth();
    const mesActual = hoy.getMonth();

    // Si el cumpleaños de este año aún no ha ocurrido, restamos un año
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < cumple.getDate())) {
        edad--;
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
    /* A */ console.log(10 == '10');
    console.log(10 === '10');
    /* B - ¿Qué diferencias encontrás?
        La diferencia es que == devuelve true ya que los valores son los mismos. === compara los tipos de datos y al ser distintos devuelve false*/
    /* C - ¿De qué tipo de dato es 10.6? Es un number. */
    /* D */ console.log(true == 1); //true es igual a 1 al usar la comparación no estricta (==).
            console.log(true === 1); //true no es igual a 1 al usar la comparación estricta (===). Ya que true es un booleano y 1 es un número.

}


/* EJERCICIO 7 */

function nombresConA (respuesta)
{
    respuesta= respuesta.split(",");

    let arrayPalabrasA=[];

    for (const palabra of respuesta) 
    {
        if (palabra.startsWith("a"))
        {arrayPalabrasA.push(palabra)}
    }

    return arrayPalabrasA;
}



/* EJERCICIO 8 */
 
function remplazarPalabra (txt1, palabra1, palabra2)
{
    let txt2;
    txt2 = txt1.replaceAll (palabra1, palabra2);
    return txt2;
}
