//Dentro dos parênteses da função ficam os argumentos. A função fará alguma coisa com esses argumentos
function greater(a, b){
	a > b ? console.log("O valor maior é a: " + a) : console.log("O valor maior é b: " + b);
}

var first = 3/4;
var second = 5/7;

//Chamando a função e colocando as variáveis acima nos parênteses, estamos passando o conteúdo dessas variáveis para os argumentos da função greater:
//O primeiro argumento vai receber a variável first, e o segundo argumento vai receber a variável second.
//Então estamos dizendo, faça essa função, utilizando esses argumentos aqui:
greater(first, second);

//O resultando foi o mesmo, mas agora a função se tornou reutilizável
