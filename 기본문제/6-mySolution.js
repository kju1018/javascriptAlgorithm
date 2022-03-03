function solution(arr){
  let answer=[];
  let sum=0, min=1000;
  arr.forEach(item => {
    if(item % 2 === 1){
      sum += item;
      min = item < min ? item : min
    }
  })
  answer.push(sum)
  answer.push(min)
  return answer
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));