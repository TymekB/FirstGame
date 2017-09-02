var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

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

    var platforms = game.add.group();

    var ground1, ground2;
    ground1 = platforms.create(0, game.world.height-32, 'platform');
    ground2 = platforms.create(400, game.world.height-32, 'platform');

    var platform1, platform2;
    platform1 = platforms.create(500, 360, 'platform');
    platform2 = platforms.create(-150, 200, 'platform');
}

function update()
{

}


