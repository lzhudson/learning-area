/* Função: Cria um novo parágrafo e o insere no fim do arquivo */
function criarParagrafo() {
  var para = document.createElement('p');
  para.textContent = 'Você clicou no botão';
  document.body.appendChild(para);
}
/*
  1. Captura referências de todos os botões da página e armazena isso em um array.
  2. Vai até todos os botões e adiciona um event listener click a cada um deles.
*/
var botoes = document.querySelectorAll('button');

for(var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', criarParagrafo);
}

// Eu sou um comentário
/* Eu também sou 
   um comentário
*/