var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});
var player;
var platforms;

function preload()
{
    game.load.spritesheet('player', 'assets/dude.png', 32, 48);
    game.load.image('platform', 'assets/platform.png');
    game.load.image('sky', 'assets/sky.png');
    game.load.image('star', 'assets/star.png');
}

function create()
{
    game.add.sprite(0,0, 'sky');

    platforms = game.add.group();
    platforms.enableBody = true;

    var ground1, ground2;
    ground1 = platforms.create(0, game.world.height-32, 'platform');
    ground2 = platforms.create(400, game.world.height-32, 'platform');

    ground1.body.immovable = true;
    ground2.body.immovable = true;

    var platform1, platform2;
    platform1 = platforms.create(500, 360, 'platform');
    platform2 = platforms.create(-150, 200, 'platform');

    platform1.body.immovable = true;
    platform2.body.immovable = true;

    player = game.add.sprite(50, game.world.height-150, 'player');

    game.physics.enable(player);
    player.body.gravity.y = 300;
}

function update()
{
    game.physics.arcade.collide(player, platforms);
}


