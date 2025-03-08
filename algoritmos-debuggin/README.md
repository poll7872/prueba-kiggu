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
