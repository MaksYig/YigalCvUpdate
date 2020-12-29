/* Function potfolio toggle menu */

function portfolioToogleMenu (){

  try {
    const menu = document.querySelector('.portfolio__menu');
    const portfolioItem = document.querySelectorAll('.portfolio .work-container');
    const menuBtn = document.querySelectorAll('.portfolio__menu-btn');
    const backend = document.querySelectorAll('[data-cont="backend"]');
    const frontend = document.querySelectorAll('[data-cont="frontend"]');

    menuBtn[0].firstElementChild.textContent = portfolioItem.length;
    menuBtn[1].firstElementChild.textContent = frontend.length;
    menuBtn[2].firstElementChild.textContent = backend.length;
    
    menu.addEventListener('click',(e)=>{
      if (e.target && e.target.nodeName ===  "BUTTON"){
        if (e.target.dataset.filter == 'backend'){
          portfolioItem.forEach(item =>{
             if (item.dataset.cont !== 'backend'){
              item.style.display = 'none';
            }else if(item.dataset.cont == 'backend'){
              item.style.display = '';
            }
          });
        }
        if (e.target.dataset.filter == 'frontend'){
          portfolioItem.forEach(item =>{
  
             if (item.dataset.cont !== 'frontend'){
              item.style.display = 'none';
            }else if (item.dataset.cont == 'frontend'){
              item.style.display = '';
            }
          });
        }
        if (e.target.dataset.filter == 'all'){
          portfolioItem.forEach(item =>{
            item.style.display = '';
          });
        }
      }
    });
  }catch(e){}
 
}

export default portfolioToogleMenu;
