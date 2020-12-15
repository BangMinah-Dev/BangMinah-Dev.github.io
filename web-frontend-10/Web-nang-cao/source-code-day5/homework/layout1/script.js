// JS

let menu = document.getElementsByClassName("menu")[0]

window.addEventListener("resize", _resize)

function _resize() {

    let _data = menu.getAttribute("data-toggle")

    let currentWidth = window.innerWidth

    if (currentWidth > 576) {
        menu.style.display = "flex"
    } else if (currentWidth < 576) {
        if (_data == "show") {
            menu.style.display = "flex"
        } else if (_data == "hide") {
            menu.style.display = "none"
        }
    }
}

function hamburger() {

    let comp = window.getComputedStyle(menu)
    let display = comp.getPropertyValue("display")

    if (display === "flex") {
        menu.style.display = "none"
        menu.setAttribute("data-toggle", "hide")
    } else if (display === "none") {
        menu.style.display = "flex"
        menu.setAttribute("data-toggle", "show")
    }
}

