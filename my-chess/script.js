document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('chessboard');
    const numRows = 8;
    const numCols = 8;

    // Criação dos quadrados do tabuleiro utilizando apenas um loop
    for (let i = 0; i < numRows * numCols; i++) {
        const row = Math.floor(i / numCols);
        const col = i % numCols;

        let square = document.createElement('div');
        square.className = (row + col) % 2 === 0 ? 'chessboard-square white-square' : 'chessboard-square black-square';
        board.appendChild(square);
    }
});
