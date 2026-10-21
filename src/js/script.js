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

const titulosCards = document.querySelectorAll('.card h3');
const inputPosicao = document.getElementById('highlight-pos');
const inputLivro = document.getElementById('highlight-title');
 
document.getElementById('update-highlight-btn').addEventListener('click', function () {
  const posicao = Number(inputPosicao.value);
 
  if (inputLivro.value === '' || posicao < 1 || posicao > 3) {
    alert('Digite o nome do livro e uma posição de 1 a 3.');
    return;
  }
 
  titulosCards[posicao - 1].textContent = inputLivro.value;
});