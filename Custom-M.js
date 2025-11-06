  const mensajes = [
    "No sé que poner",
    "Ok mañana💜",
    "Mi Katty es la mejor.",
    "Amo a mi Katty",
    "Lil bro no tenía nada que hacer🗣️‼️🔥",
    "Refresca la página para ver otro mensaje",
    "¿Se nota que la amo?",
  ];

  
  const index = Math.floor(Math.random() * mensajes.length);
  document.getElementById("minecraft-msg").textContent = mensajes[index];