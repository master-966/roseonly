
var banner = document.querySelector('.banner');
var imgli = document.querySelectorAll('.imgs li')
var toRight = document.querySelector('.right');
var toLeft = document.querySelector('.left')
var circle = document.querySelector('.circle');
var cli = document.querySelectorAll('.circle li')
var index = 0;
var timer;

start();



for (var i = 0; i < imgli.length; i++) {
    imgli[i].index = i;
    imgli[i].onmouseover = function () {
        clearInterval(timer);
        toRight.style.display = "block";
        toLeft.style.display = "block";
        index = this.index;
        activeOne();
    }
    imgli[i].onmouseout = function () {
        toRight.style.display = "none";
        toLeft.style.display = "none";
        start();
    }

}

banner.onmouseover = function () {
    start();
    toRight.style.display = "block";
    toLeft.style.display = "block";
}
banner.onmouseout = function () {
    start();
    toRight.style.display = "none";
    toLeft.style.display = "none";
}

function start() {
    clearInterval(timer);
    timer = setInterval(function () {
        index++;
        if (index == 6) {
            index = 0;
        }
        activeOne();
    }, 2000)
}

function activeOne() {
    for (var i = 0; i < imgli.length; i++) {

        cli[i].classList.remove('active');
        imgli[i].classList.remove('show');
    }
    imgli[index].classList.add('show');
    cli[index].classList.add('active');

}


toRight.onclick = function () {
    clearInterval(timer);
    if (index == 5) {
        index = 0
    } else {
        index++;
    }
    activeOne();
   
}

toRight.onmouseover=function(){
   start();
    toRight.style.display = "block";
    toLeft.style.display = "block";
}
toRight.onmouseout=function(){
    start();
    toRight.style.display = "none";
    toLeft.style.display = "none";
}

toLeft.onclick = function () {
clearInterval(timer);
    if (index == 0) {
        index = 5
    } else {
        index--;
    }
    activeOne();
}

    toLeft.onmouseover=function(){
        start();
        toRight.style.display = "block";
        toLeft.style.display = "block";
    
    }

    toLeft.onmouseout=function(){
        start();
        toRight.style.display = "none";
        toLeft.style.display = "none";
    
    }

for(var i=0;i<cli.length;i++){
    cli[i].index = i;
    cli[i].onclick=function(){
        for(var j=0;j<cli.length;j++){
            // console.log(cli[j])
            cli[j].classList.remove('active');
            imgli[j].classList.remove('show');
        }
        cli[this.index].classList.add('active');
        imgli[this.index].classList.add('show');
    }
}
$(function(){
    $(".hidhead").load("./T_header.html");
    $(".foot").load("./d_foot.html");
})
