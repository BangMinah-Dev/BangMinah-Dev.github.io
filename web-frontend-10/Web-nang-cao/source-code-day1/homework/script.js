// JS

function changeColor() {
    let p = document.querySelectorAll("p")

    p[0].style.color = "dodgerblue"
    p[1].style.color = "#D2D226"
    p[2].style.color = "red"
}

function changBgColor(bgColor) {
    bgColor = document.getElementById("bgColor").value
    let background = document.getElementsByTagName("body")

    background[0].style.backgroundColor = bgColor
}

function copyContent(paragraph1, paragraph2) {
    paragraph1 = document.getElementById("paste").value
    paragraph2 = document.getElementById("copy").value

    let to = document.getElementById(paragraph1)
    let from = document.getElementById(paragraph2)

    to.innerHTML = from.innerHTML
}

function changeFontSize(nbr) {
    nbr = document.getElementById("changeFontSize").value
    let res = parseInt(nbr)
    let p = document.querySelectorAll("p")
    let err = document.getElementsByClassName("res")

    console.log(res)

    if(isNaN(res) == true){
        err[0].innerHTML = `Is not a number`
        err[0].style.color = "red"
    }else{
        err[0].innerHTML = ""
        for(let i = 0; i <= p.length; i++){
            p[i].style.fontSize = `${res}px`
        }
    }
}

function computed() {
    let p = document.getElementById("element").value
    let para = document.getElementById(p);
    let compStyles = window.getComputedStyle(para);
    res = compStyles.getPropertyValue("font-size").substring(0,2)
    res = parseInt(res)
    return res
}

function increaseFontSize(paragraph) {
    computed()
    paragraph = document.getElementById("element").value
    p = document.getElementById(paragraph)

    let com = window.getComputedStyle(p);
    result = com.getPropertyValue("font-size").substring(0,2)
    result = parseInt(result)
    let curentSize = result

    if(curentSize < 30){
        p.style.fontSize = res + 1 + "px"
    }else{
        alert("Kích thước tăng lên không được vượt quá 30 pixels")
        return false
    }
}

function decreaseFontSize(paragraph) {
    computed()
    paragraph = document.getElementById("element").value
    p = document.getElementById(paragraph)
    
    let com = window.getComputedStyle(p);
    result = com.getPropertyValue("font-size").substring(0,2)
    result = parseInt(result)
    let curentSize = result

    if(curentSize <= 10){
        alert("Kích thước giảm xuống không vượt quá 10 pixels")
        return false
    }else{
        p.style.fontSize = res - 1 + "px"
    }
}