class Player{
    constructor(){
        // Making the value 0.
this.name=null;
this.index=null;
this.distance=0;
    }
    getCount(){
        var pCount=database.ref('playerCount');// To get the no. of player from database.
        pCount.on("value",(data)=>{// To get the value of playercount.
            playerCount=data.val();
             
        })
    }
    updateCount(count){
        database.ref('/').update({// To update the playerCount.
            playerCount:count
        })
    }
    update(){
      var playerno="players/player"+this.index;
      database.ref(playerno).set({ // Playernumberwise save there name and distance.
          name:this.name,
          distance:this.distance
      })
    }
   static getPlayerInfo(){
      var playerInfo=database.ref('players');// To take all the information about the player.
      playerInfo.on("value",(data)=>{
          allPlayers=data.val();
      })
    }
}