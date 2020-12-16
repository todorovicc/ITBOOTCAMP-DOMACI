// 1. Написати функцију која исписује све елементе низа који су дељиви са 5

function divisibleByFive(arr) {
    for (i = 0; i < arr.length; i++)
        if (arr[i] % 5 === 0) {
            console.log('Array number divisible by 5:', arr[i]);
        }
}
console.log(divisibleByFive([1, 2, 3, 4, 5, 10, 15, 23, 1, 5]));