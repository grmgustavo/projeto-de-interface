document.addEventListener('DOMContentLoaded',
    function () {
        const board = document.getElementById('chessboard')

        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                let square = document.createElement('div')

                square.className =
                    (row + col) % 2 === 0 ?
                        'chessboard-square white-square' :
                        'chessboard-square black-square'

                board.appendChild(square)
            }
        }


    }
)
