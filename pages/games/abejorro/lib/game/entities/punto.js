ig.module(
	'game.entities.punto'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
EntityPunto = ig.Entity.extend({
	size: {x: 306, y: 200},
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.NONE,

	maxVel: {x: 0, y: 0},
	sfxPunto: new ig.Sound( 'media/punto.*' ),
	
	
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
	},
	
	
	update: function() {
		
		this.parent();
	},
	
	
	check: function( other ) {
		if( other instanceof EntityPlayer ) {
			this.sfxPunto.play();
			ig.game.puntos++;
			ig.game.nuevoObstaculo();
			this.kill();
		}
	}
});

});