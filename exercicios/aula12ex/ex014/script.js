
function carregar() {
    var msg = window.document.getElementById('msg') // Pegando o elemento com id 'msg'
    var img = window.document.getElementById('imagem') // Pegando o elemento com id 'img'
    var data = new Date() // Pegando a data e hora atual
    var hora = data.getHours() // Pegando a hora
    
    msg.innerHTML = `Agora são ${hora} horas.` // Atualizando o elemento 'msg' com a hora atual

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.png' // Atualizando a imagem para 'manha.png'
        document.body.style.background = `#D8AB70`
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'tarde.png' // Atualizando a imagem para 'tarde.png'
        document.body.style.background = `#4CA57C`

    } else {
        // BOA NOITE!
        img.src = 'noite.png' // Atualizando a imagem para 'noite.png'
        document.body.style.background = `#7D2B16`
    }
}
