'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let Discriminant = b ** 2 - ((4 * a) * c);
  console.log(Discriminant);
  if (Discriminant === 0) {
    arr = [-b / (2 * a)];
  } else if (Discriminant > 0) {
    arr = [(-b + Math.sqrt(Discriminant)) / (2 * a), (-b - Math.sqrt(Discriminant)) / (2 * a)];
  }
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let nowDate = new Date();
  let n;
  if (isNaN(Number(date))) {
    return `Параметр "срок ипотеки" содержит неправильное значение "${date}"`;
  } else {
    n = (date.getMonth() - nowDate.getMonth()) + (12 * (date.getFullYear() - nowDate.getFullYear()));
  }
  let monthSum = S * (P + P / (((1 + P) ** n) - 1));
  totalAmount = Number((monthSum * n).toFixed(2));
  console.log(totalAmount);
  return totalAmount;
}