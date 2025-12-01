const animeList = [
    // SERIES
  { title: "Euphoria", img: "Images/Series/Euphoria.jpg", likedBy: "Katt", color: "#9c27b0", type: "Serie" },
  { title: "Stranger Things", img: "Images/Series/Stranger-Things.jpg", likedBy: "Katt", color: "#ff3d00", type: "Serie" },
  { title: "Dr. House", img: "Images/Series/Dr-House.jpg", likedBy: "Katt", color: "#607d8b", type: "Serie" },
  { title: "The Umbrella Academy", img: "Images/Series/The-Umbrella-Academy.jpg", likedBy: "Katt", color: "#607d8b", type: "Serie" },
  { title: "Malcom in the Middle", img: "Images/Series/Malcom-in-the-Middle.jpg", likedBy: "Ambos", color: "#607d8b", type: "Serie" },

  // PELÍCULAS
  { title: "Sonic", img: "Images/Movies/Sonic.jpg", likedBy: "Ambos", color: "#2196f3", type: "Película" },
  { title: "Shrek", img: "Images/Movies/Shrek.jpg", likedBy: "Ambos", color: "#4caf50", type: "Película" },
  { title: "Alicia en el País de las Maravillas", img: "Images/Movies/Alicia-en-el-Pais-de-las-Maravillas.jpg", likedBy: "Katt", color: "#e91e63", type: "Película" },
  { title: "Cars", img: "Images/Movies/Cars.jpg", likedBy: "Ambos", color: "#ff9800", type: "Película" },
  { title: "La Forma del Agua", img: "Images/Movies/La-Forma-del-Agua.jpg", likedBy: "Katt", color: "#00bcd4", type: "Película" },
  { title: "Spiderman", img: "Images/Movies/Spiderman.jpg", likedBy: "Ambos", color: "#f44336", type: "Película" },
  { title: "El Viaje de Chihiro", img: "Images/Movies/El-Viaje-de-Chihiro.jpg", likedBy: "Katt", color: "#f44336", type: "Película" },
  { title: "Coraline", img: "Images/Movies/Coraline.jpg", likedBy: "Katt", color: "#2c4e99ff", type: "Película" },
  { title: "El Cadaver de la Novia", img: "Images/Movies/El-Cadaver-de-la-Novia.jpg", likedBy: "Katt", color: "#7dabffff", type: "Película" },
  { title: "Iron Man", img: "Images/Movies/Iron-Man.jpg", likedBy: "Ambos", color: "#f44336", type: "Película" },
  { title: "Cómo Entrenar a tu Dragón", img: "Images/Movies/Como-Entrenar-a-tu-Dragon.jpg", likedBy: "Ambos", color: "#f44336", type: "Película" },
  { title: "Kung Fu Panda", img: "Images/Movies/Kung-Fu-Panda.jpg", likedBy: "Ambos", color: "#f44336", type: "Película" },
  { title: "Zootopia", img: "Images/Movies/Zootopia.jpg", likedBy: "David", color: "#9c27b0", type: "Película" },

  // ANIMES
  { title: "Pseudo Harem", img: "Images/Animes/Pseudo-Harem.jpg", likedBy: "Katt", color: "#ffb3e6", type: "Anime" },
  { title: "Dragon Ball", img: "Images/Animes/Dragon-Ball.jpg", likedBy: "David", color: "#f97316", type: "Anime" },
  { title: "The Fragrant Flower Blooms with Dignity", img: "Images/Animes/The-Fragrant-Flower-Blooms-with-Dignity.jpg", likedBy: "David", color: "#f9a8d4", type: "Anime" },
  { title: "Attack on Titan", img: "Images/Animes/Attack-on-Titan.jpg", likedBy: "Ambos", color: "#e4b580ff", type: "Anime" },
  { title: "Dan Da Dan", img: "Images/Animes/Dan-Da-Dan.jpg", likedBy: "Ambos", color: "#c084fc", type: "Anime" },
  { title: "My Hero Academia", img: "Images/Animes/My-Hero-Academia.jpg", likedBy: "David", color: "#ffcc00", type: "Anime" },
  { title: "Jujutsu Kaisen", img: "Images/Animes/Jujutsu-Kaisen.jpg", likedBy: "Ambos", color: "#b02727ff", type: "Anime" },
  { title: "Chainsaw Man", img: "Images/Animes/Chainsaw-Man.jpg", likedBy: "Ambos", color: "#ff2222ff", type: "Anime" },
  { title: "One Piece", img: "Images/Animes/One-Piece.jpg", likedBy: "David", color: "#e60800ff", type: "Anime" },
  { title: "Mob Psycho 100", img: "Images/Animes/Mob-Psycho.jpg", likedBy: "David", color: "#5f01b8ff", type: "Anime" },
  { title: "Demon Slayer", img: "Images/Animes/Demon-Slayer.jpg", likedBy: "Ambos", color: "#ff7043", type: "Anime" },
  { title: "Ponyo", img: "Images/Animes/Ponyo.jpg", likedBy: "Ambos", color: "#7ed6f8ff", type: "Anime" },
  { title: "El Castillo Vagabundo de Howl", img: "Images/Animes/El-Castillo-Vagabundo-de-Howl.jpg", likedBy: "Katt", color: "#8bc34a", type: "Anime" },
  { title: "Cyberpunk Edgerunners", img: "Images/Animes/Cyberpunk-Edgerunners.jpg", likedBy: "David", color: "#4caf50", type: "Anime" },
  { title: "Your Lie in April", img: "Images/Animes/Your-Lie-in-April.jpg", likedBy: "David", color: "#afa04cff", type: "Anime" },
  { title: "Horimiya", img: "Images/Animes/Horimiya.jpg", likedBy: "David", color: "#81694eff", type: "Anime" },
  { title: "Tokyo Ghoul", img: "Images/Animes/Tokyo-Ghoul.jpg", likedBy: "David", color: "#6d1b7b", type: "Anime" },
];





const totalQuestions = animeList.length;
let score = 0;
let remaining = [...animeList];
let currentAnime = null;
let answerLocked = false;

const animeCard = document.getElementById("animeCard");
const titleEl = document.getElementById("animeTitle");
const imgEl = document.getElementById("animeImage");
const typeEl = document.getElementById("animeType");
const scoreEl = document.getElementById("scoreDisplay");
const msgEl = document.getElementById("resultMessage");
const buttonsContainer = document.getElementById("buttonsContainer");

scoreEl.textContent = `Score: ${score} / ${totalQuestions}`;

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, duration = 220, type = "sine", gain = 0.08) {
  if (audioCtx.state === "suspended") audioCtx.resume();
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.value = gain;
  o.connect(g);
  g.connect(audioCtx.destination);
  o.start();
  setTimeout(() => { o.stop(); o.disconnect(); g.disconnect(); }, duration);
}
function playSuccessTone() {
  playTone(880, 120, "sine", 0.06);
  setTimeout(() => playTone(1320, 120, "sine", 0.05), 120);
}
function playErrorTone() {
  playTone(180, 220, "sawtooth", 0.09);
  setTimeout(() => playTone(140, 140, "sawtooth", 0.07), 160);
}

function disableButtons() {
  document.querySelectorAll("#buttonsContainer button").forEach(btn => btn.disabled = true);
}
function enableButtons() {
  document.querySelectorAll("#buttonsContainer button").forEach(btn => btn.disabled = false);
}
function resetButtonVisuals() {
  document.querySelectorAll("#buttonsContainer button").forEach(btn => {
    btn.classList.remove("correct", "incorrect");
    btn.style.boxShadow = "";
    btn.style.backgroundColor = "";
    btn.style.borderColor = "";
    btn.blur();
  });
}
function resetCardVisual() {
  animeCard.style.transition = "";
  animeCard.style.boxShadow = "";
  animeCard.style.borderColor = "";
  animeCard.style.transform = "";
  animeCard.style.opacity = "";
}

function shakeCard() {
  animeCard.animate([
    { transform: "translateX(0)" },
    { transform: "translateX(-8px)" },
    { transform: "translateX(6px)" },
    { transform: "translateX(-6px)" },
    { transform: "translateX(4px)" },
    { transform: "translateX(0)" }
  ], { duration: 520, easing: "ease-in-out" });
}
function tintCard(color, glow) {
  animeCard.style.borderColor = color;
  animeCard.style.boxShadow = `0 0 ${glow}px ${color}`;
}
function showResultMessage(text, type) {
  msgEl.textContent = text;
  msgEl.style.opacity = "1";
  msgEl.style.transform = "translateY(0)";
  msgEl.style.transition = "all 260ms ease";
  if (type === "success") {
    msgEl.style.color = "#7bffb0";
    msgEl.style.textShadow = "0 0 16px rgba(60,255,140,0.6)";
  } else {
    msgEl.style.color = "#ff8a8a";
    msgEl.style.textShadow = "0 0 16px rgba(255,90,90,0.6)";
  }
}
function clearResultMessage() {
  msgEl.style.opacity = "0";
  msgEl.style.transform = "translateY(-6px)";
  msgEl.textContent = "";
  msgEl.style.textShadow = "";
  msgEl.style.color = "";
}
function showGameFinished() {
  titleEl.textContent = "Juego Finalizado";
  imgEl.style.display = "none";
  typeEl.style.display = "none";
  buttonsContainer.style.display = "none";
  showResultMessage("Gracias por jugar", "success");
  scoreEl.textContent = `Score final: ${score} / ${totalQuestions}`;
  currentAnime = null;
}

function loadAnime() {
  resetButtonVisuals();
  resetCardVisual();
  clearResultMessage();
  answerLocked = false;

  if (remaining.length === 0) {
    showGameFinished();
    return;
  }

  const index = Math.floor(Math.random() * remaining.length);
  currentAnime = remaining[index];

  document.documentElement.style.setProperty("--anime-color", currentAnime.color);
  animeCard.style.boxShadow = `0 0 25px var(--anime-color)`;
  animeCard.style.borderColor = `var(--anime-color)`;

  animeCard.style.opacity = "0";
  animeCard.style.transform = "scale(0.9)";
  animeCard.animate([
    { opacity: 0, transform: "scale(0.9)" },
    { opacity: 1, transform: "scale(1)" }
  ], { duration: 400, easing: "ease-out", fill: "forwards" });

  titleEl.textContent = currentAnime.title;
  imgEl.src = currentAnime.img;
  imgEl.style.display = "block";
  typeEl.textContent = currentAnime.type || "Anime";

  buttonsContainer.style.display = "flex";
  remaining.splice(index, 1);

  enableButtons();
  scoreEl.textContent = `Score: ${score} / ${totalQuestions}`;
}

function selectAnswer(choice) {
  if (!currentAnime || answerLocked) return;
  answerLocked = true;
  disableButtons();
  resetButtonVisuals();
  clearResultMessage();

  const correct = choice === currentAnime.likedBy;

  if (correct) {
    score++;
    tintCard("#6EE7B7", 28);
    showResultMessage("¡Correcto!", "success");
    playSuccessTone();
  } else {
    tintCard("#FF8A8A", 28);
    shakeCard();
    showResultMessage("Incorrecto", "error");
    playErrorTone();
  }

  const buttons = Array.from(document.querySelectorAll("#buttonsContainer button"));
  const chosenBtn = buttons.find(b => b.textContent.trim() === choice);

  if (chosenBtn) {
    if (correct) {
      chosenBtn.style.boxShadow = "0 0 18px rgba(110, 231, 183, 0.6)";
      chosenBtn.style.backgroundColor = "rgba(110,231,183,0.08)";
      chosenBtn.style.borderColor = "rgba(110,231,183,0.35)";
    } else {
      chosenBtn.style.boxShadow = "0 0 18px rgba(255, 138, 138, 0.6)";
      chosenBtn.style.backgroundColor = "rgba(255,138,138,0.08)";
      chosenBtn.style.borderColor = "rgba(255,138,138,0.35)";
    }
  }

  scoreEl.classList.add("scale-105");
  scoreEl.textContent = `Score: ${score} / ${totalQuestions}`;
  setTimeout(() => scoreEl.classList.remove("scale-105"), 200);

  setTimeout(() => {
    resetCardVisual();
    resetButtonVisuals();
    clearResultMessage();
    animeCard.style.borderColor = `var(--anime-color)`;
    animeCard.style.boxShadow = `0 0 22px var(--anime-color)`;
    enableButtons();
    answerLocked = false;
    loadAnime();
  }, 1000);
}

loadAnime();
