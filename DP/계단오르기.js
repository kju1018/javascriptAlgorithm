function solution(n) {
  let answer = '';
  let dy = Array.from({length: n+1}, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for(let i = 3; i <= n; i++) {
    dy[i] = dy[i-1] + dy[i-2]
  }
  answer = dy[n];
  return answer;
}

console.log(solution(7));
