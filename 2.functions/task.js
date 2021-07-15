// Задание 1 (реализация через for)

function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = (sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 1
/*function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = arr.reduce(function (accumulate, item) {
    return item + accumulate;
  }, 0);
  avg = (sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}
*/

// Задание 2
function worker(arr) {
  let sum;
  sum = arr.reduce(function (accumulate, item) {
    return item + accumulate;
  }, 0);
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max;
  min = Infinity;
  max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let difference = Math.abs(max - min);
  return difference;
}
