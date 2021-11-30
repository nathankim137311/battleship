const width = 10; 

export default function createBoard(grid, arr) {
    for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', `${i}`); 
        arr.push(square);
        grid.appendChild(square); 
    }
}
