//ForEach
Array.prototype.createForEach = function (callback) {
  let newData = this;
  for (let i = 0; i < newData.length; i++) {
    callback(newData[i], i, newData);
  }
};

let forArr = [1, 2, 3, 5, 6, 7];
// console.log(forArr.createForEach((element, index) => {}));

//********************************************************************************************************************
//Map
Array.prototype.createMap = function (callback) {
  let res = [];
  let newData = this;
  for (let i = 0; i < newData.length; i++) {
    res.push(callback(newData[i], i, newData));
  }
  return res;
};

let mapArr = [1, 2, 3, 4, 5, 6];
// console.log(mapArr.createMap((num) => num * 2));

//********************************************************************************************************************
//Filter
Array.prototype.createFilter = function (callback) {
  const result = [];
  let newData = this;
  for (let i = 0; i < newData.length; i++) {
    if (callback(newData[i], i, newData)) {
      result.push(newData[i]);
    }
  }
  return result;
};

let fillArr = [1, 2, 3, 4, 5, 6];
// console.log(fillArr.createFilter((num) => num % 2 === 0));

//********************************************************************************************************************
//Some
Array.prototype.createSome = function (callback) {
  let newData = this;
  for (let i = 0; i < newData.length; i++) {
    if (callback(newData[i], i, newData)) {
      return true;
    }
  }
  return false;
};
let someArr = [1, 3, 5, 7, 8];
// console.log(someArr.createSome((num) => num % 2 === 0));

//********************************************************************************************************************
//Every

Array.prototype.createEvery = function (callback) {
  let newData = this;
  for (let i = 0; i < newData.length; i++) {
    if (!callback(newData[i], i, newData)) {
      return false;
    }
  }
  return true;
};
let everyArr = [2, 4, 6];
// console.log(everyArr.createEvery((num) => num % 2 === 0));

//********************************************************************************************************************
//Find
Array.prototype.createFind = function (callback) {
  let newData = this;
  for (let i = 0; i < newData.length; i++) {
    if (callback(newData[i], i, newData)) {
      return newData[i];
    }
  }
  return undefined;
};

let findArr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(findArr.createFind((num) => num > 5));
