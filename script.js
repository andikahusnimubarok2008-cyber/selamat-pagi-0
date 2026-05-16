const text = "Selamat Pagi ☀️";

let index = 0;

/* ========================= */
/* TYPING EFFECT */
/* ========================= */

function typingEffect(){

  if(index < text.length){

    document
    .getElementById("typing")
    .innerHTML +=
    text.charAt(index);

    index++;

    setTimeout(
      typingEffect,
      120
    );

  }

}

typingEffect();

/* ========================= */
/* JAM */
/* ========================= */

function updateClock(){

  const now =
  new Date();

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

/* ========================= */
/* LOVE EFFECT */
/* ========================= */

document.addEventListener(
"click",
(e)=>{

  spawnLove(
    e.clientX,
    e.clientY
  );

});

document.addEventListener(
"touchstart",
(e)=>{

  spawnLove(
    e.touches[0].clientX,
    e.touches[0].clientY
  );

});

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

/* ========================= */
/* DEBU PERI */
/* ========================= */

document.addEventListener(
"mousemove",
(e)=>{

  createDust(
    e.clientX,
    e.clientY
  );

});

document.addEventListener(
"touchmove",
(e)=>{

  createDust(
    e.touches[0].clientX,
    e.touches[0].clientY
  );

});

function createDust(x,y){

  for(let i=0;i<3;i++){

    const dust =
    document.createElement("div");

    dust.classList.add(
      "fairy-dust"
    );

    dust.style.left =
    x + "px";

    dust.style.top =
    y + "px";

    dust.style.setProperty(
      "--x",
      (Math.random()*120-60)
      + "px"
    );

    dust.style.setProperty(
      "--y",
      (Math.random()*120)
      + "px"
    );

    document.body
    .appendChild(dust);

    setTimeout(()=>{

      dust.remove();

    },1500);

  }

}

/* ========================= */
/* SPARKLE RANDOM */
/* ========================= */

for(let i=0;i<25;i++){

  const sparkle =
  document.createElement("div");

  sparkle.classList.add(
    "sparkle"
  );

  sparkle.style.left =
  Math.random()
  * window.innerWidth
  + "px";

  sparkle.style.top =
  Math.random()
  * window.innerHeight
  + "px";

  sparkle.style.animationDelay =
  Math.random()*2 + "s";

  document.body
  .appendChild(sparkle);

}