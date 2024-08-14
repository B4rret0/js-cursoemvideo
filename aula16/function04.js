// 10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {//em quanto o C for maior que 1 (numero representado pelo usuario) ele vai se reduzir até chegar no final da fatoração
        fat *= c
    }
    return fat
}

let resultado = fatorial(10)
console.log(resultado)