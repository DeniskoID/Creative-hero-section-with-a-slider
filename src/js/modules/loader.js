function loader() {
  const loader = document.getElementById('loader');

  window.addEventListener('load', () => {
    // setTimeout here is for demo
    setTimeout(() => {
      loader.classList.add('loader--hidden');
    }, 1000);
  });
}

export default loader;
