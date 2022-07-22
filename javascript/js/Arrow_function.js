
//Função padrão com return:
function sum(a, b){
	return a + b;
}

const sum1 = sum(5, 7);
console.log(sum1);

//Arrow function:
//A arrow function já começa atribuida à uma variável:
const sumArrow1 = (a, b) =>{
	return a + b;
};

const sumArrow1Value = sumArrow1(10, 10);
console.log(sumArrow1Value);

//Para apenas retornar um valor, podemos simplificar a arrow function:
const sumArrow2 = (a, b) => a + b;

const sumArrow2Value = sumArrow2(10, 10);
console.log(sumArrow2Value);