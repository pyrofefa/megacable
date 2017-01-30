var derrota = new Audio('sonidos/derrota.wav');
var triunfo = new Audio('sonidos/triunfo.wav');

// the game itself
var game;
// the spinning wheel
var wheel; 
// can the wheel spin?
var canSpin;
// slices (prizes) placed in the wheel
var slices = 8;
// prize names, starting from 12 o'clock going clockwise
var slicePrizes = ["RECLAMA TU PREMIO", "PERDISTE", "PERDISTE", "PERDISTE", "RECLAMA TU PREMIO", "PERDISTE", "PERDISTE", "PERDISTE"];
// the prize you are about to win
var prize;
// text field where to show the prize
var prizeText;
var prizeText2;

window.onload = function() {	
     // creation of a 458x488 game
	game = new Phaser.Game(900, 900, Phaser.AUTO, "juego");
     // adding "PlayGame" state
     game.state.add("PlayGame",playGame);
     // launching "PlayGame" state
     game.state.start("PlayGame");
}

// PLAYGAME STATE
	
var playGame = function(game){};

playGame.prototype = {
     // function to be executed once the state preloads
     preload: function(){
          // preloading graphic assets
          game.load.image("wheel", "ruleta.png");
		game.load.image("pin", "pin.png");

     },
     // funtion to be executed when the state is created
  	create: function(){
          // giving some color to background
  		game.stage.backgroundColor = "#58ACFA";
          // adding the wheel in the middle of the canvas
  		wheel = game.add.sprite(game.width / 2, game.width / 2, "wheel");
          // setting wheel registration point in its center
          wheel.anchor.set(0.5);
          // adding the pin in the middle of the canvas
          var pin = game.add.sprite(game.width / 2, game.width / 2, "pin");
          // setting pin registration point in its center
          pin.anchor.set(0.5);
          // adding the text field
          prizeText = game.add.text(game.world.centerX, 1100, "", {font:"50px Arial", fill: "#D60056"});
          prizeText2 = game.add.text(900, 1238, "", {font:"35px Arial", fill: "#D60056"});
          // setting text field registration point in its center
          prizeText.anchor.set(0.5);
          prizeText2.anchor.set(0.5);
          // aligning the text to center
          prizeText.align = "center";
          prizeText2.align = "center";
          // the game has just started = we can spin the wheel
          canSpin = true;
          // waiting for your input, then calling "spin" function
          game.input.onDown.add(this.spin, this);		
	},
     // function to spin the wheel
     spin(){
          // can we spin the wheel?
          if(canSpin > 0){  
               // resetting text field
               prizeText.text = "";
               prizeText2.text = "";
               // the wheel will spin round from 2 to 4 times. This is just coreography
               var rounds = game.rnd.between(2, 4);
               // then will rotate by a random number from 0 to 360 degrees. This is the actual spin
               var degrees = game.rnd.between(0, 360);
               // before the wheel ends spinning, we already know the prize according to "degrees" rotation and the number of slices
               prize = slices - 1 - Math.floor(degrees / (360 / slices));
               // now the wheel cannot spin because it's already spinning
               canSpin = false;
               // animation tweeen for the spin: duration 3s, will rotate by (360 * rounds + degrees) degrees
               // the quadratic easing will simulate friction
               var spinTween = game.add.tween(wheel).to({
                    angle: 360 * rounds + degrees
               }, 6000, Phaser.Easing.Quadratic.Out, true);
               // once the tween is completed, call winPrize function
               spinTween.onComplete.add(this.winPrize, this);
          }
     },
     // function to assign the prize
     winPrize(){
          // now we can spin the wheel again
          canSpin = true;
          // writing the prize you just won
          prizeText.text = slicePrizes[prize];
          if(slicePrizes[prize] == "RECLAMA TU PREMIO")
          {
               triunfo.play();
               ganador();
          }
          else
          {
               derrota.play();
               perdedor();
          }
     }
};
function ganador()
{
     var btnw = document.createElement("div");
     btnw.className = "botonganador";
     document.body.appendChild(btnw);
          $(".botonganador").fadeOut(30000);
}
function perdedor()
{
     var btnp = document.createElement("div");
     btnp.className = "botonperdedor";
     document.body.appendChild(btnp);
     $(".botonperdedor").fadeOut(3000,"swing");
}