function mobileNav() {
  const overlay = document.querySelector('.overlay');
  const nav = document.querySelector('.mobile-nav');
  const menuIcon = document.querySelector('.mobile-nav-icon');

  function toggleClass() {
    overlay.classList.toggle('overlay--open');
    nav.classList.toggle('mobile-nav--open');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
  }

  document.body.addEventListener('click', (e) => {
    let target = e.target;

    if (
      target.classList.contains('mobile-nav-icon') ||
      target.classList.contains('mobile-nav-btn') ||
      target.classList.contains('overlay')
    ) {
      toggleClass();
    }
  });
}

export default mobileNav;
