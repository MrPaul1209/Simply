
// menu mobile
//menu mobile - open & close
var mobileIcon = document.querySelector(".mobile-icon");
var mobileOpen = document.querySelector(".mobile-icon i:first-child");
var mobileClose = document.querySelector(".mobile-icon i:last-child");
var mainMenu = document.querySelector(".main-menu");

mobileIcon.onclick = function() {
    mainMenu.classList.toggle("moblie--active");
    var mActive = document.querySelector(".main-menu.moblie--active");
    if(mActive){
        mobileIcon.style.borderColor = "var(--primary)";
        mobileOpen.style.display = "none";
        mobileClose.style.display = "block";
    }
    else{
        mobileIcon.style.borderColor = "var(--black)";
        mobileOpen.style.display = "block";
        mobileClose.style.display = "none";
    }
}

// open menu child

var mainMenuItem = document.querySelectorAll(".main-menu__item");
var menuIconChild1 = document.querySelector(".main-menu__item-link i:first-child");
var menuIconChild2 = document.querySelector(".main-menu__item-link i:last-child");
var menu_M = window.matchMedia("(max-width: 991px)");

console.log(mainMenuItem);


mainMenuItem.forEach(function(e,i) {
    var menuChild = mainMenuItem[i].querySelector(".menu-child__list");

    e.onclick = function() {
        var menuChildActive = this.querySelector(".menu-child__list.menu-child__list--active");
        var mainMenuItemLink = this.querySelector(".main-menu__item-link");
        if(menuChildActive == null && menu_M) {
            menuChild.classList.add("menu-child__list--active");
            mainMenuItemLink.style.color = "var(--primary)";
            menuIconChild1.style.display = "block";
            menuIconChild2.style.display = "none";
        } else if(menuChildActive != null && menu_M) {
            menuChild.classList.remove("menu-child__list--active");
            mainMenuItemLink.style.color = "var(--text1)";
            menuIconChild1.style.display = "none";
            menuIconChild2.style.display = "block";
        }
    }
});

// slider

var btnSlider = document.querySelectorAll(".box-slider .btn-slider");

var homeSliderItem = document.querySelectorAll(".home-slider__item");
var total = homeSliderItem.length *100;
var l = 0;
var movePer = 100;

btnSlider[1].onclick = function () {
    l += movePer;
    for(var e of homeSliderItem){
        if(l == total){l=0}
        var totalL = "-" + l + "%";
        e.style.transform = `translateX(${totalL})`;
    }

}

btnSlider[0].onclick = function () {
    l -= movePer;
    for(var e of homeSliderItem){
        if(l < 0){l=0}
        var totalL = "-" + l + "%";
        e.style.transform = `translateX(${totalL})`;
    }
}
