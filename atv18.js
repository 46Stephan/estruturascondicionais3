  /*
    Uma loja de eletrodomésticos estabeleceu as seguintes
modalidades de pagamento para a venda de suas mercadorias:

Escreva um algoritmo que armazene o preço de tabela e o número
de vezes em que o pagamento será feito. Calcule o valor de cada
parcela e o preço total da compra e imprima no console.
    */

let totalCompra = parseFloat(prompt("Digite o valor da compra"));
let numParcelas = parseInt(prompt("Digite a qtd de parcelas"));


if (numParcelas == 1) {
  let descontoAvista = (totalCompra / 100) * 2.5;
  let precoFinalAvista = totalCompra - totalCompra * 0.025;
  document.write(
    "A vista desconto de " +
      descontoAvista +
      "% sobre o preço da tabela, valor do produto com o desconto é " +
      precoFinalAvista
  );
} else if (numParcelas >= 2 && numParcelas <= 5) {
  document.write("Preço de tabela, sem desconto, total R$ " + totalCompra);
}else if(numParcelas >= 6 && numParcelas <= 10){
  let juros6 = (totalCompra / 100) * 6;
  let precoFinalParcelado6 = totalCompra + totalCompra * 0.06;
  document.write(juros6 + '% de juros, total R$ ' + precoFinalParcelado6);
}else{
  let juros13 = (totalCompra / 100) * 13;
  let precoFinalParcelado13 = totalCompra + totalCompra * 0.13;
  document.write(juros13 + '% de juros, total R$ ' + precoFinalParcelado13);
  
}