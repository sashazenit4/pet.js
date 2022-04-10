let speak = function () {
    let speech = new SpeechSynthesisUtterance();

    speech.rate = document.getElementById("SPEED_SELECTOR").value;
    speech.text = document.getElementById("TARGET_STRING").value;
    speech.volume = 1;
    speech.lang = "en-US";

    speechSynthesis.speak(speech);
}
