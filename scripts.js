const botoes = document.querySelectorAll('.botao-menu');
const imagemPrincipal = document.getElementById('copo-principal');
const circulo = document.getElementById('circulo');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const novaImagem = botao.getAttribute('data-img');
    const novaCor = botao.getAttribute('data-cor');

    if (novaImagem && novaCor) {
      imagemPrincipal.src = novaImagem;
      circulo.style.background = novaCor;
    }
  });
});
