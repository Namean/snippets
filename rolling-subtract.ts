const arr: number[] = [2, 6, 8, 11, 14, 19, 25];

let result = arr.map((x, index) => arr[index + 1] - x).slice(0, arr.length - 1);

console.log(result);

arr.map((x, index) => {
  console.log(`${arr[index + 1]} - ${arr[index]} = ${result[index]}`);
});
