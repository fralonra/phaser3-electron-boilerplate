const Preloader = new Phaser.Scene(STATE.PRELOADER)

Preloader.init = function () {
}

Preloader.preload = function () {
}

Preloader.create = function () {
  this.scene.start(STATE.MAINMENU)
}
