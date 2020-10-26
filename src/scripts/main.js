import './modules/silder';
import timeLine from './modules/timeline';
import animation from './modules/animation';
import skills from './modules/skills';
import form from './modules/forms';

window.addEventListener("DOMContentLoaded", () => {

timeLine('.timeline__item');
// animation();
skills();
const contactForm = new form ('.contact__form','.contact__name','.contact__email','.contact__message','.contact__btn');





});
