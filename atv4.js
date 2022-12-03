/* Reescreva o exercício 3, utilizando apenas o SWITCH. */

const dia = prompt('Informe o dia: \n [1] - Domingo \n [2] - Segunda \n [3] - Terça \n [4] - Quarta \n [5] - Quinta \n [6] - Sexta \n [7] - Sábado')

switch(dia){
    case '1':
        alert('Domingo')
        break;
    case '2':
        alert('Segunda')
        break;
    case '3':
        alert('Terça')
        break;
    case '4':
        alert('Quarta')
        break;
    case '5':
        alert('Quinta')
        break;
    case '6':
        alert('Sexta')
        break;
    case '7':
        alert('Sábado')
        break;
    default: alert('Dia inválido, digite um número de 1 à 7.');
        break;
}