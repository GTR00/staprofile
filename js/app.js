// Inspired by:  https://stackoverflow.com/a/42460980/2501386
// and: https://stackoverflow.com/a/39998734/2501386



function growShrinkLogo() {
    var scrollForLogo = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var Logo = document.getElementById("nav-logo-size");
    var endOfDocumentTop = 125;
    var sizeToggle = 0;


    if (scrollForLogo > endOfDocumentTop) {
        Logo.classList.add('resizedLogo');
        Logo.classList.remove('fullSizeLogo');
        // sizeToggle = 1;
    } else if (scrollForLogo <= endOfDocumentTop) {
        Logo.classList.add('fullSizeLogo');
        Logo.classList.remove('resizedLogo');
        // sizeToggle = 0;
    }
}

function scrollOpaqueNav() {
    var scrollForNav = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var NavBarSpace = document.getElementById("nav-container");
    var navBar = document.getElementById("nav-container-text");
    var distanceFromDocumentTop = 275;
    var bgcolor = 0;

    if (scrollForNav > distanceFromDocumentTop) {
        NavBarSpace.classList.add('nav-bg-scrolled-down'); NavBarSpace.classList.remove('nav-bg-top');
        // bgcolor = 1;
    } else if (scrollForNav <= distanceFromDocumentTop) {
        NavBarSpace.classList.remove('nav-bg-scrolled-down');
        NavBarSpace.classList.add('nav-bg-top');
        // bgcolor = 0;
    }
}

window.addEventListener('scroll', growShrinkLogo);
window.addEventListener('scroll', scrollOpaqueNav);