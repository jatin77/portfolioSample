const links = document.querySelectorAll('nav ul li a');
const pages = document.querySelectorAll('figure');
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
links.forEach(link => {
  link.addEventListener('click', e => {
    links.forEach(link => {
      link.classList.remove('active');
      link.parentElement.classList.remove('active');
    });

    e.target.classList.add('active');
    e.target.parentElement.classList.add('active');
    const name = e.target.dataset.name;
    pages.forEach(page => {
      page.classList.remove('active');
      if (name === page.id) {
        page.classList.add('active');
      }
    });
  });
});

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  nav.classList.toggle('active');
});
