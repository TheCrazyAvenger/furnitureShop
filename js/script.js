const modalButton = document.querySelector('[data-modal-button]'),
      modal = document.querySelector('[data-modal]'),
      modalWindow = document.querySelector('.modal__window'),
      closemodalButton = document.querySelector('[data-modal-close]'),
      submitmodalButton = document.querySelector('[data-modal-submit]'),
      form  = document.querySelector('.modal_content'),
      modalName = document.getElementById('modal_name'),
      modalTel = document.getElementById('modal_telephone');

modalButton.addEventListener('click', function(){
    modal.classList.add('modal_active');
    openAnimation();
});

closemodalButton.addEventListener('click', function(){
    modal.classList.remove('modal_active');
});

modal.addEventListener('click', function(){
    modal.classList.remove('modal_active');
});

modal.querySelector('.modal__window').addEventListener('click', function(event){
    event.stopPropagation();
});

modalName.addEventListener("input", inputCheck, false);

modalTel.addEventListener("input", inputCheck, false);
form.addEventListener("submit", function (event) {
  if (!modalName.validity.valid || modalName.value == "") {
    modalName.classList.add('input_modal_error');
    event.preventDefault();
  }
  if (!modalTel.validity.valid || modalTel.value == "") {
    modalTel.classList.add('input_modal_error');
    event.preventDefault();
  }
}, false);

function inputCheck () {
  if (this.validity.valid) {
    this.classList.remove('input_modal_error');
  }
};

function openAnimation () {
  var animationOpen = modalWindow.animate([
    {
      transform: 'translate(-50%, -20%)',
      top: '20%'
    },
    {transform: 'translate(-50%, -50%)',
      top: '50%'
  }
  ], 200);
  animationOpen.addEventListener('finish', function() {
    modalWindow.style.transform = 'translate(-50%, -50%)';
    modalWindow.style.top = '50%';
  });
};