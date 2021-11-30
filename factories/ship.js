const carrier = createShip('Carrier', 5); 
const battleship = createShip('Battleship', 4); 
const destroyer = createShip('Destroyer', 3); 
const submarine = createShip('Submarine', 3); 
const patrol = createShip('Patrol', 2); 

export const shipArray = [carrier, battleship, destroyer, submarine, patrol];

function createShip(name, length) {
    const ship = {
        name: name.toLowerCase(),
        pegs: createLength(length),
        length: length,
        isSunk: false
    }
    return ship; 
}

function createLength(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(null); 
    }
    return arr;
}