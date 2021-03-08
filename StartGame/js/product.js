// JS

$(document).ready(function () {
    $(".video-link").magnificPopup({ type: "iframe" });
});

$(document).ready(function () {
    $(".image-link").magnificPopup({ type: "image" });
});

// function checkScroll(){
//     var startY = $('.leftBox').height() //The point where the navbar changes in px

//     if($(window).scrollTop() > startY){
//         $('.navbar').addClass("scrolled");
//     }else{
//         $('.navbar').removeClass("scrolled");
//     }
// }

// if($('.leftBox').length > 0){
//     $(window).on("scroll load resize", function(){
//         checkScroll();
//     });
// }

// window.onscroll = function() {scrollFunction()};

// function scrollFunction(){
//     // let start = $("title").height()

//     let start = $("#title").offset().top
    
//     let x = window.scrollY + document.querySelector('#title').getBoundingClientRect().top // Y
//     // let xx = window.scrollY + document.querySelector('html').getBoundingClientRect().top // Y


//     let _body = $(window).scrollTop()
//     if(_body > 450){
//         $("#dev").css("font-size", "0px")
//         // $("#title").css({"position": "fixed", "top": "60px", "z-index" : "40"})
//     }else{
//         document.getElementById("dev").style.fontSize = "16px"
//         // $("#title").css({"position": "absolute", "bottom" : "-100px", "left" : "50%", "transform" : "translate(-50%)", "height": "150px", "top" : "auto"})

//     }
//     console.log(x)
//     // console.log("body " + xx)

// }


window.onscroll = function(){
    scrollFunction()
}

function scrollFunction(){
    
    // let y = window.scrollY
    // let y_html = document.querySelector('html').getBoundingClientRect().top

    // let y_html = window.scrollY + document.querySelector('#tieuDe').getBoundingClientRect().top

    let _html = document.querySelector("html").scrollTop

    let el = document.getElementById("title").offsetTop

    let navW = $(".navbar").width()
    $(".effect").css("width", (navW - 30)+"px")

    if(_html > (el)){

        $('#rightBox').addClass("effect");
        // $('#leftBox').addClass("leftBox")
    }else{
        $('#rightBox').removeClass("effect");
        // $('#leftBox').removeClass("leftBox")
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
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                },
            },
        ],
    });
});
