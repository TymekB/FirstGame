var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

function preload()
{
    game.load.spritesheet('player', 'assets/dude.png');
    game.load.image('platform', 'assets/platform.png');
    game.load.image('sky', 'assets/sky.png');
    game.load.image('star', 'assets/star.png');
}

function create()
{
    
}

function update()
{

}


