    // estado de la app
    let colorCielo = "white";


//Asociar eventos click a un boton

//Forma 1
function singleClick() {
    console.log("Me has hecho click");
}

// Cread un función que si la invoco, me oculta el dinoseto del DOM
function ocultarDinoseto() {
    // 1. querySelector obtener el dinoseto del DOM
    let dinoseto = document.querySelector("#dinoseto img");

    // 2. Establecer su propiedad style.display a "none"
    dinoseto.style.display = "none";
}

//Forma 2
// Asociar evento click a un elemento del DOM

// 1. Selecciono el elemento del DOM
let botonDinoseto = document.querySelector("#dinoBoton");

// 2. Establecemos su propiedad onmouseclick; con la función que debe ejecutar
botonDinoseto.onclick = ocultarDinoseto;

//Forma 3
//Usar addEventListener para asociar el evento click al título de la página
let titulo = document.querySelector("#title");
titulo.addEventListener("click", function(){
    console.log("Has hecho click al titulo")
})

//Puedes añadir varios addEventListener
titulo.addEventListener("click", function(){
    console.log("Tambien hago esto")
})

// Ejercicio 1: Cielo Azul. Al hacer click en el botón, el body se pinta de color azul
// Ejercicio 1-BONUS(hacer al final): El texto del botón cambia a Cielo Blanco; y al hacer click en el, el body cambia al color blanco
let pintar = document.querySelector("#pintar")

// Si la variable de estado es "white", debemos pintar el cielo a azul; cambiar el texto del botón a "Cielo Blanco", y actualizar la variable de estado a "blue"
pintar.addEventListener ("click", function () {
    if(colorCielo == "white") {
    document.body.style.backgroundColor = "blue"
    colorCielo = "blue"}
    else {
        document.body.style.backgroundColor = "white"
        colorCielo = "white"
    }
})
// Si la variable de estado es "blue", debemos pintar el cielo a blanco; cambiar el texto del botón a "Cielo Azul", y actualizar la variable de estado a "white"

// Ejercicio 2: Poner huevo. Al hacer click en el botón poner huevo, se crea un nodo del tipo 'img' y hay que añadirlo como hijo del contenedor #dinoseto
let image = document.createElement('img')
image.src  = 'img/dinohuevo.png'

let nuevoHuevo = document.querySelector("#nuevo-huevo")
nuevoHuevo.addEventListener("click" , function(){
    document.querySelector('#dinoseto').appendChild(image)
});