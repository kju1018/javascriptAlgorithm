function solution(a, b, c){
  let answer;
  answer = a < b ? a : b
  return answer < c ? answer : c
}

console.log(solution(6, 5, 11));