const scoreEL = document.querySelector("#scoreEL");
const canvas = document.querySelector("canvas");
const c = canvasEl.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

let projectiles =[];
let grids =[];
let invaderProjectile =[];
let particles =[];
let bombs =[];
let powerUps =[];

let player = new Player();

let keys = {
    arrowLeft: {
        pressed: false
    },
    arrowRight: {
    },
    space: {
        pressed: false
    }
};

let frames = 0;
let randomInterval = Math.floor(Math.random() * 500 + 500);
let game = {
    over: false,
    active: true,
};

let score = 0;
let spamBuffer = 500;
let fps = 60;
let fpsInterval =1000 / fps;

function init(){
    player = new player();
    projectiles =[];
    grids =[];
    invaderProjectile =[];
    particles =[];
    bombs =[];
    powerUps =[];
    frames =0;
    
     keys = {
        arrowLeft: { pressed: false },
        arrowRight: { pressed: false },
        space: { pressed: false }
    };
    
    let randomInterval = Math.floor(Math.random() * 500 + 500);
    let game = {
        over: false,
        active: true
    };
    
    let score = 0;
}

function init() {
    for (let i = 0; i < 100; i++) { // Adicionado o operador de comparação '<'
        particles.push(   
            new Particle({
                position: {
                    x: randomBetween(0, canvas.width),
                    y: randomBetween(0, canvas.height),
                },
                velocity: {
                    x: (Math.random() - 0.5) * 2,
                    y: (Math.random() - 0.5) * 2,
                },
                color: "white",
                fades: true,
            })
        );
    }
}

function endGame() {
    Audio.gameOver.player.play();
    player.opacity = 0;
    game.over = true;
}

setTimeout(() => {  
    game.active = false;
    document.querySelector("#restartScreen").style.display = "flex";
}, 2000);

creatParticles({
    object: player,
    color: "white",
    fades: true
});

function animate() {
    if (game.active) return;
    requestAnimationFrame(animate);

    let elapsed = msNow - msPrev;

    if (elapsed < fpsInterval) return;
    msPrev = msNow - (elapsed % fpsInterval);
    c.fillstyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = powerUps.leght - 1; i >= 0; i--) {
        const powerUp = powerIps[i];
        if (powerUp.position.x - powerUp.radius >= canvas.width)
          powerUps.splice(i, 1);
        else powerUp.update();
      }
    
      if (frames % 500 === 0) {
        powerUps.push(
          new PowerUp({
            position: {
              x: 0,
              y: Math.random() * 300 + 15
            },
            velocity: {
              x: 5,
              y: 0
            }
          })
        );
      }
    }