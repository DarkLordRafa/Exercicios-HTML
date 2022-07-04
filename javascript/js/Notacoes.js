//Quando uma propriedade for nomeada de forma que o JavaScript se confunda, podemos usar colchetes e colocar o nome entre parênteses, convertendo para uma string, fazendo o JavaScript selecionar exatamente o que está escrito:
//Exemplo:
//Com ponto (js não entende):
console.log(Objeto.forma:2);

//Com colchetes (js entende):
console.log(Objeto["forma:2"]);