const modalButton = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const closemodalButton = document.querySelector('[data-modal-close]');
console.log (modalButton);

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