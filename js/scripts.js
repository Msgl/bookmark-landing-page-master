//Toggle navigation menu on mobile
function toggleBtn() {
  const header = document.getElementById('header');
  const logo = document.getElementById('header-logo');
  const btn = document.getElementById('header-btn');
  const menu = document.getElementById('header-menu');

  menu.classList.toggle('active');
  header.classList.toggle('mobile-header');
  btn.classList.toggle('close-btn');
  logo.classList.toggle('mobile-logo');
}

//Feature slider
function featureSlider(element) {
  const slides = document.querySelectorAll('.slide');

  slides.forEach((item) => {
    if (element == item.id) {
      item.classList.remove('hide');
      item.classList.add('show');
    } else {
      item.classList.add('hide');
    }
  });
}
// const featureSlider = (element) => {

// };

//FAQ Accordion
/*
- The first answer has the id "one", the second answer has the id "two" etc.
- Each time a question is clicked, we pass the parameter (param) which is the same as the respective answer id (for example in the first question we pass "one" which is the id of the first answer).
- Then we create the answers array, which will hold all the answers.
- The forEach() method takes as a parameter "element" which is the current element being processed in the array.
- So we execute forEach() for each of the answers in the array and we check if the parameter that we passed (param) is the same as the id of the answer (element.id). If they are the same we toggle the classes.
*/

function faqAccordion(param) {
  const answers = document.querySelectorAll('.answer');

  answers.forEach((element) => {
    if (param == element.id) {
      element.classList.toggle('hide');
      //we target the previous sibling of the answer which is its question
      element.previousElementSibling.classList.toggle('open-answer');
    }
  });
}

//Change the validation message if a) input is empty and b) the pattern of input does not match an email
const email = document.querySelector('#email');
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
  if (email.validity.valueMissing) {
    email.setCustomValidity('Please add your email');
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity("Whoops, make sure it's an email");
  }
});
