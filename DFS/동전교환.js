function solution(n, coins, cost) {
  let answer = Number.MAX_VALUE;

  function DFS(l, sum) {
    if(sum > cost) return;
    if(sum === cost) {
      if(answer > l) {
        answer = l;
      }
    } else {
      for(let i = 0; i < n; i++) {
        if(l + 1 < answer)
          DFS(l + 1, sum + coins[i]);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(3, [1,2,5], 15));
