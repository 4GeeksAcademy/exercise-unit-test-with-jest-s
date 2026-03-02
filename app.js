
    let unEuro = {
        "JPY": 156.5, //yen japones
        "USD": 1.07, // dolar estado unidense
        "GBP": 0.87, // libra britanica
    }
function fromDollarToYen(dolar
){
  let dolaresAYen = (dolar / unEuro["USD"]) * unEuro["JPY"]
  return Number(dolaresAYen.toFixed(3));
}

function fromEuroToDollar(euros){
    let euroAdolares = euros * unEuro["USD"]
    return euroAdolares
}
function fromYenToPound (yenes){
    let yenALibras = (yenes / unEuro["JPY"]) * unEuro["GBP"] 
    return  Number(yenALibras.toFixed(3));
}


module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};