function solution(n, f) {
  let answer = 0;
  let flag = 0;
  let dy = Array.from(Array(n), () => Array(n).fill(0));
  let ch = Array.from({length: n+1}, () => 0);
  let p = Array.from({length: n}, () => 0);
  let b = Array.from({length: n}, () => 0);

  function combi(n, r) {
    if(dy[n-1][r-1]) return dy[n-1][r-1];

    if(n === r || r === 0) return 1; 
    else return dy[n-1][r-1] = combi(n-1, r-1) + combi(n-1, r);
  }

  function DFS(l, sum) {
    if(flag) return;
    if(l === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for(let i = 1; i <= n; i++) {
        if(ch[i]===0) {
          ch[i] = 1;
          p[l] = i;
          DFS(l+1, sum+(b[l]*p[l]))
          ch[i] = 0;
        }
      }
    }
  }

  for(let i = 0; i<n; i++) {
    b[i] = combi(3, i);
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(4, 16));
