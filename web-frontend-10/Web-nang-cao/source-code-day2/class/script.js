// js

// Move bubble chat

function move(){
    let chat = document.getElementsByTagName("iframe")

    chat[0].style.removeProperty("right")

    // Chuyển icon và bóng chat sang trái
    chat[1].style.removeProperty("right")
    chat[3].style.removeProperty("right")
}