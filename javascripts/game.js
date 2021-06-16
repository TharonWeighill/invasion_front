kaboom ({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
})

loadRoot('https://replit.com/@tharonweighill/Alien-Attack#sprites/')
loadSprite('b', 'b.kbmsprite')
loadSprite('e', 'e.kbmsprite')
loadSprite('f', 'f.kbmsprite')
loadSprite('g', 'g.kbmsprite')
loadSprite('h', 'h.kbmsprite')
loadSprite('j', 'j.kbmsprite')
loadSprite('m', 'm.kbmsprite')
loadSprite('n', 'n.kbmsprite')
loadSprite('q', 'q.kbmsprite')
loadSprite('s', 's.kbmsprite')
loadSprite('t', 't.kbmsprite')
loadSprite('v', 'v.kbmsprite')
loadSprite('z', 'z.kbmsprite')

scene("game", ( => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const map = [
        'w         j   j    j    j    j  m   mm                                             ',
        'w   j   j   j   jttt  j   ttt                                                      ',
        'w     j    sss   gffgffg                                                           ',
        'wbbbbeehqhbbbbbeeeeqheeebhebehqbhbebebebebbebebeeeee                               ',
        'nnnnnnnnnnnnnnnnzzzzzzzzzzzzzzzzzzzznnnnnnnnnnnnnnzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    ]

    const levelCfg = {
        width: 40,
        height: 40,
  'q': [ sprite('q'), scale(2), solid(), 'q', 'dangerous'],
  'h': [ sprite('h'), scale(2), solid(), 'h','dangerous'],
  'z': [ sprite('z'), scale(4), solid(1), 'z','dangerous'],
  'j': [ sprite('j'), scale(.5), solid(1), 'j','dangerous'],
  'n': [ sprite('n'), scale(4), solid(), 'n','dangerous'],
  's': [ sprite('s'), scale(8), solid(), 's','dangerous'],
  't': [ sprite('t'), scale(2), solid(), 't','dangerous'],
  'g': [ sprite('g'), scale(6), solid(), 'g','dangerous'],
  'f': [ sprite('f'), scale(2), solid(), 'f','dangerous'],
  'm': [ sprite('m'), scale(2), solid(), 'm','dangerous'],
  'b': [ sprite('b'), scale(2), solid(), 'a','dangerous'],
  'e': [ sprite('e'), scale(3), solid(), 'e','dangerous'],
    }

})

start("game")