const parrafo = document.getElementById("resultado");


// EJERCICIO 1//
function devolverEdad () 
{

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

function ejercicio5 () 
{
    const lista1 = [1, 2, 3, 4, 5, 6, 7];

    function duplicarArray (lista1)
    {
        const lista2 = lista1.map (function(num) { return num*2;});
        
        return lista2;
    }

    const lista2= duplicarArray(lista1);
    console.log(lista2);
}
ejercicio5();



// EJERCICIO 6 //

function ejercicio6 () 
{
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
}
ejercicio6();



// EJERCICIO 7 //

function ejercicio7 () 
{
    let respuesta = prompt("Ingrese una lista de nombres separados por una coma (ej: pepe,lola,juana)");
    let palabrasA = nombresConA(respuesta);

    if (palabrasA.length!==0)
    {
        parrafo.innerHTML = palabrasA;
    }
}
ejercicio7();



// EJERCICIO 8 //

function ejercicio8 () 
{
    let txt1 = prompt("Ingrese una cadena de texto a modificar");
    let palabra1 = prompt("Ingrese una palabra que desea reemplazar");
    let palabra2 = prompt("Ingrese la palabra de reemplazo");
    let txt2 = remplazarPalabra (txt1, palabra1, palabra2);

    parrafo.innerHTML = "Tu nuevo texto: " + txt2;
}
ejercicio8();



// EJERCICIO 9 //

function ejercicio9 () 
{
    let txt = prompt("Ingrese una cadena de texto a modificar");
    let caracteres = prompt("Ingrese el número de caracteres");


    parrafo.innerHTML = "Tu nuevo texto: " + txt.slice(0, caracteres);
}
ejercicio9();



// EJERCICIO 10 //

function ejercicio10 () 
{
    let txt = prompt("Ingrese una lista de nombres palabras por una coma (ej: pepe,lola,juana)");
    parrafo.innerHTML = "Tu nuevo texto: " + txt.replaceAll(",", "-");
}
ejercicio10();



// EJERCICIO 11 //

function ejercicio11 () 
{
    let txt = prompt("Ingrese una lista de objetos pedidos junto con sus respectivos totales, separados por coma. Cada pedido se debe ingresar en el formato 'nombre:total, nombre:total'.");
    
    let txtDividido= txt.split(",");
    let suma=0;
    for (const palabra of txtDividido)
    {
        let linea =palabra.split(":");
        let precio = linea[1];
        console.log(precio);
        suma+=parseFloat(precio);
    }

    parrafo.innerHTML = "Tu total es de: " + suma;
}
ejercicio11();