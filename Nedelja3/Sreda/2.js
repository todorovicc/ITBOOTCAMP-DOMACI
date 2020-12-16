// 2. Написати функцију која израчунава цену пице по квадратном центиметру 
// (параметри функције су полупречник у цм, и цена пице)


function cenaPicePoCm2(r, cenaPice) {
    let P = r ** 2 * Math.PI
    return (cenaPice / P).toFixed(2)

}
console.log('Cena pice po cm2 je:', cenaPicePoCm2(15, 1000), "dinara.")