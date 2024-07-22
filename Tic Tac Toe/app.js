// app.js

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const resetButton = document.getElementById('reset');
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];

    const checkWin = (board) => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const checkDraw = (board) => {
        return board.every(cell => cell);
    };

    const handleClick = (index) => {
        if (board[index] || checkWin(board)) return;

        board[index] = currentPlayer;
        boxes[index].textContent = currentPlayer;

        const winner = checkWin(board);
        if (winner) {
            setTimeout(() => alert(`${winner} wins!`), 10);
        } else if (checkDraw(board)) {
            setTimeout(() => alert(`It's a draw!`), 10);
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    };

    boxes.forEach((box, index) => {
        box.addEventListener('click', () => handleClick(index));
    });

    resetButton.addEventListener('click', () => {
        board = ['', '', '', '', '', '', '', '', ''];
        boxes.forEach(box => box.textContent = '');
        currentPlayer = 'X';
    });
});
