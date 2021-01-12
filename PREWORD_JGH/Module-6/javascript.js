//javascript code goes here

document.getElementById("button1").onclick = function() {grow()};
document.getElementById("button2").onclick = function() {blue()};
document.getElementById("button3").onclick = function() {fade()};
document.getElementById("button4").onclick = function() {reset()};

function grow() {
    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";
}

function blue() {
    document.getElementById("box").style.backgroundColor = "blue";
}

function fade() {
    document.getElementById("box").style.opacity = "50%";
}

function reset() {
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "100%";
}