var keys = {
    Esc: false,
    Enter: false
};

//var object = "";

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return;
  }

    var object = "";

  switch (event.key) {
    case "W":
    case "w":
          $("#arrow-up").css("display", "block");
          $("#arrow-up").css("opacity", "1");
          object = "#arrow-up";
      break;
    case "A":
    case "a":
          $("#arrow-left").css("display", "block");
          $("#arrow-left").css("opacity", "1");
          object = "#arrow-left";
      break;
    case "S":
    case "s":
          $("#arrow-down").css("display", "block");
          $("#arrow-down").css("opacity", "1");
          object = "#arrow-down";
      break;
    case "D":
    case "d":
          $("#arrow-right").css("display", "block");
          $("#arrow-right").css("opacity", "1");
          object = "#arrow-right";
      break;
    case "Enter":
          $("#enter").css("display", "block");
          $("#enter").css("opacity", "1");
          keys["Enter"] = true;
          Check();
          object = "#enter";
      break;
    case "Escape":
          $("#escape").css("display", "block");
          $("#escape").css("opacity", "1");
          keys["Esc"] = true;
          Check();
          object = "#escape";
      break;
    default:
      return;
  }
    setTimeout(function (){
        //Check();
        $(object).css("transition", "opacity 1s ease-in-out");
        $(object).css("opacity", "0");
}, 1000);


  event.preventDefault();
}, true);

function Check(){
    if(keys["Esc"] == true && keys["Enter"] == true){
       // keys["Esc"] = false;
       // keys["Enter"] = false;
       // $(object).css("transition", "none");
        window.location.href = "../index.html";
    }
}

window.addEventListener("keyup", function(event){
if (event.defaultPrevented) {
    return;
}
    //keys["Esc"] = false;
    switch(event.keyCode){
        case 27:
            keys["Esc"] = false;
            break;
        case 13:
            keys["Enter"] = false;
            break;
        default:
            break;
    }

    event.preventDefault();
}, true);

