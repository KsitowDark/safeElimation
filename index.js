let playerCounts = 0;
let currentCount = 0;
const playerNameList =[];
const playerWinner =[];

function playersCount(){
    playerCounts = parseInt(document.getElementById('playerCount').value);

    document.getElementById('playerForm').style.display = 'block';
    document.getElementById('player-List').style.display = 'block';
    document.getElementById('rules').style.display = 'none';
    

    document.getElementById('playerList').innerHTML = ''; 
    document.getElementById('countForm').style.display = 'none'; 
    

}
function addPlayer(){
    const playerName = document.getElementById('playerName').value;
    if(playerName.trim() === '') return;

    const li = document.createElement('li');
    li.textContent = playerName;
    document.getElementById('playerList').appendChild(li);
    document.getElementById('playerName').value = '';
    playerNameList.push(playerName);
    currentCount++;
    if (currentCount >= playerCounts) {
        document.getElementById('playerForm').style.display = 'none';
        document.getElementById('Start').style.display = 'block';
    }

}
function randomNameGenarator(array){
    var randomNumber = Math.floor(Math.random() * array.length);
    const index = array.indexOf(randomNumber);
    const x = array.splice(index, 1);
    return (`${x}`);
}

function theArena(){
    document.getElementById('playerList').style.display = 'none';
    document.getElementById('Arena').style.display = 'block';
    document.getElementById('Start').style.display = 'none';
    var player1 = randomNameGenarator(playerNameList);
    var player2 = randomNameGenarator(playerNameList);
    document.getElementById('player1').innerHTML = "player 1:" + player1;
    document.getElementById('player2').innerHTML = "player 2:" + player2;

}

function gameStart(){
    document.getElementById('Arena').style.display = 'none';
    document.getElementById('card').style.display = 'block';
}

function cardSelector(){
    
}