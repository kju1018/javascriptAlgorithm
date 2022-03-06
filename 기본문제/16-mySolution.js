function solution(s){
  let answer = '';
  for(let word of s) {
    if(answer.indexOf(word) === -1)
      answer += word;
  }

  return answer;
}

console.log(solution("ksekkset"));