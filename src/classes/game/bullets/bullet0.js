let bullet0 = {
    image: new Image(),
    x: bossX + 75,
    y: canvas.height / 2 - 255,
    vx: (Math.random() - 0.5) * 10,
    vy: (Math.random() - 0.5) * 10,
    bounces: 0,
    size: 30,
    canSplit: 0,
    rotation: 0,
    isRed: 0,
    explodeTime: null,
};