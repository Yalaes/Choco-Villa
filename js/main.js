"use strict"
const topLink = document.querySelector('.top-link'); // back to top btn

// show / hide the btn when scrolling from the top of the page (AKA the user start scrolling)
window.onscroll = () => {
    if ((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100))
    {
        topLink.classList.add("show")
    } else {
        topLink.classList.remove("show")
    }
   
}

// toogle menu when click on burger btn

// when click on
const burgerBtn = document.querySelector(".wrap-burger-btn");
//change class for
const burgerIcon = document.querySelector(".burger-icon");
const navMenuDeploy = document.querySelector(".nav__menu--deploy");
// to close the menu when click on link
const navLinks = document.querySelectorAll(".nav__item--link");

burgerBtn.addEventListener("click", () => {
    burgerIcon.classList.toggle("burger-icon--cross");
    navMenuDeploy.classList.toggle("show");
})

navLinks.forEach(  link => {
    link.addEventListener("click", () => {
        navMenuDeploy.classList.remove("show");
        burgerIcon.classList.remove("burger-icon--cross");
    })
})

