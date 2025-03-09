function ordenarPorPrioridad(arr) {
  const impares = [];
  const pares = [];

  for (let i = 0; i < arr.length; i++) {
    //Agrega en impares los números que no son divisble entre 2
    if (arr[i].prioridad % 2 === 1) {
      impares.push(arr[i]);
    } else {
      //Agrega en pares los números divisible entre 2
      pares.push(arr[i]);
    }
  }

  //Ordena los dos grupos impares y pares de menor a mayor
  impares.sort((a, b) => a.prioridad - b.prioridad);
  pares.sort((a, b) => a.prioridad - b.prioridad);

  return [...impares, ...pares];
}

const tasks = [
  { id: 1, prioridad: 3 },
  { id: 2, prioridad: 2 },
  { id: 3, prioridad: 5 },
  { id: 4, prioridad: 1 },
  { id: 5, prioridad: 4 },
  { id: 6, prioridad: 2 },
  { id: 7, prioridad: 3 },
  { id: 8, prioridad: 1 },
];

console.log(ordenarPorPrioridad(tasks));
