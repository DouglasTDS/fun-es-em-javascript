//criando o container geral
const divContainerGeral = document.createElement('div');
divContainerGeral.id = 'container-geral';

// criando o container cabecalho
const divCabecalho = document.createElement('div');
divCabecalho.id = 'container-cabecalho';

// criando a logo do container cabecalho
const imgLogo = document.createElement('img');
imgLogo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Logo_ORKUT.svg/3840px-Logo_ORKUT.svg.png";

//criando titulo h1 do container cabecalho
const h1BoasVindas = document.createElement('h1');
h1BoasVindas.id = 'titulo';
h1BoasVindas.innerHTML = "Bem-vindo ao Orkut!";


//criando containers conteudo
const sectionConteudo = document.createElement('section');
sectionConteudo.id = 'container-conteudo';

//criando container esquerdo de conteudo
const divConteudoEsquerdo = document.createElement('div');
divConteudoEsquerdo.id = 'container-conteudo-esquerdo';


//criar container item 1
const containerItem1 = document.createElement('div');
containerItem1.id = 'container-esquerdo-item-1';

//cria imagem item 1
const esquerdoImagemItem1 = document.createElement('img');
esquerdoImagemItem1.src = "https://img.magnific.com/fotos-gratis/homem-morfo-3d-olhando-atraves-de-binoculos_1048-14177.jpg?semt=ais_hybrid&w=740&q=80";
esquerdoImagemItem1.id = 'esquerdo-imagem-item-1';


//criar div texto item 1
const esquerdoContaiterTextosItem1 = document.createElement('div');
esquerdoContaiterTextosItem1.id = "container-textos-item-1";

//criar h3 item 1
const esquerdoH3Item1 = document.createElement('h3');
esquerdoH3Item1.innerHTML = "Igual a vida real";

//criar tag p item 1
const esquerdoParagrafoItem1 = document.createElement('p');
esquerdoParagrafoItem1.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James";

// Bloco do comece a conversar

const containerItem2 = document.createElement('div');
containerItem2.id = 'container-esquerdo-item-2';

//cria imagem item 2
const esquerdoImagemItem2 = document.createElement('img');
esquerdoImagemItem2.src = "https://img.magnific.com/fotos-gratis/homem-morfo-3d-olhando-atraves-de-binoculos_1048-14177.jpg?semt=ais_hybrid&w=740&q=80";
esquerdoImagemItem2.id = 'esquerdo-imagem-item-2';


//criar div texto item 2
const esquerdoContaiterTextosItem2 = document.createElement('div');
esquerdoContaiterTextosItem2.id = "container-textos-item-2";

//criar h3 item 2
const esquerdoH3Item2 = document.createElement('h3');
esquerdoH3Item2.innerHTML = "Comece a conversa";

//criar tag p item 2
const esquerdoParagrafoItem2 = document.createElement('p');
esquerdoParagrafoItem2.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James";

//bloco do divirta-se!

const containerItem3 = document.createElement('div');
containerItem3.id = 'container-esquerdo-item-3';

//cria imagem item 3
const esquerdoImagemItem3 = document.createElement('img');
esquerdoImagemItem3.src = "https://img.magnific.com/fotos-gratis/homem-morfo-3d-olhando-atraves-de-binoculos_1048-14177.jpg?semt=ais_hybrid&w=740&q=80";
esquerdoImagemItem3.id = 'esquerdo-imagem-item-3';


//criar div texto item 3
const esquerdoContaiterTextosItem3 = document.createElement('div');
esquerdoContaiterTextosItem3.id = "container-textos-item-3";

//criar h3 item 3
const esquerdoH3Item3 = document.createElement('h3');
esquerdoH3Item3.innerHTML = "Divirta-se!";

//criar tag p item 3
const esquerdoParagrafoItem3 = document.createElement('p');
esquerdoParagrafoItem3.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James";

//bloco do novidades do Orkut



//criando container direito de conteudo
const divConteudoDireito = document.createElement('div');
divConteudoDireito.id = 'container-conteudo-direito'

const divLogin = document.createElement('div');
divLogin.id = 'container-login';


const h3CabecalhoLogin = document.createElement('h3');
h3CabecalhoLogin.innerHTML = "Acesse com a sua conta do Google";


//criando formulario
const form = document.createElement('form'); 


const divEmail = document.createElement('div');

const labelEmail = document.createElement('label');
labelEmail.innerHTML = "E-mail: ";
const inputEmail = document.createElement('input');

divEmail.appendChild(labelEmail);
divEmail.appendChild(inputEmail);


const divSenha = document.createElement('div');

const labelSenha = document.createElement('label');
labelSenha.innerHTML = "Senha: ";
const inputSenha = document.createElement('input');
inputSenha.type = "password";

divSenha.appendChild(labelSenha);
divSenha.appendChild(inputSenha);

const containerInputsLogin = document.createElement('div');
containerInputsLogin.appendChild(divEmail);
containerInputsLogin.appendChild(divSenha);


const divContinuarConectado = document.createElement('div');

const checkbox = document.createElement('input');
checkbox.type = "checkbox";
const textoCheck = document.createElement('label');
textoCheck.innerHTML = "Continuar conectado.";

divContinuarConectado.appendChild(checkbox);
divContinuarConectado.appendChild(textoCheck);


const botao = document.createElement('input');
botao.innerHTML = "Login";
botao.type = "submit";

const linkRecuperarConta = document.createElement('a');
linkRecuperarConta.innerHTML = "Nao consegue acessar minha conta?";
linkRecuperarConta.href = '#';

form.appendChild(containerInputsLogin);
form.appendChild(divContinuarConectado);
form.appendChild(botao);
form.appendChild(linkRecuperarConta);




//pendurando logo no container cabecalho
divCabecalho.appendChild(imgLogo);
//pendurando titulo no container cabecalho
divCabecalho.appendChild(h1BoasVindas);

//pendurando cabecalho no container geral
divContainerGeral.appendChild(divCabecalho);


containerItem1.appendChild(esquerdoImagemItem1);
esquerdoContaiterTextosItem1.appendChild(esquerdoH3Item1);
esquerdoContaiterTextosItem1.appendChild(esquerdoParagrafoItem1);
containerItem1.appendChild(esquerdoContaiterTextosItem1);



//pendurando container item 1 no container conteudo esquerdo
divConteudoEsquerdo.appendChild(containerItem1);


//pendurando container do bloco 2

containerItem2.appendChild(esquerdoImagemItem2);
esquerdoContaiterTextosItem2.appendChild(esquerdoH3Item2);
esquerdoContaiterTextosItem2.appendChild(esquerdoParagrafoItem2);
containerItem2.appendChild(esquerdoContaiterTextosItem2);




//pendurando container item 2 no container conteudo esquerdo
divConteudoEsquerdo.appendChild(containerItem2);


//pendurando proximo conteudo do bloco 3

containerItem3.appendChild(esquerdoImagemItem3);
esquerdoContaiterTextosItem3.appendChild(esquerdoH3Item3);
esquerdoContaiterTextosItem3.appendChild(esquerdoParagrafoItem3);
containerItem3.appendChild(esquerdoContaiterTextosItem3);




//pendurando container item 3 no container conteudo esquerdo
divConteudoEsquerdo.appendChild(containerItem3);


//pendurando container item 4 no container conteudo esquerdo novidades do orkut

containerItem4.appendChild(esquerdoImagemItem4);
esquerdoContaiterTextosItem4.appendChild(esquerdoH3Item4);
esquerdoContaiterTextosItem4.appendChild(esquerdoParagrafoItem4);
containerItem4.appendChild(esquerdoContaiterTextosItem4);




//pendurando container item 4 no container conteudo esquerdo
divConteudoEsquerdo.appendChild(containerItem4);



//pendurando container do conteudo na section
sectionConteudo.appendChild(divConteudoEsquerdo);

divLogin.appendChild(h3CabecalhoLogin);
divLogin.appendChild(form);

divConteudoDireito.appendChild(divLogin);

//pendurando container do conteudo na section
sectionConteudo.appendChild(divConteudoDireito);

//pendurando section(container-conteudo)
divContainerGeral.appendChild(sectionConteudo);

//pendurando no body do html o container geral
document.body.appendChild(divContainerGeral);