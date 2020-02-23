let playerSettings: PlayerSettings

let popp: p5.SoundFile
let punk: p5.SoundFile
let metal: p5.SoundFile
let blues: p5.SoundFile

let musicChoice: MusicChoice
let soundEffects: SoundEffects
let isImageLoaded: boolean

let gameManager: GameManager
let avatar : Avatar

let theme: Theme

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    popp = (window as any).loadSound('./assets/music/thenewMess.mp3')
    punk = (window as any).loadSound('./assets/music/jonny 2.1.mp3')
    metal = (window as any).loadSound('./assets/music/snakestorm.mp3')
    blues = (window as any).loadSound('./assets/music/blues.mp3')

    soundFormats('mp3')
    soundEffects = new SoundEffects()
    avatar = new Avatar()
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(60)
    fullscreen()

    gameManager = new GameManager()
    playerSettings = new PlayerSettings()
    musicChoice = new MusicChoice()
    theme = new Theme()
    musicChoice.createSelector()
    // theme.createSelector()
}

/**
 * Built in draw function in P5
 * This is a good place to call public functions of the object
 * you created in the setup function above
 */
function draw() {
    gameManager.draw()
}

function keyPressed(): void {
    gameManager.eventHandler()
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}



