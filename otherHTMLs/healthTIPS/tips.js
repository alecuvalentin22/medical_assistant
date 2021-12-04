let video;
let canvas;
let ctx;

document.addEventListener('DOMContentLoaded', (ev) => {
    video = document.querySelector('video');
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
})

function snapshot() {
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;

    ctx.drawImage(video, 0, 0);
    let img = canvas.toDataURL();

    let a = document.createElement('a');
    a.setAttribute('download', 'img.png');
    a.setAttribute('href', img);
    a.click();

    delete a;
}

function invert() {
    video.style.filter = "invert(100%)";
}

function sepia() {
    video.style.filter = "sepia(100%)";
}

function black_and_white() {
    video.style.filter = "grayscale(100%)";
}

function no_filter() {
    video.style.filter = "none";
}