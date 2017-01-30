var Chicken = Chicken || {};

Chicken.game = new Phaser.Game(950, 640, Phaser.AUTO,'juego');

Chicken.game.state.add('Boot', Chicken.BootState);
Chicken.game.state.add('Preload', Chicken.PreloadState);
Chicken.game.state.add('Game', Chicken.GameState);

Chicken.game.state.start('Boot');
