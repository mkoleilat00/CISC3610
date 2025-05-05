const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');

const backgroundImages = {
  bg1: 'beach.webp',
  bg2: 'forest.avif',
  bg3: 'city.jpg'
};

let characterX = 300;
const characterY = 300;

function loadAndDrawScene() {
  const selectedBg = document.querySelector('input[name="bg"]:checked').value;
  const bgImage = new Image();
  bgImage.src = backgroundImages[selectedBg];
  bgImage.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

    // Character
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(characterX, characterY - 20, 20, 0, Math.PI * 2);
    ctx.fill();

    // Items
    if (document.getElementById('item1').checked) {
      ctx.fillStyle = 'green';
      ctx.fillRect(100, 300, 20, 50); // Tree trunk
      ctx.beginPath();
      ctx.arc(110, 280, 25, 0, Math.PI * 2);
      ctx.fill(); // Tree top
    }

    if (document.getElementById('item2').checked) {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(200, 80, 20, 0, Math.PI * 2);
      ctx.arc(220, 80, 25, 0, Math.PI * 2);
      ctx.arc(240, 80, 20, 0, Math.PI * 2);
      ctx.fill(); // Cloud
    }

    if (document.getElementById('item3').checked) {
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.arc(500, 350, 15, 0, Math.PI * 2);
      ctx.fill(); // Ball
    }
  };
}

document.getElementById('characterSlider').addEventListener('input', (e) => {
  characterX = parseInt(e.target.value);
  loadAndDrawScene();
});

document.querySelectorAll('input[type="radio"]').forEach(r => r.addEventListener('change', loadAndDrawScene));
document.querySelectorAll('input[type="checkbox"]').forEach(c => c.addEventListener('change', loadAndDrawScene));

function playSound(num) {
  document.getElementById(`sound${num}`).play();
}

window.onload = loadAndDrawScene;
