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