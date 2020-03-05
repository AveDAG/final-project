function nextLevel () {
    scene.setTileMap(Levels[currentLevel])
    mySprite.x += 16
}
function map () {
    scene.setTile(14, img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, true)
    scene.setTile(1, img`
. . b b b b b b b b b b b b . . 
. b e 4 4 4 4 4 4 4 4 4 4 e b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b b b b b b b d d b b b b b b b 
c b b b b b b c c b b b b b b c 
c c c c c c b c c b c c c c c c 
b e e e e e c b b c e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, true)
}
scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
    currentLevel += 1
    nextLevel()
})
function the_Player () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 9 9 9 9 9 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 9 1 1 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f 1 9 f 1 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 9 9 9 9 9 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 9 1 1 9 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 9 9 9 9 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
}
function end_the_game () {
    game.over(false)
}
function the_enemy () {
    ak = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 7 . . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 1 7 1 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 2 2 2 . . . . . . . . . 
. . . . . 7 . . . . . . . . . . 
. 7 7 7 7 7 7 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. 7 7 7 7 7 7 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 7 . 7 . . . . . . . . . 
. . . . 7 . 7 . . . . . . . . . 
. . . . 7 . 7 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    ak.follow(mySprite, 50)
    ak.x = Math.randomRange(10, 10)
    myEnemy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 7 . . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 1 7 1 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 2 2 2 . . . . . . . . . 
. . . . . 7 . . . . . . . . . . 
. 7 7 7 7 7 7 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. 7 7 7 7 7 7 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 7 . 7 . . . . . . . . . 
. . . . 7 . 7 . . . . . . . . . 
. . . . 7 . 7 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    kk = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 7 . . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 1 7 1 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 2 2 2 . . . . . . . . . 
. . . . . 7 . . . . . . . . . . 
. 7 7 7 7 7 7 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. 7 7 7 7 7 7 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 7 . 7 . . . . . . . . . 
. . . . 7 . 7 . . . . . . . . . 
. . . . 7 . 7 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    myEnemy.x = Math.randomRange(100, 1000)
    destroyer = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 7 . . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 1 7 1 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 2 2 2 . . . . . . . . . 
. . . . . 7 . . . . . . . . . . 
. 7 7 7 7 7 7 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. 7 7 7 7 7 7 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 7 . 7 . . . . . . . . . 
. . . . 7 . 7 . . . . . . . . . 
. . . . 7 . 7 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    myEnemy.follow(mySprite, 50)
    kk.x = Math.randomRange(110, 1000)
    destroyer.x = Math.randomRange(150, -100)
    destroyer.follow(mySprite, 50)
    kk.follow(mySprite, 50)
    t = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 7 . . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 1 7 1 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 2 2 2 . . . . . . . . . 
. . . . . 7 . . . . . . . . . . 
. 7 7 7 7 7 7 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. 7 7 7 7 7 7 . . . . . . . . . 
. . . . 7 7 7 . . . . . . . . . 
. . . . 7 . 7 . . . . . . . . . 
. . . . 7 . 7 . . . . . . . . . 
. . . . 7 . 7 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    t.x = Math.randomRange(-1000, -350)
    t.follow(mySprite, 50)
    k = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 8 . . . . . . . . . . 
. . . . 9 8 9 . . . . . . . . . 
. . . . 1 8 1 . . . . . . . . . 
. . . . 9 2 9 . . . . . . . . . 
. . . . 2 2 2 . . . . . . . . . 
. . . . . 9 . . . . . . . . . . 
. 8 8 8 8 9 8 8 8 8 . . . . . . 
. . . . 8 9 8 . . . . . . . . . 
. 9 9 9 9 9 9 9 9 9 . . . . . . 
. . . . 8 8 9 . . . . . . . . . 
. . . . 8 . 9 . . . . . . . . . 
. . . . 8 . 9 . . . . . . . . . 
. . . 8 8 . 9 9 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    k.x = Math.randomRange(200, -350)
    k.follow(mySprite, 70)
    z = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 8 . . . . . . . . . . 
. . . . 9 8 9 . . . . . . . . . 
. . . . 1 8 1 . . . . . . . . . 
. . . . 9 2 9 . . . . . . . . . 
. . . . 2 2 2 . . . . . . . . . 
. . . . . 9 . . . . . . . . . . 
. 8 8 8 8 9 8 8 8 8 . . . . . . 
. . . . 8 9 8 . . . . . . . . . 
. 9 9 9 9 9 9 9 9 9 . . . . . . 
. . . . 8 8 9 . . . . . . . . . 
. . . . 8 . 9 . . . . . . . . . 
. . . . 8 . 9 . . . . . . . . . 
. . . 8 8 . 9 9 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    z.y = Math.randomRange(500, 100)
    z.follow(mySprite, 70)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    end_the_game()
})
let z: Sprite = null
let k: Sprite = null
let t: Sprite = null
let destroyer: Sprite = null
let kk: Sprite = null
let myEnemy: Sprite = null
let ak: Sprite = null
let mySprite: Sprite = null
let currentLevel = 0
let Levels: Image[] = []
map()
the_Player()
scene.setBackgroundColor(9)
the_enemy()
Levels = [img`
. . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
1 . 1 . 1 . 1 . 1 . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . 
. . . . . . . . . . . . . 1 . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . 
. . 1 . . . . 1 . . . . . 1 . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 1 . 
. . . . 1 . . . . . . . . 1 . . . . . . . . . . . . . . . 1 1 . . 1 1 . . . . . . . . . . . . . 1 . 
. 1 . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . 1 1 1 1 . . . . . . . . . . . . 
. . . . . . 1 . 1 . . . . 1 . . . . . 1 . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . 
1 . . 1 . . . . . . . . . 1 . . . . . . . . . . 1 . . . 1 . . . . . . . 1 . . . . . . . 1 . . . . . 
. . . . . . . . . . . 1 . 1 . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . . . . 1 . . . . . 
. . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . 1 . 1 1 1 1 1 . 1 . 1 . . 1 . . 1 . . 
. . . . 1 1 1 1 . . . . . 1 . . . 1 1 1 1 1 1 . 1 1 1 1 1 . 1 . . . . . . 1 1 . 1 . . . 1 1 . . . . 
. . . . . . . . . . 1 . . 1 . . . 1 1 1 1 1 1 . 1 1 1 1 1 . 1 . . . . . . . 1 1 . 1 1 . . 1 . . . . 
. . . . . . . . . . . . . 1 . . . 1 1 1 1 1 1 . 1 1 1 1 1 . 1 . 1 1 1 1 1 1 1 1 . 1 . . . 1 1 1 . . 
. . . 1 . 1 1 1 . . . . . 1 . . . 1 1 1 1 1 1 . 1 1 1 1 1 . 1 . . . . . . . . . . 1 1 1 . . . 1 1 . 
. . . 1 . . . 1 . . . . . 1 . . . 1 1 1 1 1 1 . 1 1 1 1 1 . 1 . . . . . . . 1 . . . . 1 1 1 . . 1 . 
. . . 1 1 1 . 1 . . . . . 1 . . . 1 1 1 1 1 1 . 1 1 1 1 1 . 1 . 1 . . . . . . . . . . . . 1 1 . . . 
. . . . . . . . . . . . . 1 . . . 1 1 1 1 1 . . . 1 1 1 1 . 1 . 1 1 . . . . . . . 1 . . . . 1 1 1 . 
. . . . . . . . . . . . . 1 . . . 1 1 1 1 . . . . . . . 1 . 1 . . 1 1 1 1 . . . . . . . 1 . . . 1 . 
. 1 . . . . . . . . 1 . . 1 . . . 1 1 1 . . . 1 . . . . 1 . . . . . . . . . . . . . . . 1 . . . 1 . 
. . . . . 1 . . . . . . . 1 1 1 1 1 1 1 . . 1 . 1 1 1 . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . 1 . 
. . . . . . . . . . . . . . . . . 1 1 . . 1 1 . 1 1 1 . 1 . . . 1 . . . . . 1 . . . . 1 1 1 1 1 1 . 
. . 1 . . . . . 1 . . . . 1 . . . . . . . 1 1 . 1 1 1 . 1 . 1 . 1 . . . . . . . . . . . . . . . . . 
. . . . 1 . . . . . . . . . . . . . . . 1 1 1 . 1 1 1 . 1 . . . 1 . 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 . 1 1 1 . 1 . . . 1 . 1 . . . 1 . . . . . . . 1 . . . 
. . . . . . . . 1 . . . . . . . 1 1 1 1 1 1 1 . 1 1 1 . 1 1 1 1 1 . 1 1 . . . . . . 1 1 1 . 1 . . . 
. . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 e 1 1 . . 1 . . . . . . 1 . . . . 1 . 1 . 1 1 . . . . 
. . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 . . . . . 1 . . 1 . . . 1 1 . . . . . 1 . . 1 1 1 1 1 
. . . . . . . . . . . . 1 . . . 1 1 1 1 1 1 1 . . . . 1 1 . . . . . 1 . 1 . 1 . 1 . 1 . . . . . . . 
. . . . . . . . 1 . . . . . . . . . 1 1 1 1 1 . 1 1 1 1 1 . . . . . . . 1 . . . . . 1 . 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . 1 1 . . . . 1 . 1 . . 1 1 . 
. . . . . . . 1 . . . . . 1 1 1 . . . . . . 1 . 1 . . . . . . . 1 . . . . 1 1 1 1 1 1 . 1 1 . . 1 . 
. . . . . . . . . . . . . . 1 1 . . . . . 1 1 . 1 . . . . . . . . . . . 1 . . . . 1 1 . . . . . 1 1 
. . 1 . 1 . . . . . 1 . . . 1 . . . . . 1 1 . . . . . 1 . . . . . . . . . . . . . 1 1 . . . . . . . 
. . 1 . . . . . . . . . . 1 . . . . . . . . . . . . . 1 . . 1 . . . . . . . . . . 1 1 . . . . . . . 
. . 1 . . . . . . . . . 1 1 . . . . . . . . 1 . . . . 1 . . . . . . . . . . . . . . . 1 1 1 . . . . 
. . 1 . . . . . . . . 1 1 . . . . . 1 . . . . 1 1 . . 1 . . . . . . . . . 1 1 . . . . . . . . . . . 
. 1 1 . 1 . . . . . 1 . . . . . . . 1 1 1 . . . . . . 1 . . . . . . . . . . 1 . . . . 1 . . . . 1 1 
. . . . . . . . . 1 . . . . . . . . . . . . . . . . 1 1 . . . . . . . 1 . . . 1 . . 1 . . . . . 1 . 
. 1 . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . 1 . 
. 1 . . . . . . . 1 . . . . . 1 1 . . . 1 . . 1 . . . . . 1 . . . . . . . . . . . . . . 1 . . . 1 . 
. 1 . . . . . . . . . . . . . 1 1 . . . 1 1 1 1 . . . . . . . . . . . . . . . . 1 . . . . . . . 1 . 
. 1 . 1 . 1 . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 1 1 . . 1 . 1 . 1 . 
. 1 . 1 . . . . 1 . . . . . . . 1 . . . 1 1 1 . . . . . . . . . . . 1 1 . . . 1 . . 1 . . . . . 1 . 
. 1 . . . . . 1 . . . . 1 . . 1 1 . . . 1 . . . 1 1 . . 1 1 . . . . . . . . . . . . . . . . . . . 1 
. 1 . . . . 1 . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . 1 . . . . 1 
. 1 1 . . . . . . . 1 . . . . 1 . 1 1 . 1 1 . . . 1 . . . . . . . . . . . . . . . . . . . . . 1 . 1 
. . 1 1 . 1 . 1 . . . 1 . . . 1 . . 1 . . . . 1 . . 1 . . . . . . . . . 1 . . . . . . . . . . . . 1 
. 1 . . . 1 . . . . . . 1 . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . 1 1 . . . 1 
. 1 . . . 1 . . . 1 . . . . 1 1 1 . . . . . 1 . . . . . . . 1 . . . 1 . . . . 1 1 . . . . . . . . 1 
1 1 . . . 1 . . 1 1 1 . . . . . . . . . 1 . . . . . . . . . . 1 . . 1 . . . 1 . . . . . 1 . . . . 1 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`]
currentLevel = 0
nextLevel()
game.onUpdate(function () {
	
})
