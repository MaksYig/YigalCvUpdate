// import './modules/silder';
import slider from './modules/silder';
import timeLine from './modules/timeline';
import animation from './modules/animation';
import skills from './modules/skills';
import form from './modules/forms';
import burger from './modules/burger';
import modalImg from './modules/modalImg';
import portfolioToogleMenu from './modules/portfolioMenu';
import scrollTo from './modules/scrollTo';
import contactModal from './modules/contacModal';


window.addEventListener("DOMContentLoaded", () => {
slider ();
timeLine('.timeline__item');
// animation();
skills();
const contactForm = new form ('.contact__form','.contact__name','.contact__email','.contact__message','.contact__btn');
portfolioToogleMenu();
burger();
modalImg('.zoom__modal','.close');
contactModal();
// scrollTo();




});
