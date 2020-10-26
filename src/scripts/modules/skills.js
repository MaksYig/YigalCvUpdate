import ifElementViewport from './ifElViewPort';

function skills() {

  let i = 0;
  const element = document.querySelectorAll('.skillls__bar-box');
  if (i == 0) {
    i = 1;
    const target = document.querySelectorAll('[data-target]');
    const mainContainer = document.querySelectorAll('.skillsbar');
    let width = 0;


    window.addEventListener("scroll", () => {
      // let h = window.innerHeight;
      // let offsetTop = document.querySelector('.skills__wrapper').offsetTop;
      for (var m = 0; m < mainContainer.length; m++) {
        if (ifElementViewport(mainContainer[m])) {
          target.forEach((item, n) => {
            item[n] = +item.getAttribute('data-target');
            const id = setInterval(frame, 200);
            i = 0;
            function frame() {
              if (width >= item[n]) {
                clearInterval(id);
              } else {
                width++;
                item.querySelector('.skillbar__bar').style.width = width + "%";
                item.querySelector('.skillbar__bar-target').innerHTML = width + "%";
              }
            }
          });
        }
      }


    });
  }
}
// window.addEventListener("load", skills);
// window.addEventListener("resize", skills);

export default skills;