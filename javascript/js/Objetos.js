
//Objetos podem conter propriedades e métodos:

var Rafael = new Object();
//Podemos fazer assim:
Rafael.idade = 22;
Rafael.função = "Desenvolvedor";
Rafael.área = "Front End";
Rafael.atuando = false;
Rafael.curso = "JavaScript";
Rafael.escreva = function(){
	console.log("Este é um método do objeto.");
};

//Ou podemos fazer dessa forma mais prática:
//Em vez de igual, usamos dois pontos para atribuir o valor, e em vez  de ponto e vírgula no final, usamos vírgula:
var Rafael2 = {
idade: 22,
função: "Desenvolvedor",
área: "Front End",
atuando: false,
curso: "JavaScript",
escreva: function(){
	console.log("Este é um método do objeto 2.");
}
};

console.log(Rafael);
console.log(Rafael2);
console.log(Rafael.curso);
console.log(Rafael2.função);
Rafael.escreva();
Rafael2.escreva();