function solution(str) {
  let answer = 0;
  let stack = [];

  for (let s of str) {
    switch (s) {
      case "+":
        stack.push(parseInt(stack.pop()) + parseInt(stack.pop()));
        break;
      case "-":
        let a = stack.pop();
        let b = stack.pop();
        stack.push(parseInt(b) - parseInt(a));
        break;
      case "*":
        stack.push(parseInt(stack.pop()) * parseInt(stack.pop()));
        break;
      case "/":
        let _a = stack.pop();
        let _b = stack.pop();
        stack.push(parseInt(_b) / parseInt(_a));
        break;
      default:
        stack.push(s);
        break;
    }
  }

  return stack.pop();
}

let str = "352+*9-";
console.log(solution(str));
