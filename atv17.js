  /*
Escreva um algoritmo que armazene o número total de eleitores de
um município, o número de votos brancos, nulos e válidos. Calcular
e escrever o percentual que cada um representa em relação ao
total de eleitores. O algoritmo deve fazer uma validação para que as
porcentagens dos votos armazenados (brancos, nulos e válidos)
respeitem o limite do número total de eleitores, ou seja, garantir que
a soma dos votos brancos, nulos e válidos não seja maior que o
número total de eleitores.
*/
let total = 0;

total = parseInt(
  prompt("Digite a quantidade de eleitores de um municipio: ")
);
let quantidadedevotosbrancos = parseInt(prompt("Digite a quantidade de votos brancos : "));
let quantidadedevotosnulos = parseInt(prompt("Digite a quantidade de votos nulos :"));

let porcentagemvotosbrancos = (quantidadedevotosbrancos / total) * 100;
let porcentagemvotosnulos = (quantidadedevotosnulos / total) * 100;
let porcentagemvotosvalido = 100 - (porcentagemvotosnulos+porcentagemvotosbrancos);

document.write(
  "A porcentagem de votos em brancos corresponde a : ",
  porcentagemvotosbrancos, '%'
);
document.write(
  "</br> A porcentagem de votos nulos corresponde a : ",
  porcentagemvotosnulos, '%'
);
document.write(
  "</br> A porcentagem de votos validos corresponde a : ",
  porcentagemvotosvalido, '%'
);