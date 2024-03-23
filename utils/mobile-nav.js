const mobileNav = () => {
  const headerBtn = document.querySelector('.header__bars');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  headerBtn.addEventListener('click', () => {
    if(mobileNav.style.display == 'none'){
      mobileNav.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
    }
    else{
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    });
  });
};

export default mobileNav;
