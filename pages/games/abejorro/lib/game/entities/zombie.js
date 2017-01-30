ig.module(
	'game.entities.zombie'
)
.requires(
	'impact.entity'
)
.defines(function(){


//Zombie is the unplayable bee that appears flying in the title screen. Its replaced by a playable bee when the user touches or clicks the screen

EntityZombie = ig.Entity.extend({
	
	size: {x: 68, y: 51},
	offset: {x: 16, y: 21},
	
	maxVel: {x: 200, y: 800},
	friction: {x: 800, y: 8000},
	
	type: ig.Entity.TYPE.A, 
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NONE,
	
	animSheet: new ig.AnimationSheet( 'media/mosca.png', 96, 87 ),	
	
	flip: false,
	accelGround: 1200,
	accelAir: 600,
	jump: 500,	
	maxHealth: 3,

	coins: 0,
	angle: 0,
	coins: [],
	muerto : false,
	direccion: -0.5,

	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );

		this.addAnim( 'fly', 0.05, [0,1,2,1] );

		ig.game.player = this;
		
	},
	
	update: function() {


		this.currentAnim = this.anims.fly;

		this.pos.y += this.direccion;
		if(this.pos.y == 301) this.direccion = 0.5;
		if(this.pos.y == 381) this.direccion = -0.5;

		if(ig.input.pressed('jump'))
		{
			ig.game.spawnEntity(EntityPlayer, this.pos.x, this.pos.y);
			ig.game.nuevoObstaculo();
			this.kill();
		}
		this.accel.x = 10000;

		if(this.angle < 0) this.angle += Math.abs(this.angle)/50;

				
		this.parent();
	}
});


});	