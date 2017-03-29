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
var slicePrizes = ["RECLAMA TU PREMIO", "PERDISTE", "RECLAMA TU PREMIO", "PERDISTE", "RECLAMA TU PREMIO", "PERDISTE", "RECLAMA TU PREMIO", "PERDISTE"];
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
    //console.log(stat);
} catch (err) {
    filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
    console.log(err);
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
//console.log(tiempo);


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
	
	$.ajax({
        //url: "http://agua.dev/comerciales/mostrar",
        url: "http://clientes.teknol.net/api_megacable/ruleta",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
               console.log(data);
                $.each(data, function(index, data)
                {
                	window.parent.configuracion.Premios = data.numero ;
				})
            },
            error: function (response) {
                console.log("error");
                //console.log(response);
            },
            failure: function (response) {
                console.log("failure");
                //console.log(response);
            }
    });

//window.parent.configuracion.Premios = ;
// PLAYGAME STATE
	
var playGame = function(game){};

playGame.prototype = {
     // function to be executed once the state preloads
     preload: function(){
          // preloading graphic assets
          game.load.image("wheel", "img/ruleta.png");
		      game.load.image("pin", "img/pin.png");

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
        //$('#ganador').empty();
        $(".botonganador").hide();
        $(".botonperdedor").hide();


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


           console.log("Premios: " + window.parent.configuracion.Premios);

            //console.log(premios);

            if (window.parent.configuracion.Premios != 0) 
            {

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


                /*do {

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
                        token = hasPrime(0, 360, 92, 137);

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
                        token = hasPrime(0, 360, 184, 229);

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
                        token = hasPrime(0, 360, 276, 321);

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
                    else
                    {

                    }
                     
                     console.log("degrees = "+degrees);
                     console.log("Prizes = "+degrees);
                
                } while (window.parent.configuracion.hass == false);*/
            }
            else
            {
                //alert("no hay premios");
                canSpin = false;
                // animation tweeen for the spin: duration 3s, will rotate by (360 * rounds + degrees) degrees
                // the quadratic easing will simulate friction
                var spinTween = game.add.tween(wheel).to({
                    angle: 360 * rounds + degrees
                }, 6000, Phaser.Easing.Quadratic.Out, true);
            
                spinTween.onComplete.add(this.winPrizecero, this);
            }
            
        }
    },

    // function to assign the prize
    winPrize: function () {
          // now we can spin the wheel again
          canSpin = true;
          // writing the prize you just won
          //prizeText.text = slicePrizes[prize];
          // writing the prize you just won
          prizeText.text = slicePrizes[prize];
          //console.log(slicePrizes[prize]);
          if(slicePrizes[prize] == "RECLAMA TU PREMIO")
          {
               prizeText.text = slicePrizes[prize]; 
               triunfo.play();
               ganador();
               var enviar = window.parent.configuracion.Premios--;
               filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
                var datos = {'nombre' :  enviar};
				$.ajax({
        			url: "http://clientes.teknol.net/api_megacable/actualizarruleta/"+1,
            		type: 'PUT',
            		data: JSON.stringify(datos),
            		dataType: 'json',
			        contentType: "application/json; charset=utf-8",
            			success: function (data) {
	                		console.log(data);
	                	},
	            		error: function (response) {
	                		console.log("error");
	                		//console.log(response);
	            		},
	      		});
          }
          else
          {
               prizeText.text = slicePrizes[prize]; 

               derrota.play();
               perdedor();
          }
        //console.log(prizeText.text);
         //$('#ganador').append('<h1>Ganaste un '+prizeText.text+' de descuento!</h1>');
        // $('#ganador').show();
        //window.configuracion.premios = 50;
        //window.parent.configuracion.premios--
        //filesystem.writeFileSync('./configuracion.json', JSON.stringify(window.configuracion), 'utf8');
        //triunfo.play();
    },
    winPrizecero: function () {
          // now we can spin the wheel again
          canSpin = true;

          prizeText.text = slicePrizes[prize];
          console.log(slicePrizes[prize]);
          
          derrota.play();
          //perdedor();
          
    },
};
function ganador()
{
     var btnw = document.createElement("div");
     btnw.className = "botonganador";
     document.body.appendChild(btnw);
     $(".botonganador").show();
     $(".botonganador").fadeOut(30000);

     /*$(".botonganador").show(function(){
         setTimeout(function() {
            $('.botonganador').hide();
          }, 30000);
     });*/
}
function perdedor()
{
     var btnp = document.createElement("div");
     btnp.className = "botonperdedor";
     document.body.appendChild(btnp);
     $(".botonperdedor").show();
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
    //console.log("prize: "+prize);
    //console.log(slicePrizes[prize]);

    if (window.parent.configuracion.countSmall != 0 && slicePrizes[prize] == "RECLAMA TU PREMIO" ) 
    {
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