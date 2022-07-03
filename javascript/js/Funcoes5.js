
//Para criar uma função de invocação imediata, colocamos parênteses ao redor dela e invocamos com parêntes no final:
var anonima = (function(a, b){
	var result;
	a > b ? result = ["a: ", a] : result = ["b: ", b];
	return result;
//E já que estamos passando os argumentos, agora eles ficam dentro dos parêntes do final:
})(8/2, 4/2);

//console.log(anonima(8/2, 4/2));

//E agora nós apenas escrevemos a variável, pois o escript dela já vai ser executado antes, assim que o navegador encontrar:
console.log(anonima);


//Variáveis externas ao bloco precisam ser definidas antes:
var first = 8/2;
var second = 4/2;

var anonima = (function(a, b){
	var result;
	a > b ? result = ["a: ", a] : result = ["b: ", b];
	return result;
//Variáveis externas:
})(first, second);

console.log(anonima);