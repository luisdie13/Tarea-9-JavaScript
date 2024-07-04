// Encontrando enemigo con mayor prioridad

let enemies = [];

function updateEnemy(enemyName, newDistance, newPriority) {
    const enemyIndex = enemies.findIndex(enemy => enemy.name === enemyName);

    if (enemyIndex !== -1) {
        enemies[enemyIndex].distance = newDistance;
        enemies[enemyIndex].priority = newPriority;
} else {
    enemies.push({ name: enemyName, distance: newDistance, priority: newPriority });
}
}

function findHighestPriorityEnemy() {
    let highestPriorityEnemy = null; 
    
    for (const enemy of enemies) {
        if (!highestPriorityEnemy || enemy.priority > highestPriorityEnemy.priority) {
            highestPriorityEnemy = enemy;
        } else if (enemy.priority === highestPriorityEnemy.priority) {
            if (enemy.distance < highestPriorityEnemy.distance) {
                highestPriorityEnemy = enemy;
        }
    }
}

return highestPriorityEnemy ? highestPriorityEnemy.name : null;
}

while (true) {
const enemy1Name = prompt("Ingrese nombre del enemigo 1:");
const enemy1DistanceStr = prompt("Ingrese distancia del enemigo 1:");
const enemy1Distance = parseFloat(enemy1DistanceStr);
const enemy1PriorityStr = prompt("Ingrese prioridad del enemigo 1:");
const enemy1Priority = parseInt(enemy1PriorityStr);

const enemy2Name = prompt("Ingrese nombre del enemigo 2:");
const enemy2DistanceStr = prompt("Ingrese distancia del enemigo 2:");
const enemy2Distance = parseFloat(enemy2DistanceStr);
const enemy2PriorityStr = prompt("Ingrese prioridad del enemigo 2:");
const enemy2Priority = parseInt(enemy2PriorityStr);

updateEnemy(enemy1Name, enemy1Distance, enemy1Priority);
updateEnemy(enemy2Name, enemy2Distance, enemy2Priority);

const highestPriorityEnemyName = findHighestPriorityEnemy();
console.log("El enemigo con mayor prioridad para atacar es:", highestPriorityEnemyName);
}