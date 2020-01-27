"use strict";

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и
// имя свойства. Возвращает массив значений определенного свойства prop из каждого
// объекта в массиве.

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const getAllPropValues = function(arr, prop) {
  const values = [];

  for (const item of arr) {
    let value = item[prop];

    if (value) {
      values.push(value);
    }
  }

  return values;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []

//1. создаю пустой массив
//2. перебираем массив products c помощью цикла for...of
//3. что бы вернуть пустой массив а не undefind, value не равно udefine
//  И пушим ключи в пустой массив
