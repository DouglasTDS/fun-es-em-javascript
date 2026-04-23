 function soma (a, b) {

    return  Number(a + b);
 }
// console.log ( "resultado = " , soma(35,26))


 // Função para somar dois números

function sub (x,y) {

    return Number( x - y);
}

//console.log("resultado = " , sub(35,26))

//Função para subtrair dois númerosh

function mult (n, m) {

    return Number ( n * m);

}

//console.log ("Resultado  = " , mult (25, 5))

//Funçâo para multiplicar dois números


function div (j,k) {

    return Number (j / k);

}

//console.log ("Resultado = ", div (100, 6))

//Funçâo para dividir dois números

function media (nota1, nota2) {

    return Number (nota1 + nota2) / 2;

}

//console.log ("Resultado = ", media (10, 9))

//Funçäo para verificar a  média de um aluno

function areaRetangulo (base, altura) {

    return Number (base * altura) / 2;

}

//console.log ("Resultado = ", areaRetangulo (10, 9))

//Função para calcular a area do triangulo


function dobro (n1) {

    return Number (n1 ** 2);

}

//console.log ("Resultado = ", dobro (10))

// Função para fazer o dobro de um número


function metade (num) {

    return Number (25) / 2;

}

//console.log ("Resultado = ", metade (66))

//Função para calcular metade de um número.


function desconto (valor, desconto) {

    return Number (valor - desconto) ;


}

//console.log ("Resultado = ", desconto (500, 56))


function calcularTroco (dinheiro, produto) {

   

if (dinheiro < produto) {

     return 'valor insuficiente. ';
}

let troco = dinheiro - produto;

return parseFlopat(troco.toFixed (2));

}


console.log(calcularTroco(50.00, 35.45));







