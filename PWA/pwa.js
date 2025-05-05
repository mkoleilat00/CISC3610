const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');
const selector = document.getElementById('topicSelector');
const descriptionDiv = document.getElementById('description');
const audio = document.getElementById('topicAudio');
const playButton = document.getElementById('playAudio');

let data;

fetch('pwa.json')
  .then(response => response.json())
  .then(json => {
    data = json.space;
    updateScene(0);
  });

selector.addEventListener('change', (e) => {
  const index = parseInt(e.target.value);
  updateScene(index);
});

playButton.addEventListener('click', () => {
  if (audio.src) {
    audio.play();
  }
});

function updateScene(index) {
  const topic = data[index];

  // Draw background
  const img = new Image();
  img.src = topic.image;
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  // Update description
  descriptionDiv.innerText = topic.description;

  // Load audio
  audio.src = topic.audio;
}
