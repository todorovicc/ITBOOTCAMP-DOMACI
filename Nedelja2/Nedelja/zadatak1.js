// zadatak1.js

// Сачувати у променљиве цену и пречник пице
// Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
// Исписати тај резултат у конзолу

let cena = 150
let R = 30
let r = R / 2
console.log('poluprecnik pice je:', r)

let P = (r ** 2) * Math.PI
console.log('povrsina pice je:', P, 'cm2')

let CenaPicePoCm2 = cena / P
console.log('cena pice po cm2 je:', CenaPicePoCm2, 'dinara.')