function solution(n) {
  let answer = '';
  let dy = Array.from({length: n+1}, () => 0);

  dy[0] = 1;
  dy[1] = 1;
  dy[2] = 2;

  for(let i = 3; i <= n+1; i++) {
    dy[i] = dy[i-1] + dy[i-2] + dy[i-3];
    console.log(i, dy[i])
  }

  answer = dy[n+1];
  return answer;
}

console.log(solution(7));
