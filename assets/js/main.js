'use strict';

// Element Toggle Function
const toggleElem = function (elem) { elem.classList.toggle("active"); }

// Navbar Toggle

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navTogglers.length; i++) {
    navTogglers[i].addEventListener("click", function() {
        toggleElem(navbar);
        toggleElem(overlay);
    });
}

// Header Sticky & Back to Top Button

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function() {
    if (this.window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
        header.classList.add("header-anim");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
        header.classList.remove("header-anim");
    }
})

// Search Box Toggle

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
    searchTogglers[i].addEventListener("click", function() {
        toggleElem(searchBox);
    })
}

// Wishlist Button Toggle

const wishListBtns = document.querySelectorAll("[data-wish-btn]");

for (let i = 0; i < wishListBtns.length; i++) {
    wishListBtns[i].addEventListener("click", function() {
        toggleElem(this);
    })
}