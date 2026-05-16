const text =
"Selamat Pagi ☀️";

let index = 0;

/* TYPING */

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

/* JAM */

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

/* LOVE EFFECT */

function spawnLove(x,y){

  for(let i=0;i<10;i++){

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
    x + "px";

    love.style.top =
    y + "px";

    love.style.fontSize =
    (18 + Math.random()*18)
    + "px";

    love.style.setProperty(
      "--random-x",
      Math.random()
    );

    document.body
    .appendChild(love);

    setTimeout(()=>{

      love.remove();

    },3000);

  }

}

/* DEBU PERI */

function createDust(x,y){

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
    (Math.random()*80-40)
    + "px"
  );

  dust.style.setProperty(
    "--y",
    (Math.random()*100)
    + "px"
  );

  document.body
  .appendChild(dust);

  setTimeout(()=>{

    dust.remove();

  },1000);

}

/* TOUCH HP */

document.addEventListener(
"touchstart",
(e)=>{

  spawnLove(
    e.touches[0].clientX,
    e.touches[0].clientY
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

/* PC */

document.addEventListener(
"click",
(e)=>{

  spawnLove(
    e.clientX,
    e.clientY
  );

});

document.addEventListener(
"mousemove",
(e)=>{

  createDust(
    e.clientX,
    e.clientY
  );

});

/* SPARKLE */

for(let i=0;i<20;i++){

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
