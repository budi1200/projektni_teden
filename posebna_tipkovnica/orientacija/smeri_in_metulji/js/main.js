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
var metulj = false;
var tipka = false;

//NAVODILA LocalStorage - START
if(localStorage.getItem('Neki') == "block")
{
    $("#navodila").css("display", localStorage.getItem('Neki'));
}
else if(localStorage.getItem('Neki') == "none")
{
    $("#navodila").css("display", localStorage.getItem('Neki'));
}
else{}
//NAVODILA LocalStorage - END

$("#button-up").focus();    //PRVA TIPKA - FOCUS

function ChangeFocus(a)
{
    switch (a)
    {
        case '-':
            i--;
            break;
        case '+':
            i++;
            break;
        default:
            break;
    }

    if(i == 4)
    {
        i = 0;
    }
    else if(i < 0)
    {
        i = 3;
    }

    $(ar[i]).focus();
}

var index = ["",""];

window.addEventListener("keydown", function(event){
    if(event.defaultPrevented)
    {
        return;
    }
    if(StageOne == false)
    {
        switch(event.key)
        {
            case "d":
            case "D":
                ChangeFocus('+');
                break;
            case "a":
            case "A":
                ChangeFocus('-');
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
    else if(StageOne == true)
    {
        if(tipka == false)
        {
            if(event.key == "Escape")
            {
                location.reload();
            }

            console.log("PRED");

            if(metulj == false)
            {
                console.log("PO");

                tipka = true;

                index[0] = ar.indexOf(izbranaSmer);
                switch(index[0])
                {
                    case 0:
                        index[0] = 'w';
                        index[1] = "W";
                        break;
                    case 1:
                        index[0] = 'a';
                        index[1] = "A";
                        break;
                    case 2:
                        index[0] = 's';
                        index[1] = "S";
                        break;
                    case 3:
                        index[0] = 'd';
                        index[1] = "D";
                        break;
                    default:
                        break;
                }

                if(index[0] == event.key || index[1] == event.key)
                {
                    switch(index[0])
                    {
                        case 'w':
                            Metulj('w');
                            break;
                        case 'a':
                            Metulj('a');
                            break;
                        case 's':
                            Metulj('s');
                            break;
                        case 'd':
                            Metulj('d');
                            break;
                        default:
                            break;
                    }
                }
            }
            /*if(metulj == true && event.key == "a" || metulj == true && event.key == "A")
            {
                tipka = true;
                Metulj();
            }*/
        }
    }

    event.preventDefault();
}, true);

function IzbranaSmerFun()
{
    $(".button-link").css("display", "none");
    $(izbranaSmer).css("display", "block");

    StageOne = true;

    if(izbranaSmer == "#button-up")
    {
        $(izbranaSmer).css("position", "absolute");
    }
    else{}
}

window.addEventListener("keyup", function(event){
    if(event.defaultPrevented)
    {
        return;
    }

    tipka = false;

    switch(event.key)
    {
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
}, true);


function CheckEsc()
{
    if(keys["Esc"] == true && keys["Enter"] == true)
    {
        window.location.href = "../index.html";
    }
}

function Navodila()
{
    var x = $("#navodila").css("display");

    if(x == "none")
    {
        $("#navodila").css("display", "block");
        localStorage.setItem('Neki', "block");
    }
    else if(x == "block")
    {
        $("#navodila").css("display", "none");
        localStorage.setItem('Neki', "none");
    }
    else{}
}

function Metulj(a)
{
    metulj = true;
        //START GIBANJE
    switch(a)
    {
        case 'w':
            MetuljDolGor();
            break;
        case 'a':
            MetuljDesnoLevo();
            break;
        case 's':
            MetuljGorDol();
            break;
        case 'd':
            MetuljLevoDesno();
            break;
        default:
            break;
    }
        //STOP GIBANJE
    setTimeout(function(){
        metulj = false;
    }, 6300);
}

function MetuljDolGor()
{
    metulj = true;
    console.log("aaa");
    $("#metulj").attr("src", "../../../img/metulj_gibanje_1.png");
    $("#metulj").css("position", "absolute");
    $("#metulj").css("display", "block");
    $("#metulj").css("bottom", "-10px");
    $("#metulj").css("left", "45%");
    /*$("#metulj").animate({
        bottom: '200px',
        left: '30%',
        //transform: 'rotate(0deg)'
    }, 1200);*/
    for(var i = 0; i < 50; i++)
    {
        setTimeout(function(){
    AnimationLoop();
            },1500);
    }
}

function MetuljDesnoLevo()
{
    metulj = true;
    console.log("aaa");
    $("#metulj").css("position", "absolute");
    $("#metulj").css("right", "-10px");
    $("#metulj").css("top", "45%");
    $("#metulj").css("display", "block");
    $("#metulj").animate({
        right: '200px',
        top: '30%',
        //transform: 'rotate(0deg)'
    }, 1200);
    $("#metulj").animate({
        right: '350px',
        top: '63%',
        //transform: 'rotate(0deg)'
    }, 1200);
    $("#metulj").animate({
        right: '500px',
        top: '48%',
        //transform: 'rotate(0deg)'
    }, 1200);
    $("#metulj").animate({
        right: '700px',
        top: '26%',
        //transform: 'rotate(0deg)'
    }, 1200);
    $("#metulj").animate({
        right: '900px',
        top: '72%',
        //transform: 'rotate(0deg)'
    }, 1500);
    $("#metulj").animate({
        right: '1300px',
        top: '7%',
        //transform: 'rotate(0deg)'
    }, 1500);
    $("#metulj").animate({
        right: '1800px',
        top: '13%',
        //transform: 'rotate(0deg)'
    }, 1500);
}

function MetuljGorDol()
{
    metulj = true;
    console.log("aaa");
    $("#metulj").css("position", "absolute");
    $("#metulj").css("top", "-10px");
    $("#metulj").css("left", "45%");
    $("#metulj").css("display", "block");
    $("#metulj").animate({
        top: '200px',
        left: '30%',
        //transform: 'rotate(0deg)'
    }, 1200);
    $("#metulj").animate({
        top: '350px',
        left: '63%',
        //transform: 'rotate(0deg)'
    }, 1200);
    $("#metulj").animate({
        top: '500px',
        left: '48%',
        //transform: 'rotate(0deg)'
    }, 1200);
    $("#metulj").animate({
        top: '700px',
        left: '26%',
        //transform: 'rotate(0deg)'
    }, 1200);
    $("#metulj").animate({
        top: '900px',
        left: '90%',
        //transform: 'rotate(0deg)'
    }, 1500);
}

function MetuljLevoDesno()
{
    metulj = true;
    console.log("aaa");
    $("#metulj").css("position", "absolute");
    $("#metulj").css("left", "-10px");
    $("#metulj").css("top", "45%");
    $("#metulj").css("display", "block");
    $("#metulj").animate({
        left: '200px',
        top: '30%',
        //transform: 'rotate(0deg)'
    }, 1200);
    $("#metulj").animate({
        left: '350px',
        top: '63%',
        //transform: 'rotate(0deg)'
    }, 1200);
    $("#metulj").animate({
        left: '500px',
        top: '48%',
        //transform: 'rotate(0deg)'
    }, 1200);
    $("#metulj").animate({
        left: '700px',
        top: '26%',
        //transform: 'rotate(0deg)'
    }, 1200);
    $("#metulj").animate({
        left: '900px',
        top: '72%',
        //transform: 'rotate(0deg)'
    }, 1500);
    $("#metulj").animate({
        left: '1300px',
        top: '7%',
        //transform: 'rotate(0deg)'
    }, 1500);
    $("#metulj").animate({
        left: '1800px',
        top: '13%',
        //transform: 'rotate(0deg)'
    }, 1500);
}

var y = 0;
var y1 = 0;

 var x = true;

function AnimationLoop()
{
    //console.log("a");
        //x = $("#metulj").attr("src");
        console.log(x);
        if(x == true)
        {
            //y = $("#metulj1").css("bottom").slice(0, -2);
            //y = parseInt(y);
            y += 5;
            console.log(y);
            var str = y + "px";
            console.log(str);
            $("#metulj").animate({
                bottom: str
            }, 500);
            setTimeout(function(){
            console.log($("#metulj").attr("src"));
            $("#metulj").attr("src", "../../../img/metulj_gibanje_2.png");
            console.log($("#metulj").attr("src"));
            }, 1000);
            x = false;
        }
        else if(x == false)
        {
            console.log("ELSE IF");
            //y1 = $("#metulj2").css("bottom").slice(0, -2);
            //y1 = parseInt(y1);
            y1 += 5;
            console.log(y1);
            var str = y1 + "px";
            console.log(str);
            $("#metulj").animate({
                bottom: str
            }, 500);
            //$("#metulj2").css("bottom", y1 + "px");
            setTimeout(function(){
            console.log($("#metulj").attr("src"));
            $("#metulj").attr("src", "../../../img/metulj_gibanje_1.png");
            console.log($("#metulj").attr("src"));
            }, 1000);
            x = true;
        }

}
