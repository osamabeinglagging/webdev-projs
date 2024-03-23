const darkMode = () => {
  const sunBtn = document.querySelectorAll('#theme-toggle');

  localStorage.getItem('theme') && document.body.classList.add('light-mode');

  sunBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      if(localStorage.getItem('theme')){
        localStorage.removeItem('theme');
      }else{
        localStorage.setItem('theme', 'light-mode');
      }
    });
  });
};

export default darkMode;
