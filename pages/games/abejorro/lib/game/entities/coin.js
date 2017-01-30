ig.module(
	'game.entities.coin'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
EntityCoin = ig.Entity.extend({
	size: {x: 306, y: 36},
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.A, // Check against friendly
	collides: ig.Entity.COLLIDES.FIXED,

	maxVel: {x: 200, y: 0},
	friction: {x: 800, y: 80000},

	
	
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
	},
	
	
	update: function() {
		if(ig.game.muerto)
		{
			this.accel.x = 0;
			this.vel.x = 0;
		}
		else this.accel.x = 10000;

		this.parent();
	},
	
	
	check: function( other ) {
		if( other instanceof EntityPlayer ) {
			other.muere();

		}
	}
});

});