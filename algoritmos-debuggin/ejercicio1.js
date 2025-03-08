function maxFrequency(arr) {
  const count = new Map();
  let max1Freq = 0;
  let max2Freq = 0;
  let numMax1 = null;
  let numMax2 = null;

  //Se obtiene las frecuencias de cada número en el array
  for (const number of arr) {
    if (count.has(number)) {
      count.set(number, count.get(number) + 1);
    } else {
      count.set(number, 1);
    }
  }

  //Encuentra los dos valores con las frecuencias maximas
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

const arr1 = [2, 3, 2, 5, 8, 9, 2, 3];
const arr2 = [4, 2, 2, 9, 3, 1, 1, 1];
const arr3 = [9, 2, 9, 3, 7, 8, 2];

console.log(maxFrequency(arr1));
console.log(maxFrequency(arr2));
console.log(maxFrequency(arr3));
