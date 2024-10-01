// EJERCICIO 1//
function devolverEdad () 
{
    const parrafo = document.getElementById("resultado");

    let respuesta = prompt("Ingresa tu fechad de nacimiento (YYYY-MM-DD):");
    let edad=calcularEdad(respuesta);
    
    parrafo.innerHTML = "Tu edad es " + edad;
    
}
devolverEdad();

// EJERCICIO 2 //
function devolverFruta()
{
    const frutaBuscada = prompt("Ingrese una fruta a buscar");
    if (frutas.includes(frutaBuscada)) 
    {
        console.log(`Sí, tenemos ${frutaBuscada}!`);
    } 
    else 
    {
        console.log(`No, no tenemos ${frutaBuscada}!`);
    }
    const parrafo = document.getElementById('resultado')
    
    parrafo.innerHTML = "Lista de frutas: " + frutas;

}
devolverFruta()
