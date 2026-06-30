const original = [nombre, edad, ciudad];
const actualizado = original.map((valor, indice) => {
  if (indice === 1) {
    return valor + 5; // Incrementa la edad en 5 años
  }
  return valor;
});