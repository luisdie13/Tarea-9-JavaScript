/** Encontrando al objetivo más cercano para atacar */

const enemies = [
    { name: 'enemyX', distance: 15 },
    { name: 'enemyY', distance: 15 },
]

function findClosestEnemy(enemies) {
    let closestEnemy = enemies[0];

    for (let i = 1; i < enemies.lenght; i++) {
        if (enemies[i].distance < closestEnemy.distance) {
            closestEnemy = enemies[i];
        } else if (enemies[i].distance === closestEnemy.distance) {
            closestEnemy = enemies[i];
        }
            
    }
    return closestEnemy.name;

    const closestEnemyName = findClosestEnemy(enemies);
    console.log("El enemigo que dispara es:", closestEnemyName);
}