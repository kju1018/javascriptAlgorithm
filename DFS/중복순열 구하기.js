function solution(n, m) {
  let answer = 0;

  function DFS(l, ans) {

    if(l === m) {
      console.log(ans);
      answer++;
    } else {
      for(let i = 0; i < n; i++) {
        ans.push(i+1)
        DFS(l + 1, ans);
        ans.pop();
      }
    }
  }

  DFS(0, []);

  return answer;
}

console.log(solution(4, 3));
