
function modalImg (modalEl,closeEl){
const modal = document.querySelector(modalEl);
const modalClose = document.querySelector(closeEl);
const img =document.querySelectorAll('[data-imgzoom]');
const captionText = document.querySelector('.zoom__modal-caption');
const modalImg = document.querySelector('.zoom__modal-content');

img.forEach(image =>{
  image.addEventListener('click', ()=> {
    modal.style.display = 'block';
    modalImg.src = image.src;
    console.log(image.src);
    captionText.innerHTML = image.alt;
    document.querySelector('.site').style.overflow = 'hidden';
  });
  modalClose.addEventListener('click', ()=>{
    modal.style.display = 'none';
    document.querySelector('.site').style.overflow = '';
  });

});

}

export default modalImg;