function solution(v) {
  let answer = '';

  function DFS(v) {
    if(v > 7) {
      return
    } else {
      DFS(v*2);
      DFS(v*2 + 1);
      answer += String(v);
    }
  }

  DFS(v)

  return answer;
}

console.log(solution(1));
