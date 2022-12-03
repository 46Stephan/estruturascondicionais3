/*10. Tendo como entrada a altura e o sexo (codificado da seguinte
forma: 1 para sexo feminino e 2 para sexo masculino) de uma
pessoa, construa um programa que calcule e mostre seu peso ideal,
utilizando as seguintes fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7 */

const sexo = Number.parseInt(prompt("Informe o seu sexo: \n [1] Feminino \n [2} Masculino \n"))
const altura = Number.parseFloat(prompt("Informe a sua altura: "))
let pesoIdeal = 0

if (sexo === 1){
    pesoIdeal = (62.1 * altura) - 44.7

}else if (sexo === 2){ 
    pesoIdeal = (72.7 * altura) - 58
}

document.write ("O seu peso ídeal é: " + pesoIdeal);
    