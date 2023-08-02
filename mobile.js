const background = document.querySelector('#background');
const mobileButton = document.querySelector('#mobileButton');
const exitnow = document.querySelector('#exit');
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