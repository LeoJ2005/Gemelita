document.addEventListener("DOMContentLoaded", () => {
  const happyBdayElement = document.getElementById("happy-bday");
  const loveMessage1Element = document.getElementById("love-message-1");
  const loveMessage2Element = document.getElementById("love-message-2");
  const loveMessage3Element = document.getElementById("love-message-3");

  const happyBdayText = "¡Feliz Cumpleaños, Gemelita!";
  const loveMessage1Text = "TE QUIERO...";
  const loveMessage2Text = "TE ADORO...";
  const loveMessage3Text = "Y TE AMO.";

  const typeWriter = (element, text, delay = 0, speed = 150) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        element.style.opacity = 1; // Hacer visible el elemento antes de empezar a escribir
        let i = 0;
        function typing() {
          if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
          } else {
            // Eliminar el cursor de la máquina de escribir al finalizar
            element.style.borderRight = "none";
            resolve();
          }
        }
        typing();
      }, delay);
    });
  };

  // Secuencia de animación
  typeWriter(happyBdayElement, happyBdayText, 0, 100)
    .then(() => typeWriter(loveMessage1Element, loveMessage1Text, 1000)) // 1 segundo después del título
    .then(() => typeWriter(loveMessage2Element, loveMessage2Text, 1000)) // 1 segundo después del primer mensaje
    .then(() => typeWriter(loveMessage3Element, loveMessage3Text, 1000)); // 1 segundo después del segundo mensaje
});
