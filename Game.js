class Game{
    constructor(){
      
    }
    getState(){
        var gState=database.ref('gameState');// To get the gameState from th database.
        gState.on("value",function(data){// To store the gameState in database.
            gameState=data.val();
             
        })
    }
    update(state){
        database.ref('/').update({// To update the gameState.
            gameState:state
        })
    }
   async start(){
       if (gameState===0){// if game is in wait state.
           player=new Player();// Creating a player.
           var pCount=await database.ref('playerCount').once("value");// to take the player count.
           if(pCount.exists()){// If no player is there then don,t show the player count. 
               playerCount=pCount.val();
               player.getCount();
           }
           form=new Form();// Creating the form.
           form.display();// Displaying the form.
       }
       car1=createSprite(100,200);
       car2=createSprite(300,200);
       car3=createSprite(500,200);
       car4=createSprite(700,200);
       cars=[car1,car2,car3,car4];
   }
   play(){
       form.hide();// To hide the form while playing.
       Player.getPlayerInfo();// Taking ing=formation about the player.
       if(allPlayers!==undefined){// If all players are not undefined.
          var index=0;
          var x=0;
          var y;
          for(var plr in allPlayers){
              index=index+1;
              x=x+200;
              y=displayHeight-allPlayers[plr].distance;
              cars[index-1].x=x;
              cars[index-1].y=y;
              if(index===player.index){
                  cars[index-1].shapeColor="red";
                  camera.position.x=displayWidth/2
                  camera.position.y=cars[index-1].y;
              }
          }
       }
       if(keyDown(UP_ARROW) && player.index!==null){// If up arrow is pressed then move the distance covered will be increased by 50.
       player.distance+=50;
       player.update();
       }
   }
}