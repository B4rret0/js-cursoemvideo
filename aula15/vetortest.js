let num = [4,2,6,3]
console.log(num)
    for (let pos = 0; pos < num.length; pos++) {
        console.log(` O indicíe ${pos} recebe o número ${num[pos]}`)
    }

// ou 

for (let pos in num) { //para cada pos dentro de num, executar:
    console.log(`a casinha ${pos} recebe o valor ${num[pos]}`)
}