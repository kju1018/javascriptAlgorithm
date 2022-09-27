function solution(n, m, arr) {
  let answer = 0;
  let graph = Array.from(Array(n+1), () => Array(n+1).fill(0));
  let visited = Array.from({length: n+1}, ()=> 0);

  for(let [a, b] of arr){
    graph[a][b]=1;
  }
  console.log(graph)
  function DFS(l) {
    if(l === n) {
      answer++;
    } else {
      for(let i = 2; i <= n; i++) {
        let v = graph[l][i]
        if(!visited[i] && v) {
          visited[i]=1;
          DFS(i);
          visited[i]=0;
        }
        
        
      }
    }
  }
  visited[1] = 1;
  DFS(1, []);

  return answer;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, 9, arr));
