import { shipArray } from "./factories/ship.js";
import { computerGridArray, userGridArray } from "./script.js";

function getRandomInt(ship) {
    const randomNum = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    const length = ship.length; 
    const max = Math.ceil((10 - length) + (randomNum * 10));
    const min = Math.floor(0 + (randomNum * 10));
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt; 
}

function generateRandomHorizontalPosition(ship) {
    let randomInt = getRandomInt(ship); 
    let arr = [];
    for (let i = 0; i < ship.length; i++) {
        arr.push(randomInt++);
    }
    return arr;
}

function generate() {
    const randomShipsArr = [];
    for (let i = 0; i < shipArray.length; i++) {
        const ship = generateRandomHorizontalPosition(shipArray[i]);
        randomShipsArr.push(ship);
    }
    // for (let i = 0; i < randomShipsArr.length; i++) {
    //     if (computerGridArray)
    // }
    return randomShipsArr;
}

// function randomNumGenerator() {
//     let number = 10;
//     let x = 0;
//     while(x !== number){
//         x = Math.floor((Math.random() * 10) + 1);
//         console.log(x);
//     }
// }
