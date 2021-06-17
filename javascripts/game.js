kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
});

loadRoot('../sprites/');
loadSprite('b', 'b.png');
loadSprite('e', 'e.png');
loadSprite('f', 'f.png');
loadSprite('g', 'g.png');
loadSprite('h', 'h.png');
loadSprite('j', 'j.png');
loadSprite('m', 'm.png');
loadSprite('n', 'n.png');
loadSprite('q', 'q.png');
loadSprite('s', 's.png');
loadSprite('t', 't.png');
loadSprite('v', 'v.png');
loadSprite('z', 'z.png');

scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj');

    const map = [
        'w         j   j    j    j    j  m   mm                                             ',
        'w   j   j   j   jttt  j   ttt                                                      ',
        'w     j    sss   gffgffg                                                           ',
        'wbbbbeehqhbbbbbeeeeqheeebhebehqbhbebebebebbebebeeeee                               ',
        'nnnnnnnnnnnnnnnnzzzzzzzzzzzzzzzzzzzznnnnnnnnnnnnnnzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    ];

    const levelCfg = {
        width: 40,
        height: 40,
        'q': [sprite('q'), scale(2), solid(), 'q', 'dangerous'],
        'h': [sprite('h'), scale(2), solid(), 'h', 'dangerous'],
        'z': [sprite('z'), scale(4), solid(1), 'z', 'dangerous'],
        'j': [sprite('j'), scale(.5), solid(1), 'j', 'dangerous'],
        'n': [sprite('n'), scale(4), solid(), 'n', 'dangerous'],
        's': [sprite('s'), scale(8), solid(), 's', 'dangerous'],
        't': [sprite('t'), scale(2), solid(), 't', 'dangerous'],
        'g': [sprite('g'), scale(6), solid(), 'g', 'dangerous'],
        'f': [sprite('f'), scale(2), solid(), 'f', 'dangerous'],
        'm': [sprite('m'), scale(2), solid(), 'm', 'dangerous'],
        'b': [sprite('b'), scale(2), solid(), 'a', 'dangerous'],
        'e': [sprite('e'), scale(3), solid(), 'e', 'dangerous'],
    };

    const gameLevel = addLevel(map, levelCfg);

});

start("game");