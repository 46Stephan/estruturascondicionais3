/*Crie uma variável para armazenar o salário do usuário e atribua um
valor a essa variável. Crie a validação necessária:
- Caso o salário seja MENOR que R$ 1.903,98, insira no html
"ISENTO DE IR";
- caso contrário insira "TRIBUTADO NO IR". */

const salario = Number.parseFloat(prompt('Informe o seu salário'))
const ir = 1903.98

if (salario <= ir){
alert ('Isento de IR')
} else {
alert ('Triburado de IR')
}