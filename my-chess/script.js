document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('chessboard')

    for (let row; row < 8; row++) {
        for (let col; col < 8; col++) {
            document.createElement('div')

            if ((row + col) % 2 === 0) {
                square.className = 'chessboard-square white-square'
            } else {
                square.className = 'chessboard-square black-square'
            }

            board.appendChild(square)
        }
    }
})