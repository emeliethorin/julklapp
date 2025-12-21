const confettiContainer = document.getElementById('confetti');
const unlockBtn = document.getElementById('unlockBtn');
const gift = document.getElementById('gift');
const present = document.getElementById('present');
const intro = document.querySelector('.intro');

let unlocked = false;

unlockBtn.addEventListener('click', () => {
  if (unlocked) return;

  gift.textContent = '🎉';
  gift.classList.add('open');

  present.classList.add('show');

  // Fadea bort intro
  intro.classList.add('hide');

  intro.addEventListener(
    'transitionend',
    () => {
      intro.style.display = 'none';
    },
    { once: true }
  );

  // Fadea bort knappen
  unlockBtn.classList.add('hide');

  unlockBtn.addEventListener(
    'transitionend',
    () => {
      unlockBtn.style.display = 'none';
    },
    { once: true }
  );

  startConfetti(); // BOOOM

  unlocked = true;

  function startConfetti() {
  const colors = ['#22c55e', '#16a34a', '#facc15', '#ffffff'];

  confettiContainer.style.display = 'block';

  for (let i = 0; i < 50; i++) {
    const c = document.createElement('div');
    c.classList.add('confetti');
    c.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    c.style.left = Math.random() * 100 + '%';
    c.style.width = Math.random() * 8 + 5 + 'px';
    c.style.height = Math.random() * 8 + 5 + 'px';
    c.style.animationDelay = Math.random() * 2 + 's';

    confettiContainer.appendChild(c);
  }

  // 🧹 Stoppa & städa efter 4 sek
  setTimeout(() => {
    confettiContainer.innerHTML = '';
    confettiContainer.style.display = 'none';
  }, 4000);
}

});
