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

const lancamentos = [
  'Janeiro: Lógica de Programação para Iniciantes',
  'Fevereiro: HTML e CSS na Prática',
  'Março: JavaScript Moderno',
  'Abril: Banco de Dados com SQL',
  'Maio: Python do Zero',
  'Junho: Git e GitHub em Equipe',
  'Julho: Algoritmos Ilustrados',
  'Agosto: Node.js na Prática',
  'Setembro: Segurança para Desenvolvedores',
  'Outubro: Docker em 7 Dias',
  'Novembro: Inteligência Artificial para Devs',
  'Dezembro: Carreira em Tecnologia'
];
const inputMes = document.getElementById('month-input');
const resultadoMes = document.getElementById('month-result');
 
document.getElementById('check-month-btn').addEventListener('click', function () {
  const numero = Number(inputMes.value);
 
  if (numero < 1 || numero > lancamentos.length) {
    resultadoMes.textContent = 'Digite um número de 1 a ' + lancamentos.length + '.';
  } else {
    resultadoMes.textContent = lancamentos[numero - 1];
  }
});