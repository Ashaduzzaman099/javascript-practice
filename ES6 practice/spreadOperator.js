const nums = [4, 1, 2, 5, 6];
const newNums = [...nums];
console.log(newNums);

// Add New Items
const addNewNums = [8, ...nums, 7];
console.log(addNewNums);

// Arry Combine
const arryA = [1, 2, 3, 5, 6];
const arryB = [7, 8, 9, 10];

const combineArry = [...arryA, ...arryB];
console.log(combineArry);
