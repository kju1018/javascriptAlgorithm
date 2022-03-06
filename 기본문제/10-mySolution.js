function solution(s, t){
  let answer=0;
  for(let word of s) {
    if(word === t) answer ++;
  }
  return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));