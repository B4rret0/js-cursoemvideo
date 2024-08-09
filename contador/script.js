function play() {
    let entrada = document.getElementById('inicio')
    let end = document.getElementById('fim')
    let pulos = document.getElementById('pular')
    let result = document.getElementById('res')
    let t1 = Number(entrada.value)
    let t2 = Number(end.value)
    
        if (entrada.value.length == 0 || end.value.length == 0 || pulos.value.length == 0) {
            window.alert('(ERRO) Preencha todos os campos e tente novamente! (ERRO)')
        } else if (t1 < t2) {
            result.innerText = 'Contando: ' 
            let i = Number(entrada.value)
            let f = Number(end.value)
            let p = Number(pulos.value)
            for(let cont = i; cont <= f; cont += p) {
                result.innerHTML += ` ${cont} ➡️ `
            }
            result.innerText += ` FIM 😎👍.`
        } else {
            result.innerText = 'Contando: '
            let i = Number(entrada.value)
            let f = Number(end.value)
            let p = Number(pulos.value)
            for(let cont = i; cont >= f; cont -= p) {
                result.innerHTML += `${cont} ➡️ `
            }
            result.innerText += ` FIM 😎👍.`
        }
}
