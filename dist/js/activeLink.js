var currentLink = null;
function changeLinkColor(link, scroll) {
    console.log('', scroll);
    window.scrollTo({
        top: document.querySelector(`.${scroll}`).offsetTop - 70,
        // left: 100,
        behavior: 'smooth'
    });
    if (currentLink !== null) {
        currentLink.style.borderColor = link.style.borderColor;
    }
    link.style.borderColor = '#ffbc00';
    currentLink = link;
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };
function myFunction() {
    var header = document.querySelector(".header-home");
    if ((window.pageYOffset) > header.offsetHeight - 71) {
        document.querySelector('.header-inner').classList.add("sub-header");


    }
    if (window.pageYOffset < header.offsetHeight - 71) {
        document.querySelector('.header-inner').classList.remove("sub-header");
    }
}
