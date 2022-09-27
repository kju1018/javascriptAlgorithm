function solution(S, E) {
  let answer = 0;
  let queue = [];
  let dis = Array.from({length: 10001}, () => 0);
  let ch = Array.from({length: 10001}, () => 0);

  queue.push(S);
  ch[S] = 1;
  dis[S] = 0;

  while(queue.length) {
    let x = queue.shift();
    
    for(let nx of [x - 1, x + 1, x + 5]) {
      if(nx === E) return dis[x] + 1;

      if(!ch[nx] && nx > 0 && nx <= 10000) {
        queue.push(nx)
        dis[nx] = dis[x] + 1;
        ch[nx] = 1;
      }
    }
  }
  return answer;
}

console.log(solution(8, 3));
