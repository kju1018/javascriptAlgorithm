function solution(s){
  let answer = '', index = 0;
  index = Math.floor(s.length / 2);

  if(s.length % 2 === 0)
    answer = s.substring(index -1, index + 1)
  else
    answer = s.substring(index, index + 1)

  return answer;
}

console.log(solution("stusddsddy"));