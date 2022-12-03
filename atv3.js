/*Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”. */

let numero= prompt("Escolha um número de 1 à 7. O seu número irá determinar um dia da semana :)")

if (numero == "1") {
     alert("Seu dia é domingo!")
} else if (numero == "2") {
     alert("Seu dia é segunda!")
} else if (numero == "3") {
    alert("Seu dia é terça!")
} else if (numero == "4") {
    alert("Seu dia é quarta!")
} else if (numero == "5") {
    alert("Seu dia é quinta!")
} else if (numero == "6") {
    alert("Seu dia é sexta!")
} else if (numero == "7"){
    alert("Seu dia é sábado!")
} else {
    alert("Valor inválido!")}