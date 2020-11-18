//creating variables.
var gameState=0;
var playerCount;
var allPlayers;
var database;
var form, player,game;
var distance=0;
var car1,car2,car3,car4;
var cars=[];
function setup(){
    createCanvas(displayWidth-20,displayHeight-20);
    database=firebase.database();// Defining the database.
    game=new Game();// Creating the game.
    game.getState();// To get gameState of the game.
    game.start();// To start the game.
}
function draw(){
    if(playerCount===4){// If player Count is 4 than change game state to play.
        game.update(1);
    }
    if(gameState===1){// To play the game.
        clear ();
        game.play();
        drawSprites();
    }
  
}