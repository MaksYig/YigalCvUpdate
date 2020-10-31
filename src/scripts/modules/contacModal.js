import form from './forms';
function contactModal (){

  const contactModalForm = new form ('.modal__contact__form','.contact__name','.contact__email','.contact__message','.contact__btn');

  const modal = document.querySelector(".contact__modal"),
  modalClose = modal.querySelector(".close");

function ModelTriger() {
  const open = document.querySelector("[data-open]");
  open.addEventListener("click", openModal);

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}
ModelTriger();

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("active");
}
function openModal() {
  modal.style.display = "block";
  document.body.classList.add("active");
}


}

export default contactModal;