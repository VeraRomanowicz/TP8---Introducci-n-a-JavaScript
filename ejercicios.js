/*
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
    const parrafo = document.getElementById('resultado');

    const frutas = ["manzana", "banana", "durazno", "kiwi", "frutillas", "pera", "mora", "melon", "sandia", "pomelo"];
    parrafo.innerHTML = "Lista de frutas: ";
    frutas.forEach(function(fruta) 
    {
        console.log(fruta);
    });

    const frutaBuscada = prompt("Ingrese una fruta a buscar");
    if (frutas.includes(frutaBuscada)) 
    {
        console.log(`Sí, tenemos ${frutaBuscada}!`);
    } 
    else 
    {
        console.log(`No, no tenemos ${frutaBuscada}!`);
    }
    

}
devolverFruta()


// EJERCICIO 4 //

const ciudad = 
{
    nombre: "Madrid",
    fechaFundacion: "1083-05-09",
    poblacion: '3.220.000',
    extension: 604
}

function mostrarInfo (ciudad)
{
    for (const propiedad in ciudad) 
    {
        console.log(`${propiedad}: ${ciudad[propiedad]}`);
    }
}

mostrarInfo (ciudad);



// EJERCICIO 5 //

const lista1 = [1, 2, 3, 4, 5, 6, 7];

function duplicarArray (lista1)
{
    const lista2 = lista1.map (function(num) { return num*2;});
    
    return lista2;
}

const lista2= duplicarArray(lista1);
console.log(lista2);



// EJERCICIO 6 //

for (let i=1; i<=4; i++)
{
    console.log("*".repeat(i));
}

for (let i=1; i<=5; i++)
{
    const lineas= ("-".repeat(5-i));
    const asteriscos= ("*".repeat(i*2+1));

    console.log(lineas + asteriscos + lineas);
}
*/



// EJERCICIO 7 //
const parrafo = document.getElementById("resultado");
parrafo.innerHTML = "Ingrese una lista de nombres separados por una coma (ej: pepe,lola,juana)" + edad;