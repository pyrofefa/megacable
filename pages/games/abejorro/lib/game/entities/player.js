ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({
	
	// The players (collision) size is a bit smaller than the animation
	// frames, so we have to move the collision box a bit (offset)
	size: {x: 60, y: 43},
	offset: {x: 20, y: 25},
	
	maxVel: {x: 200, y: 800},
	friction: {x: 800, y: 0},
	
	type: ig.Entity.TYPE.A, // Player friendly group
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.ACTIVE,
	
	animSheet: new ig.AnimationSheet( 'media/mosca.png', 96, 87 ),	
	
	sfxHurt: new ig.Sound( 'media/punch.*' ),
	
	sfxMuere: new ig.Sound( 'media/muere.*' ),
	sfxBrinca: new ig.Sound( 'media/jump.*' ),
	
	
	health: 3,

	// These are our own properties. They are not defined in the base
	// ig.Entity class. We just use them internally for the Player
	flip: false,
	accelGround: 1200,
	accelAir: 600,
	jump: 500,	
	maxHealth: 3,

	coins: 0,
	angle: 0,
	coins: [],
	muerto : false,
	tiempoMuerto: new ig.Timer(),

	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		// Add the animations
		this.addAnim( 'fly', 0.05, [0,1,2,1] );
		this.addAnim( 'dead', 0.05, [2] );

		// Set a reference to the player on the game instance
		ig.game.player = this;
		ig.game.iniciado = true;
		this.currentAnim = this.anims.fly;
		
	},
	
	
	update: function() {

		if(ig.input.pressed('jump'))
		{
			if(this.muerto){
				if(this.tiempoMuerto.delta() >= 0) ig.system.setGame(MyGame);
			}else
			{
				this.sfxBrinca.play();
				this.vel.y = -400;
				this.angle =-30*(Math.PI/180);
			}
		}
		if(!this.standing)
		{
			this.accel.x = 10000;
		}else this.accel.x = 0;

		if(this.angle < 0) this.angle += Math.abs(this.angle)/50;

				
		this.currentAnim.flip.x = this.flip;
		this.currentAnim.angle = this.angle;

		this.parent();
	},

	muere: function() {
		if(this.muerto) return;
		this.currentAnim = this.anims.dead;
		this.currentAnim.flip.y = true;
		this.currentAnim.update();
		this.maxVel.x = 0;
		this.maxVel.y = 800;
		this.vel.x=0;
		this.vel.y=0;
		this.accel.x=0;
		this.accel.y=0;
		this.muerto = true;
		ig.game.muerto = true;
		this.tiempoMuerto.set(2);
		this.sfxHurt.play();
		this.sfxMuere.play();
	}
});


});	