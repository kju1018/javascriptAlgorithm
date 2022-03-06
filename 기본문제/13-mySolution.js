function solution(s){
  let answer = ''
  for(let word of s) {
    word.toUpperCase() === word ? answer += word.toLowerCase() : answer += word.toUpperCase()
  }
  return answer;
}


console.log(solution("StuDY"));