var Chicken = Chicken || {};

Chicken.PreloadState = {
    preload: function() {
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);
        this.preloadBar.scale.setTo(100, 1);

        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('box', 'assets/images/box.png');
        this.load.image('pig', 'assets/images/pig.png');
        this.load.image('pole', 'assets/images/pole.png');
        this.load.image('bird', 'assets/images/bird.png');
        this.load.image('floor', 'assets/images/floor.png');
        this.load.image('concreteBox', 'assets/images/concrete-box.png');
        this.load.image('sky', 'assets/images/sky.png');

        this.load.text('level1', 'assets/levels/level1.json');

    },
    create: function() {
        this.state.start('Game');
    }
};
