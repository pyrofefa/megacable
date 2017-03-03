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
var slicePrizes = ["RECLAMA TU PREMIO", "2", "RECLAMA TU PREMIO", "4", "5", "6", "RECLAMA TU PREMIO", "8"];
// the prize you are about to win
var prize;
// text field where to show the prize
var prizeText;
var prizeText2;
var mesNow;

//tomar los datos del archivo json con los premios
window.filesystem = require("fs");
try {
    var stat = filesystem.statSync('./configuracion.json');
} catch (err) {
    filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
}

var token;

var mm = new Date();

var mesok = new Array(12);
mesok[0] = "Enero";
mesok[1] = "Febrero";
mesok[2] = "Marzo";
mesok[3] = "Abril";
mesok[4] = "Mayo";
mesok[5] = "Junio";
mesok[6] = "Julio";
mesok[7] = "Agosto";
mesok[8] = "Septiembre";
mesok[9] = "Octubre";
mesok[10] = "Noviembre";
mesok[11] = "Diciembre";

var tiempo = mesok[mm.getMonth()];
console.log(tiempo);


window.onload = function() {	
     // creation of a 458x488 game
	game = new Phaser.Game(900, 900, Phaser.AUTO, "juego");
     // adding "PlayGame" state
     game.state.add("PlayGame",playGame);
     // launching "PlayGame" state
     game.state.start("PlayGame");
}

var data = filesystem.readFileSync('./configuracion.json', 'utf8');
window.configuracion = JSON.parse(data);
console.log(data);
if (tiempo == window.parent.configuracion.mes) {
    console.log("todo bien");
}
else if (tiempo == "Enero") {
    window.parent.configuracion.mes = tiempo;
    window.parent.configuracion.countBig = 7;
    window.parent.configuracion.countSmall = 10;
    window.parent.configuracion.bimestre = 1;
    filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
}
else if (tiempo == "Febrero") {
    window.parent.configuracion.mes = tiempo;
    window.parent.configuracion.countBig = 8;
    window.parent.configuracion.countSmall = 10;
    window.parent.configuracion.bimestre = 1;
    filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
}
else if (tiempo == "Marzo") {
    window.parent.configuracion.mes = tiempo;
    window.parent.configuracion.countBig = 7;
    window.parent.configuracion.countSmall = 10;
    window.parent.configuracion.bimestre = 2;
    filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
}
else if (tiempo == "Abril") {
    window.parent.configuracion.mes = tiempo;
    window.parent.configuracion.countBig = 8;
    window.parent.configuracion.countSmall = 10;
    window.parent.configuracion.bimestre = 2;
    filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
}
else if (tiempo == "Mayo") {
    window.parent.configuracion.mes = tiempo;
    window.parent.configuracion.countBig = 7;
    window.parent.configuracion.countSmall = 10;
    window.parent.configuracion.bimestre = 3;
    filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
}
else if (tiempo == "Junio") {
    window.parent.configuracion.mes = tiempo;
    window.parent.configuracion.countBig = 8;
    window.parent.configuracion.countSmall = 10;
    window.parent.configuracion.bimestre = 3;
    filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
}
else if (tiempo == "Julio") {
    window.parent.configuracion.mes = tiempo;
    window.parent.configuracion.countBig = 7;
    window.parent.configuracion.countSmall = 10;
    window.parent.configuracion.bimestre = 4;
    filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
}
else if (tiempo == "Agosto") {
    window.parent.configuracion.mes = tiempo;
    window.parent.configuracion.countBig = 8;
    window.parent.configuracion.countSmall = 10;
    window.parent.configuracion.bimestre = 4;
    filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
}
else if (tiempo == "Septiembre") {
    window.parent.configuracion.mes = tiempo;
    window.parent.configuracion.countBig = 7;
    window.parent.configuracion.countSmall = 10;
    window.parent.configuracion.bimestre = 5;
    filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
}
else if (tiempo == "Octubre") {
    window.parent.configuracion.mes = tiempo;
    window.parent.configuracion.countBig = 8;
    window.parent.configuracion.countSmall = 20;
    window.parent.configuracion.bimestre = 5;
    filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
}
else if (tiempo == "Noviembre") {
    window.parent.configuracion.mes = tiempo;
    window.parent.configuracion.countBig = 7;
    window.parent.configuracion.countSmall = 10;
    window.parent.configuracion.bimestre = 6;
    filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
}
else if (tiempo == "Diciembre") {
    window.parent.configuracion.mes = tiempo;
    window.parent.configuracion.countBig = 8;
    window.parent.configuracion.countSmall = 10;
    window.parent.configuracion.bimestre = 6;
    filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
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
    spin: function () {
        // can we spin the wheel?
        $('#ganador').empty();
        if (canSpin > 0) 
        {
            // resetting text field
            prizeText.text = "";
            prizeText2.text = "";
            // the wheel will spin round from 2 to 4 times. This is just coreography
            var rounds = game.rnd.between(2, 4);
            // then will rotate by a random number from 0 to 360 degrees. This is the actual spin
            var degrees = game.rnd.between(0, 360);

            // before the wheel ends spinning, we already know the prize according to "degrees" rotation and the number of slices
            prize = slices - 1 - Math.floor(degrees / (360 / slices));


            console.log("Big: " + window.parent.configuracion.countBig, "Small: " + window.parent.configuracion.countSmall);

            if (window.parent.configuracion.countSmall != 0 || window.parent.configuracion.countBig != 0) {

                do {

                    // 1
                    if (degrees >= 0 && degrees <= 45) {
                        token = hasPrime(0, 360, 0, 45);
                        if (token != -1) {
                            degrees = token;
                        }
                    }

                    // 2
                    if (degrees > 45 && degrees <= 90) {
                        token = hasPrime(0, 360, 46, 91);

                        if (token != -1) {
                            degrees = token;
                        }

                    }

                    // 3
                    if (degrees > 90 && degrees <= 135) {
                        //token = hasPrime(0, 360, 92, 137);

                        if (token != -1) {
                            degrees = token;
                        }
                    }

                    // 4
                    if (degrees > 135 && degrees <= 180) {
                        token = hasPrime(0, 360, 138, 183);

                        if (token != -1) {
                            degrees = token;
                        }
                    }

                    // 5
                    if (degrees > 180 && degrees <= 225) {
                        //token = hasPrime(0, 360, 184, 229);

                        if (token != -1) {
                            degrees = token;
                        }
                    }

                    // 6
                    if (degrees > 225 && degrees <= 270) {
                        token = hasPrime(0, 360, 230, 275);

                        if (token != -1) {
                            degrees = token;
                        }
                    }

                    // 7
                    if (degrees > 270 && degrees <= 315) {
                        //premio = true;
                        //token = hasPrime(0, 360, 276, 321);

                        if (token != -1) {
                            degrees = token;
                        }
                    }

                    // 8
                    if (degrees > 315 && degrees <= 360) {
                        token = hasPrime(0, 360, 322, 360);

                        if (token != -1) {
                            degrees = token;
                        }
                    }

                } while (window.parent.configuracion.hass == false);

                //console.log(premios);

                //console.log(prize);
                // now the wheel cannot spin because it's already spinning
                canSpin = false;

                // animation tweeen for the spin: duration 3s, will rotate by (360 * rounds + degrees) degrees
                // the quadratic easing will simulate friction
                var spinTween = game.add.tween(wheel).to({
                    angle: 360 * rounds + degrees
                }, 6000, Phaser.Easing.Quadratic.Out, true);

                spinTween.onComplete.add(this.winPrize, this);
                //console.log(slicePrizes[prize]);
                // once the tween is completed, call winPrize function

            } else {
                //alert("¡No hay premios por el momento!");
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
              spinTween.onComplete.add(this.winPrizecero, this);
            }
        }
    },

    // function to assign the prize
     // function to assign the prize
     winPrize: function (){
          // now we can spin the wheel again
          canSpin = true;
          // writing the prize you just won
          prizeText.text = slicePrizes[prize];
          console.log(slicePrizes[prize]);
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
     },

     winPrizecero: function (){
          // now we can spin the wheel again
          canSpin = true;
          // writing the prize you just won
          prizeText.text = slicePrizes[prize];
          console.log(slicePrizes[prize]);
          derrota.play();
          perdedor();
      }


};
function ganador()
{
     var btnw = document.createElement("div");
     btnw.className = "botonganador";
     document.body.appendChild(btnw);
      $(".botonganador").show('slow');
}
function perdedor()
{
     var btnp = document.createElement("div");
     btnp.className = "botonperdedor";
     document.body.appendChild(btnp);
     $(".botonperdedor").show(3000,"swing");
}


function randonexcluyerango(min, max, lessMin, lessMax) {
    var res;

    do {
        res = (max - min + 1) * Math.random() + min;
    } while (res >= lessMin && res <= lessMax);

    return res;
}
function hasPrime(min, max, lessMin, lessMax) {

    var degrees;
    console.log(prize);

    if (window.parent.configuracion.countBig != 0 && (prize == 4 || prize == 7 || prize == 1)) {
        window.parent.configuracion.hass = true;
        window.parent.configuracion.countBig--;
        filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
        degrees = -1;
    } else if (window.parent.configuracion.countSmall != 0 && (prize == 0  || prize == 2 || prize == 3 || prize == 5 || prize == 6)) {
        window.parent.configuracion.hass = true;
        window.parent.configuracion.countSmall--;
        filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
        degrees = -1;
    } else {
        window.parent.configuracion.hass = false;
        degrees = randonexcluyerango(min, max, lessMin, lessMax);
        prize = slices - 1 - Math.floor(degrees / (360 / slices));
        filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
    }

    return degrees;
}