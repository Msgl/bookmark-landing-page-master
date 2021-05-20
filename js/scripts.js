//Toggle navigation menu on mobile
const toggleBtn = () => {
  const header = document.getElementById('header');
  const logo = document.getElementById('header-logo');
  const btn = document.getElementById('header-btn');
  const menu = document.getElementById('header-menu');

  menu.classList.toggle('active');
  header.classList.toggle('mobile-header');
  btn.classList.toggle('close-btn');
  logo.classList.toggle('mobile-logo');
};

//Feature slider
const featureSlider = (element) => {
  const slides = document.querySelectorAll('.slide');

  slides.forEach((item) => {
    if (element == item.id) {
      item.classList.remove('hide');
      item.classList.add('show');
    } else {
      item.classList.add('hide');
    }
  });
};

//FAQ Accordion
const faqAccordion = (element) => {
  const answers = document.querySelectorAll('.answer');

  answers.forEach((item) => {
    if (element == item.id) {
      item.classList.toggle('hide');
    }
  });
};
