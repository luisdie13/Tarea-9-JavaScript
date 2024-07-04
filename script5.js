//Encontrando enemigo con mayor prioridad o velocidad

let enemies = []; 

function updateEnemy(enemyName, newDistance, newPriority, newSpeed) {

const enemyIndex = enemies.findIndex(enemy => enemy.name === enemyName);

if (enemyIndex !== -1) {
    enemies[enemyIndex].distance = newDistance;
    enemies[enemyIndex].priority = newPriority;
    enemies[enemyIndex].speed = newSpeed;
} else {
    enemies.push({ name: enemyName, distance: newDistance, priority: newPriority, speed: newSpeed });
}
}

function findHighestPriorityClosestFastestEnemy() {
    let highestPriorityEnemy = null;

for (const enemy of enemies) {
    if (!highestPriorityEnemy || enemy.priority > highestPriorityEnemy.priority) {
        highestPriorityEnemy = enemy;
    } else if (enemy.priority === highestPriorityEnemy.priority) {
        if (enemy.distance < highestPriorityEnemy.distance) {
            highestPriorityEnemy = enemy;
        } else if (enemy.distance === highestPriorityEnemy.distance) {
            if (enemy.speed > highestPriorityEnemy.speed) {
                highestPriorityEnemy = enemy;
            }
        }
    }
}
return highestPriorityEnemy ? highestPriorityEnemy.name : null;
}

while (true) {

const enemy1Name = prompt("Ingrese nombre del enemigo 1: ");
const enemy1DistanceStr = prompt("Ingrese distancia del enemigo 1: ");
const enemy1Distance = parseFloat(enemy1DistanceStr);
const enemy1PriorityStr = prompt("Ingrese prioridad del enemigo 1: ");
const enemy1Priority = parseInt(enemy1PriorityStr);
const enemy1SpeedStr = prompt("Ingrese velocidad del enemigo 1: ");
const enemy1Speed = parseInt(enemy1SpeedStr);

const enemy2Name = prompt("Ingrese nombre del enemigo 2: ");
const enemy2DistanceStr = prompt("Ingrese distancia del enemigo 2: ");
const enemy2Distance = parseFloat(enemy2DistanceStr);
const enemy2PriorityStr = prompt("Ingrese prioridad del enemigo 2: ");
const enemy2Priority = parseInt(enemy2PriorityStr);
const enemy2SpeedStr = prompt("Ingrese velocidad del enemigo 2: ");
const enemy2Speed = parseInt(enemy2SpeedStr);

updateEnemy(enemy1Name, enemy1Distance, enemy1Priority, enemy1Speed);
updateEnemy(enemy2Name, enemy2Distance, enemy2Priority, enemy2Speed);

const highestPriorityEnemyName = findHighestPriorityClosestFastestEnemy();
console.log("El enemigo con mayor prioridad, más cercano y más veloz para atacar es: ", highestPriorityEnemyName);
}