// Initial Canvas Setup
canvas = document.querySelector("canvas")
context = canvas.getContext("2d")
gridSize = (Math.floor(window.innerWidth / 19) <= 32) ? Math.floor(window.innerWidth / 19) : 32
canvas.height = 15 * gridSize
canvas.width = 19 * gridSize

//Other HUD Sizing
info = document.getElementById("info")
controls = document.getElementById("controls")
info.style.width = (19 * gridSize) + "px"
controls.style.width = (19 * gridSize) + "px"

startBtn = document.getElementById("startButton")
startBtn.style.top = 35 + canvas.height - (canvas.height / 4)
startBtn.style.left = (window.innerWidth / 2) - (141 / 2)

//Set Label Variables
levelLabel = document.getElementById("levelLabel")
iceLabel = document.getElementById("iceLabel")
solvedLabel = document.getElementById("solvedLabel")

//Setup Game Variables
level = 1
totalFrames = 0
theme = new Audio("audio/theme.mp3");
theme.addEventListener('ended', function() {
    this.currentTime = 0
    this.play()
}, false)

//Start HUD
context.drawImage(puffleSprite, (canvas.width/2)-((canvas.width/2)/2), (canvas.height/2)-(((canvas.width/2)*0.6)/2), canvas.width/2, (canvas.width/2)*0.6)
context.drawImage(titleSprite, (canvas.width/2)-(286/2), (canvas.height/4)-(66), 286, 66)
