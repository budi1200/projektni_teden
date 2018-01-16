window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return;
  }

  switch (event.key) {
    case "W":
    case "w":
          $("#arrow-up").css("display", "block");
      break;
    case "A":
    case "a":
          $("#arrow-left").css("display", "block");
      break;
    case "S":
    case "s":
          $("#arrow-down").css("display", "block");
      break;
    case "D":
    case "d":
          $("#arrow-right").css("display", "block");
      break;
    case "Enter":
          $("#enter").css("display", "block");
      break;
    case "Escape":
          $("#escape").css("display", "block");
          alert("123");
      break;
    default:
      return;
  }


  event.preventDefault();
}, true);

var keys = {
    Esc: false,
    Enter: false
};

$(document.body).keydown(function(event) {
    if (event.keyCode == 27) {
        keys["Esc"] = true;
    } else if (event.keyCode == 13) {
        keys["Enter"] = true;
    }
    if (keys["Esc"] && keys["Enter"]) {
        window.location.href = "../index.html";
        alert("123");
    }
});

$(document.body).keyup(function(event) {
    if (event.keyCode == 27) {
        keys["Esc"] = false;
    } else if (event.keyCode == 13) {
        keys["Enter"] = false;
    }
});
