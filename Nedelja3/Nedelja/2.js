// 2. Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
// Уноси се колико пице поједете на месечном нивоу, и колико година имате 
// // (Рачуна се да је довољно достављати до стоте године)

function lifeSupply(numPerMonth, age) {
    let count = 0
    let perYear = (numPerMonth * 12)
    for (i = age; i < 100; i++) {
        count++
    }
    return (count * perYear)
}
console.log(lifeSupply(10, 26))