const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeIcon.innerHTML = `
      <circle cx="12" cy="12" r="5" fill="white"/>
      <line x1="12" y1="1" x2="12" y2="3" stroke="white"/>
      <line x1="12" y1="21" x2="12" y2="23" stroke="white"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="white"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="white"/>
    `;
  } else {
    themeIcon.innerHTML = `
      <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 1012 21a9 9 0 009-8.21z" fill="white"/>
    `;
  }
});
