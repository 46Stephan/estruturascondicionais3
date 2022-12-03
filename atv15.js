/*
Crie um algoritmo que armazene três valores, para cada um dos
lados de um triângulo: A, B e C. Verifique se os lados fornecidos
formam realmente um triângulo. Se formar, deve mostrar no console
o tipo de triângulo: isósceles, escaleno ou equilátero.
a. Para verificar se os lados fornecidos formam um triângulo: A <
B + C e B < A + C e C < A + B.
b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
B=C);
c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
B<>C e A<>C);
d. Triângulo equilátero: possui todos os lados iguais (A=B e
B=C);
*/

let A = parseInt(prompt('Digite o tamanho do primeiro lado'));
let B = parseInt(prompt('Digite o tamanho do segundo lado'));
let C = parseInt(prompt('Digite o tamanho do terceiro lado'));

if (C > A + B || A > B + C || B > A + C ){
document.write("NAO FORMAM UM TRIANGULO</br>");
}else if ( A != B && A != C && B != C ){
document.write("TRIANGULO ESCALENO</br>");
}else if ( A == B && A == C){
document.write("TRIANGULO EQUILATERO</br>");
}else if (A == B || A == C || B == C){
document.write("TRIANGULO ISOSCELES</br>");
}