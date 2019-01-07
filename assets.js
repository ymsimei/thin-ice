playerSprite = new Image()
playerSprite.src = "assets/player.png"
iceSprite = new Image()
iceSprite.src = "assets/ice.png"
waterSprite = new Image()
waterSprite.src = "assets/water.png"
wallSprite = new Image()
wallSprite.src = "assets/wall.png"
goalSprite = new Image()
goalSprite.src = "assets/goal.png"
blankSprite = new Image()
blankSprite.src = "assets/blank.png"
hardIceSprite = new Image()
hardIceSprite.src = "assets/hard.png"

titleSprite = new Image()
titleSprite.src = "assets/title.png"
puffleSprite = new Image()
puffleSprite.src = "assets/puffle_on_ice.png"

levels = {
  "0": [
    "BBBBBBBBBBBBBBBBBBB",
    "BPIIIIIIIIIIIIIIIIB",
    "BIIIIIIIIIIIIIIIIIB",
    "BIIIIIIIIIIIIIIIIIB",
    "BIIIIIIIIIIIIIIIIIB",
    "BIIIIIIIIIIIIIIIIIB",
    "BIIIIIIIIIIIIIIIIIB",
    "BIIIIIIIIIIIIIIIIIB",
    "BIIIIIIIIIIIIIIIIIB",
    "BIIIIIIIIIIIIIIIIIB",
    "BIIIIIIIIIIIIIIIIIB",
    "BIIIIIIIIIIIIIIIIIB",
    "BIIIIIIIIIIIIIIIIIB",
    "BIIIIIIIIIIIIIIIIGB",
    "BBBBBBBBBBBBBBBBBBB"
  ],
  "1": [
    "XXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXX",
    "XBBBBBBBBBBBBBBBXXX",
    "XBGIIIIIIIIIIIPBXXX",
    "XBBBBBBBBBBBBBBBXXX",
    "XXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXX"
  ],
  "2": [
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXBBBXXXX",
    "XXXXXBBBBBBBXBGBXXXX",
    "XXXXXBIIIIIBXBIBXXXX",
    "XBBBBBIBBBIBBBIBXXXX",
    "XBPIIIIBXBIIIIIBXXXXX",
    "XBBBBBBBXBBBBBBBXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX"
  ],
  "3": [
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXBBBXXXXXXXXBBBXXXX",
    "XXBGBXXXXXXXXBPBXXXX",
    "XXBIBXXXXBBBBBIBXXXX",
    "XXBIBBBBBBIIBBIBXXXX",
    "XXBIIIIIIIIIIIIBXXXX",
    "XXBIIBBIIBBBBIIBXXXX",
    "XXBBBBBBBBXXBBBBXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX"
  ],
  "4": [
    "XXXXXXXXXXXXXXXXXXXX",
    "XBBBBBXXXXXXBBBBBXXX",
    "XBIIIBBBBBBBBIIIBXXXX",
    "XBIBIBBIIIIBBIBIBXXX",
    "XBIIIIIIIIIIIIIIBXXX",
    "XBBIBBBBIIBBBBIBBXXX",
    "XXBIBXBIIIIBXBIBXXXX",
    "XXBPBXBIIIIBXBGBXXXX",
    "XXBBBXBBBBBBXBBBXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX"
  ],
  "5": [
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXBBBXXXX",
    "XXXXXXXXXXXXXBPBXXXX",
    "XXXXBBBBBBBBBBIBBBXX",
    "XBBBBIIIIIIIIIIIIBXX",
    "XBGIIIIIIIIIIIIIIBXX",
    "XBBBIIIIIIIIIIIIIBXX",
    "XXXBBBBBBBBBBBBBBBXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX"
  ],
  "6": [
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXBBBXXXX",
    "XXXXXXBBBBBXXBGBXXXX",
    "XXXBBBBIIIBBBBIBBBXX",
    "XBBBIIIIIIIIIBIIIBXX",
    "XBPIIIIIIIIIIBIIIBXX",
    "XBBBBIIIBIIIIIIIIBXX",
    "XXXXBBBBBBBBBBBBBBXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX"
  ],
  "7": [
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XBBBBBBBBBBBBBBBXXXX",
    "XBIIIIIIIIIIIIIBXXXX",
    "XBIBBBBBBBBBBBIBBBBX",
    "XBIBBBGIIIIIIIHIIIBX",
    "XBIBBBBBBBBBBBIBBIBX",
    "XBIBBBBBBBBBBBPBBIBX",
    "XBIBBBBBBBBBBBBBBIBX",
    "XBIBBBBIIBBIIIIBBIBX",
    "XBIIIIIIIIIIIIIIIIBX",
    "XBBBBBIIIIIIBBBBBBBX",
    "XXXXXBBBBBBBBXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXX"
  ]
}
