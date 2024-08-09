let random = Math.floor(Math.random() * 101)
console.log(random)

function play() {
    let num = document.getElementById('num')
    let n = Number(num.value)
    let feed = document.getElementById('feed')
        if (num.value.length == 0 || num.value <0 || num.value > 100) {
            feed.innerHTML = 'Insira um valor válido'
            feed.style.color = 'red'
        } else { 
            feed.innerHTML = 'Você está inserindo um número:'
            if (n > random) {
                feed.innerHTML += ' MAIOR que o número correto.'
                feed.style.backgroundColor = 'red'
                feed.style.color = 'white'
            } else if (n < random) {
                feed.innerHTML += ' MENOR que o número correto.'
                feed.style.backgroundColor = 'orange'
                feed.style.color = 'white'
            } else if (n == random) {
                feed.innerHTML += ' CORRETO. PARABÉNS!'
                feed.style.backgroundColor = 'green'
            }

        }
        

    }

function refresh() {
    location.reload()
}
