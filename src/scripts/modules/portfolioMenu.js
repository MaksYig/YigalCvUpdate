/* Function potfolio toggle menu */

function portfolioToogleMenu (){

  try {
    const menu = document.querySelector('.portfolio__menu');
    const portfolioItem = document.querySelectorAll('.portfolio .work-container');
  
    menu.addEventListener('click',(e)=>{
      if (e.target && e.target.nodeName ===  "BUTTON"){
        if (e.target.dataset.filter == 'jsscript'){
          portfolioItem.forEach(item =>{
             if (item.dataset.cont !== 'jsscript'){
              item.style.display = 'none';
            }else if(item.dataset.cont == 'jsscript'){
              item.style.display = '';
            }
          });
        }
        if (e.target.dataset.filter == 'landing'){
          portfolioItem.forEach(item =>{
  
             if (item.dataset.cont !== 'landing'){
              item.style.display = 'none';
            }else if (item.dataset.cont == 'landing'){
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
