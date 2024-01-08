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

// menú productos
productos_menu = document.querySelector(".productos_menu");
productos_menu.onclick = function () {
    navBar = document.querySelector (".nav-bar-producto");
    navBar.classList.toggle("active_producto");
}
