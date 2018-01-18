var canvas = document.getElementById("main_canv");
var width = $(window).width();
var height = $(window).height();
var ctx = canvas.getContext("2d");
canvas.width = width;
canvas.height = height;

var left;
var right;
var rectObj = {};

var keys = {
    Esc: false,
    Enter: false
};
var popup = false;
//Cursor
var img = document.getElementById("cursor");
var cursorX = width / 2;
var cursorY = height / 2;
var cursorOffset = 6;

// Velikost in barva kocke
var x1 = 20;
var x2 = x1;
var y = x1 + 5;
var color = "#525456";

function drawCursor() {
    ctx.drawImage(img, cursorX, cursorY, 25, 35);
}
// Vrne nakljucno stevilo od 1 do 10
function randNum() {
    return Math.floor((Math.random() * 10) + 1);
}
// Colour adjustment function
// Nicked from http://stackoverflow.com/questions/5560248
function shadeColor(color, percent) {
    color = color.substr(1);
    var num = parseInt(color, 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = (num >> 8 & 0x00FF) + amt,
        B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

// Nariše kocko (canvas X, canvas Y, stranica kocke 1, stranica kocke 2, visina kocke, barva, polna/prazna kocka)
function drawCube(x, y, wx, wy, h, color, frame) {
    //left
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, -10);
    ctx.strokeStyle = color;
    ctx.stroke();
    if (!frame)
        ctx.fill();

    //right
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wy, y - wy * 0.5);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, 10);
    ctx.strokeStyle = shadeColor(color, 50);
    ctx.stroke();
    if (!frame)
        ctx.fill();

    //top
    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, 20);
    ctx.strokeStyle = shadeColor(color, 60);
    ctx.stroke();
    if (!frame) {
        ctx.fill();
    }
}

var n = 1;
function drawOutline(x, y, wx, wy, h, color, hei, draw) {
    ctx.beginPath();
    if (draw) {
        ctx.rect(x - wx - 4, y - h - (wx * 0.5 + wy * 0.5) - (hei - 1) * 25 - 4, 40 + 8, 46 + (hei - 1) * 25 + 8);
    }
    var rectX = x - wx;
    var rectY = y - h - (wx * 0.5 + wy * 0.5) - (hei - 1) * 26;
    var rectW = 40;
    var rectH = 46 + (hei - 1) * 26;
    rectObj["rect" + n] = {
        x: rectX,
        y: rectY,
        w: rectW,
        h: rectH
    };
    //console.log(rectObj["rect" + n]);
    n++;

    /*console.log("X | ", x - wx);
    console.log("Y | ", y - h - (wx * 0.5 + wy * 0.5) - (hei - 1) * 26);
    console.log("W | ", 40);
    console.log("H | ", 46 + (hei - 1) * 26);
    console.log(y - h - (wx * 0.5 + wy * 0.5));*/
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.stroke();
}

//Funkcija za risanje kvadrata okoli kocke (offset, visina, vidno/nevidno)
function outline(o, hei, draw) {
    var off = 60;
    var num = 0;
    off *= o;
    num += y;
    drawOutline(
        width / 2 - 350 + off,
        height / 2 + y / 2 - num,
        x1,
        x2,
        y,
        "#8b0000",
        hei,
        draw
    );
}

function generateRandomColumn() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    left = randNum();
    right = randNum();
    if (right > left || right == left) {
        generateRandomColumn();
    } else {
        draw_all(false);
        drawBottomLeft(left, false);
        drawBottomRight(right, true);
    }
    drawCursor();
}

//Ponovno narise canvas po premiku cursorja
function redraw() {
    draw_all(false);
    drawBottomLeft(left, false);
    drawBottomRight(right, true);
}

//Narise 10 stolpcev od 1 do 10
function draw_all(frame) {
    for (var a = 1; a <= 10; a++) {
        var off = 60;
        var num = 0;
        off *= a;
        for (var i = 0; i < a; i++) {
            num += y;
            drawCube(
                width / 2 - 350 + off,
                height / 2 + y / 2 - num,
                x1,
                x2,
                y,
                color,
                frame
            );
        }
        outline(a, i);
    }
}

//Spodnji desni stolpec
function drawBottomLeft(h, frame) {
    var num = 0;
    for (var i = 0; i < h; i++) {
        num += y;
        drawCube(
            width / 2 - 500,
            height / 2 + y / 2 + 175 - num,
            x1,
            x2,
            y,
            color,
            frame
        );
    }
}

//Spodni desni stolpec
function drawBottomRight(h, frame) {
    var num = 0;
    for (var i = 0; i < h; i++) {
        num += y;
        drawCube(
            width / 2 - 400,
            height / 2 + y / 2 + 175 - num,
            x1,
            x2,
            y,
            color,
            frame
        );
    }
}

function try_again() {
    $("#popup-wrapper").css("display", "none");
    popup = false;
}

function new_game() {
    generateRandomColumn();
    $("#popup-wrapper").css("display", "none");
    popup = false;
}

window.addEventListener("keydown", function (event) {
    var correctKey = false;
    if (event.defaultPrevented) {
        return;
    }
    switch (event.key) {
        case "W":
        case "w":
            cursorY -= cursorOffset;
            correctKey = true;
            break;
        case "A":
        case "a":
            if(!popup){
            cursorX -= cursorOffset;
            correctKey = true;
            }else{
                $("#button-try_again").focus();
            }
            break;
        case "S":
        case "s":
            cursorY += cursorOffset;
            correctKey = true;
            break;
        case "d":
        case "D":
            if(!popup){
            cursorX += cursorOffset;
            correctKey = true;
            }else{
                $("#button-new_game").focus();
            }
            break;
        case "Enter":
            keys['Enter'] = true;
            checkEsc();
            if(!popup){
             correctKey = true;
            }
            break;
        case "Escape":
            keys['Esc'] = true;
            checkEsc();
            break;
        default:
            break;
    }
    if (correctKey) {
        canvas.width += 0;
        redraw();
        checkCursorPos();
        drawCursor();
        event.preventDefault();
    }
}, true);

window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    switch (event.key) {
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
}, true);

function checkEsc() {
    if (keys["Esc"] == true && keys["Enter"] == true) {
        window.location.href = "index.html";
    }
}
// Preveri ce je cursor na kocki
function checkCursorPos() {
    for (var i = 1; i <= 10; i++) {
        if (cursorX >= rectObj["rect" + i].x && cursorX <= rectObj["rect" + i].x + rectObj["rect" + i].w && cursorY >= rectObj["rect" + i].y && cursorY <= rectObj["rect" + i].y + rectObj["rect" + i].h) {
            console.log("cursor in rect: " + i);
            outline(i, i, true);
            if (keys.Enter == true) {
                if (i + right == left) {
                    $("#button-try_again").css("display", "none");
                    $("#popup-text").html("Pravilen odgovor!");
                    $("#popup-text").css("color", "green");
                    $("#popup-wrapper").css("display", "flex");
                    $("#button-new_game").focus();
                } else {
                    $("#button-try_again").css("display", "");
                    $("#popup-text").html("Napačen odgovor!");
                    $("#popup-text").css("color", "red");
                    $("#popup-wrapper").css("display", "flex");
                    $("#button-try_again").focus();
                }
                popup = true;
            }
            break;
        }
    }
}
