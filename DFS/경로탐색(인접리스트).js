function solution(n, m, arr) {
  let answer = 0;
  let graph = Array.from(Array(n+1), () => Array());
  let visited = Array.from({length: n+1}, ()=> 0);
  let path=[];

  for(let [a, b] of arr){
    graph[a].push(b);
  }
  console.log(graph)
  function DFS(l) {
    if(l === n) {
      answer++;
      console.log(path);
    } else {
      for(let i = 0; i < graph[l].length; i++) {
        let v = graph[l][i]
        if(!visited[v]) {
          visited[v] = 1;
          path.push(v);
          DFS(v);
          path.pop();
          visited[v] = 0;
        }
           
      }
    }
  }
  visited[1] = 1;
  path.push(1);
  DFS(1, []);

  return answer;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, 9, arr));
