
var gameState = 0;
var playerCount, database;
var form, game, player;


function setup(){
    database=firebase.database();
    
    createCanvas(500,500);

    game = new Game();
    game.getState();
    game.start();
}


function draw(){
 
}

/*function writePosition(x,y){
    database.ref("ball/position").set({
       x: ball.x + x,
       y: ball.y + y 
    });
}

function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function showError(){
    console.log("ERROR!!!");
}
*/

