
function init() {
    can = document.getElementById('MyCanvasArea'),
    ctx = can.getContext('2d');
    x = 10; y = 10;
    imageObj = new Image();
    imageObj.src = 'smoking_colon.jpg';
    imageObj.onload = function () {
        ctx.drawImage(imageObj, x, y, 200, 200);
        drawInvertedImage();
        drawGrayscaleImage();
        drawRedImage();
        drawSepiaImage();
        drawNoisedImage();  
}
  
}

function drawInvertedImage() {
    imageData = ctx.getImageData(x, y, can.width, can.height);
    imgPixels = imageData.data;
    for ( i = 0; i < imgPixels.length; i += 4) {
        imgPixels[i] = 255 - imgPixels[i]; // red
        imgPixels[i + 1] = 255 - imgPixels[i + 1];// green
        imgPixels[i + 2] = 255 - imgPixels[i + 2];// blue
    }
    ctx.putImageData(imageData, 220, 10);
}
function drawGrayscaleImage() {
    imageData = ctx.getImageData(x, y, 200, 200);
    imgPixels = imageData.data;
    for ( i = 0; i < imgPixels.length; i += 4) {
        red = imgPixels[i];
        green = imgPixels[i + 1];
        blue = imgPixels[i + 2];
        avg = (red + green + blue) / 3;
        imgPixels[i] = avg;
        imgPixels[i + 1] = avg;
        imgPixels[i + 2] = avg;
    }
    ctx.putImageData(imageData, 430, 10);
}
function drawRedImage() {
    imageData = ctx.getImageData(x, y, 200, 200);
    imgPixels = imageData.data;
    for ( i = 0; i < imgPixels.length; i += 4) {
        imgPixels[i] = 255;
    }
    ctx.putImageData(imageData, 10, 220);
}
function drawSepiaImage() {
    imageData = ctx.getImageData(x, y, 200, 200);
    imgPixels = imageData.data;
    for ( i = 0; i < imgPixels.length; i += 4) {
        red = imgPixels[i];
        green = imgPixels[i + 1];
        blue = imgPixels[i + 2];
        imgPixels[i] = (red * 0.393) + (green * 0.769) + (blue * 0.189);
        imgPixels[i + 1] = (red * 0.349) + (green * 0.686) + (blue * 0.168);
        imgPixels[i + 2] = (red * 0.272) + (green * 0.534) + (blue * 0.131);
    }
    ctx.putImageData(imageData, 220, 220);
}
function drawNoisedImage() {
    imageData = ctx.getImageData(x, y, 200, 200);
    imgPixels = imageData.data;
    for ( i = 0; i < imgPixels.length; i += 4) {
        random1 = 0.6 + Math.random() * 0.4;
        random2 = 0.6 + Math.random() * 0.4;
        random3 = 0.6 + Math.random() * 0.4;
        imgPixels[i] = imgPixels[i] * random1 + 10;
        imgPixels[i + 1] = imgPixels[i + 1] * random2 + 10;
        imgPixels[i + 2] = imgPixels[i + 2] * random3 - 10;
    }
    ctx.putImageData(imageData, 430, 220);
}
