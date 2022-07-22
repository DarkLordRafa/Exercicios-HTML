
//Primeira parte se define a variável, segunda parte é a condição, e depois a variável i recebe ela mesma mais 1:
for (var i = 0; i < 10; i++){
	console.log(i);
}

//Laço while:
var n = 0;
while (n <= 10){
	console.log("O número agora é: " + n);
	n++;
}

//Laço do while;
var n2 = 10;
do{
	console.log("O segundo número agora é: " + n2);
	n2++;
}
while(n2 < 10);

//Laço forEach:
const cars = ["Tesla", "Ford", "Fiat"];
//Se colocar apenas um parâmetro, ele será o item do array, e então o forEach vai fazer essa função para cada item da lista:
//Se adicionar mais um parâmetro antes, ele será o index:
//O forEach sempre precisa de uma função com pelo menos um argumento, que será cada um dos items do array:
cars.forEach(function(index, car){
	console.log(car);
	console.log(index);
});