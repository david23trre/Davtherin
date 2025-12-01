  const mensajes = [
    "K: Amo a mi Davisito",
    "Ok mañana💜",
    "D: Mi Katty es la mejor.",
    "D: Amo a mi Katty",
    "Lil bro no tenía nada que hacer🗣️‼️🔥",
    "Refresca la página para ver otro mensaje",
    "D: ¿Se nota que la amo?",
    "K: De lo que sea que estén hechas las almas, la mía y la suya son iguales",
    "Póngase serio ciervo🗣‼",
    "Ya la Carlitos",
    "Qué pasiones???",
    "Ojalá llo-viera",
    
  ];

  
  const index = Math.floor(Math.random() * mensajes.length);
  document.getElementById("minecraft-msg").textContent = mensajes[index];