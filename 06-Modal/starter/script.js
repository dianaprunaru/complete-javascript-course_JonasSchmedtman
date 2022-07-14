'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// here the function has been transformed into a const and the code has been refactored.
// the second argument has become a variable
btnCloseModal.addEventListener('click', closeModal);

// same as above:
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  // if the pressed key was Esc, then we have to check if the modal is NOT hidden
  // we close the modal if it does NOT contain the hidden class, by calling the
  //   variable which stores the closing modal function
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
