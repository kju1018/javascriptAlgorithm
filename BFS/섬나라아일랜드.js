function solution(arr) {
  let n = arr.length;
  let answer = 0;
  let queue = [];

  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function BFS() {
    while (queue.length) {
      let [x, y] = queue.shift();
      for (let k = 0; k < n; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1) {
          arr[nx][ny] = 0;
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        arr[i][j] = 0;
        queue.push([i, j]);
        BFS();
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
