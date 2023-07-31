let background = document.querySelectorAll('#background');
let mobileButton = document.querySelectorAll('#mobileButton');
let exitnow = document.querySelectorAll('#exit');
let connects = document.querySelectorAll('#elements li a');

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