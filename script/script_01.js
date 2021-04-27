/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const bikeList = [{
        bikeName: "Bianchi",
        weightInKg: 2.8
    },
    {
        bikeName: "Bottecchia",
        weightInKg: 2.6
    },
    {
        bikeName: "Chesini",
        weightInKg: 3.5
    },
    {
        bikeName: "De Rosa",
        weightInKg: 3.1
    },
    {
        bikeName: "Scapin",
        weightInKg: 2.9
    }
];

function findLighterBike(arrayList) {
    let lighterBike;


    for (let i = 0; i < arrayList.length; i++) {
        const { bikeName, weightInKg } = arrayList[i];

        if (!lighterBike || weightInKg < lighterBike.weightInKg) {
            lighterBike = {
                bikeName,
                weightInKg
            }
        }

    }

    return lighterBike;
}

console.log(findLighterBike(bikeList));


const [, {bikeName, weightInKg}] = bikeList;  

console.log(`La bici con peso minore tra quelle selezionate è la: ${bikeName}, che pesa solo: ${weightInKg}kg!`);




/*
const weightBikeList = [];

for (let i = 0; i < bikeList.length; i++){
    const element = bikeList[i];
    
    weightBikeList.push(element.weightInKg);
}
// array pesi bici
console.log(weightBikeList);
// estraggo dal mio array il numero/peso più piccolo
const minWeight = Math.min(...weightBikeList);

console.log(`${minWeight} è il peso della bici più leggera tra quelle della lista`);
*/