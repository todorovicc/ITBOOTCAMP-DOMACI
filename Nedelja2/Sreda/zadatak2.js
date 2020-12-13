// Направити променљиву која представља цену производа коју купац жели да купи
// Направити променљиву која представља количину новца коју купац има
// Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
// Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)

cena = 190 // cena proizvoda
novac = 175 // iznos novca koju kupac ima

if (cena > novac) {
    console.log('Nemate dovoljno novca, trenutno raspolozivo = ', novac, "RSD")
}

if (cena <= novac) {
    console.log('Uspesno ste kupili proizvod, preostalo vam je =', novac - cena, "RSD")
}