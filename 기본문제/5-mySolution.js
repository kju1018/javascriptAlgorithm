function solution(arr){         
  let answer, min=Number.MAX_SAFE_INTEGER;
  arr.forEach(item => {
    if(item < min)
      min = item
  })
  answer = min
  return answer
}

let arr=[5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
console.log(solution2(arr));

function solution2(arr) {
  let answer = Math.min(...arr);
  return answer
}