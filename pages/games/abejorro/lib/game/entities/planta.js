ig.module(
	'game.entities.planta'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
EntityPlanta = ig.Entity.extend({
	size: {x: 50, y: 320},
	offset: {x:2,y:2},
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.A, // Check against friendly
	collides: ig.Entity.COLLIDES.NONE,

	animSheet: new ig.AnimationSheet( 'media/planta.png', 54, 324 ),	

	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.addAnim( 'normal', 1, [0] );
		this.currentAnim = this.anims.normal;
		
	},
	
	
	update: function() {

		if(this.pos.x < ig.game.player.pos.x - 200) this.kill();

	},
	
	
	check: function( other ) {
		if( other instanceof EntityPlayer ) {
			other.muere();
		}
	}
});

});