// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  let arr = [];
  let max = -100;
  let min = 100;
  for (let i = min; i <= arr.length; i++) {
    if (i > max) {
        i = max;
    }  else (i < min) {
        i = min;
    }
  }
  let sum = arr.reduce(function (accumulate, item) {
    return item + accumulate;
    }, 0);
    return sum;
  let avg = Number((sum/arr.length).toFixed(2)); 
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max

  // Ваш кода
  // for ...

  return max
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
