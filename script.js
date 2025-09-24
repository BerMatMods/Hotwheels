// URLs de los tres coches
const carImages = [
  "https://i.postimg.cc/vBLWf8c9/1758738785240-removebg-preview.png",
  "https://i.postimg.cc/FzT3CPbH/1758738796993-removebg-preview.png",
  "https://i.postimg.cc/SRScr0MP/1758738810254-removebg-preview.png"
];

const fullLetter = `Hola, amor.

Hoy celebro no solo a los carritos Hot Wheels, sino a ti: el hombre que hace que mi mundo gire más rápido, más brillante y con más propósito.

Cada vez que te veo, siento esa chispa… esa aceleración en el pecho que ni mil motores podrían igualar. Eres mi pista segura, mi refugio en cada curva de la vida, y el compañero con el que quiero cruzar todas las metas.

Gracias por ser mi campeón, mi risa en los días grises, y ese fuego constante que me recuerda que el amor verdadero existe.

Te amo más que a mil colecciones de Hot Wheels, más que a todas las pistas del mundo… más que a la velocidad misma.

Siempre tuya,
💋`;

let currentSlide = 0;
const currentCarImg = document.getElementById('currentCar');
const indicators = document.querySelectorAll('.indicator');

function updateSlide() {
  currentCarImg.src = carImages[currentSlide];
  currentCarImg.style.opacity = '0';
  setTimeout(() => {
    currentCarImg.style.opacity = '1';
  }, 50);

  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % carImages.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + carImages.length) % carImages.length;
  updateSlide();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlide();
}

// Inicializar carrusel
updateSlide();

// === Carta automática ===
function typeWriter(text, elementId, speed = 40) {
  const element = document.getElementById(elementId);
  let i = 0;
  element.innerHTML = '';
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

function showLetter() {
  document.getElementById('letterModal').style.display = 'flex';
  document.getElementById('letterText').innerHTML = '';
  setTimeout(() => {
    typeWriter(fullLetter, 'letterText');
  }, 300);
}

function closeLetter() {
  document.getElementById('letterModal').style.display = 'none';
}

function showGiftCard() {
  document.getElementById('giftCardModal').style.display = 'flex';
}

function closeGiftCard() {
  document.getElementById('giftCardModal').style.display = 'none';
}

function createExplosion(e) {
  const emojis = ['🔥', '💥', '❤️', '🚗', '🏁', '✨', '💖', '⚡'];
  const count = 18;
  for (let i = 0; i < count; i++) {
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${e.clientX}px`;
    emoji.style.top = `${e.clientY}px`;
    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 150;
    emoji.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
    emoji.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 1200);
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLetter();
    closeGiftCard();
  }
});
