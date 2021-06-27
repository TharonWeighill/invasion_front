class Game {
    constructor(player) {
        this.player = player;
    }
    init() {

        const canvas = document.getElementById("game");
        canvas.classList.remove("hidden");
        kaboom({
            global: true,
            canvas,
            // fullscreen: true,
            scale: 3,
            debug: true,
            clearColor: [0, 0, 0, 0]
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
            console.log(scene);
            layers(['bg', 'obj', 'ui'], 'obj');
            const map = [
                '     j            j   j             j     j              j     j          j         ',
                '         j    j          j j    j        j         j   j                       jj   ',
                '               j   j   j     j j      j           j           jj      j  j      j   ',
                '      j    j     j         j j      j     j    j     jj         j                   ',
                '      j  j j     jj   j  j j    j    j   j    j             j          j   jjj      ',
                'w   j   j   j   jttt  j   ttt                        jjj j         jj               ',
                'w     j    sss   gffgffg                                             j              ',
                'wbhhbbbeehqhbbbbbqeheeeqheeeqbhebehqbhbebebebebbebebeeeeewbhhbbbeehqhbbbbbqeheewbhhb',
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

            const player = add([
                sprite('v'),
                scale(.5),
                pos(20, 20)
            ]);

            player.collides('dangerous', () => {
                go('lose', { score: score.value });
                destroy(player);
            });

            player.action(() => {
                camPos(player.pos),
                    camScale(.55);
            });

            const TIME_LEFT = 30;

            const timer = add([
                text('0'),
                pos(player.pos),
                scale(.5),
                layer('ui'),
                {
                    time: TIME_LEFT,
                },

            ]);

            timer.action(() => {
                timer.time -= dt();
                timer.text = timer.time.toFixed(2);
                if (timer.time <= 0) {
                    go('lose', { score: score.value });
                }
            });

            const score = add([
                text('0'),
                pos(5, 5),
                layer('ui'),
                {
                    value: 0,
                }
            ]);

            const MOVE_SPEED = 100;
            keyDown('left', () => {
                player.move(-MOVE_SPEED, 0);
            });
            keyDown('right', () => {
                player.move(MOVE_SPEED, 0);
            });
            keyDown('up', () => {
                player.move(0, -MOVE_SPEED);
            });
            keyDown('down', () => {
                player.move(0, MOVE_SPEED);
            });

            function spawnBullet(p) {
                add([
                    rect(5, 10),
                    pos(p),
                    origin('center'),
                    color(.1, 0.9, 1),
                    'bullet'
                ]);
            }

            const BULLET_SPEED = 100;
            action('bullet', (b) => {
                b.move(0, +BULLET_SPEED);
                if (b.pos.y < 0) {
                    destroy(b);
                }
            });
            keyPress('space', () => {
                spawnBullet(player.pos.add(12, 30));
            });
            collides('bullet', 's', (b, s) => {
                destroy(s);
                destroy(b);
                score.value++;
                score.text = score.value;
            });
            collides('bullet', 'a', (b, a) => {
                destroy(a);
                destroy(b);
                score.value++;
                score.text = score.value;
            });
            collides('bullet', 'e', (b, e) => {
                destroy(e);
                destroy(b);
                score.value++;
                score.text = score.value;
            });
            collides('bullet', 'f', (b, f) => {
                destroy(f);
                destroy(b);
                score.value++;
                score.text = score.value;
            });
            collides('bullet', 'g', (b, g) => {
                destroy(g);
                destroy(b);
                score.value++;
                score.text = score.value;
            });
            collides('bullet', 'h', (b, h) => {
                destroy(h);
                destroy(b);
                score.value++;
                score.text = score.value;
            });
            collides('bullet', 'm', (b, m) => {
                destroy(m);
                destroy(b);
                score.value++;
                score.text = score.value;
            });
            collides('bullet', 't', (b, t) => {
                destroy(t);
                destroy(b);
                score.value++;
                score.text = score.value;
            });
            collides('bullet', 'v', (b, v) => {
                destroy(v);
                destroy(b);
                score.value++;
                score.text = score.value;
            });
        });


        scene('lose', ({ score }) => {
            add([text(score, 32), origin('center'), pos(width() / 2, height() / 2)]);
        });

        // scene("lose", (score) => {
        //     // display score passed by scene "game"
        //     add([
        //         text(score.value),
        //     ]);
        // });

        start("game");
    }
}
