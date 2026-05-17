const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(rest);


const [first2, secend, ...rest2] = [1, 2, 3, 4, 5];
console.log(secend);
console.log(rest2);

// Function with rest parameter
const sum = (...numbers) => {
    console.log(numbers);
}

sum(1, 2, 3, 4, 5);

// Arrow Function with rest and reduce to calculate total of array items
const total = (...nums) => {
    return nums.reduce((num,sum) =>{
        return num+sum;
    },0)
}
console.log(total(3,1,5,3))