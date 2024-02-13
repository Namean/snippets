#!/bin/bash node

const person = {
  name: "Desmond",
  income: {
    total: 1392,
  },
};

// percentageOfIncome(1392, 140); // approx ~ 10.05 <= y <= 10.06
function percentageOfIncome(income: number, input: number, places = 2) {
  const onePercent = income / 100;

  return Number((input / onePercent).toFixed(places));
}

const log = console.log;

const rates = [10, 11, 12];
const hours = 40;

// let buffer: never[] | number[] = [];

let buffer: void[] | number[] = rates.map((x, index, buffer) => {
  const product = x * hours;
  return product;
});

// console.log(buffer);
const data = [30, 50, 200, 40, 60, 80, 550.0];
const income = 1392;

type expenseObject = {
  index: number;
  value: number;
  percentage: number;
};

let expenseObjects: object[] | void[] = data.map((x, index): object => {
  const expensePercent = percentageOfIncome(income, x);
  //   console.log(`${x} is ${percentageOfIncome(income, x)}% of ${income}`);
  const y: expenseObject = new Object({
    index: index,
    value: x,
    percentage: expensePercent,
  }) as expenseObject;

  return y;
});

expenseObjects.map((x, index) => log(x));
