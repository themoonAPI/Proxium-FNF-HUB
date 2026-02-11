// Fade out intro after 3 seconds
setTimeout(() => {
  document.getElementById('intro').classList.add('hidden');
  setTimeout(() => {
    document.getElementById('main').classList.remove('hidden');
  }, 1500);
}, 3000);

// Full screen toggle for the whole page or game
const fullBtn = document.getElementById('fullScreenBtn');
fullBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => console.log(err));
    fullBtn.textContent = 'Exit Full Screen';
  } else {
    document.exitFullscreen();
    fullBtn.textContent = 'Full Screen Mode';
  }
});

// For individual game full-screen + exit (you'll add dynamically)
function launchGame(btn) {
  const container = btn.nextElementSibling; // .game-container
  container.classList.remove('hidden');
  btn.textContent = 'Playing...';

  // Optional: Make this game iframe full-screen instead of whole page
  // container.querySelector('iframe').requestFullscreen();
}

// Add exit button logic
document.addEventListener('click', e => {
  if (e.target.classList.contains('exit-full')) {
    const container = e.target.closest('.game-container');
    container.classList.add('hidden');
    // Reset play button text if needed
  }
});
