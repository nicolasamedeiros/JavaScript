//para achar o valor dentro de um array

let num = [5,8,2,9,3]
let pos = num.indexOf(9)
console.log(`O valor 8 está na posição ${pos}`)

//quando o indexOf retornar -1 quer dizer que ele não encontrou o valor dentro do array

//ou vc pode fazer
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}