howler.volume(0.5)

const audio ={
    backgroundMusic: new howl ({
        src: "./audio/,backgroundMusic.wav",
        loop: true,
        
        
    }),
    bomb: new howl ({
        src: "./audio/,bomb.mp3"
       
        
    })
    bonus: new howl({
        src: "./audio/,bonus.mp3",
        volume: 0.8
    }),
    enemyShoot:new howl ({
        src: "./audio/,enemyShoot.hav",
        volume: 0.8
    })
    explode: new howl ({
        src: "./audio/,explode.wav",
        volume: 0.8
    })
    gameOver: new howl ({
        src: "./audio/,gameOver.mp3",
    }),
    select : new howl({
        src: "./audio/,select.mp3",
    }),
    shoot : new howl({
        src: "./audio/,shoot.wav",
        
    }),
    start : new howl({
        src: "./audio/,start.mp3",
    }),
};
