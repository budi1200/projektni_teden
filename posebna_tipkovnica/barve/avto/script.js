$("#red").focus();
var ar = ["#red", "#green", "#blue", "#yellow"];
var i = 0;
var barva = 0;
var popup = false;
$(document).ready(function () {
    var rand = Math.floor((Math.random() * 4) + 1);
    var avto = $("#avto");
    var width = $(document).width();
    switch (rand) {
        case 1:
            console.log("1 - rdeca");
            avto.attr("src", "avto_red.png");
            barva = "red";
            break;
        case 2:
            console.log("2 - zelena");
            avto.attr("src", "avto_green.png");
            barva = "green";
            break;
        case 3:
            console.log("3 - modra");
            avto.attr("src", "avto_blue.png");
            barva = "blue";
            break;
        case 4:
            console.log("4 - rumena");
            avto.attr("src", "avto_yellow.png");
            barva = "yellow";
            break;
        default:
            break;
    }

    setTimeout(
        function () {
            avto.css("transition", "linear 10s");
            width = width + 201;
            avto.css("transform", "translatex(" + width + "px)");
        }, 2000);
});

$(".buttons a").click(function () {
    var clicked = $(this).attr("id");
    popup = true;
    if (barva == clicked) {
        console.log("prav");
        $("#popup_txt").html("Pravilen Odgovor!").css("color", "green");
    } else {
        console.log("narobe");
        $("#popup_txt").html("Napačen Odgovor!").css("color", "red");
    }
    $("#popup_wrapper").css("display", "flex");
    $("#try_again").focus();
    console.log($("#try_again").focus());
});

$("#avto").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
    function () {
        if(!popup){
            $("#popup_txt").html("Čas je potekel").css("color", "grey");
            $("#popup_wrapper").css("display", "flex");
            $("#try_again").focus();
        }
    });

function change_focus(a) {
    if(!popup){
    switch (a) {
        case '-':
            i--;
            break;
        case '+':
            i++;
            break;
        default:
            break;
    }
    if (i == 4) {
        i = 0;
    } else if (i < 0) {
        i = 3;
    }
    $(ar[i]).focus();
    }else if(popup){
        console.log(a);
        $("#try_again").focus();
    }
}
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    switch (event.key) {
        case "a":
        case "A":
            change_focus('-');
            break;
        case "d":
        case "D":
            change_focus('+');
            break;
        case "Escape":
            window.location.href = "../index.html";
            break;
        default:
            return;
    }
    event.preventDefault();
}, true);
