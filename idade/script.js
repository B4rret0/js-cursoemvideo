function clicar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('data')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO, INSIRA UM NÚMERO VÁLIDO!')
    } else {
            let fsex = document.getElementsByName('sexo')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
                if (fsex[0].checked) {
                var genero = 'homem'
                    if (idade >= 0 && idade <= 13){
                        //KID
                        img.setAttribute('src', 'criancaM.png')
                    }
                    else if (idade > 13 && idade <= 30) {
                        //YOUNG
                        img.setAttribute('src', 'jovemM.png')
                    }
                    else if (idade > 30 && idade <= 60) {
                        //ADULT
                        img.setAttribute('src', 'adultoM.png')
                    }
                    else {
                        //ELDERLY
                        img.setAttribute('src', 'idosoM.png')
                    }
                } else if (fsex[1].checked) {
                var genero = 'mulher'
                    if (idade >= 0 && idade <= 13){
                        //KID
                        img.setAttribute('src', 'criancaF.png')
                    }
                    else if (idade > 13 && idade <= 30) {
                        //YOUNG
                        img.setAttribute('src', 'jovemF.png')
                    }
                    else if (idade > 30 && idade <= 60) {
                        //ADULT
                        img.setAttribute('src', 'adultoF.png')
                    }
                    else {
                        //ELDERLY
                        img.setAttribute('src', 'idosoF.png')
                    }
        }
        res.style.textAlign = 'center'
        res.innerText = `Foi identificado um(a) ${genero} de ${idade} anos.`
        res.appendChild(img)
        img.style.width = '250px'
        img.style.padding = '20px'
    }
}