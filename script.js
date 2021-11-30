import createBoard from "./factories/gameBoard.js";
import { shipArray } from "./factories/ship.js";

const userGrid = document.querySelector('.user-grid'); 
const computerGrid = document.querySelector('.computer-grid');
export const userGridArray = [];
export const computerGridArray = []; 

createBoard(userGrid, userGridArray);
createBoard(computerGrid, computerGridArray);

