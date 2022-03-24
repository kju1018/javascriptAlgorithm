function solution(board, moves) {
  let answer = 0;
  const depth = board[0].length;
  let stack = [];
  for(let x of moves) {
    let item = 0;
    for(let i = 0; i < depth; i++) {
      if(board[i][x - 1] !== 0) {
        item = board[i][x - 1];
        board[i][x - 1] = 0;
        break;
      }
    }
    if(item !== 0) {
      if(item === stack[stack.length-1]){ 
        stack.pop();
        answer += 2;
      } else stack.push(item)
    }
  }
  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
