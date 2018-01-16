window.addEventListener("keydown", function(event){
if (event.defaultPrevented) {
    return;
}
    console.log(event.key);
    switch(event.key){
        case "D":
        case "d":
            var x = $("#arrow-right").css("right").slice(0, -2);
            console.log(x);
            $("#arrow-right").css("right", x - 5);
            break;
        case "W":
        case "w":
            var x = $("#arrow-up").css("top").slice(0, -2);
            console.log(x);
            $("#arrow-up").css("top", x - 5);
            break;
        case "A":
        case "a":
            var x = $("#arrow-left").css("left").slice(0, -2);
            console.log(x);
            $("#arrow-left").css("left", x - 5);
            break;
        case "S":
        case "s":
            var x = $("#arrow-down").css("top").slice(0, -2);
            console.log(x);
            $("#arrow-down").css("top", x - (-5));
            console.log(x);
            break;
        default:
            break;
    }

event.preventDefault();
}, true);


window.addEventListener("keyup", function(event){
if (event.defaultPrevented) {
    return;
}

    switch(event.key){
        case "D":
        case "d":
            $("#arrow-right").css("right", "45px");
            break;
        case "W":
        case "w":
            $("#arrow-up").css("top", "230px");
            break;
        case "A":
        case "a":
            $("#arrow-left").css("left", "45px");
            break;
        case "S":
        case "s":
            $("#arrow-down").css("top", "520px");
            break;
        default:
            break;
    }

    event.preventDefault();
}, true);
