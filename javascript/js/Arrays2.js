var colors;
var seasons;
colors = ["preto", "azul", "branco", "vermelho"];
seasons = ["primavera", "verão", "outono", "inverno"];

document.getElementsByTagName("h2")[0].innerHTML = colors;

document.getElementsByTagName("h2")[1].innerHTML = seasons;

//Propriedades
//Obtendo uma propriedade (length) de um elemento pelo nome:
document.getElementsByTagName("h2")[2].innerHTML = "comprimento do array: " + colors.length;

//Métodos
//Revertendo a ordem do array:
seasons.reverse();
document.getElementsByTagName("h2")[3].innerHTML = "Ordem reversa: " + seasons;
seasons = ["primavera", "verão", "outono", "inverno"];

//Removendo a primeira posição do array:
colors.shift();
document.getElementsByTagName("h2")[4].innerHTML = "Removendo o primeiro item da lista: " + colors;
colors = ["preto", "azul", "branco", "vermelho"];

//Adicionando items à lista antes do primeiro item:
colors.unshift("verde", "rosa");
document.getElementsByTagName("h2")[5].innerHTML = "Adicionando mais items antes do primeiro: " + colors;
colors = ["preto", "azul", "branco", "vermelho"];

//Removendo o último item do array:
colors.pop();
document.getElementsByTagName("h2")[6].innerHTML = "Removendo o último item da lista: " + colors;
colors = ["preto", "azul", "branco", "vermelho"];

//Separando items por vírgula no final:
colors.push("violeta", "amarelo");
document.getElementsByTagName("h2")[7].innerHTML = "Adicionando mais itens separados por vírgula no final: " + colors;
colors = ["preto", "azul", "branco", "vermelho"];

//O método splice remove uma quantidade de items do array a partir da posição indicada em diante, aqui, no caso, removeu 2 itens a partir da posição 0:
seasons.splice(0, 2);
document.getElementsByTagName("h2")[8].innerHTML = "O método splice remove uma quantidade de items do array a partir da posição indicada em diante. Aqui, no caso, removeu 2 itens a partir da posição 0, sobrando assim: " + seasons;
seasons = ["primavera", "verão", "outono", "inverno"];

//Métodos mais avançados
//O método slice retorna um array com os mesmos items de outro, porém como um novo array:
var seasons2 = seasons.slice();
document.getElementsByTagName("h2")[9].innerHTML = "O método slice retorna um array com os mesmos items de outro, porém como um novo array: " + seasons2;

//O método indexOf procura e mostra a posição de um determinado item depois da posição especificada. Se a posição não for especificada, ele começa a procurar a partir da posição 0. Aqui pesquisamos a posição da cor branco:
var colors_index = colors.indexOf("vermelho", 2);
document.getElementsByTagName("h2")[10].innerHTML = "O método indexOf procura e mostra a posição de um determinado item depois da posição especificada. Se a posição não for especificada, ele começa a procurar a partir da posição 0. Aqui pesquisamos a posição da cor vermelho: " + colors_index;

//O método join junta os itens de um array e transforma eles em string, separados por um separador especificado. Se não especificar o separador, eles serão separados por vírgula:
var join = colors.join("/");
document.getElementsByTagName("h2")[11].innerHTML = "O método join junta os itens de um array e transforma eles em string, separados por um separador especificado. Se não especificar o separador, eles serão separados por vírgula: " + join;