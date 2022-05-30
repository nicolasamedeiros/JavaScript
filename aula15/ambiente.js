var num = [5, 8, 2, 9, 3]
num[5] = 6 //para adicionar um novo conteúdo sabendo qual vai sar a última posição

num.push(7) //para o js adicionar de forma automatica o valor na ultima casa

num.length //para saber o comprimento do array

num.sort() //vai deixar todos os elementos e botar em ordem crescente

console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor tem ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//para mostrar todos os valores do array de uma forma simples, teremos que usar um laço de repetição

for (var pos = 0;pos<num.length;pos++) {
    console.log(num[pos])
}
