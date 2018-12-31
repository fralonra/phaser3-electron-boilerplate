const Splash = new Phaser.Scene(STATE.SPLASH)

Splash.init = function () {
}

Splash.preload = function () {
  this.load.image('bg', '../assets/splash-background.png')
}

Splash.create = function () {
  const width = this.cameras.main.width
  const height = this.cameras.main.height
  this.add.tileSprite(0, 0, width * 2, height * 2, 'bg')

  setTimeout(() => {
    this.scene.start(STATE.MAINMENU)
  }, 1000)
}
