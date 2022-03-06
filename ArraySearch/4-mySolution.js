function solution(arr){
  let answer=0, score = 1;
  arr.forEach(item => {
    if(item === 1) {
      answer += score;
      score++;
    } else {
      score = 1;
    }
  })
  
  return answer;
}
let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));