let agora = new Date()
let horas = agora.getHours()
if (horas < 12) {
    console.log('Bom dia!')
} else if (horas < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}