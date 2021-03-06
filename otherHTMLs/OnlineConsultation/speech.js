let speechRecognition;
let textarea = document.getElementById('symptoms-description');
document.addEventListener('DOMContentLoaded', app);



function app(e) {
    e.preventDefault();
    initSpeechRecognition();
}

function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition ||
        window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        return
    }
    speechRecognition = new SpeechRecognition();
    speechRecognition.continuous = false;
    speechRecognition.interimResults = false;
    speechRecognition.onstart = function() {
        console.log("Recording started. Please use your microphone to tell us your symptoms");
    }
    speechRecognition.onspeechend = () => {
        speechRecognition.stop();
        console.log("Recording stopped.")
    }
    speechRecognition.onresult = function (event) {
        
        if (event.results.length > 0) {
            let current = event.results[event.results.length - 1][0]
            let result = current.transcript;
            console.log(result)
            textarea.append(result);
            
        }
    }
}

let microphoneBtn = document.getElementById('speech-recognition');
microphoneBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!speechRecognition) {
        speechRecognition.stop();
        return;
    }      
    try {
        speechRecognition.start();
    } catch (err) {
        speechRecognition.stop()
    }
})