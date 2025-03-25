var preloader = document.getElementsByClassName("preloader")[0];
var heroContent = document.getElementsByClassName("move-from-left")

window.onload = function () {
    setTimeout(function () {
        preloader.style.opacity = 0;
        preloader.style.transition = "opacity 0.3s ease";
        setTimeout(function () {
            preloader.style.display = "none";

        }, 400)
    }, 1000)

    heroContent[0].style.animation = "move 1.4s ease-out"
    heroContent[1].style.animation = "move 1.4s 0.15s ease-out"
    heroContent[2].style.animation = "move 1.4s 0.3s ease-out"
}

// =======================================

var header = document.getElementsByTagName("header")[0];
var offers = document.getElementsByClassName("offer");
var serviceCard = document.getElementsByClassName("service-card")


window.onscroll = function () {
    if (scrollY > 440) {
        header.classList.add("fixed-bar");
        offers[0].style.animation = "fadeInUp 1.5s forwards";
        offers[1].style.animation = "fadeInUp 1.5s 0.4s forwards";
        offers[2].style.animation = "fadeInUp 1.5s 0.8s forwards";
    }
    else {
        header.classList.remove("fixed-bar")
    }

    if (scrollY > 2000) {
        serviceCard[0].style.animation = "fadeInUp 1.5s forwards";
        serviceCard[1].style.animation = "fadeInUp 1.5s 0.15s forwards";
        serviceCard[2].style.animation = "fadeInUp 1.5s 0.3s forwards";
        serviceCard[3].style.animation = "fadeInUp 1.5s 0.45s forwards";
    }

}


/////////////////////////////////////////////////////////////

// var top = document.getElementsByClassName("top")[0];

// top.onclick = function () {
//     window.scrollTo({ top: 0, behavior: "smooth" })
// }

/////////////////////////////////////////////////////////////

var slideActive = document.getElementsByClassName("slide-move")
var active = document.getElementsByClassName("active")[0]
var move = document.getElementsByClassName("move")
var i = 0
function right() {
    slideActive[1 - i].style.animation = "slide-right 1s forwards";
    slideActive[i].style.animation = "slide-right2 1s forwards";
    slideActive[1 - i].classList.toggle("slide-active");
    slideActive[i].classList.toggle("slide-active");
    move[1 - i].classList.toggle("active");
    move[i].classList.toggle("active");
    i++
    i %= 2
}

function left() {
    slideActive[1 - i].style.animation = "slide-left2 1s forwards";
    slideActive[i].style.animation = "slide-left 1s forwards";
    slideActive[1 - i].classList.toggle("slide-active");
    slideActive[i].classList.toggle("slide-active");
    move[1 - i].classList.toggle("active");
    move[i].classList.toggle("active");
    i++
    i %= 2
}

setInterval(right, 4000)