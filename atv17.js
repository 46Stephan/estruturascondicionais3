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
  prompt("Digite a quantidade de eleitores de um municipio: "));

let votosBranco = parseInt(prompt("Digite a quantidade de votos brancos : "));
let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos :"));

let votosValidos = (total - votosBranco) - votosNulos;

if (votosBranco > total || votosNulos > total || votosNulos + votosBranco > total) {
  console.log('Algum valor está incorreto!')
} else {
  let parcBrancos = (votosBranco / total) * 100;
  let parcNulos = (votosNulos / total) * 100;
  let parcValidos = (100 - (parcBrancos + parcNulos));
}

document.write('Total de votos brancos é de: ' + parcBrancos + ' % .' + '<br/>');
document.write('Total de votos nulos é de: ' + parcNulos + ' % .' + '<br/>');
document.write('Total de votos válidos é de: ' + parcValidos + ' % .' + '<br/>');