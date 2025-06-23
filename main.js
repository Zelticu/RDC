// Fade out loading screen after 2s
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
  }, 2000);
});

// Click the hoop to 'enter'
document.getElementById('hoop').addEventListener('click', () => {
  // Simulate pipe travel: redirect to members.html or clubhouse.html
  window.location.href = "members.html";
});

// Generate random bubbles
for (let i = 0; i < 20; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.width = `${Math.random() * 10 + 10}px`;
  bubble.style.height = bubble.style.width;
  bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
  document.getElementById('scene').appendChild(bubble);
}
