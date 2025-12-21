const unlockBtn = document.getElementById('unlockBtn');
const gift = document.getElementById('gift');
const present = document.getElementById('present');

let unlocked = false;

unlockBtn.addEventListener('click', () => {
  if (unlocked) return;

  gift.textContent = '🎉';
  gift.classList.add('open');

  present.classList.add('show'); // expand presenten

  // 1️⃣ Fadea bort knappen
  unlockBtn.classList.add('hide');

  // 2️⃣ Ta bort knappen ur layouten när animationen är klar
  unlockBtn.addEventListener(
    'transitionend',
    () => {
      unlockBtn.style.display = 'none';
    },
    { once: true }
  );

  unlocked = true;
});
