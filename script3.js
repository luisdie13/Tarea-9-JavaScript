//Encontrando al enemigo mas cercano

let enemies = []; 

function updateEnemy(enemyName, newDistance) {

const enemyIndex = enemies.findIndex(enemy => enemy.name === enemyName);

if (enemyIndex !== -1) {
    enemies[enemyIndex].distance = newDistance;
} else {
    enemies.push({ name: enemyName, distance: newDistance });
}
}

function findClosestEnemy() {
    let closestEnemy = enemies[0]; 

for (let i = 1; i < enemies.length; i++) {
    if (enemies[i].distance < closestEnemy.distance) {
        closestEnemy = enemies[i];
    }
}
return closestEnemy.name;
}

while (true) {

const enemy1Name = prompt("Ingrese nombre del enemigo 1: ");
const enemy1DistanceStr = prompt("Ingrese distancia del enemigo 1: ");
const enemy1Distance = parseFloat(enemy1DistanceStr);

const enemy2Name = prompt("Ingrese nombre del enemigo 2: ");
const enemy2DistanceStr = prompt("Ingrese distancia del enemigo 2: ");
const enemy2Distance = parseFloat(enemy2DistanceStr);

updateEnemy(enemy1Name, enemy1Distance);
updateEnemy(enemy2Name, enemy2Distance);

const closestEnemyName = findClosestEnemy();
console.log("El enemigo más cercano es: ", closestEnemyName);
}