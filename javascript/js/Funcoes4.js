a = 5/2;
b = 4/2;

//Funções anônimas precisam estar ligadas à algo, como um bloco ou um evento
//Neste caso estamos atribuindo a função anônima à uma variável:
var anonima = function(){
	var result;
	a > b ? result = ["a: ", a] : result = ["b: ", b];
	console.log(result);
};
//Agora chamamos a variável como se fosse uma função, podendo passar os argumentos ou não:
anonima();



//Exemplo usando return:
a = 5/2;
b = 4/2;

var anonima = function(){
	var result;
	a > b ? result = ["a: ", a] : result = ["b: ", b];
	return result;
};

console.log(anonima());


//Exemplo usando novos argumentos:
var anonima = function(){
	var result;
	a > b ? result = ["a: ", a] : result = ["b: ", b];
	return result;
};
//Como vamos passar novos argumentos, não precisamos das variáveis:
console.log(anonima(8/2, 4/2));