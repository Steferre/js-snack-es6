/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const superLeague = [
    {nome: "Real Madrid", puntiFatti: 0, falliSubiti: 0},
    {nome: "Juventus", puntiFatti: 0, falliSubiti: 0},
    {nome: "Manchester United", puntiFatti: 0, falliSubiti: 0},
    {nome: "Liverpool", puntiFatti: 0, falliSubiti: 0},
    {nome: "Barellona", puntiFatti: 0, falliSubiti: 0},
    {nome: "Arsenal", puntiFatti: 0, falliSubiti: 0},
    {nome: "Chelsea", puntiFatti: 0, falliSubiti: 0},
    {nome: "Manchester City", puntiFatti: 0, falliSubiti: 0},
    {nome: "Tottenham", puntiFatti: 0, falliSubiti: 0},
    {nome: "Milan", puntiFatti: 0, falliSubiti: 0},
    {nome: "Atletico Madrid", puntiFatti: 0, falliSubiti: 0},
    {nome: "Inter", puntiFatti: 0, falliSubiti: 0},
]

for (let i = 0; i < superLeague.length; i++){
    const element = superLeague[i];

    element.puntiFatti = randomNumber(0, 100);
    element.falliSubiti = randomNumber(0, 500);
}

console.log(superLeague);

const superLeagueOnlyFouls = [];

for (let i = 0; i < superLeague.length; i++) {
    const element = superLeague[i];

    const {nome, falliSubiti} = element;
    
    superLeagueOnlyFouls.push({nome, falliSubiti});
}

console.log(superLeagueOnlyFouls);



function randomNumber(min, max) {
    const result = parseInt((Math.random() * (max - min) + min));

    return result
}