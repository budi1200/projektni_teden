$("#tipkovnica-navadna").focus();

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }

    switch (event.key) {
        case "a":
        case "A":
           $("#tipkovnica-navadna").focus();
            break;
        case "d":
        case "D":
            $("#tipkovnica-posebna").focus();
            break;
        case "Escape":
            window.location.href = 'index.html';
            break;

        default:
            return;
    }
    event.preventDefault();
}, true);
