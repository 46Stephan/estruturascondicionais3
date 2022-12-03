/*Utilizando do...while, imprima na tela a soma de todos os números
entre 10 e 100. */

let num = 10
let resultado = 0

do{
     resultado += num++
}while(num <= 100)

document.write(resultado)