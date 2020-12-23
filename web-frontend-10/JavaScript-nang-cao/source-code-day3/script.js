// js

$(document).ready(function () {
    $(".container").css("height", $(window).height() + "px");

    $(window).resize(function () {
        let heightBrower = $(window).height();
        $(".container").css("height", `${heightBrower}px`);
    });

    // Start đổi giao diện
    $(".icon").click(function () {
        let theme = $(".container").css("background-color");

        if (theme == "rgb(255, 255, 255)") {
            $(".container").css("background-color", "rgb(36, 39, 49)");
            $(".icon i").removeClass().addClass("fas fa-moon");
            $(".display").css({
                "background-color": "rgb(36, 39, 49)",
                color: "#FFF",
            });
            $(".number").css({
                "background-color": "rgb(36, 39, 49)",
                color: "#FFF",
            });
            $(".number").hover(
                function () {
                    $(this).css("background-color", "#323745");
                },
                function () {
                    $(this).css("background-color", "#242731");
                }
            );
        }

        if (theme == "rgb(36, 39, 49)") {
            $(".container").css("background-color", "rgb(255, 255, 255)");
            $(".icon i").removeClass().addClass("fas fa-sun");
            $(".display").css({
                "background-color": "rgb(255, 255, 255)",
                color: "#000",
            });
            $(".number").css({
                "background-color": "rgb(255, 255, 255)",
                color: "#000",
            });
            $(".number").hover(
                function () {
                    $(this).css("background-color", "#EEE");
                },
                function () {
                    $(this).css("background-color", "#FFF");
                }
            );
        }
    });
    // End đổi giao diện

    //Chức năng

    let display = $(".display");

    let _screen = "";

    let output = "";

    // Xoá màn hình
    $(".clear").click(function () {
        display.html("0");
        output = "";
        _screen = "";
    });

    // Lấy giá trị bàn phím
    $(".number").click(function () {
        _screen += this.value;
        display.html(_screen);
    });

    $(".bracket").click(function () {
        _screen += this.value;
        display.html(_screen);
    });

    // Lấy toán tử
    $(".operator").click(function () {
        _screen += this.value;
        display.html(_screen);
    });

    $(".equal").click(function () {
        display.html(eval(_screen));
    });

    // Tính căn bậc hai
    $("#sqrt").click(function () {
        display.html(Math.sqrt(_screen));
    });

    // Tính giai thừa
    $("#giaiThua").click(function () {
        let giaiThua = 1;

        for (let i = 1; i <= display.html(); i++) {
            giaiThua *= i;
        }

        display.html(giaiThua);
    });

    // Tính phần trăm
    $("#percent").click(function(){
        display.html(parseInt(_screen)/ 100)
    })
   
    // Tính bình phương
    $("#binhPhuong").click(function(){
        display.html(Math.pow(_screen, 2));
    })

});
