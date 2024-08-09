function play() {
    let num = document.getElementById('numInp')
    let res = document.getElementById('results')
    if (num.value.length == 0) {
        window.alert('ERRO! INSIRA UM VALOR VÁLIDO!')
    } else {
        let contador = 1
        let n = Number(num.value)
        res.innerHTML = ''
        while (contador <= 10) {
            let lista = document.createElement('option')
            lista.innerHTML = `${n} x ${contador} = ${contador*n}`
            res.appendChild(lista)
            contador++
        }
    }
    
}   