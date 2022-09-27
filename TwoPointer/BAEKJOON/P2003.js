let input = require("fs").readFileSync("data.txt").toString().split("\n");

let count = input[0].split(" ");
let n = Number(count[0]);
let m = Number(count[1]);
let numbers = input[1].split(" ");

let left = 0;
let sum = 0;
let answer = 0;

numbers.forEach((number) => {
  sum += Number(number);
  if (sum === m) answer++;

  while (sum > m) {
    sum -= numbers[left++];
    if (sum === m) answer++;
  }
});
console.log(answer);
return answer;

// solution();
