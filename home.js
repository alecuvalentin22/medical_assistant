window.onload = init;

function init(){
    mybutton = document.getElementById("myBtn");
    let showGraphAudio = new Audio('./resources/soundEffects/navbar.mp3');
    let navLinks = document.querySelectorAll('.nav-link');
    let brand = document.querySelector('.navbar-brand');
    console.log(brand);
    brand.addEventListener('click', () => showGraphAudio.play());
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            showGraphAudio.play();
        });
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


