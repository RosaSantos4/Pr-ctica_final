// menú
bars = document.querySelector(".bars");
bars.onclick = function () {
    navBar = document.querySelector (".nav-bar");
    navBar.classList.toggle("active");
}

// botón
function hover(element){
    element.setAttribute('src',"media/boton_hover.svg")
}
function unhover(element){
    element.setAttribute('src',"media/boton.svg")
}

flecha_abajo = document.querySelector(".flecha_abajo");
flecha_abajo.onclick = function () {
    navBar = document.querySelector (".menu_product");
    navBar.classList.toggle("active");
}
