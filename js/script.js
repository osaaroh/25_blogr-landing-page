let body = document.querySelector("body");
let nav_toggle = document.querySelector(".mobile-menu__icon");
let nav_wrapper = document.querySelector(".nav-list__wrapper");
let nav_list = document.querySelector("nav .nav-list");
let dropdown = document.querySelectorAll(".dropdown");
let dropdown_list = document.querySelectorAll(".dropdown .dropdown-list");
let img_1 = document.querySelector(".section-1__intro-img");
let img_2 = document.querySelector(".section-2__phonesimg");
let img_3 = document.querySelector(".section-3__laptopimg");
let toggledOn = false;
nav_toggle.addEventListener('click', function() {
    toggleMobileNav(toggledOn);
})


function switchToMobileImages() {
    if (document.body.clientWidth < 992) {
        img_1.src = "../images/illustration-editor-mobile.svg";
        img_3.src = "../images/illustration-laptop-mobile.svg";
    } else {
        img_1.src = "../images/illustration-editor-desktop.svg";
        img_3.src = "../images/illustration-laptop-desktop.svg";
    }
}

function checkScreenSize(toggledOnParams) {
    if (toggledOnParams == true) {
        //check screen size in JS
        if (document.body.clientWidth > 992) {

        } else {
            nav_wrapper.style.display = "flex";
            nav_toggle.src = "../images/icon-close.svg";
        }
        switchToMobileImages();
    } else if (toggledOnParams == false) {
        if (document.body.clientWidth > 992) {
            nav_wrapper.style.display = "flex";
        } else {
            nav_wrapper.style.display = "none";
            nav_toggle.src = "../images/icon-hamburger.svg";
        }
        switchToMobileImages()
    }

}

function toggleMobileNav(toggledOnParams) {
    if (toggledOnParams == false) {
        checkScreenSize(true);
        toggledOn = true;
    } else if (toggledOnParams == true) {
        checkScreenSize(false);
        toggledOn = false;
    }
}

function hideAllAndShowCurrent(currentNum) {
    dropdown_list.forEach(
        function(currentdropdown_list, i) {
            if (i != currentNum) {
                dropdown_list[i].style.opacity = "0";
                dropdown_list[i].style.display = "none";
            }
        }
    )
}

//Add click listeners to the menu button and the close button
dropdown.forEach(function(currentDropdownMenu, i) {
    currentDropdownMenu.addEventListener('click', function(e) {
        e.preventDefault()
        hideAllAndShowCurrent(i);
        if (dropdown_list[i].style.display == "none" || !(dropdown_list[i].style.display)) {
            dropdown_list[i].style.display = "flex";
            dropdown_list[i].style.opacity = "1";
        } else {
            dropdown_list[i].style.display = "none";
            dropdown_list[i].style.opacity = "0";
        }
    })
})

//on screen resize ensure nav state is still preserved
//use document.body.clientWidth instead of screen.width
window.addEventListener("resize", function(event) {
    // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight + ' high');
    checkScreenSize(toggledOn);
})
checkScreenSize(toggledOn);


//on scroll, hide dropdown
window.onscroll = function() { hideDropdownOnScroll() };

function hideDropdownOnScroll() {
    if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
        if (document.body.clientWidth > 992) {
            hideAllAndShowCurrent(dropdown_list.length + 1);
        }
    } else {}
}