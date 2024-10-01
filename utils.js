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