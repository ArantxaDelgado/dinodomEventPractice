//DoubleClick
let areaDblClick = document.querySelector("#dobleClick");

areaDblClick.addEventListener("dblclick", function () {
    document.body.classList.toggle("fondo");
});

//mouseEnter
let areaEventoMouse = document.querySelector("#eventoMouse");

areaEventoMouse.addEventListener("mouseenter", function () {
    areaEventoMouse.style.border = "5px solid red";
});//si quitas el mouse no cambia

//mouseOut Este quita el efecto cuando quitas el mouse
areaEventoMouse.addEventListener("mouseout", function () {
    areaEventoMouse.style.border = "none";
});