bars = document.querySelector(".bars");
bars.onclick = function () {
    navBar = document.querySelector (".nav-bar");
    navBar.classList.toggle("active");
}

function hover(element){
    element.setAttribute('src',"media/boton_hover.svg")
}
function unhover(element){
    element.setAttribute('src',"media/boton.svg")
}
