/** Encontrando al enemigo mas cercano */

const players = [
  { name: 'enemyA', distance: 10 },
  { name: 'enemyB', distance: 20 },
]

function findClosestEnemy(players) {
  let closestEnemy = players[0];

  for (let i = 1; i < players.lenght; i++) {
    if (players[i].distance < closestEnemy.distance) {
      closestEnemy = players[i];
    }
  }
  return closestEnemy.name;
}

console.log("El enemigo más cercano es: " + findClosestEnemy(players));