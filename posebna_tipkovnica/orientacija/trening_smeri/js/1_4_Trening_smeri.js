var q = "";

var keys = {
    Esc: false,
    Enter: false
};

window.addEventListener("keydown", function(event){
if (event.defaultPrevented) {
    return;
}
    //console.log(event.key);
    switch(event.key){
        case "D":
        case "d":
            var x = $("#arrow-right").css("right").slice(0, -2);
            $("#arrow-right").css("right", x - 5);
            break;
        case "W":
        case "w":
            var x = $("#arrow-up").css("top").slice(0, -2);
            $("#arrow-up").css("top", x - 5);
            break;
        case "A":
        case "a":
            var x = $("#arrow-left").css("left").slice(0, -2);
            $("#arrow-left").css("left", x - 5);
            break;
        case "S":
        case "s":
            var x = $("#arrow-down").css("top").slice(0, -2);
            $("#arrow-down").css("top", x - (-5));
            break;
        case "Escape":
            keys['Esc'] = true;
            CheckEsc();
            q = "rdečo";
            ShowPopUp(q);
            break;
        case "Enter":
            keys['Enter'] = true;
            CheckEsc();
            q = "rumeno";
            ShowPopUp(q);
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
        case "Escape":
            keys['Esc'] = false;
            $("#pop-up").css("display", "none");
            break;
        case "Enter":
            keys['Enter'] = false;
            $("#pop-up").css("display", "none");
            break;
        default:
            break;
    }

    event.preventDefault();
}, true);


function ShowPopUp(q){
    //console.log(q);
    $("#type-name").html(q);
    $("#pop-up").css("display", "block");
}

function CheckEsc(){
    if(keys["Esc"] == true && keys["Enter"] == true){
       // keys["Esc"] = false;
       // keys["Enter"] = false;
       // $(object).css("transition", "none");
        window.location.href = "../index.html";
    }
}

function Navodila(){
    var x = $("#navodila").css("display");
    if(x == "none"){
        $("#navodila").css("display", "block");
        localStorage.setItem('Neki', "block");
        //localStorage.setItem('Neki', KrEna);
    }
    else if(x == "block"){
        $("#navodila").css("display", "none");
        //KrEna = "none";
        localStorage.setItem('Neki', "none");
        //localStorage.setItem('Neki', KrEna);
    }
    else{
        console.log(x);
    }
}
