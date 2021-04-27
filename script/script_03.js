/*
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Usiamo i nuovi metodi degli array foreach o filter.
*/

// FUNZIONI

function randomNumber(min, max) {
    let result = parseInt(Math.random() * (max - min) + min);
    return result;
};

// Usando il metodo con il filter()
/**
 * Funzione che ritorna un array di numeri, compresi tra il numero A e il numero B
 * con A < B
 * @param {[]} list 
 * @param {number} numA 
 * @param {number} numB 
 */
const getNumberBetween = (list, numA, numB) => {
    
    let newList = list.filter((element) => {
        if (element > numA && element < numB) {
            return true;
        }
        return false;
    })

    return newList;
} 
// Usando il metodo con il forEach()
function otherGetNumberBetween(otherList, num1, num2) {
    const newArray = [];

    otherList.forEach(element => {
        if(num1 < element && num2 > element) {
            newArray.push(element);
        } 
    });

    return newArray;
}


/*-------------------------------------------------------------*/

const myList = [];
const myLength = 10; // ma mettendo un prompt si può far scegliere all'utente la lunghezza dell'array da creare. 

for(let i = 0; i < myLength; i++) {
    const numX = randomNumber(0, 101);

    if(myList.indexOf(numX) === -1) {
        myList.push(numX);
        
    }

} 

console.log(myList);

console.log(getNumberBetween(myList, 5, 62));

console.log(otherGetNumberBetween(myList, 5, 62));















