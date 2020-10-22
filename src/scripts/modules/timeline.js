import ifElementViewport from './ifElViewPort';

function timeLine (timelineEl){

  const items = document.querySelectorAll(timelineEl);

   function callbackFunc (){
     for (var i=0; i < items.length; i++){
      if (ifElementViewport(items[i])) {
        items[i].classList.add("in-view");
      }else if (!ifElementViewport(items[i])){
        items[i].classList.remove("in-view");
      }
     }
   } 
   window.addEventListener("load", callbackFunc);
   window.addEventListener("resize", callbackFunc);
   window.addEventListener("scroll", callbackFunc);
}

export default timeLine;