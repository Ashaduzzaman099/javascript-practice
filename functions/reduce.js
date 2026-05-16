const nums = [1, 2, 3, 4];

const total = nums.reduce((num, sum) => {
  return num + sum;
}, 0);

console.log(total);
