function solution(str) {
  let answer = "YES";
  let stack = [];
  for(let x of str) {
    if(x === '(') stack.push(x);
    else {
      if(stack.length === 0) return 'NO';
      stack.pop();
    } 
    
  }
  return answer;
}

let a="(()(()))(()";
console.log(solution(a));