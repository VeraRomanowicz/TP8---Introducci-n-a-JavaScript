// EJERCICIO 1//
function devolverEdad () 
{
    const parrafo = document.getElementById("resultado");

    let respuesta = prompt("Ingresa tu fechad de nacimiento (YYYY-MM-DD):");
    let edad=calcularEdad(respuesta);
    
    parrafo.innerHTML = "Tu edad es " + edad;
    
}
devolverEdad();
