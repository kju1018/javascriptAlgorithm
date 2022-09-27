function solution(n, r) {
  let answer = 0;
  let dy = Array.from(Array(n), () => Array(r).fill(0));

  function DFS(n, r) {
    if(dy[n-1][r-1]) return dy[n-1][r-1];
    if(n === r || r === 0) {
      return 1;
    } else return dy[n-1][r-1] = DFS(n-1, r-1) + DFS(n-1, r);
  }

  answer = DFS(n, r);


  return answer;
}

console.log(solution(33, 19));