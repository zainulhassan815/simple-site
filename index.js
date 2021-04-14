
window.onload = function () {

    const NAVLINKS = document.querySelectorAll('.nav-link');
    const HAMBURGER = document.querySelector('.hamburger');
    const HAMBURGER_TEXT = document.querySelector('.hamburger i');
    const PLAYSTORE_URL = 'https://play.google.com/store/apps/details?id=com.facebook.orca';
    const PROMR_URL = 'https://www.youtube.com/c/QuickTipsbyzain';
    const NAVBAR = document.querySelector('.navbar');

    window.onresize = function () {
        if (window.innerWidth > 500) {
            if (NAVLINKS[0].classList.contains('active')) {
                NAVLINKS.forEach((element) => {
                    element.classList.remove('active');
                });
                HAMBURGER_TEXT.innerHTML = 'menu';
            }
        }
    }

    window.onscroll = function() {
        // Check Scroll Y and increase nabar shadow
        if (window.scrollY > 0) {
            NAVBAR.classList.add('navbar-scroll');
        } else {
            NAVBAR.classList.remove('navbar-scroll');
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

    // Handle Download Btn Click
    var downloadBtn = document.querySelector('.download-btn');
    downloadBtn.onclick = function() {
        window.open(PLAYSTORE_URL,'_blank');
    }

    // Handle Promo Btn Click
    var promoBtn = document.querySelector('.promo-btn');
    promoBtn.onclick = function() {
        window.open(PROMR_URL);
    }

    //Handle Clicks on Project Cards
    const PROJECT_URLS = [
        'https://youtu.be/C42NAQJG6Eg',
        'https://community.kodular.io/t/huge-update-2-0-plyr-video-player-custom-design-qualities-captions-thumbnail-attaractive-ui/112735',
        'https://youtu.be/8FdvPk6MWwQ',
        'https://youtu.be/kfiozFhNhdc',
        'https://youtu.be/mC3j2-iRZzI',
        'https://youtu.be/LOKIpkI4BEc'
    ];

    var projectCards = document.querySelectorAll('.project');
     
    for(let i = 0; i < projectCards.length; i++) {
        projectCards[i].addEventListener("click",()=>{
            window.open(PROJECT_URLS[i]);
        })
    }
 
}