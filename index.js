
window.onload = function () {

    const NAVLINKS = document.querySelectorAll('.nav-link');
    const HAMBURGER = document.querySelector('.hamburger');
    const HAMBURGER_TEXT = document.querySelector('.hamburger i');

    window.onresize = function () {
        if (window.innerWidth > 500) {
            if (NAVLINKS[0].classList.contains('active')) {
                NAVLINKS.forEach((element) => {
                    element.classList.remove('active');
                });
                HAMBURGER_TEXT.innerHTML = 'menu';
            }
            console.log('Width is samller than 500px. Made Menu Btn Visible');
        }
    }

    // Handle Menu Click
    HAMBURGER.onclick = function () {

        if (NAVLINKS[0].classList.contains('active')) {
            // Menu is visible
            NAVLINKS.forEach((element) => {
                element.classList.remove('active');
            })
            HAMBURGER_TEXT.innerHTML = 'menu';
        } else {
            // Menu is not visible
            NAVLINKS.forEach((element) => {
                element.classList.add('active');
            })
            HAMBURGER_TEXT.innerHTML = 'close';
        }
    }
}