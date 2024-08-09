function carregar() {
    let txt1 = document.getElementById('horas')
    let coleta = new Date()
    let horas = coleta.getHours()
    let img = document.getElementById('imma')
    if (horas >= 0 && horas < 12){
        document.body.style.backgroundColor = '#00BFFF '
        txt1.innerText = `Agora são ${horas} Horas!
        Tenha um bom dia.`
        img.src = 'manha.png' 
        img.style.width = '300px'   

    } else if (horas >= 12 && horas <= 18) {
        document.body.style.backgroundColor = '#ffda66'
        txt1.innerText = `Agora são ${horas} Horas!
        Tenha uma boa tarde.`
        txt1.style.marginTop = '20px'
        img.src = 'tarde.png'
        img.style.width = '300px'

    } else {   
        document.body.style.backgroundColor = '#696969'
        txt1.innerText = `Agora são ${horas} Horas!
        Tenha uma boa noite.`
        img.src = 'noite.png'
        img.style.width = '300px'
        
        
    }
}