const text = "Selamat Pagi ☀️";

let index = 0;

/* TYPING TEXT */

function typingEffect(){

  if(index < text.length){

    document
    .getElementById("typing")
    .innerHTML += text.charAt(index);

    index++;

    setTimeout(
      typingEffect,
      120
    );

  }

}

typingEffect();

/* JAM */

function updateClock(){

  const now = new Date();

  const time =
  now.toLocaleTimeString(
    "id-ID"
  );

  document
  .getElementById("clock")
  .innerHTML =
  "Jam sekarang: " + time;

}

setInterval(
  updateClock,
  1000
);

updateClock();

/* LOVE SAAT KARAKTER DIKLIK */

document
.getElementById("panda")
.addEventListener(
"click",
(e)=>{

  spawnLove(
    e.clientX,
    e.clientY
  );

});

/* LOVE SAAT LAYAR DIKLIK */

document.addEventListener(
"click",
(e)=>{

  spawnLove(
    e.clientX,
    e.clientY
  );

});

/* LOVE SAAT HP DISENTUH */

document.addEventListener(
"touchstart",
(e)=>{

  spawnLove(
    e.touches[0].clientX,
    e.touches[0].clientY
  );

});

/* FUNCTION LOVE */

function spawnLove(x,y){

  for(let i=0;i<12;i++){

    const love =
    document.createElement("div");

    love.classList.add("love");

    love.innerHTML =
    ["💖","💕","💗","💓"]
    [
      Math.floor(
        Math.random()*4
      )
    ];

    love.style.left =
    x +
    (Math.random()*80-40)
    + "px";

    love.style.top =
    y +
    (Math.random()*40-20)
    + "px";

    love.style.fontSize =
    (
      20 +
      Math.random()*20
    ) + "px";

    document.body
    .appendChild(love);

    setTimeout(()=>{

      love.remove();

    },3000);

  }

}
