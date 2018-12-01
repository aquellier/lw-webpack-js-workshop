function navbarScroll() {
  console.log('hello from navabr.js');
  const navbar = document.querySelector('.navbar-wagon-transparent');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.remove('navbar-wagon-transparent');
        navbar.classList.add('navbar-wagon-filled');
      } else {
        navbar.classList.remove('navbar-wagon-filled');
        navbar.classList.add('navbar-wagon-transparent');
      }
    });
  }
}

export { navbarScroll };
