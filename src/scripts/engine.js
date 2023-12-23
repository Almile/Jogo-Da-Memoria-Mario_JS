const images = [
  "src/images/luigi.png",
  "src/images/luigi.png",
  "src/images/mario.png",
  "src/images/mario.png",
  "src/images/fantasma.png",
  "src/images/fantasma.png",
  "src/images/marioAmarelo.png",
  "src/images/marioAmarelo.png",
  "src/images/peach.png",
  "src/images/peach.png",
  "src/images/planta.png",
  "src/images/planta.png",
  "src/images/tody.png",
  "src/images/tody.png",
  "src/images/vilao.png",
  "src/images/vilao.png",
];

const jogo = document.querySelector(".container");

const backgroundMusic = new Audio('src/audios/Overworld2.mp3');
backgroundMusic.volume = 0.1;
backgroundMusic.loop = true; 
function startGame() {
  jogo.style.display = "flex";
  document.querySelector(".start").style.display = "none";

  backgroundMusic.play();
}


let openCards = [];

let shuffleImages = images.sort(() => (Math.random() > 0.5 ? 1 : -1));

for (let i = 0; i < images.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  let img = document.createElement("img");
  img.src = shuffleImages[i];
  img.allow = ("autoplay");
  box.appendChild(img);
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}


function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
    playSound("moeda.mp3");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === images.length) {
    alert("Você venceu!");
    window.location.reload();
  }
}

function playSound(audioName) {
  let audio = new Audio(`src/audios/${audioName}`);
  audio.volume = 0.1;
  audio.play();
}