const Game = new Phaser.Scene(STATE.GAME)

Game.init = function () {
}

Game.preload = function () {
}

Game.create = function () {
  const back = this.add.text(50, 300, 'Go back to menu').setInteractive()
  back.on('pointerdown', () => {
    this.scene.start(STATE.MAINMENU)
  })
}
