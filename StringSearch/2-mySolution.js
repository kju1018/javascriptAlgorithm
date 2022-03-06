function solution(str){
  let answer = 'YES';
  let lowerStr = str.toLowerCase();
  lowerStr = lowerStr.replace(/[^a-z]/g, '');
  
  if(lowerStr.split('').reverse().join('')!== lowerStr)
    answer = 'NO'
  return answer
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));