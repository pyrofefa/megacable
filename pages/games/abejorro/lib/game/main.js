ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

	'game.entities.player',
	'game.entities.planta',
	'game.entities.matamoscas',
	'game.entities.punto',
	'game.entities.coin',

	'game.levels.grasslands'
)
.defines(function(){
	

MyGame = ig.Game.extend({
	
	clearColor: "#d0f4f7",
	gravity: 800, // All entities are affected by this
	
	// Load a font
	font: new ig.Font( 'media/fredoka-one.font.png' ),
	logo: new ig.Image('media/snte.png'),
	iniciado: false,
	muerto: false,
	puntos:0,


	
	init: function() {
		iniciado=false;
		muerto = false;
		puntos = 0;
	
		this.font.letterSpacing = -2;	


		canvas.style.height =('1000px');
		canvas.style.width = ('900px');
		canvas.style.marginLeft = "-" + ((window.innerHeight * 0.65) / 2)+ "px";


		/*canvas.style.height = window.innerHeight + 'px';
		canvas.style.width = (window.innerHeight * 0.75) + 'px';
		canvas.style.marginLeft = "-" + ((window.innerHeight * 0.75) / 2)+ "px";*/

		ig.input.bind( ig.KEY.MOUSE1, 'jump' );
		
		this.screen.y = 900;
		this.loadLevel( LevelGrasslands );
	},

	loadLevel: function( data ) {
		this.currentLevel = data;
		this.parent( data );
	},

	reloadLevel: function() {
		this.loadLevelDeferred( this.currentLevel );
	},

	nuevoObstaculo: function() {
		var posy = Math.floor(Math.random() * (418 - 242 + 1)) + 242;
		var posx = this.player.pos.x +235;
		this.spawnEntity(EntityPlanta, posx, posy);
		this.spawnEntity(EntityMatamoscas, posx, posy -200 - 324);
		this.spawnEntity(EntityPunto, posx +20, posy -200);

	},
	
	update: function() {		
		this.parent();
		this.screen.x = (this.player.pos.x - ig.system.width/2) + 85;
		this.screen.y -= (this.screen.y - ((this.player.pos.y - ig.system.height/2.7))) /20;
	},
	
	draw: function() {
		this.parent();

		if(!this.iniciado)
		{
			this.logo.draw(50,20);
			this.font.draw( "", 150, 90,ig.Font.ALIGN.CENTER  );
			this.font.draw( "toca aqui", 150, 220,ig.Font.ALIGN.CENTER  );
			this.font.draw( "para comenzar", 150, 240,ig.Font.ALIGN.CENTER  );
		}else{
			this.font.draw( this.puntos+"", 140, 60,ig.Font.ALIGN.CENTER  );
		}

		if(this.muerto)
		{
			this.font.draw( "Perdiste =(", 145, 90,ig.Font.ALIGN.CENTER  );	
		}
		
	}
});


if(ig.ua.mobile && !window.ejecta ) {
	ig.Sound.enabled = false;
}



var canvas = document.getElementById('game1');



window.addEventListener('resize', function(){
	// If the game hasn't started yet, there's nothing to do here
	if( !ig.system ) { return; }
	
	canvas.style.height = (window.innerHeight-600) + 'px';
	canvas.style.width = ((window.innerHeight-600) * 0.75) + 'px';
	canvas.style.marginLeft = "-" + (((window.innerHeight-600) * 0.75) / 2)+ "px";
		
}, false);


var width = 288, height = 384;

ig.main( '#game1', MyGame, 60, width, height, 1 );

ig.music.add( 'media/music.*' );

ig.music.volume = 0.5;
ig.music.play();

});
