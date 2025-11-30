const animeList = [
  {
    title: "Your Name",
    img: "Images/Anime/yourname.jpg",
    likedBy: "Ambos",
    color: "#7dd3fc"
  },
  {
    title: "Dragon Ball Z",
    img: "Images/Anime/dbz.jpg",
    likedBy: "David",
    color: "#f97316"
  },
  {
    title: "Sailor Moon",
    img: "Images/Anime/sailormoon.jpg",
    likedBy: "Kattherinne",
    color: "#f9a8d4"
  },
  {
    title: "Attack on Titan",
    img: "Images/Anime/aot.jpg",
    likedBy: "Ambos",
    color: "#a3e635"
  },
  {
    title: "Komi-san",
    img: "Images/Anime/komi.jpg",
    likedBy: "Kattherinne",
    color: "#c084fc"
  }
];

let score = 0;
let remaining = [...animeList];
let currentAnime = null;
let answerLocked = false; // 🔒 Anti-spam

const titleEl = document.getElementById("animeTitle");
const imgEl = document.getElementById("animeImage");
const scoreEl = document.getElementById("scoreDisplay");
const msgEl = document.getElementById("resultMessage");
const buttonsContainer = document.getElementById("buttonsContainer");

function disableButtons() {
  document.querySelectorAll("#buttonsContainer button")
    .forEach(btn => btn.disabled = true);
}

function enableButtons() {
  document.querySelectorAll("#buttonsContainer button")
    .forEach(btn => btn.disabled = false);
}

function showGameFinished() {
  titleEl.textContent = "";
  imgEl.style.display = "none";
  buttonsContainer.style.display = "none";

  msgEl.innerHTML = "🎉 Juego Finalizado<br><span class='text-blue-300'>Gracias por jugar</span>";
  msgEl.className = "text-blue-300 text-xl font-bold mt-6";

  scoreEl.textContent = "Score final: " + score;
}

function loadAnime() {
  answerLocked = false; // 🔓 desbloquear tras cargar
  if (remaining.length === 0) {
    showGameFinished();
    return;
  }

  const index = Math.floor(Math.random() * remaining.length);
  currentAnime = remaining[index];

  // Mostrar contenido
  titleEl.textContent = currentAnime.title;
  imgEl.src = currentAnime.img;

  // 🔵 Aplicar color dinámico al body o container
  document.documentElement.style.setProperty("--anime-color", currentAnime.color);

  imgEl.style.display = "block";
  buttonsContainer.style.display = "flex";

  remaining.splice(index, 1);

  enableButtons();
}

function selectAnswer(choice) {
  if (!currentAnime || answerLocked) return; // ⛔ evita spam
  answerLocked = true; // 🔒 bloquear respuesta al primer clic

  disableButtons();

  if (choice === currentAnime.likedBy) {
    score++;
    msgEl.textContent = "✅ ¡Correcto!";
    msgEl.className = "text-green-400 font-bold mt-4";
  } else {
    msgEl.textContent = "❌ Incorrecto";
    msgEl.className = "text-red-400 font-bold mt-4";
  }

  scoreEl.textContent = "Score: " + score;

  setTimeout(() => {
    msgEl.textContent = "";
    loadAnime();
  }, 900);
}

loadAnime();
