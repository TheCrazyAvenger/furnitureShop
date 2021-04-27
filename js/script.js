const modalButton = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const closemodalButton = document.querySelector('[data-modal-close]');
const submitmodalButton = document.querySelector('[data-modal-submit]');

modalButton.addEventListener('click', function(){
    modal.classList.add('modal_active');
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


var form  = document.querySelector('.modal_content');
var modalName = document.getElementById('modal_name');
var modalTel = document.getElementById('modal_telephone');

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
}