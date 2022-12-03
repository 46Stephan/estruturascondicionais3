/*Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, insira no
html “Pode dirigir” caso contrário imprima “Não pode dirigir”. */

let idade = parseInt(prompt('Digite a sua idade: '));
let carteira = confirm('Possui carteira de habilitação? Clique em OKAY para SIM - Clique em CANCELAR para NÃO ');


if(idade >= 18 && carteira) {
    document.write('Pode dirigir!');
}else if(idade >= 18 && !carteira){
    document.write('Não pode dirigir!');
}else{
    document.write('Não pode dirigir!');
}
