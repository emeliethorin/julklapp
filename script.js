const unlockBtn = document.getElementById('unlockBtn');
const gift = document.getElementById('gift');
const present = document.getElementById('present');

unlockBtn.addEventListener('click', () => {
  gift.textContent = '🎉🎁';
  gift.classList.add('open');
  present.classList.add('show');
});
