function solution(day, arr){
  let answer=0;
  arr.forEach(item => {
    answer = (item % 10) === day ? answer + 1 : answer
  })
  
  return answer;
}

arr=[12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));