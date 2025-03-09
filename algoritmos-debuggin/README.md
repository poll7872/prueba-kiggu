## Ejercicio 1: Frecuencias Máximas

### **Enunciado:**

Dada una lista (arreglo) de números enteros, implementa una función (o método) que retorne los 2 valores más frecuentes y cuántas veces aparecen.

### **Análisis**

1. **Entrada:** Un array de números enteros:

   ```js
   array = [2, 3, 2, 5, 8, 9, 2, 3];
   ```

2. **Salida esperada:** Dos valores con las máximas frecuencias y cuántas veces aparecen. En este caso, el número **2** aparece tres veces y el número **3** aparece dos veces.

   ```js
   {2: 3, 3: 2}
   ```

### **Proceso**

1. Se crean cuatro variables:

   - Un `Map` llamado `count` para almacenar la frecencia de cada número en el array.
   - Dos variables (`max1Freq` y `max2Freq`) para guardar las dos frecuencias máximas.
   - Dos variables (`numMax1` y `numMax2`) para almacenar los números correspondientes a esas frecuencias máximas.

   ```js
   const count = new Map();
   let max1Freq = 0;
   let max2Freq = 0;
   let numMax1 = null;
   let numMax2 = null;
   ```

2. Se recorre el array para calcular la frecuencia de cada número, almacenando los valores en `count`.

   - Si el número ya existe en el `Map`, se incrementa su contador.
   - Si no existe, se inicializa con 1.

   ```js
   for (const number of arr) {
     if (count.has(number)) {
       count.set(number, count.get(number) + 1);
     } else {
       count.set(number, 1);
     }
   }
   ```

3. **Identificación de los dos valores con las frecuencias máximas**  
   Ahora que tenemos la frecuencia de cada número en el `Map`, debemos encontrar los dos números con mayor frecuencia. Para ello:

   - Se recorre el `Map` obteniendo cada número (`key`) y su frecuencia (`value`).
   - Se evalúa si la frecuencia actual es mayor que `max1Freq`. Si lo es, se actualizan `max2Freq` y `numMax2`, desplazando los valores actuales de `max1Freq` y `numMax1`.
   - Si la frecuencia es menor que `max1Freq` pero mayor que `max2Freq`, se actualizan `max2Freq` y `numMax2`.

   ```js
   count.forEach((value, key) => {
     if (value > max1Freq) {
       max2Freq = max1Freq;
       numMax2 = numMax1;
       max1Freq = value;
       numMax1 = key;
     } else if (value > max2Freq && value < max1Freq) {
       max2Freq = value;
       numMax2 = key;
     }
   });
   ```

4. Finalmente, se retorna un objeto con los dos números más frecuentes y sus respectivas frecuencias

   ```js
   return { [numMax1]: max1Freq, [numMax2]: max2Freq };
   ```

### **Código completo**

```js
function maxFrequency(arr) {
  const count = new Map();
  let max1Freq = 0;
  let max2Freq = 0;
  let numMax1 = null;
  let numMax2 = null;

  // Se obtiene la frecuencia de cada número en el array
  for (const number of arr) {
    if (count.has(number)) {
      count.set(number, count.get(number) + 1);
    } else {
      count.set(number, 1);
    }
  }

  // Encuentra los dos valores con las frecuencias máximas
  count.forEach((value, key) => {
    if (value > max1Freq) {
      max2Freq = max1Freq;
      numMax2 = numMax1;
      max1Freq = value;
      numMax1 = key;
    } else if (value > max2Freq && value < max1Freq) {
      max2Freq = value;
      numMax2 = key;
    }
  });

  return { [numMax1]: max1Freq, [numMax2]: max2Freq };
}

const arr = [2, 3, 2, 5, 8, 9, 2, 3];

console.log(maxFrequency(arr));
```

---

## Ejercicio 2

### **Enunciado:**

- Tienes un array de objetos con la forma { id, prioridad }, donde prioridad es un número de 1 a 5.
- Se pide ordenar el array de modo que aparezcan primero todas las prioridades impares (1, 3, 5) y después todas las pares (2, 4), manteniendo el orden interno original dentro de cada categoría.

### **Análisis**

1. **Entrada:** Un array de objetos con la siguiente forma:

   ```js
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
   ```

2. **Salida esperada:** Un nuevo array con el mismo contenido pero ordenado de acuerdo a la prioridad. Primero aparecerán los números impares y luego los pares, manteniendo el orden en que llegaron dentro de su grupo.

   ```js
   [
     { id: 4, prioridad: 1 },
     { id: 8, prioridad: 1 },
     { id: 1, prioridad: 3 },
     { id: 7, prioridad: 3 },
     { id: 3, prioridad: 5 },
     { id: 2, prioridad: 2 },
     { id: 6, prioridad: 2 },
     { id: 5, prioridad: 4 },
   ];
   ```

### **Explicación del algoritmo**

1. **Separación en grupos:** Se crean dos arrays vacíos, uno para prioridades impares y otro para pares:

   ```js
   const impares = [];
   const pares = [];
   ```

2. **Clasificación de elementos:** Se recorre el array y se verifica si la prioridad es impar o par:

   - Si no es divisible entre 2, es impar y se agrega al array de impares.
   - Si es divisible entre 2, es par y se agrega al array de pares.

   ```js
   for (let i = 0; i < arr.length; i++) {
     if (arr[i].prioridad % 2 === 1) {
       impares.push(arr[i]);
     } else {
       pares.push(arr[i]);
     }
   }
   ```

3. **Ordenamiento de cada grupo:** Una vez que tenemos los dos grupos, debemos ordenarlos en orden acendente según la prioridad. Para esto, usamos el método `sort()` aplicando una función de comparación:

   ```js
   impares.sort((a, b) => a.prioridad - b.prioridad);
   pares.sort((a, b) => a.prioridad - b.prioridad);
   ```

4. **Unión de los resultados:** Finalmente, usamos el operador de propagación `...` para fusionar los dos arrays en el orden requerido.

   ```js
   return [...impares, ...pares];
   ```

### **Código final**

```js
function ordenarPorPrioridad(arr) {
  const impares = [];
  const pares = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].prioridad % 2 === 1) {
      impares.push(arr[i]);
    } else {
      pares.push(arr[i]);
    }
  }

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
```

Con este código, logramos que los objetos se ordenen según su proridad respetando el orden original dentro de cada grupo de impares y pares.

---

## Ejercicio de Debugging

### Snippet de ejemplo

```js
app.get("/tasks/:id", (req, res) => {
  const { id } = req.body;
  const task = tasks.find((t) => t.id == id);
  if (!task) {
    res.status(200).json({ error: "Task not found" });
  } else {
    res.send(task);
  }
});
```

### **Errores identificados y correcciones**

#### **1. Primer error identificado:**

El código intenta obtener una tarea según su `id`, como se observa en el endpoint. Sin embargo, hay un problema en la desestructuración del `id`, ya que lo obtiene de `req.body`, lo cual es incorrecto.

Dado que el `id` se pasa en el parámetro de la URL (`/tasks/:id`), la forma correcta de obtenerlo es mediante `req.params.id`. `req.params` es una propiedad proporcionada por Express que permite acceder a los parámetros definidos en la ruta:

```js
const id = req.params.id;
```

#### **2. Segundo error identificado:**

Se está buscando la tarea en la colección `tasks` utilizando el método `find()`, lo cual es correcto para obtener el objeto correspondiente al `id` proporcionado. Sin embargo, si la tarea no se encuentra, se debería responder con un código de estado `404` en lugar de `200`, ya que el recurso solicitado no existe.

Además, se agrega `return` para detener la ejecución de la función y evitar que continúe procesando el código.

La corrección es:

```js
if (!task) {
  res.status(404).json({ message: "Tarea no encontrada" });
  return;
}
```

#### **3. Tercer error identificado:**

El problema está en el `else`, donde se usa `res.send(task)`. Aunque `res.send()` puede funcionar, es una mejor práctica responder con `res.status(200).json(task)` para dejar explícito que se está enviando una respuesta en formato JSON con un estado `200`, indicando éxito en la operación.

La corrección es:

```js
res.status(200).json(task);
```

---

### **Código corregido**

```js
app.get("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const task = tasks.find((t) => t.id == id);

  if (!task) {
    res.status(404).json({ message: "Tarea no encontrada" });
    return;
  }

  res.status(200).json(task);
});
```

```

```
