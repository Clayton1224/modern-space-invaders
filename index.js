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