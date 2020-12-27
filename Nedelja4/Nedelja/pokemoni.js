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
    // 4. Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

const strongestPokemon = (pokemoni, strongest = 0) => {
    let attack = 0;
    pokemoni.forEach(pokemon => {
        if (pokemon.stats.attack > attack) {
            attack = pokemon.stats.attack;
            strongest = pokemon;
        }
    })
    return strongest

}
console.log('----------------------------------------------------------------')
console.log('The strongest pokemon is:', strongestPokemon(pokemons))

// 5. На клик на дугме прикажи све и најјачег покемона, приказује покемона који има најјачи напад 
// (користити већ написану функцију иѕ 4. задатка) по формату:
// <div>
//         <p>Opis pokemona</p>
//         <img src="slika odgovarajućeg pokemona">
//     </div>

const btnAll = document.querySelector("#prikaz")
const btnStrongest = document.querySelector("#pobednik")
const wrapper = document.querySelector(".wrapper")

btnAll.addEventListener('click', () => {
    pokemons.forEach((po) => {
        let div = document.createElement('div');
        let opis = document.createElement('p');
        let img = document.createElement('img');

        opis.innerText = `Name: ${po.name}\n 
        Type: ${po.type}\n 
        Abilities: ${po.abilities}\n 
        Stats: attack: ${po.stats.attack}; defense: ${po.stats.defense}; speed ${po.stats.speed}`

        opis.style.borderwidth = '300px'
        opis.style.padding = '5px';
        opis.style.backgroundColor = '#94baf7';
        opis.style.fontSize = '90%';
        opis.style.tex

        img.src = `images/${po.name}.png`;
        img.style.width = "280px";
        div.style.display = 'flex';
        div.style.padding = "10px"
        div.style.margin = "20px"
        div.style.backgroundColor = '#94baf7';
        div.style.border = "solid black 1px";
        div.style.borderRadius = '15px'

        wrapper.append(div)

        div.append(opis, img)
    })

})


btnStrongest.addEventListener('click', () => {
    let strongest = strongestPokemon(pokemons)
    let div2 = document.createElement('div');
    let opis = document.createElement('p');
    let img = document.createElement('img');


    opis.innerText = `STRONGEST POKEMON IS:\n
            Name: ${strongest.name}\n 
            Type: ${strongest.type}\n 
            Abilities: ${strongest.abilities}\n 
            Stats: attack: ${strongest.stats.attack}; defense: ${strongest.stats.defense}; speed ${strongest.stats.speed}`

    opis.style.borderwidth = '300px'
    opis.style.padding = '5px';
    opis.style.backgroundColor = '#94baf7';
    opis.style.fontSize = '90%';

    img.src = `images/${strongest.name}.png`;
    img.style.width = "280px";
    div2.style.flex = 'left';
    div2.style.padding = "10px"
    div2.style.margin = "20px"
    div2.style.backgroundColor = '#94baf7';
    div2.style.border = "solid black 1px";
    div2.style.borderRadius = '15px'

    wrapper.append(div2)

    div2.append(opis, img)
})