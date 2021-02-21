
// let screenHeight = window.innerHeight

// let cover = document.getElementsByClassName("cover")[0]

// console.log(cover)
// console.log(screenHeight)

// cover.style.height = (screenHeight - 60) + "px"
// cover.style.height = `800px`


$('.cover').slick({
    arrows : false,
    fade : true,
    infinite: true,
    speed : 300,
    cssEase: 'linear',
    // autoplay : true
});