// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill
// all cells of the grid with digits from 1 to 9, so that each column, each row,
// and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, 
// and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's,
// which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

function validSolution(board){

    function checkArrays(arr) {
        let sortedStr = arr.slice(0).sort().join("");
        let example = "123456789";
        return sortedStr === example ? true : false;
    }

    for (let i = 0; i < board.length; i++) {
        let xArr = board[i];
        let yArr = board.map((el) => el[i]).reduce((acc, cur) => {
            acc.push(cur);
            return acc;
        }, []);

        if (checkArrays(xArr) === false || checkArrays(yArr) === false) {
            return false;
        }
    }
    
    let temp = 0;
    let currentSquare = [];

    for (let i = 0; i < board.length; i += 3) {
        for (let j = 0; j < board.length; j += 3) {

            let first = board[temp].slice(j, j + 3);
            let second = board[temp + 1].slice(j, j + 3);
            let third = board[temp + 2].slice(j, j + 3);

            currentSquare = [...first, ...second, ...third];
            if (checkArrays(currentSquare) === false) {
                return false;
            }
        }
        temp += 3;
    }

    return true;
}

validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true