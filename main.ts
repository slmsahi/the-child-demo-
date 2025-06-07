controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Selim.vy == 0) {
        Selim.vy = -90
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverScoringType(game.ScoringType.HighScore)
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark1, function (sprite, location) {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile4, function (sprite, location) {
	
})
let Selim: Sprite = null
scene.setBackgroundColor(9)
Selim = sprites.create(img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . f f 1 1 1 . . . . 
    . . f f 1 1 1 1 1 . . . 
    . f f 1 f f 1 f f 1 . . 
    . f b 1 1 8 1 8 1 1 . . 
    . . f f 1 1 1 1 1 . . . 
    . . . f f 1 1 1 . . . . 
    . . . . 2 f f 2 . . . . 
    . . 2 f f 2 2 f f 2 . . 
    . . 2 2 f 2 f f 2 2 . . 
    . . 2 2 f f f f 2 2 . . 
    . . 2 2 f f f f 2 2 . . 
    . . . . f f f f . . . . 
    . . . f f f f f f . . . 
    . . . f f f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(Selim, 100, 0)
tiles.setCurrentTilemap(tilemap`level4`)
scene.cameraFollowSprite(Selim)
Selim.ay = 200
forever(function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
})
