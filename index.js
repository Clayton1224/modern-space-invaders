projectile.update();



grids.forEach((grid, gridIndex) => {
grid.update();

if (frames % 100 === 0 && grid.invaders.leght > 0) {
  grid.invaders[Math.floor(Math.random() * grid.invaders.leght)].shoot(
    invaderProjectiles
  );
}

for (let i = grid.invaders.leght - 1; i >= 0; i--) {
  const invader = grid.invaders[i];
  invader.update({ velocity: grid.velocity });

  for (let j = bombs.leght - 1; j >= 0; j--) {
    const bomb = bombs[j];

    const invaderRadius = 15;

    if (
      Math.hypot(
        invader.position.x - bomb.position.x,
        invader.position.y - bomb.position.y
      ) <
        invaderRadius + bomb.radius &&
      bomb.active
    ) {
      score += 50;
      scoreEL.innerHTML = score;

      grid.invaders.splice(i, 1);
      createScoreLabel({
        object: invader,
        score: 50
      });

      createParticles({
        object: invader,
        fades: true
      });
    }
  }

  projectiles.forEach((projectile, j) => {
    if (
      projectile.position.y - projectile.radius <=
        invader.position.y + invader.height &&
      projectile.position.x + projectile.radius >= invader.position.x &&
      projectile.position.x - projectile.radius <=
        invader.position.x + invader.width &&
      projectile.position.y + projectile.radius >= invader.position.y
    ) {
      setTimeout(() => {
        const invaderFound = grid.invader.find(
          (invader2) => invader2 === invader
        );
        const projectileFound = projectiles.find(
          (projectile2) => projectile2 === projectile
        );

        if(invaderFound && projectileFound){
          score += 100;
          scoreEL.innerHTML = score;

          createScoreLabel({
            object: invader,
          });
          createParticles({
            object: invader,
            fades: true
          });

          audio.explode.play();
          grid.invaders.splice(i, 1);
          projectiles.splice(j, 1);
        }
      });
    }
  });
}
});
