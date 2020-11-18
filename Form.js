class Form{
    constructor(){
        this.input=createInput("name");// Creating block to write name.
        this.button=createButton("Play");// Creating button.
        this.greeting=createElement('h2');// Creating greeting.
        this.title=createElement('h2');//Creating tittle and giving the size.
    }
    hide(){
      // Creating function to hide all the buttons after use.
      this.button.hide();
      this.input.hide();
      this.greeting.hide();
      this.title.hide();
    }
    display(){
      this.title.html("multiplayer car racing game");// Writting the tittle.
      this.title.position(displayWidth/2-50,0);// Giving position to tittle.
     this.input.position(displayWidth/2-40,displayHeight/2-80);// Giving position  to input.
     this.button.position(displayWidth/2+30,displayHeight/2);// Giving position to button.
      this.button.mousePressed(()=>{// If mouse pressed.
         this.input.hide();// To hide the input.
          this.button.hide();// To hide the button.
          player.name=this.input.value();// To store name of the player in database.
          playerCount++;// To increase playercount by 1.
          player.index=playerCount;
          player.update();// To update the name of player and distance.
          player.updateCount(playerCount);// To update the no. of players.
           this.greeting.html("Welcome"+player.name);//Writting the greeting.
          this.greeting.position(displayWidth/2-70,displayHeight/4);// Giving position to greeting.
      });

    }
}