const players = [
  { name: 'enemyA', dist1: 10 },
  { name: 'enemyB', dist2: 20 }
]

function findClosestEnemy(enemies) {
  let closestEnemy = enemies[0];

  for (let i = 1; i < enemies.lenght; i++) {
    if (enemies[i].distance < closestEnemy) {
      closestEnemy = enemies[i];
    }
  }
  return closestEnemy.name;
}