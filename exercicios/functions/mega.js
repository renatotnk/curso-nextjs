export function mega(quantidade = 6, numeros = []){
    let qtde = +quantidade
    if (qtde < 6 && qtde > 60){
        throw "Quantidade inválida"
    }

    if(numeros.length === qtde){
        return numeros.sort(function(a, b){return a-b})
    }

    const randNum = parseInt(Math.random() * 60) + 1
    if(!numeros.includes(randNum)){
        return mega(qtde, [...numeros, randNum])
    } else {
        return mega(qtde, numeros)
    }
}