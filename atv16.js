/*
Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).
*/
const anoAtual = 2022;
let anoNascimento = parseInt(prompt('Informe o ano de nascimento:'));
let idade = anoAtual - anoNascimento;

if(idade >= 16){
    document.write('Podera votar esse ano!')
}else{
    document.write('Não poderá votar esse ano!')
}