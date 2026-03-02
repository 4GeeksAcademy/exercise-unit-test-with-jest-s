

const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("Un euro equivale a 1.07 dolares", function () {

  expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("Un dolar equivale a 146.27 yenes", function () {

    expect(fromDollarToYen(4)).toBe(585.047)
})

test("Un yen equivale a 0.0055 libras ", function () {

    expect(fromYenToPound(10)).toBe(0.056)
})