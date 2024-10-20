var opciones = prompt(`
    que quiere buscar?
    1. pokemones
    2. bayas
    3. habilidades
    4. salir
    `)

    var mostrar = document.getElementById("mostrar")
    var pokemonimagen = document.getElementById("pokemonimagen")
    var recargarPagina  = document.querySelector("input")

    //se va a ver que opcion se eligio para mandarle a la funcion para buscar en la api lo que se quiere que devuelva
switch (opciones) {
    case "pokemon":
        var nombrepokemon = prompt("que pokemon quiere buscar?")
        buscarEnLaApi(opciones, nombrepokemon)
        break;
    case "berry":
        var nombrebaya = prompt("que baya quiere buscar?")
        buscarEnLaApi(opciones, nombrebaya)
        break;
    case "habilidad":
        var nombrehabilidad = prompt("que habilidad quiere buscar?")
        buscarEnLaApi(opciones, nombrehabilidad)
        break
    case "salir":
        console.log("Adios");
        break
    default:
        mostrar.innerHTML = "pokemon por defecto: "
        buscarEnLaApi("pokemon", "pikachu")
        console.log("pokemon por defecto: pikachu"); 
        break;
}

async function buscarEnLaApi (opcion, nombreDeLoBuscado) {
    try {
        const rspuesta = await fetch("https://pokeapi.co/api/v2/" + opcion + "/" + nombreDeLoBuscado)
        const elegido = await rspuesta.json()
        console.log(elegido)
        mostrar.innerHTML += elegido.name
        pokemonimagen.src = elegido.sprites.front_default
    } catch (error) {
        console.log(error)
    }
}

recargarPagina.addEventListener("click", function () {
    location.reload()
})