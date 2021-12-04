window.onload = init;

function init(){
    let soundEffect = new Audio('../../resources/soundEffects/navbar.mp3');

    let navLinks = document.querySelectorAll('.nav-link');
    let brand = document.querySelector('.navbar-brand');

    brand.addEventListener('click', (e) => {
        playSoundEffect(e, "../../index.html", soundEffect)
    });

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', (e) => {
            playSoundEffect(e, e.target.href, soundEffect)
        });
    }

    function playSoundEffect(e, url, soundEffect) {
        e.preventDefault();
        soundEffect.play();
        setTimeout(() => {
            window.location.href = url;
        }, 200);
    }
}
