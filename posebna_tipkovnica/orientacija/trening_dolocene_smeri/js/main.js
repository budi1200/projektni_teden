var keys = {
    Esc: false,
    Enter: false
};

var ar = [
    "#button-up",
    "#button-left",
    "#button-down",
    "#button-right"
];
var i = 0;
var izbranaSmer = "";
var StageOne = false;

$("#button-up").focus();

function change_focus(a) {
   // if(!popup){
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
   // }else if(popup){
      //  console.log(a);
        //$("#try_again").focus();
    //}
}

window.addEventListener("keydown", function(event){
if(event.defaultPrevented){
    return;
}
if(StageOne == false){
    switch(event.key){
        case "d":
        case "D":
            change_focus('+');
            break;
        case "a":
        case "A":
            change_focus('-');
            break;
        case "Enter":
            keys['Enter'] = true;
            CheckEsc();
            izbranaSmer = ar[i];
            IzbranaSmerFun();
            break;
        case "Escape":
            keys['Esc'] = true;
            CheckEsc();
            break;
        default:
            break;
        }
}
    else if(StageOne == true){
        switch(event.key){
        case "D":
        case "d":
            var x = $("#button-right").css("margin-right").slice(0, -2);
            $("#button-right").css("margin-right", x - 5);
            break;
        case "W":
        case "w":
            var x = $("#button-up").css("margin-top").slice(0, -2);
            $("#button-up").css("margin-top", x - 5);
            break;
        case "A":
        case "a":
            var x = $("#button-left").css("margin-left").slice(0, -2);
            $("#button-left").css("margin-left", x - 5);
            break;
        case "S":
        case "s":
            var x = $("#button-down").css("margin-top").slice(0, -2);
            $("#button-down").css("margin-top", x - (-5));
            break;
        case "Escape":
            if(izbranaSmer == "#button-up"){
                $(izbranaSmer).css("position", "static");
            }
            else{}
            location.reload();
            break;
        default:
            break;
        }
    }
    event.preventDefault();
}, true);

function IzbranaSmerFun(){
    $(".button-link").css("display", "none");
    $(izbranaSmer).css("display", "block");
    StageOne = true;
    if(izbranaSmer == "#button-up"){
        $(izbranaSmer).css("position", "absolute");
    }
    else{}
}

window.addEventListener("keyup", function(event){
    if(event.defaultPrevented){
        return;
    }

    switch(event.key){
        case "D":
        case "d":
            $("#button-right").css("margin-right", "");
            break;
        case "W":
        case "w":
            $("#button-up").css("margin-top", "");
            break;
        case "A":
        case "a":
            $("#button-left").css("margin-left", "");
            break;
        case "S":
        case "s":
            $("#button-down").css("margin-top", "");
            break;
        case "Escape":
            keys['Esc'] = false;
            break;
        case "Enter":
            keys['Enter'] = false;
            break;
        default:
            break;
    }

    event.preventDefault();
},true);


function CheckEsc(){
    if(keys["Esc"] == true && keys["Enter"] == true){
       // keys["Esc"] = false;
       // keys["Enter"] = false;
       // $(object).css("transition", "none");
        window.location.href = "../index.html";
    }else{
		keys["Esc"] = false;
		keys["Enter"] = false;
	}
}
