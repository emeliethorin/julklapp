const unlockBtn = document.getElementById('unlockBtn');
const gift = document.getElementById('gift');
const present = document.getElementById('present');

let unlocked = false;

unlockBtn.addEventListener('click', () => {
  if (!unlocked) {
    gift.textContent = '🎉';
    gift.classList.add('open');

    present.classList.add('show'); // 👈 EXPAND HÄR

    unlockBtn.textContent = 'LADDA OM 🔁';
    unlocked = true;
  } else {
    location.reload();
  }
});
