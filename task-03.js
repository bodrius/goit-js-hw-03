"use strict";

const findBestEmployee = function(employees) {
  let max = 0;
  let name;

  for (const i in employees) {
    if (max < employees[i]) {
      max = employees[i];
      name = i;
    }
  }
  return {
    name,
    maxTask: max
  };
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
