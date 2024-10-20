const caixa = document.querySelectorAll('.caixa'); //seleciona todos os elementos com essa classe

caixa.forEach(caixa => {
  caixa.addEventListener('click', function ( ) {
    this.classList.toggle('active')//função de alternar
    const descricao = this.nextElementSibling //é pelo que vai alternar
    const mais = this.querySelector('.icone-mais')
    const menos = this.querySelector('.icone-menos')

    if(descricao.style.maxHeight){//verifica se a descrição está expandida
      descricao.style.maxHeight = null//está recolhida
      mais.style.display = 'block'
      menos.style.display = 'none'
    }
    else{
      descricao.style.maxHeight = descricao.scrollHeight + 'px'//não está recolhida, ou seja, expande a altura total do conteúdo
      mais.style.display = 'none'
      menos.style.display = 'block'
    }
  })
})