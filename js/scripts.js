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
