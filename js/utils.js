'use strict'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function createBoard(rows,cols) {
    //build the board 8 * 8
    var board = [];
    for (var i = 0; i < rows; i++) {
        board[i] = [];
        for (var j = 0; j < cols; j++) {

            board[i][j] = ''
        }
    }
    return board
}

function renderBoard(board) {
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr>';
        for (var j = 0; j < row.length; j++) {
            var cell = row[j];
            // figure class name
            var className = 'cell'
            var tdId = `cell-${i}-${j}`;

            strHtml += `<td id="${tdId}" class="${className}" onclick="cellClicked(this)">
                            ${cell}
                        </td>`
        }
        strHtml += '</tr>';
    }
    var elMat = document.querySelector('.board');
    elMat.innerHTML = strHtml;
}



function creatCell(){


}



function renderCell(location, value) {

    var cellSelector = '.' + getClassName(location)
    var elCell = document.querySelector(cellSelector);
    elCell.innerHTML = value;
}

function getClassName(location) {
    var cellClass = `cell-${location.i}-${location.j}`;
    return cellClass;
}



function countNeighbors(mat, rowIdx, colIdx) {

    var count = 0

    for (var i = rowIdx - 1; i < rowIdx + 1; i++) {
        if (i < 0 || i >= mat.length) continue
        for (var j = colIdx - 1; j < colIdx + 1; j++) {
            if (j < 0 || j >= mat.length) continue
            if (i === rowIdx && j === colIdx) continue

            count++
        }
    }
    return count
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function getEmptyCells(gBoard) {
    var emptyCells = []
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[i].length; j++) {

            if (gBoard[i][j] === EMPTY) {
                    emptyCells.push({i,j})
            }
        }
    }
    // console.log(emptyCells)
    if(emptyCells.length==0) return null
    //IF YOU WANT TO GET A RANDOM POSITION IN AN EMPTY CELL                        
    // var idx = emptyCells[getRandomInt(0,emptyCells.length)]
    // return idx

    //RETURN OF EMPTY CELLS ARRAY WITH I AND J OBJECTS 
    return emptyCells
}

function startTimer() {
    if (count) {
        miliSec = parseInt(miliSec)
        sec = parseInt(sec)
        min = parseInt(min)

        miliSec += 48

        if (miliSec >= 1000) {
            sec++
            miliSec = 0
        }

        if (sec == 60) {
            min++
            sec = 0
            miliSec = 0
        }

        if (miliSec < 10) {
            miliSec = '0' + miliSec
        }

        if (sec < 10) {
            sec = '0' + sec
        }

        if (min < 10) {
            min = '0' + min
        }
        stopWatch.innerText = min + ' : ' + sec + ' : ' + miliSec
        // setTimeout('startTimer()', 0050)
    }
}

// NEEDS AN ARRAY WITH RANDOM NUMS USUALLY
function drawNum(nums) {
    // console.log(`gNums.length:`, gNums.length)
    var num = getRandomInt(0, nums.length)
    var removedNum = nums.splice(num, 1)
    // console.log(`gNums:`, gNums)
    return removedNum
  }
