jplist.init();

let card = document.getElementsByClassName("grid-item")[0];
    let heightCard = window.getComputedStyle(card);
    let res_card = heightCard.getPropertyValue("height");
    let res_card_0px = res_card.slice(0, -2);

    let image = document.getElementsByClassName("image")[0];
    let heightImage = window.getComputedStyle(image);
    let res_image = heightImage.getPropertyValue("height");
    let res_image_0px = res_image.slice(0, -2);

    // let content = document.getElementsByClassName("content")[0]
    // let heightContent = window.getComputedStyle(content);
    // let res_content = heightContent.getPropertyValue("height")

    let resize_content = document
        .getElementById("grid")
        .querySelectorAll(".content");
    for (let i = 0; i < resize_content.length; i++) {
        resize_content[i].style.height = res_card_0px - res_image_0px + "px";
}

window.addEventListener("resize", _resize);

function _resize() {
    let card = document.getElementsByClassName("grid-item")[0];
    let heightCard = window.getComputedStyle(card);
    let res_card = heightCard.getPropertyValue("height");
    let res_card_0px = res_card.slice(0, -2);

    let image = document.getElementsByClassName("image")[0];
    let heightImage = window.getComputedStyle(image);
    let res_image = heightImage.getPropertyValue("height");
    let res_image_0px = res_image.slice(0, -2);

    // let content = document.getElementsByClassName("content")[0]
    // let heightContent = window.getComputedStyle(content);
    // let res_content = heightContent.getPropertyValue("height")

    let resize_content = document
        .getElementById("grid")
        .querySelectorAll(".content");
    for (let i = 0; i < resize_content.length; i++) {
        resize_content[i].style.height = res_card_0px - res_image_0px + "px";
    }
}
