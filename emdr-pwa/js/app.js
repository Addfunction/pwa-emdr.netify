
let dot = document.getElementById('dot');
let info = document.getElementById('info');
let speedInput = document.getElementById('speed');
let sizeInput = document.getElementById('size');
let intensityInput = document.getElementById('intensity');
let durationInput = document.getElementById('duration');

let x = 0;
let direction = 1;
let animationFrame;
let audioLeft = new Audio('assets/left.mp3');
let audioRight = new Audio('assets/right.mp3');

const tips = [
  "Bilateral stimulering aktiverer begge hjernehalvdeler.",
  "EMDR kan bidra til stressreduksjon og fokus.",
  "Positive tanker styrker mentale reseptorer.",
  "Fokusert oppmerksomhet forbedrer bearbeiding."
];

function updateDot() {
  let speed = parseInt(speedInput.value);
  let size = parseInt(sizeInput.value);
  let intensity = parseFloat(intensityInput.value);

  dot.style.width = size + 'px';
  dot.style.height = size + 'px';
  dot.style.opacity = intensity;

  x += direction * speed;
  if (x > window.innerWidth - size || x < 0) {
    direction *= -1;
    if (direction > 0) audioLeft.play();
    else audioRight.play();
  }
  dot.style.left = x + 'px';
  animationFrame = requestAnimationFrame(updateDot);
}

function startSession() {
  let duration = parseInt(durationInput.value) * 60;
  let countdown = duration;
  info.innerText = tips[Math.floor(Math.random() * tips.length)] + "
Økten varer i " + durationInput.value + " minutter.";
  x = 0;
  direction = 1;
  updateDot();
  let timer = setInterval(() => {
    countdown--;
    if (countdown <= 0) {
      cancelAnimationFrame(animationFrame);
      clearInterval(timer);
      info.innerText = "Økten er ferdig. Bra jobbet!";
    }
  }, 1000);
}
