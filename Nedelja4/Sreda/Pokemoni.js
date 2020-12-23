// 1. Направити објекат покемон

let pokemons = [{
        name: 'Charizard',
        type: ['fire', 'flying'],
        abilities: ['blaze', 'solar power'],
        stats: {
            attack: 84,
            defense: 78,
            speed: 100
        }
    },
    {
        name: 'Raichu',
        type: ['electric'],
        abilities: ['static', 'lightning rod'],
        stats: {
            attack: 90,
            defense: 55,
            speed: 110
        }
    },
    {
        name: 'Sandslash',
        type: ['ground'],
        abilities: ['sand vail', 'sand rush'],
        stats: {
            attack: 100,
            defense: 110,
            speed: 65
        }
    },
    {
        name: 'Nidoking',
        type: ['poison', 'ground'],
        abilities: ['poison point', 'rivalry', 'sheer force'],
        stats: {
            attack: 102,
            defense: 77,
            speed: 85
        }
    },
    {
        name: 'Machamp',
        type: ['fighting'],
        abilities: ['guts', 'no guard', 'steadfast'],
        stats: {
            attack: 130,
            defense: 80,
            speed: 55
        }
    },
    {
        name: 'Rhydon',
        type: ['ground', 'rock'],
        abilities: ['lightning rod', 'rock head', 'reckless'],
        stats: {
            attack: 130,
            defense: 120,
            speed: 40
        }
    }
]

console.log(pokemons)



// 2. Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

function sposobnosti(arr) {
    let niz = []

    arr.forEach(el => {
        el.abilities.forEach(svojstva => niz.push(svojstva))
    })
    return niz
}
console.log('Sposobnposti svih pokemona:', sposobnosti(pokemons))



// 3. Сортирати покемоне по брзини, растуће.

let sortBySpeed = pokemons.sort((a, b) => a.stats.speed - b.stats.speed);

console.log('Pokemoni po brzini:', sortBySpeed)

// DRUGI NACIN

// let sortiranjePoBrzini = pokemons.sort((a, b) => {
//     if (a.stats.speed > b.stats.speed) {
//         return 1
//     } else {
//         return -1
//     }
// })

// console.log('Pokemoni po brzini:', sortiranjePoBrzini)