function solution(str) {
  let answer = '';
  
  for(let word of str) {
    if(!isNaN(word))
      answer += word;
  }
  answer = Number(answer)
  return answer;
}

let str="tge0a1h205er";
console.log(solution(str));