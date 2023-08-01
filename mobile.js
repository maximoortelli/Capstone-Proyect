const background = document.querySelectorAll('#background');
const mobileButton = document.querySelectorAll('#mobileButton');
const exitnow = document.querySelectorAll('#exit');
const connects = document.querySelectorAll('#elements li a');

mobileButton.addEventListener('click', () => {
  background.classList.add('active');
});

exitnow.addEventListener('click', () => {
  background.classList.remove('active');
});

connects.forEach((u) => {
  u.addEventListener('click', () => {
    background.classList.remove('active');
  });
});