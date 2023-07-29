function fallingNav() {
  // Mobile nav button
  const navBtn = document.querySelector('.falling-nav-btn');
  const nav = document.querySelector('.falling-nav');
  const menuIcon = document.querySelector('.nav-icon');

  navBtn.onclick = function () {
    nav.classList.toggle('falling-nav--open');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
  };
}

export default fallingNav;
