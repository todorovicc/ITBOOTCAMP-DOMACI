// zadatak2.js

// За првих 100 бројева исписати:

// FizzBuzz ако је број дељив и са 3 и са 5
// Fizz ако је број дељив само са 3
// Buzz ако је број дељив само са 5
// Број ако није дељив ни са 3 ни са 5
// (1,2,Fizz,4,Buzz,...)

for (x = 1; x <= 100; x++) {
    if (x % 3 == 0)
        console.log('Fizz')
    else if (x % 5 == 0)
        console.log('Buzz')
    else if (x % 5 && x % 3)
        console.log('FizzBuzz')
    else
        console.log(x)
}