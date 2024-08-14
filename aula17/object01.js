let amigo = {nome: 'José',
    sexo: 'Masculino',
    peso: 64.0,
    engordar(p=0){
        console.log('Ele engordou')
        this.peso += p //auto-referencia pro objeto
    }
}

amigo.engordar(4)
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)