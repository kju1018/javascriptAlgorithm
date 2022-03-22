function solution(brown, yellow) {
  var answer = [];
  
  for(let y = 1; y <= yellow; y++) {
    let x = yellow / y;
    if(x < y) {
      break;
    }

    let total = (x + 2) * (y + 2);
    if(total === yellow + brown) {
      answer[0] = x + 2;
      answer[1] = y + 2
    }
  }

  return answer;
}

console.log(solution(24, 24))