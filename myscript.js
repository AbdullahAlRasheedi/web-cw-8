let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
]
let turn = 'X'
function press(x ,y) {
    if (turn == 'X') {
        turn = 'O'
    }
    else{
        turn = 'X'
    }
    // Do stuff
    
    let cell = document.getElementById(`${x}${y}`);
    cell.innerText = turn;
    board[x][y] = turn;
    
    if(board[0][0] == turn && board[0][1] == turn && board[0][2] == turn){
        document.getElementById(turn).innerText = `you are win!! ${turn}`;
        
    }
    else if(board[1][0] == turn && board[1][1] == turn && board[1][2] == turn){
        document.getElementById(turn).innerText = `you are win!! ${turn}`;
        
    }
    else if(board[2][0] == turn && board[2][1] == turn && board[2][2] == turn){
        document.getElementById(turn).innerText = `you are win!! ${turn}`;
        
    }
    else if(board[0][2] == turn && board[1][1] == turn && board[2][0] == turn){
        document.getElementById(turn).innerText = `you are win!! ${turn}`;
        
    }
    else if(board[1][0] == turn && board[1][1] == turn && board[2][2] == turn){
        document.getElementById(turn).innerText = `you are win!! ${turn}`;
        
    }
    else if(board[0][0] == turn && board[1][0] == turn && board[2][0] == turn){
        document.getElementById(turn).innerText = `you are win!! ${turn}`;
        
    }
    else if(board[0][1] == turn && board[1][1] == turn && board[2][1] == turn){
        document.getElementById(turn).innerText = `you are win!! ${turn}`;
        
    }
    else if(board[0][2] == turn && board[1][2] == turn && board[2][2] == turn){
        document.getElementById(turn).innerText = `you are win!! ${turn}`;
        
    }
    
}
