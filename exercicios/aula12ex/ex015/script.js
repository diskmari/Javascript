function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || (fano.value) > ano) {
        window.alert(`Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute(`id`, `foto`)
        if (fsex[0].checked) {
            genero = `Homem`
            if (idade >= 0 && idade < 10){
                img.setAttribute(`src`, `bebe.jpg`)
                //crianca
            } else if (idade < 21) {
                img.setAttribute(`src`, `homi.jpg`)
                //jovem
            } else if (idade < 50) {
                img.setAttribute(`src`, `homi.jpg`)
                //adulto
            } else {
                img.setAttribute(`src`, `veio.jpg`)
                //idoso
            }
    


     } else if (fsex[1].checked) {
            genero = `Mulher`
    }

    if (idade >= 0 && idade < 10){
        img.setAttribute(`src`, `bebe.jpg`)
        //crianca
    } else if (idade < 21) {
        img.setAttribute(`src`, `muie.jpg`)
        //jovem
    } else if (idade < 50) {
        img.setAttribute(`src`, `muie.jpg`)
        //adulto
    } else {
        img.setAttribute(`src`, `veia.jpg`)
        //idoso
    }
    res.computedStyleMap.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
}