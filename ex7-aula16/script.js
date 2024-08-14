let num = document.getElementById('num')
let list = document.getElementById('txtlist')
let res = document.getElementById('dados')
let n = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}
function add() {
    if(isNumber(num.value) && !inLista(num.value, n)) {
        n.push(Number(num.value))
        let opcao = document.createElement('option')
        opcao.innerHTML = `nº ${num.value} adicionado.`
        list.appendChild(opcao)
        res.innerHTML = ''
    } else {
        window.alert('Valor ja inserido ou inválido.')
    }
    num.value = ''
    num.focus()
}
function end() {
    if (n.lenght == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let verTam = n.length
        let maior = n[0] //suponha que seja [4, 2, 7, 8]
        let menor = n[0] //o n[0] chama o valor 4
            for (let pos in n) { // percorre todas as posições (índices) do array
                if (n[pos] > maior) // pergunta: 4 é maior que 4? não, então maior continua sendo 4
                    maior = n[pos]
                if(n[pos] < menor) // pergunta: 4 é menor que 4? não, então menor continua sendo 4
                    menor = n[pos]
                }
        // depois ele testa o proximo indicie, e pergunta: 2 é maior que 4? Não, então não muda a let maior
        // depois ele pergunta: 2 é menor que 4? Sim, então a let menor = 2 agora. E assim por diante
        let soma = 0
            for(let pos in n) {
                soma += n[pos]
            }  
        let media = 0
        media = soma / verTam
        res.innerHTML = ''
        res.innerHTML += `<p>Temos no total ${verTam} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi: ${maior}.</p>`
        res.innerHTML += `<p>Enquanto o menor foi: ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os números equivale a: ${soma}.`
        res.innerHTML += `<p>Finalizando, a média dos valores digitados é ${media}.`
        }
    }
