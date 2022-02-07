var currentLink = null;
//when user click on links in header, it will scroll to the section
function changeLinkColor(link, scroll) {
    console.log('', window.innerWidth);
    if (window.innerWidth < 650) {
        window.scrollTo({
            top: document.querySelector(`.${scroll}`).offsetTop - 120,
            behavior: 'smooth'
        })
    } else {
        window.scrollTo({
            top: document.querySelector(`.${scroll}`).offsetTop - 70,
            behavior: 'smooth'
        });
    }

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
    if (window.innerWidth < 650) {
        if ((window.pageYOffset) > header.offsetHeight - 121) {
            document.querySelector('.header-inner').classList.add("sub-header");
        }
        if (window.pageYOffset < header.offsetHeight - 121) {
            document.querySelector('.header-inner').classList.remove("sub-header");
        }
    }
    else {
        if ((window.pageYOffset) > header.offsetHeight - 71) {
            document.querySelector('.header-inner').classList.add("sub-header");
        }
        if (window.pageYOffset < header.offsetHeight - 71) {
            document.querySelector('.header-inner').classList.remove("sub-header");
        }
    }

}
