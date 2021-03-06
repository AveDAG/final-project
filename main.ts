scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
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
. . . . . . . . . . . 1 1 1 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 1 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 8 8 1 1 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 8 1 1 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 8 . 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 . 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 . 1 1 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 . 1 1 . . . . . . . . . . . . . . . . 
. . . . . . . . . 8 1 1 1 . 8 8 8 8 . . . . . . . . . . . . . . 
. . . . . . . . . 8 1 8 1 . 8 8 8 8 . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
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
`, SpriteKind.Projectile)
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
`, SpriteKind.Projectile)
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
`, SpriteKind.Projectile)
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
`, SpriteKind.Projectile)
    myEnemy.follow(mySprite, 50)
    kk.x = Math.randomRange(110, 1000)
    destroyer.x = Math.randomRange(150, -100)
    destroyer.follow(mySprite, 50)
    kk.follow(mySprite, 50)
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
`, SpriteKind.Projectile)
    z.x = Math.randomRange(200, -350)
    z.follow(mySprite, 70)
    tttt = sprites.create(img`
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
`, SpriteKind.Projectile)
    tttt.y = Math.randomRange(500, 100)
    tttt.follow(mySprite, 70)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
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
    scene.setTile(8, img`
1 d d 9 9 9 9 1 1 8 8 8 8 d d 1 
d d 9 9 9 9 9 1 1 9 9 9 8 8 d d 
d 9 9 9 9 9 9 1 1 6 6 9 9 8 8 d 
9 9 9 9 9 9 9 1 1 9 6 6 9 9 8 8 
9 9 9 9 9 9 d 1 1 d 9 6 6 9 9 8 
9 9 9 9 9 d d 1 1 d d 9 6 6 9 8 
9 9 9 9 d d 1 1 1 1 d d 9 6 9 8 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 9 6 9 d d 1 1 1 1 d d 9 9 9 9 
8 9 6 6 9 d d 1 1 d d 9 9 9 9 9 
8 9 9 6 6 9 d 1 1 d 9 9 9 9 9 9 
8 8 9 9 6 6 9 1 1 9 9 9 9 9 9 9 
d 8 8 9 9 6 6 1 1 9 9 9 9 9 9 d 
d d 8 8 9 9 9 1 1 9 9 9 9 9 d d 
1 d d 8 8 8 8 1 1 9 9 9 9 d d 1 
`, true)
    scene.setTile(2, img`
1 d d 2 2 2 2 1 1 4 4 2 2 d d 1 
d d 2 2 2 2 2 1 1 5 4 4 2 2 d d 
d 2 2 2 2 2 2 1 1 5 5 4 4 2 2 d 
2 2 2 2 2 2 2 1 1 2 5 5 4 4 2 2 
2 2 2 2 2 2 d 1 1 d 2 5 5 4 4 2 
2 2 2 2 2 d d 1 1 d d 2 5 5 4 4 
2 2 2 2 d d 1 1 1 1 d d 2 5 5 4 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
4 5 5 2 d d 1 1 1 1 d d 2 2 2 2 
4 4 5 5 2 d d 1 1 d d 2 2 2 2 2 
2 4 4 5 5 2 d 1 1 d 2 2 2 2 2 2 
2 2 4 4 5 5 2 1 1 2 2 2 2 2 2 2 
d 2 2 4 4 5 5 1 1 2 2 2 2 2 2 d 
d d 2 2 4 4 5 1 1 2 2 2 2 2 d d 
1 d d 2 2 4 4 1 1 2 2 2 2 d d 1 
`, true)
    scene.setTile(10, img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a f f f f f f f f f f f f a a 
a a f f f f f f f f f f f f a a 
a a f f f f f f f f f f f f a a 
a a f f f f f f f f f f f f a a 
a a f f f f f f f f f f f f a a 
a a f f f f f f f f f f f f a a 
a a f f f f f f f f f f f f a a 
a a f f f f f f f f f f f f a a 
a a f f f f f f f f f f f f a a 
a a f f f f f f f f f f f f a a 
a a f f f f f f f f f f f f a a 
a a f f f f f f f f f f f f a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`, true)
}
function nextLevel () {
    scene.setTileMap(Levels[currentLevel])
    currentLevel += 1
    mySprite.x += 16
}
function changing_the_sprites () {
    if (currentLevel == 1) {
        t = img`
f f f f f 4 4 4 4 4 4 f f f f f 
1 1 1 1 f f 4 4 4 4 f f 1 1 1 1 
1 1 1 1 4 f f 4 4 f f 4 1 1 1 1 
1 1 1 1 4 4 f f f f 4 4 1 1 1 1 
1 1 1 1 4 4 4 f f 4 4 4 1 1 1 1 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 f f f f f f f f f f f f f f 4 
f f f f f f f f f f f f f f f f 
f f f 1 1 1 1 1 1 1 1 1 1 f f f 
f f f 1 1 1 1 1 1 1 1 1 1 f f f 
f f f 1 1 1 1 1 1 1 1 1 1 f f f 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`
    }
}
info.onLifeZero(function () {
    game.over(false)
})
let t: Image = null
let tttt: Sprite = null
let z: Sprite = null
let destroyer: Sprite = null
let kk: Sprite = null
let myEnemy: Sprite = null
let ak: Sprite = null
let mySprite: Sprite = null
let currentLevel = 0
let Levels: Image[] = []
game.splash("Welcome to the hardest game of life!!!!")
game.splash("Are you Ready???")
info.setLife(3)
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
. . 1 . . . . . 1 . . . . 1 . 1 . . . . . 1 1 . 1 1 1 . 1 . 1 . 1 . . . . . . . . . . . . . . . . . 
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
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. a a . . . . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . . . . . 1 
. a a . . . . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . . . . . 1 
. . . . . . . 2 3 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . . . . . 1 
. . . . . . . 2 2 3 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . . . . . 1 
. . . . . . . 2 3 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . . . . . 1 
. . . . . . . 2 2 3 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . . . . . 1 
. . . . . . . 2 3 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . . . . . 1 
. . . . . . . 2 2 3 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . . . . . 1 
. . . . . . . 2 3 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . . . . . 1 
. . . . . . . 2 2 3 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . . . . . 1 
. . . . . . . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . . . . . 1 
. . . . . . . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . . . . . 1 
. . . . . . . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . 2 5 5 2 . . . . . 1 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
1 1 1 1 1 1 1 1 8 8 8 8 . 8 8 8 8 . . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 . . . . 8 8 8 8 8 8 8 8 8 . 8 8 8 8 . . . . . . . . . . 1 
. . . . . . . . 8 3 8 8 . 8 3 8 8 . . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 . . . . 8 8 . . . . . . . . . . 8 8 . . . . . . . . . . 1 
. . . . . . . . 8 8 3 8 . 8 8 3 8 . . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 . . . . . 8 . . . f f . . . . 8 8 8 . . . . . . . . . . 1 
. . . . . . . . 8 3 8 8 . 8 3 8 8 . . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 . . . . 8 8 8 . . . . . . 8 8 8 . 8 . . . . . . . . . . 1 
. . . . . . . . 8 8 3 8 . 8 8 3 8 . . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 . . . . 8 . 8 8 . . . . 8 8 . . . 8 . . . . . . . . . . 1 
. . . . . . . . 8 3 8 8 . 8 3 8 8 . . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 . . . . 8 8 . 8 8 . . 8 8 . . . . 8 . . . . . . . . . . 1 
. . . . . . . . 8 8 3 8 . 8 8 3 8 . . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 . . . . . 8 . . 8 8 e 8 . . f . 8 8 . . . . . . . . . . 1 
. . . . . . . . 3 3 8 3 . 8 3 8 8 . . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 . . . . . 8 8 . . . . . . . . 8 8 . . . . . . . . . . . 1 
. . . . . . . . 3 8 8 3 . 8 8 3 8 . . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 . . . . . . 8 8 . f . 8 8 8 8 . . . . . . . . . . . . . 1 
. . . . . . . . 8 5 5 8 . 8 5 5 8 . . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 . . . . . . . 8 8 8 8 8 . . . . . . . . . . . . . . . . 1 
. . . . . . . . 8 5 5 8 . 8 5 5 8 . . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
. . . . . . . . 8 5 5 8 . 8 5 5 8 . . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f 
f f f f f f f f 8 f f f f f f f f f 8 8 8 8 f f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f 8 f f f 
f f f f f f f 8 f f f f f f f f 8 8 f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f 8 8 f f f f f f f f f f f f f 8 f f f f f f 8 f f f 
f f f f f f f 8 f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f f 8 f f f f f f f f f f f f 8 f f f f f f f 8 f f 
f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f 8 f f f f f f f f 8 f f 
f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f f f 8 f f f f f f f f 8 f f 
f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f 8 f f f f f f f f 8 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f f f 
f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 f f f f f f f 8 f f f f f f f f f f f f f 
f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 f f f f f f 8 f f f f f f f f f f f f f 
f f f f f f f f f f f 8 8 f 8 f f f f f f f f f f f f 8 f 8 8 f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f 8 8 8 f f f f f f f 
f f f f f f f f f f f 8 8 f f 8 f f f f f f f f f f 8 f f 8 8 f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 8 8 f f 8 f f f f f f f f f f 8 f f 8 8 f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 8 8 f f f 8 f f f f f f f f 8 f f f 8 8 f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 8 8 f f f f 8 f f f f f f f 8 f f f 8 8 f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 8 8 f f f f 8 f f f f f f 8 f f f f 8 8 f f f f f f f f f f 8 8 f f f 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 8 8 f f f f f 8 f f f f f 8 f f f f 8 8 f f f f f f f f f f 8 8 f f f f 8 8 f f f f f f f 8 8 f f f f f f f f f f f f f f 
f f f f f f f f f f f 8 8 f f f f f f 8 f f f 8 f f f f f 8 8 f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 8 8 f f f f f f 8 f f f 8 f f f f f 8 8 f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 8 8 f f f f f f f 8 f 8 f f f f f f 8 8 f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f 
f f f f f f f f f f f 8 8 f f f f f f f f 8 8 f f f f f f 8 8 f f f f f f f f f f 8 8 f f 8 f f f f f f f f f f f f f f f f f f f 8 f 8 f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f 8 8 8 f f f f f f 8 f 8 f f f f 
f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f 8 8 f f 8 f f f 
f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f 
f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f 8 f f f 
f f f 8 f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f f f f 8 8 f f f f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f 8 f f 
f f f 8 f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f 8 8 8 8 f f f 8 f f 
f f 8 f f f f f f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f 8 f f f f f f f f f f f f 8 f f 8 f f 
f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f 8 8 f f f f f f f f f f f f f 8 f f 8 f f 
f f 8 f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f f 8 f f f f f 
f f f f f f f f f 8 8 8 f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f 
f f f f f f f f f 8 8 8 f f f 8 8 8 f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f 8 8 8 f f f f f 8 f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f 8 8 8 f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f 
f f f f f f f f f 8 8 8 f f f f f 8 8 f f f f f 8 8 8 8 f f f f f f 8 8 8 f f f f 8 8 f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f 
f f f f f f f f f 8 8 8 f f f f f f 8 8 f f f f 8 8 8 f f f f f f f f 8 8 f f f f 8 8 f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f 8 8 8 f f f 8 8 8 8 8 f f f f 8 8 8 f f f f f f f f 8 8 f f f f 8 f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f 8 8 8 f f f 8 8 8 8 f f f f f 8 8 8 f f f f f f f f 8 8 f f f f 8 8 f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f 
f f f f 8 8 f f f 8 8 8 f f f 8 8 8 f f f f f f 8 8 8 f f f f f f f f 8 8 f f f f 8 8 f f f f f f f f 8 f f f f f f f f f f f f f 8 f f f f f f 
f f f 8 8 f f f f 8 8 8 f f f 8 8 8 f f f f f f 8 8 8 f f f f f f f f 8 8 f f f f f 8 8 f f f f f f f f 8 f f f f f f f f f f f f 8 f f f f f f 
f f f f f f f f f 8 8 8 f f f 8 8 8 f f f f f f 8 8 8 f f f f f f f f 8 8 f f f f f 8 8 f f f f f f f f 8 f f f f f f f f f f f f 8 f f f f f f 
f f f f f f f f f 8 8 8 f f f 8 8 8 f f f f f f 8 8 8 f f f f f f f f 8 8 f f f f f 8 8 8 8 8 f f f f f f 8 8 8 8 f f f f f f f f f 8 f f f f f 
f f f f f f f f f 8 8 8 f f f 8 8 8 8 f f f f f 8 8 8 f f f f f f f f 8 8 f f f f f f f f f 8 f f f f f f f f f 8 8 f f f f f f 8 8 f 8 f f f f 
f f f f f f f f f 8 8 8 f f f f 8 8 8 8 f f f f 8 8 8 f f f f f f f f 8 8 f f f f f f f f f 8 8 f f f f f f f f f 8 f f f f 8 8 f f f f 8 8 8 f 
f f f f f f f f f 8 8 8 f f f f 8 8 8 8 f f f f 8 8 8 f f f f f f f f 8 8 f f f f f f f f f f 8 f f f f f f f f f 8 f f f f f f f f f f f f f f 
f f f 8 8 f f f f 8 8 8 f f f 8 8 8 8 8 f f f f 8 8 8 8 f f f f f f 8 8 8 f f f f f 8 8 8 8 8 f f f f f f f f f 8 8 f f f f f f f f f f f f f f 
f f f f 8 f f f f 8 8 8 f f 8 8 8 8 8 f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f 8 8 8 8 8 f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f 
f f f f f 8 f f f 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f 8 8 8 8 8 f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 8 f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 f f f f f f f f f f f 8 f f f f f 8 8 8 8 f f 8 f f f f f f 8 8 8 8 8 8 8 8 8 8 f f f f f f f f 8 f f f f f f f 
8 8 8 8 f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 f f 8 8 8 8 8 8 8 f f f 8 f f f f f 8 f f f f f f f f 8 f f f f f f f 
f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f 8 f f f f f f f 8 f f f f f 8 f f f f f f f f 8 f f f f f f f 
f f f f f f f f 8 f f f f f f f f f 8 f f f f f f f f f 8 f f f f f f f f f f f f 8 f f f f f f f 8 f f f f f 8 f f f 8 8 f f f 8 f f f f f f f 
f f f f f f f f 8 f f f f f f f f f 8 f f f f f f f f f 8 f f f f f f f f f f f 8 8 f f f f f f f 8 f f 8 f f 8 f f f f 8 f f f 8 8 f f f f f f 
f f f 8 f f f f 8 f f f f f f f 8 f 8 f f f f f f f f f 8 f f f f f f f f f f f 8 f f f f f f f f 8 f f 8 f f 8 f f f f 8 f f f f 8 f f f f f f 
f f f 8 f f f f 8 f f f f f 8 8 f f 8 f f f f f f f f f 8 8 f f f f f f f f f f 8 8 f f f f f f f 8 f f 8 f f 8 8 f f f 8 f f f f 8 8 8 f f f f 
f f f 8 f f f f 8 f f f f f 8 f f f 8 f f f f f f f f f f 8 f f f f f f f f f f f 8 8 f f f f f f 8 f f 8 f f f 8 f f f 8 f f f f f f 8 f f f f 
f f f 8 f f f f 8 f f f f f 8 f f f 8 f f f f 8 f f f f f f f f f f f f f f f f f f 8 f f f 8 f f 8 f f 8 f f f 8 f f f 8 f f f f f f 8 f f f f 
f f f 8 f f f 8 8 f f f f f 8 f f f f f f f f 8 f f f f f f f f f f f f f f f f f f 8 f f f 8 f f 8 f f 8 f f f 8 f f f 8 8 f f f f f f f f f f 
f f f 8 f f f f 8 f f f f f 8 f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f 8 f f f f f f f f 8 f f f f f f f f f f 
f f f 8 f f f f 8 f f f f f 8 8 f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f 8 f f f f f f f 8 8 f f f f f f f 8 f f f f f f f f f f 
f f f 8 f f f f f f f f f f f 8 f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f 8 f f f f f f f f 8 f f f f f f f 8 f f f f f f f f f f 
f f f 8 8 f f f f f f f f f f 8 f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f 8 f f f f f f f f 8 f f f f f f f 8 f f f f f f f f f e 
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
changing_the_sprites()
