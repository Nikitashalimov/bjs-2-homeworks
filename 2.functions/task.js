// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = arr.reduce(function (accumulate, item) {
    return item + accumulate;
  }, 0);
  avg = (sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

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
  for (let = i; i < arrOfArr.lenght; i++) {
    let sum = func(arrOfArr[i]);
    if (sum > max) {
      sum = max;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  for (let = i; i < arrOfArr.lenght; i++) {
    let max = 0;
    let min = func(arrOfArr[i]);
    if (min > max) {
      min = max;
    }
  }
  let difference = max - min;
  return difference;
}