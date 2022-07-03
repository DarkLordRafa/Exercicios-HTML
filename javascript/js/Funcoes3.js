//return vai retornar algo (nesse caso um array de uma variável).

function greater(a, b){
	var result;
//Agora, se o argumento a for maior que o argumento b, a variável result vai receber um array com a string "primeira fração", na posição 0, e o valor do argumento a na posição 1. Se não, vai receber um array com a string "segunda fração", na posição 0, e o valor do argumento b na posição 1.
	a > b ? result = ["primeira fração", a] : result = ["segunda fração", b] ;
//A função fez o que tinha que fazer, e no final retornou a variável result, que possui um array. E agora sempre que função for chamada, além de fazer o processo, ela já vai retornar também a variável result. E você pode usar esse valor retornado como quiser.
	return result;
}

var first = 3/4;
var second = 5/7;

var fraction_result = greater(first, second);

console.log("O resultado da primeira fração é: " + first);
console.log("O resultado da segunda fração é: " + second);
console.log("E a maior fração é a " + fraction_result[0] + ", com o valor de "+ fraction_result[1])


