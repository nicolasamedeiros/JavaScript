let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
//jeito fácil de mostrar os elementos de um vetor
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//jeito mais fácil de mostrar os elementos de um vetor
for (let pos in valores) {
    console.log(valores[pos])
}