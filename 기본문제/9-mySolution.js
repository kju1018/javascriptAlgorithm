function solution(s){
  let answer="";
  for(let word of s) {
    word === "A" ? answer += "#" : answer += word
  }
  return answer;
}

let str="BANANA";
console.log(solution(str));


function solution2(s){
  let answer=s;
  answer = answer.replace(/A/g, '#');
  return answer;
}