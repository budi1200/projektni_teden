document.getElementById("navadna").focus();

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

    switch (event.key) {
        case "a":
        case "A":
            document.getElementById("navadna").focus();
            break;
        case "d":
        case "D":
            document.getElementById("posebna").focus();
            break;
        case "Escape":
            //window.history.back();
            window.location.href = 'index.html';
            break;

        default:
            return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);
