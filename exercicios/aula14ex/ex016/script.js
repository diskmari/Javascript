function contar () {
    var ini = document.getElementById(`txti`)
    var fim  = document.getElementById(`txtf`)
    var passo  = document.getElementById(`txtp`)
    let res = document.getElementById(`res`)

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossivel contar`
        //window.alert(`[ERRO]! Faltam dados`)
    } else {
        res.innerHTML = `Contando: `
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert(`Passo invalido! Considerando PASSO 1`)
            p  = 1
        }
        if (i < f){
//contagem crescente
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} 😃` 
        }
        
        } else {
            // contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 🤞`
            }

        }
        res.innerHTML += `👌`
    }
}