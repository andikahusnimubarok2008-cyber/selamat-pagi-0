const text = "Selamat Pagi ☀️";
let index = 0;

/* typing */
function typingEffect(){
  if(index < text.length){
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 100);
  }
}
typingEffect();

/* jam */
function updateClock(){
  const now = new Date();
  document.getElementById("clock").innerText =
    "Jam sekarang: " + now.toLocaleTimeString("id-ID");
}

setInterval(updateClock,1000);
updateClock();
