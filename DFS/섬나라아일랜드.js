function solution(arr) {
  let n = arr.length;
  let answer = 0;

  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1]

  function DFS(x, y) {
    arr[x][y] = 0;
    for(let k = 0; k < 8; k++) {
      let nx = x+dx[k];
      let ny = y+dy[k];
      if(nx >=0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1) {
        DFS(nx, ny);
      } 
    }
    
  }


  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if(arr[i][j] === 1) {
        DFS(i, j);
        answer++;
      }
    }
  } 

  
  return answer;
}


let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
