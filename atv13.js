/*
Faça um algoritmo que armazene um número e imprima os
números ímpares entre 1 e o número armazenado.
*/

const num = 300;

for (let impares = 1; impares < num; impares += 2) {
    document.write('É impar: ' + impares);
    document.write('</br>');
}