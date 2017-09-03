var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});
var player;
var platforms;
var cursors;
var stars;
var text;
var seconds = 0;
var collectedStars = 0;

function preload()
{
    game.load.spritesheet('player', 'assets/dude.png', 32, 48);
    game.load.image('platform', 'assets/platform.png');
    game.load.image('sky', 'assets/sky.png');
    game.load.image('star', 'assets/star.png');

    cursors = game.input.keyboard.createCursorKeys();
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
    platform2 = platforms.create(-150, 150, 'platform');

    platform1.body.immovable = true;
    platform2.body.immovable = true;

    stars = game.add.group();
    stars.enableBody = true;

    for(var i = 0; i <= 16; i++)
    {
        var star = stars.create(i * 50, 20, 'star');
        star.body.gravity.y = 500;
        star.body.bounce.y = 0.3;
    }

    player = game.add.sprite(50, game.world.height-200, 'player');

    game.physics.enable(player);
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    player.animations.add('left', [0,1,2,3], 10, true);
    player.animations.add('right', [5,6,7,8], 10, true);

    text = game.add.text(16,16, 'Time: 0 seconds', { fill: '#000', fontSize: '17px', font: 'Press Start 2P' });
    game.time.events.loop(1000, updateTimer);
}

function update()
{
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.overlap(player, stars, collectStar);

    if(cursors.left.isDown)
    {
        player.body.velocity.x -= 5;
        player.animations.play('left');
    }
    else if(cursors.right.isDown)
    {
        player.body.velocity.x += 5;
        player.animations.play('right');
    }
    else if(cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y -= 370;
    }
    else if(cursors.down.isDown)
    {
        player.body.velocity.y += 40;

    }
    else
    {
        player.body.velocity.x = 0;
        player.animations.stop();
        player.frame = 4;
    }
}

function collectStar(player, star)
{
    star.kill();
    collectedStars++;

    if(collectedStars >= 16)
    {
        game.time.events.stop();
        text.setText('Game over! Your time: ' + seconds + ' seconds');
    }
}

function updateTimer()
{
    seconds++;
    text.setText('Time: ' + seconds + " seconds");
}