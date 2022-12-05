/*
Leia um número, utilizando WHILE multiplique este número por 3
enquanto a soma seja menor que 500 e no final mostre qual o
último valor
*/


let num = parseInt(prompt('Digite um numero'));
soma = 0

while(soma < 500){
    soma = soma + (num*3);
}
document.write(num);