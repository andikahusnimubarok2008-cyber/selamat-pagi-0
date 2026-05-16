const text = "Selamat Pagi ☀️";
let index = 0;

function typingEffect(){
  if(index < text.length){
    document.getElementById("typing").innerHTML += text.charAt(index);

    index++;

    setTimeout(typingEffect,120);
  }
}

typingEffect();

function updateClock(){
  const now = new Date();

  const time = now.toLocaleTimeString("id-ID");

  document.getElementById("clock").innerHTML =
    "Jam sekarang: " + time;
}

setInterval(updateClock,1000);

updateClock();

document
.getElementById("panda")
.addEventListener("click",(e)=>{

  for(let i=0;i<8;i++){
    createHeart(e.clientX,e.clientY);
  }

});

function createHeart(x,y){

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "💖";

  heart.style.left =
    x + (Math.random()*60-30) + "px";

  heart.style.top = y + "px";

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },4000);

}