"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const getAllPropValues = function(arr, prop) {
  const values = [];

  for (const arrs of arr) {
    if (prop in arrs) {
      values.push(arrs[prop]);
    }
  }

  return values;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []

//1 создаю пустой массив
//2 перебираем массив products c помощью цикла for...of
//3 что бы вернуть пустой массив а не undefind, исполь if и in. И пушим ключи в пустой массив
