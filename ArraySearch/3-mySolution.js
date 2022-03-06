function solution(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    _a = a[i];
    _b = b[i];
    if (_a === _b) answer.push("D");
    else {
      switch (_a) {
        case 1:
          _b === 2 ? answer.push("B") : answer.push("A");
          break;
        case 2:
          _b === 3 ? answer.push("B") : answer.push("A");
          break;
        case 3:
          _b === 1 ? answer.push("B") : answer.push("A");
          break;
      }
    }

    // let answer = "";
    // for (let i = 0; i < a.length; i++) {
    //   if (a[i] === b[i]) answer += "D ";
    //   else if (a[i] === 1 && b[i] === 3) answer += "A ";
    //   else if (a[i] === 2 && b[i] === 1) answer += "A ";
    //   else if (a[i] === 3 && b[i] === 2) answer += "A ";
    //   else answer += "B ";
    // }
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
