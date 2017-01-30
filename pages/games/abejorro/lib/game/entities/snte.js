ig.module(
	'game.entities.snte'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
EntitySnte = ig.Entity.extend({
	size: {x: 100, y: 35},
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.A, // Check against friendly
	collides: ig.Entity.COLLIDES.NEVER,
	animSheet: new ig.AnimationSheet( 'media/snte.png', 100, 35 ),	
	
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.addAnim( 'normal', 1, [0] );
		this.currentAnim = this.anims.normal;
		
	},
	
	
	update: function() {		
		// Do nothing in this update function; don't even call this.parent().
		// The coin just sits there, isn't affected by gravity and doesn't move.

		// We still have to update the animation, though. This is normally done
		// in the .parent() update:
		this.pos.y = ig.game.screen.y +20;
		this.pos.x = ig.game.screen.x +100;
	}
	
	
});

});