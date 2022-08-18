const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

modalButtons.forEach(function (i) {
  i.addEventListener('click', function () {
    const modalId = this.dataset.modalButton;
    const modal = document.querySelector('#' + modalId);
    modal.classList.remove('hidden');

    modal.querySelector('.modal-window, .modal-two').addEventListener('click', function (e) {
      e.stopPropagation();
    });
  })
});

modalClosebuttons.forEach(function (i) {
  i.addEventListener('click', function () {
    const modal = this.closest('[data-modal]');
    modal.classList.add('hidden');
  })
});

allModals.forEach(function (i) {
  i.addEventListener('click', function () {
    this.classList.add('hidden');
  })
});
