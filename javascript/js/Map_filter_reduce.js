
const numbers = [1, 2, 3, 4, 5];

//O método map passa por cada item do array:
//E para cada item, executa a função anônima que criamos, que no final retorna o argumento number x 2 e adiciona na nova lista da constante numbersMultBy2:
const numbersMultBy2 = numbers.map(function(number){
	return number * 2;
});
console.log(numbersMultBy2);

const ages = [5, 10, 22, 34, 45];

//O método filter passa por cada item e seleciona apenas o que for especificado.
//No caso aqui, ele filtrou o que a função anônima disse, apenas números cujo resto da divisão é 0. Ou seja, pares:
const evenAges = ages.filter(function(age){
	return age % 2 === 0;
});
console.log(evenAges);

//O método reduce vai passar por cada item e vai tentar reduzi-los a um único item.
//Para isso ele terá um valor inicial de acumulação.
//A função anônima a seguir tem dois parâmetros. O primeiro (age) é o item da lista, e o segundo (accumulator), será o valor inicial definido do reduce, que é colocado nos parênteses do reduce, depois da função:
const sumOfAges = ages.reduce(function(age, accumulator){
	return age + accumulator;
}, 0);
console.log(sumOfAges);