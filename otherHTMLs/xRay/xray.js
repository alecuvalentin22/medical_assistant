/* let radiographyCanvas = document.getElementById('radiographyCanvas');
let context = radiographyCanvas.getContext('2d')

var startXRayScan;
var scanXrayCanvas;
var contextWebCam;
var video;

function init() {
    startXRayScan = document.querySelector('.start-live-xray')
    video = document.getElementById('SourceVideo')
    scanXrayCanvas = document.getElementById('webcam-canvas')
    contextWebCam = scanXrayCanvas.getContext('2d')

  if (video.readyState >= 3) {
    readyToPlay();
  } else {
    video.addEventListener('canplay', readyToPlay);
  }
  
  startXRayScan.addEventListener('click', function () {
    startCamera();
  });
}

function readyToPlay() {
  scanXrayCanvas.width = video.videoWidth;
  scanXrayCanvas.height = video.videoHeight;
  video.play();
  drawFrame(video);
}

function initCamera(stream) {
  video.srcObject = stream;
}

function startCamera() {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
      .then(initCamera)
      .catch(console.error);
  }
}

function drawFrame(video) {
  contextWebCam.drawImage(video, 0, 0);
  var imageData = contextWebCam.getImageData(0, 0, scanXrayCanvas.width, scanXrayCanvas.height);
  invertColors(imageData.data);
  contextWebCam.putImageData(imageData, 0, 0);
  setTimeout(function () {
    drawFrame(video);
  }, 10);
}

function invertColors(data) {
  for (var i = 0; i < data.length; i+= 4) {
    data[i] = data[i] ^ 255;
    data[i+1] = data[i+1] ^ 255;
    data[i+2] = data[i+2] ^ 255;
  }
}

document.querySelector('body').addEventListener('keypress', (e) => {
  e.preventDefault()
  if(e.keyCode === 13) {
      drawSelectedImages(0)
  }
  if(e.keyCode === 32 ) {
      startXRayScan.click()
  }
});

window.addEventListener('load', init); */




document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });
  
    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
  
      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
  
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
  
  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
  
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
  
    thumbnailElement.dataset.label = file.name;
  
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }
  