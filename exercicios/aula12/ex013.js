 var agora = new Date()
 var diaSem = agora.getDay()

 /*

0 Dom
1 Seg 
2 Ter
3 Quar
4 Quin
5 Sex
6 Sab

 */

 console.log(diaSem)

 switch(diaSem) {
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Seg`)
        break
    case 2:
        console.log(`Ter`)
        break
    case 3:
        console.log(`Quart`)
        break 
    case 4:
        console.log(`Quin`)
        break 
    case 5:
        console.log(`Sex`)
        break 
    case 6:
        console.log(`Sab`)
        break   
    default:
        console.log(`[Error] Dia Inválido!`)
                                                   
                        
                                            
 }