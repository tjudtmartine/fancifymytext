function showAlert() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function mooParse() {
    uppercaseText = document.getElementById("textInput").value.toUpperCase();
    sentences = uppercaseText.split(".");

    for (i=0; i<sentences.length; i++) {
        if (sentences[i].trim() !== "") {
            words = sentences[i].trim().split(" ");
            words[words.length -1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    document.getElementById("textInput").value = sentences.join(". ");
}

function fancyShmancy() {
    document.getElementById("textInput").style.fontWeight = "bold";
    document.getElementById("textInput").style.color = "blue";
    document.getElementById("textInput").style.textDecoration = "underline";
}

function boringBetty() {
    document.getElementById("textInput").style.fontWeight = "normal";
    document.getElementById("textInput").style.color = "black";
    document.getElementById("textInput").style.textDecoration = "none";
}