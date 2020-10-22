
import ifElementViewport from './ifElViewPort';

function animation(){

  function titleAmination  () {
    const title = document.querySelectorAll('.section__title');
    function callBackResult (){
      for (var i=0; i < title.length; i++){
        if (ifElementViewport(title[i])){
          title[i].classList.remove('outview');
          title[i].classList.add('inview');
        } else if (!ifElementViewport(title[i])){
          title[i].classList.remove('inview');
          title[i].classList.add('outview');

        }
      }
    }
    window.addEventListener("load", callBackResult);
    window.addEventListener("resize", callBackResult);
    window.addEventListener("scroll", callBackResult);
  }
  titleAmination();





}
export default animation;