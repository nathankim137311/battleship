import { shipArray } from "./factories/ship.js";
import { computerGridArray, userGridArray } from "./script.js";

function randomNumGenerator() {
    let number = 10;
    let x = 0;
    while(x !== number){
        x = Math.floor((Math.random() * 10) + 1);
        console.log(x);
    }
}

// generateRandomPosition(shipArray[0]); 
random(); 
function generateRandomPosition(ship) {
    let randomStart = Math.floor(Math.random() * (99 - 0 + 1)) + 1;
    let arr = [];
    for (let i = 0; i < ship.length; i++) {
        arr.push(randomStart++);
    } 
    return arr;
}

function random() {
    let arr = generateRandomPosition(shipArray[0]);
    let i = 1; 
    while (i )
    for(let i = 1; i < arr.length; i++) {
        while(arr[i] % 10 === 0) {
            arr = generateRandomPosition(shipArray[0]); 
        }
    }
    return arr; 
}


// generate();

//generateRandom(shipArray[0]);
//console.log(generateRandom(shipArray[0]));

// function generateRandom(ship) {
//     let randomStart = Math.floor(Math.random() * (99 - 0 + 1)) + 1;
//     const arr = []; 
//     for (let i = 0; i < ship.length; i++) {
//         arr.push(randomStart++);
//     } 
//     // console.log(arr);
//     for (let i = 1; i < ship.length; i++) {
//         if (arr[i] % 10 === 10) return true;
//         else return false;
//     }
// }

// function generate() {
//     let generate = generateRandom(shipArray[0]); 
//     while (generate === true) {
//         generate = generateRandom(shipArray[0]);
//         console.log(generate);
//     }
// }

// function checkShip() {
//     let arr = generate(shipArray[0]);
//     let exceptFirstArr = arr.slice(- (arr.length - 1));
//     for (let i = 0; i < exceptFirstArr.length; i++) {
//         if (exceptFirstArr[i] % 10 === 0) {
//             checkShip();
//         } else {
//             return arr;
//         }
//     }
// }

// console.log(checkShip()); 

// console.log(generate(shipArray[0]));

// function randomizeShips() {
//     for (let i = 0; i < shipArray.length; i++) {
//         console.log(generate(shipArray[i]));
//     }
// }

// randomizeShips();
