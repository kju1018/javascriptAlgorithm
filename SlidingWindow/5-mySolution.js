function solution(n, arr){         
  let answer = 0;
  let count = 0;
  let sum = 0;
  let max = 0;
  let lt = 0;
  
  arr.forEach(item => {
    sum += item;
    count++;
    if(count === n) {
      answer = Math.max(sum, answer);
      sum -= arr[lt++];
      count--;
    }
  })
  
  return answer
}
            
let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));