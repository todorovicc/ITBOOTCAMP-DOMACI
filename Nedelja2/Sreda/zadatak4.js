// Исписати првих 1000 бројева дељивих са 5


let count = 0
for (x = 1;; x++) {
    if (x % 5 == 0) {
        console.log('Broj deljiv sa 5 je:', x)
        count++
    }
    if (count == 1000)
        break
}