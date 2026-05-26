// Coloca o elemento numa variável

const inputFoto = document.getElementById ('inputFoto');
const botaoAdicionar = document.getElementById ('botaoAdicionar');
const galeria = document.getElementById ('galeria');

//Pega o botäo e espera o usuário clicar

botaoAdicionar.addEventListener('click', () => {
    //coloca o valor do input dentro da variável
    const linkFoto = inputFoto.ariaValueMax;
    //verifica se o input é diferente de vazio (se näo tem nada dentro)
    if(linkFoto !== ''){

// cria um novo elemento (tag IMG)
const novaImagem = document.createElement('img');

//coloca o valor do input no src da tag IMG
novaImagem.src = linkFoto;

//cria um filho, no caso mais uma div com a tag IMG
galeria.appendChild(novaImagem);

//retorna o valor do input para vazio
inputFoto.value = '';
    }

})