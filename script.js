var i = 0;
var txt = document.getElementById("intro-text").innerHTML;
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

