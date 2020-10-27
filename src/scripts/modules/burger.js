function burger (){

  function burgerTriggle  () {
    const burgerBtn = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile');
    const menuLink = document.querySelectorAll('.mobile__menu-list-link');

    burgerBtn.addEventListener('click', () =>{
      burgerBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.querySelector('body').classList.toggle('active');
    });
    // if (window.matchMedia("(max-width: 1060px )").matches){
     
    // }
    menuLink.forEach(item => {
      item.addEventListener('click',(e)=>{
        burgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.querySelector('body').classList.toggle('active');

      });
    });
  }

burgerTriggle();
}

export default burger;