let nums = [1, 2, 3, 4];

let newNums = nums.filter((Num) => Num % 2 !== 0).map((num) => num * 2);
console.log(newNums);
