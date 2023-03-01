//Na teoria dos sistemas, define-se como elemento minimax de uma matriz o menor elemento da linha onde se encontra o maior elemento da matriz. Escreva um algoritmo que leia uma matriz 10 X 10 de números e encontre seu elemento minimax, mostrando também sua posição

let matriz = [
    [11, 987, 4],
    [35, 1000, 17],
    [100, 60, 300]] //3x3

let maior = 0, menor = 0;
let linha = 0;
let minimax = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let k = 0; k < matriz.length; k++) {
        if (maior < matriz[i][k]) {
            maior = matriz[i][k]
            linha = [i]
            menor = maior
        }
    }
}

for(let j=0;j<matriz[linha][j];j++){
    if (menor > matriz[linha][j]) {
        menor = matriz[linha][j]
        minimax = menor
    }
}

console.table(matriz);
//console.log('menor: ', menor);
//console.log('maior:', maior);
console.log(`O minimax é o número ${menor} e está na linha ${linha});
