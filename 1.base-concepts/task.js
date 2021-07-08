'use strict'

function solveEquation(a, b, c) {
  let arr;
  let D = b ** 2 - ((4 * a) * c);
  console.log(D);
  if (D < 0) {
    arr = [];
  } else if (D === 0) {
    arr = [-b / (2 * a)];
  } else if (D > 0) {
    arr = [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (isNaN(Number(percent))) {
    totalAmount = `Параметр "процентная ставка" содержит неправильное значение "${percent}"`;
    return totalAmount;
  } else {
    let P = (percent / 100) / 12;
  }
  if (isNaN(Number(contribution))) {
    totalAmount = `Параметр "сумма первоначального взноса" содержит неправильное значение "${contribution}"`;
    return totalAmount;
  } else {
    contribution = Number(contribution);
  }
  if (isNaN(Number(amount))) {
    totalAmount = `Параметр "сумма кредита" содержит неправильное значение "${amount}"`;
    return totalAmount;
  } else {
    let S = amount - contribution;
  }
  if (isNaN(Number(date))) {
    totalAmount = `Параметр "срок ипотеки" содержит неправильное значение "${date}"`;
    return totalAmount;
  } else {
    let nowDate = new Date();
    let n = (date.getMonth() - nowDate.getMonth()) + (12 * (date.getFullYear() - nowDate.getFullYear()));
  }
  let monthSum = S * (P + P / (((1 + P) ** n) - 1));
  totalAmount = monthSum * n;
  console.log(totalAmount);
  return totalAmount;
}