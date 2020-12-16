// 1. Написати функцију која за параметар прима број сати (0-24) и у зависности од доба дана 
// исписује поруке: Добро јутро , Добар дан или Добро вече.

function dobaDana(sat) {
    if (sat > 0 && sat <= 12) {
        return "Dobro jutro!"
    } else if (sat > 12 && sat < 18) {
        return "Dobar dan!"
    } else if (sat >= 18 && sat <= 24) {
        return "Dobro vece!"
    } else {
        return "niste uneli validan sat (0-24)"
    }
}
console.log(dobaDana(17))