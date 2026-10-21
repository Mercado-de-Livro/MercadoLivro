const temaCheckbox = document.getElementById('theme-checkbox');
 
temaCheckbox.addEventListener('change', function () {
  document.body.classList.toggle('dark-mode', temaCheckbox.checked);
});


const tituloPrincipal = document.querySelector('h1');
const tituloOriginal = tituloPrincipal.textContent;
const inputTitulo = document.getElementById('user-title-input');
 
document.getElementById('update-title-btn').addEventListener('click', function () {
  if (inputTitulo.value === '') {
    tituloPrincipal.textContent = tituloOriginal;
  } else {
    tituloPrincipal.textContent = tituloOriginal + ' - ' + inputTitulo.value;
  }
});