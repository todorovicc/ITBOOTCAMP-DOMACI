// На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) 
// И постоје 2 дугмета за наручивање одмах
// Дугмићи за 'наручивање' повећавају бројач
// Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку 
// (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ]) Напомена: X је бројач, 
// проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку

const btnOrder = document.querySelector(".order")
const btnOrder2 = document.querySelector(".order2")
const btnNow = document.querySelector(".ordernow")
const btnNow2 = document.querySelector(".ordernow2")
const desc = document.querySelector("#desc")

let count = 0
let date = new Date()

btnOrder.addEventListener("click", () => {
    count++

    console.log(count, 'pizza(s) seleceted')
})
btnOrder2.addEventListener("click", () => {
    count++

    console.log(count, 'pizza(s) seleceted')
})

btnNow.addEventListener("click", () => {
    if (count == 0)
        desc.innerText = " You did not order any pizza yet.";

    else if (count == 1)
        desc.innerText = `You have ordered ${count} pizza. @ ${date}`

    else
        desc.innerText = `You have ordered ${count} pizzas. @ ${date}`

    count = 0
    console.log('0 pizzas selected')
})

btnNow2.addEventListener("click", () => {
    if (count == 0)
        desc.innerText = " You did not order any pizza yet.";

    else if (count == 1)
        desc.innerText = `You have ordered ${count} pizza. @ ${date}`

    else
        desc.innerText = `You have ordered ${count} pizzas. @ ${date}`

    count = 0
    console.log('0 pizzas selected')
})