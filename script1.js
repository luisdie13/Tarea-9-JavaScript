// Función para calcular la distancia entre dos puntos
function calcularDistancia(punto1, punto2) {
    const diferenciaX = punto1.x - punto2.x;
    const diferenciaY = punto1.y - punto2.y;
    return Math.sqrt(diferenciaX * diferenciaX + diferenciaY * diferenciaY);
  }
  
  // Función para determinar el enemigo más cercano
  function enemigoMasCercano(enemigo1, enemigo2) {
    const distanciaEnemigo1 = calcularDistancia(jugador, enemigo1);
    const distanciaEnemigo2 = calcularDistancia(jugador, enemigo2);
  
    if (distanciaEnemigo1 < distanciaEnemigo2) {
      return enemigo1.nombre;
    } else {
      return enemigo2.nombre;
    }
  }
  
  // Función para verificar si un valor es un número válido
  function esNumeroValido(valor) {
    return !isNaN(valor) && parseFloat(valor) === valor;
  }
  
  // Ejemplo de uso
  const jugador = { x: 0, y: 0 }; // Posición del jugador
  let enemigo1 = { nombre: "EnemyA", x: 10, y: 10 };
  let enemigo2 = { nombre: "EnemyB", x: 20, y: 20 };
  
  // Bucle infinito para leer continuamente la información de los enemigos
  while (true) {
    // Leer la distancia y el nombre del enemigo 1
    let distancia1 = prompt("Ingrese la distancia del enemigo 1:");
  
    // Verificar si la distancia ingresada es un número válido
    while (!esNumeroValido(distancia1)) {
      distancia1 = prompt("Error: Ingrese una distancia válida (número):");
    }
  
    // Convertir la distancia a número
    distancia1 = parseFloat(distancia1);
  
    const nombreEnemigo1 = prompt("Ingrese el nombre del enemigo 1:");
  
    // Actualizar la información del enemigo 1
    enemigo1.distancia = distancia1;
    enemigo1.nombre = nombreEnemigo1;
  
    // Leer la distancia y el nombre del enemigo 2
    let distancia2 = prompt("Ingrese la distancia del enemigo 2:");
  
    // Verificar si la distancia ingresada es un número válido
    while (!esNumeroValido(distancia2)) {
      distancia2 = prompt("Error: Ingrese una distancia válida (número):");
    }
  
    // Convertir la distancia a número
    distancia2 = parseFloat(distancia2);
  
    const nombreEnemigo2 = prompt("Ingrese el nombre del enemigo 2:");
  
    // Actualizar la información del enemigo 2
    enemigo2.distancia = distancia2;
    enemigo2.nombre = nombreEnemigo2;
  
    // Bucle para mostrar la información de los enemigos
    console.log(`Enemigo 1: ${enemigo1.nombre} - Distancia: ${enemigo1.distancia}`);
    console.log(`Enemigo 2: ${enemigo2.nombre} - Distancia: ${enemigo2.distancia}`);
  
    // Determinar el enemigo más cercano
    const enemigoCercano = enemigoMasCercano(enemigo1, enemigo2);
    console.log(`El enemigo más cercano es: ${enemigoCercano}`);
  
    // Preguntar si el usuario quiere continuar
    const continuar = prompt("¿Desea continuar? (Sí/No):");
    if (continuar.toLowerCase() !== "sí") {
      break; // Salir del bucle si el usuario ingresa "No"
    }
  }
  
// Función para encontrar el enemigo más cercano desde el formulario HTML
function findClosestEnemy() {
    // ... (existing code)
  
    const enemy1DistanceStr = document.getElementById("enemy1-distance").value;
    const enemy2DistanceStr = document.getElementById("enemy2-distance").value;
  
    // Parse the strings to numbers
    const enemy1Distance = parseFloat(enemy1DistanceStr);
    const enemy2Distance = parseFloat(enemy2DistanceStr);
  
    // Check if parsing was successful (both should be numbers)
    if (isNaN(enemy1Distance) || isNaN(enemy2Distance)) {
      alert("Error: Ingrese distancias válidas (números).");
      return;
    }
  
    // Actualizar los objetos de los enemigos con la información recuperada
    enemigo1.nombre = enemy1Name;
    enemigo1.distancia = enemy1Distance;
    enemigo2.nombre = enemy2Name;
    enemigo2.distancia = enemy2Distance;
  
    // Encontrar el enemigo más cercano usando la función existente
    const closestEnemy = enemigoMasCercano(enemigo1, enemigo2);
  
    // Update result paragraph with the closest enemy's name
    document.getElementById("result").textContent = `The closest enemy is: ${closestEnemy}`;
  }  