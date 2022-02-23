'use strict';
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');

  open.addEventListener('click', ()=> {
    overlay.classList.toggle('show');
  });
  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
  });
}
