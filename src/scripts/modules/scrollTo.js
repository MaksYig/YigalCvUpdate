

function scrollTo (){

// document.querySelector('.assidebar__menu').addEventListener('click', function(e){

//   if (e.target.classList.contains('assidebar__menu-list-link')){
//     if (e.target.getAttribute('href').match(/#/g)){
//       e.preventDefault();
//       console.log("Its #");
//       const id = e.target.getAttribute('href');
//       document.querySelector(id.replace("0","#")).scrollIntoView({behavior:'smooth'});
//       console.log(id);
//     }



//   }
// });
//   let links = document.querySelectorAll('[href^="#"]'),
//         speed = 0.65;
    
//     links.forEach(link => {
//       console.log(link);
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             if (event.target === link){
              
//             }

//             let widthTop = document.documentElement.scrollTop,
//                 hash = this.hash,
//                 toBlock = document.querySelector(hash).getBoundingClientRect().top,
//                 start = null;

//             requestAnimationFrame(step);

//             function step(time) {
//                 if (start === null) {
//                     start = time;
//                 }

//                 let progress = time - start,
//                     r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

//                     document.documentElement.scrollTo(0, r);

//                 if (r != widthTop + toBlock) {
//                     requestAnimationFrame(step);
//                 } else {
//                     location.hash = hash;
//                 }
//             }
//         });
//     });
}

export default scrollTo;