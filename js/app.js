// Inspired by:  https://stackoverflow.com/a/42460980/2501386
// and: https://stackoverflow.com/a/39998734/2501386



function growShrinkLogo() {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var Logo = document.getElementById("nav-logo-size");
    var endOfDocumentTop = 75;
    var sizeToggle = 0;


    if (sizeToggle == 0 && scroll > endOfDocumentTop) {
        Logo.className = 'resizedLogo';
        sizeToggle = 1;
    } else if (sizeToggle == 1 && scroll <= endOfDocumentTop) {
        Logo.className = 'fullSizeLogo';
        size = 0;
    }
}

function scrollOpaqueNav() {
    var scrollForNav = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var NavBarSpace = document.getElementById("nav-container")
    var distanceFromDocumentTop = 275;
    var bgcolor = 0;

    if (bgcolor == 0 && scrollForNav > distanceFromDocumentTop) {
        NavBarSpace.classList.add('nav-bg-scrolled-down');
        NavBarSpace.classList.remove('nav-bg-top');
        bgcolor = 1;
    } else if (bgcolor == 1 && scrollForNav <= distanceFromDocumentTop) {
        NavBarSpace.classList.remove('nav-bg-scrolled-down');
        NavBarSpace.classList.add('nav-bg-top');
        bgcolor = 0;
    }
}

document.addEventListener('scroll', growShrinkLogo);
document.addEventListener('scroll', scrollOpaqueNav);