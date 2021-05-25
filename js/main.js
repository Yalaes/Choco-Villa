"use strict"
const topLink = document.querySelector('.top-link'); // back to top btn

// show / hide the btn when scrolling
window.onscroll = () => {
    if ((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100))
    {
        topLink.classList.add("show")
    } else {
        topLink.classList.remove("show")
    }
   
}

