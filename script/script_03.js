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
 * Funzione che ritorna un array, compresi tra l'indice A e l'indice B
 * con A < B
 * @param {[]} list 
 * @param {number} indexA 
 * @param {number} indexB 
 */
const getElementBetween = (list, indexA, indexB) => {
    
    let newList = list.filter((element, index) => {
        if (index >= indexA && index <= indexB) {
            return true;
        }
        return false;
    })

    return newList;
} 
// Usando il metodo con il forEach()
function otherGetElementBetween(otherList, indA, indB) {
    const newArray = [];

    otherList.forEach((element, index) => {
        if(index >= indA && index <= indB){
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
        
    } else {
        i--;
    }
} 

console.log(myList);

console.log(getElementBetween(myList, 5, 9));

console.log(otherGetElementBetween(myList, 1, 5));