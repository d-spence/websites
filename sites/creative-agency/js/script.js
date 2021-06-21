const toggle = document.querySelector('#toggle');
const navigation = document.querySelector('#navigation');
const menuIcon = document.querySelector('#menu-icon');

function menuToggle() {
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');

  menuIcon.name = (toggle.classList.contains('active')) ? 'close' : 'menu';
}

toggle.addEventListener('click', menuToggle);