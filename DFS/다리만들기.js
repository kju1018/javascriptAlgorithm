let input = require("fs").readFileSync("data.txt").toString().split("\n");

const n = +input.shift();
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let board = input.map((i) =>{
  return i.split(' ').map(Number)
 });

let visited = Array.from(Array(n), () => Array(n).fill(false));
let islandCnt = 0;

function check(x, y) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

function dfs(x, y, islandCnt) {
  visited[x][y] = true;
  board[x][y] = islandCnt;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (check(nx, ny) && board[nx][ny] && !visited[nx][ny]) dfs(nx, ny, islandCnt);
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] && !visited[i][j]) dfs(i, j, ++islandCnt);
  }
}

function bfs(islandCnt) {
  let queue = [];
  visited = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++)
      if (board[i][j] == islandCnt) {
        visited[i][j] = 1;
        queue.push([i, j]);
      }
  }

  let cnt = 0;
  while (queue.length) {
    let qlen = queue.length;
    console.log("qlen 전",queue)
    while (qlen--) {
      let cur = queue.shift();
      let x = cur[0];
      let y = cur[1];

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (!check(nx, ny)) continue;
        if (board[nx][ny] !== 0 && board[nx][ny] !== islandCnt) return cnt;
        if (board[nx][ny] === 0 && !visited[nx][ny]) {
          visited[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
    console.log("qlen 후",queue)
    cnt++;
  }
}
let ans = Infinity;
for (let i = 1; i <= islandCnt; i++) {
  ans = Math.min(ans, bfs(i));
}

console.log(ans);