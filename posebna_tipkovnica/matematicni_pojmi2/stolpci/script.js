// Set up our canvas
var canvas = document.getElementById("main_canv");
var width = $(window).width();
var height = $(window).height();
var ctx = canvas.getContext("2d");
canvas.addEventListener('click', on_canvas_click, false);
canvas.width = width;
canvas.height = height;
var left;
var right;
var rectObj = {};
//ctx.clearRect(0, 0, canvas.width, canvas.height);

function on_canvas_click(ev) {
    var clickX = ev.clientX - canvas.offsetLeft;
    var clickY = ev.clientY - canvas.offsetTop;

    for (var i = 1; i <= 10; i++) {
        if (clickX >= rectObj["rect" + i].x && clickX <= rectObj["rect" + i].x + rectObj["rect" + i].w && clickY >= rectObj["rect" + i].y && clickY <= rectObj["rect" + i].y + rectObj["rect" + i].h) {
            console.log("clicked in rect" + i);
            console.log("left ", left);
            console.log("right ", right);
            if (i + right == left) {
                alert("CONGRATS");
            } else {
                alert("Nope");
            }
            break;
        }
    }
}

// Velikost kocke
var x1 = 20;
var x2 = x1;
var y = x1 + 5;
var color = "#525456"; //"#0087ff";

$(document).on("mousemove", function (event) {
    $("#pos").text("pageX: " + event.pageX + ", pageY: " + event.pageY);
});

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

// Draw a cube to the specified specs
function drawCube(x, y, wx, wy, h, color, frame) {
    //left
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    //console.log(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    //console.log(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x, y - h * 1);
    //console.log(x, y - h * 1);
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
    //console.log(x + wy, y - wy * 0.5);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    //console.log(x + wy, y - h - wy * 0.5);
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
    //console.log(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    //console.log(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    //console.log(x + wy, y - h - wy * 0.5);
    ctx.closePath();
    //ctx.rect(x - wx, y - h - (wx * 0.5 + wy * 0.5), 40, 46);
    ctx.fillStyle = shadeColor(color, 20);
    ctx.strokeStyle = shadeColor(color, 60);
    ctx.stroke();
    if (!frame)
        ctx.fill();

}

function drw(o, h, frame) {
    var off = 60;
    var num = 0;
    off *= o;
    for (var i = 0; i < h; i++) {
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
    drawSq(o, h);
}

var n = 1;

function generateSquare2(x, y, wx, wy, h, color, hei) {
    ctx.rect(x - wx, y - h - (wx * 0.5 + wy * 0.5) - (hei - 1) * 25, 40, 46 + (hei - 1) * 25);
    var rectX = x - wx;
    var rectY = y - h - (wx * 0.5 + wy * 0.5) - (hei - 1) * 26;
    var rectW = 40;
    var rectH = 46 + (hei - 1) * 26;
    console.log(rectX, " ", rectY, " ", rectW, " ", rectH);
    rectObj["rect" + n] = {
        x: rectX,
        y: rectY,
        w: rectW,
        h: rectH
    };
    console.log(rectObj["rect" + n]);
    n++;

    /*console.log("X | ", x - wx);
    console.log("Y | ", y - h - (wx * 0.5 + wy * 0.5) - (hei - 1) * 26);
    console.log("W | ", 40);
    console.log("H | ", 46 + (hei - 1) * 26);
    console.log(y - h - (wx * 0.5 + wy * 0.5));*/
    ctx.fillStyle = shadeColor(color, 20);
    ctx.strokeStyle = shadeColor(color, 60);
    ctx.stroke();
    //ctx.fill();
}

function drawSq(o, hei) {
    var off = 60;
    var num = 0;
    off *= o;
    num += y;
    generateSquare2(
        width / 2 - 350 + off,
        height / 2 + y / 2 - num,
        x1,
        x2,
        y,
        color,
        hei,
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
}

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
        drawSq(a, i);
    }
}
