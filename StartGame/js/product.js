// JS

$(document).ready(function () {
    $(".video-link").magnificPopup({ type: "iframe" });
});

$(document).ready(function () {
    $(".image-link").magnificPopup({ type: "image" });
});


window.onscroll = function(){
    scrollFunction()
}

function scrollFunction(){

    let _html = document.querySelector("html").scrollTop

    let el = document.getElementById("title").offsetTop

    let navW = $(".navbar").width()
    $(".effect").css("width", (navW - 30)+"px")

    if(_html > (el)){
        $('#rightBox').addClass("effect");
    }else{
        $('#rightBox').removeClass("effect");
        $("#rightBox").css("width", "70%")
    }
}

$(document).ready(function () {
    $(".carousel").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
