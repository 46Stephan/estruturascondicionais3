/*Informe um valor a uma variável e imprima no console se o número
é primo.*/

let numero = prompt('Informe um número:');
let divisor = 2;

while (numero % divisor != 0) {
    divisor++;

} if (numero == divisor) {
    document.write("Número é Primo!");
} else
    document.write("Número NÃO é primo!");