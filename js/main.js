'use strict'

// var board = []

var gBoard
var timer;


function init(gBoard) {
    timerUp()
    // gBoard = createBoard()
    // difficulty()
    renderBoard(gBoard)
    console.log(gBoard);
}
function difficulty() {
    document.getElementById('difficulty1').onclick = function () {
        gBoard = createBoard(4, 4)
        init(gBoard)
    }
    document.getElementById('difficulty2').onclick = function () {
        gBoard = createBoard(8, 8)
        init(gBoard)
        
    }
    document.getElementById('difficulty3').onclick = function () {
        gBoard = createBoard(12, 12)
        init(gBoard)
    }
}
var ele = document.getElementById('timer');

function timerUp(){
    var sec = 0;
    timer = setInterval(()=>{
        ele.innerHTML = '00:'+sec;
        sec++;
    }, 1000)
}


