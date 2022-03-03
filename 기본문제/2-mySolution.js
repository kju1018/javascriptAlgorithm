function solution(a, b, c){
  let answer="YES", max;
  max = a > b ? a : b
  max = max > c ? max : c
  if(max * 2 >= a + b + c){ // c + c < a + b + c
    answer = "NO"
  }
  return answer
}

console.log(solution(13, 33, 20));