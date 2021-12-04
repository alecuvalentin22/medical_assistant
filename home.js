window.onload = init;

function init(){
    mybutton = document.getElementById("myBtn");
    let soundEffect = new Audio('./resources/soundEffects/navbar.mp3');

    let navLinks = document.querySelectorAll('.nav-link');
    let brand = document.querySelector('.navbar-brand');

    console.log(brand);
    brand.addEventListener('click', (e) => {
        playSoundEffect(e, "./index.html", soundEffect)
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
        }, 300);
    }
    
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        } else {
        mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}
