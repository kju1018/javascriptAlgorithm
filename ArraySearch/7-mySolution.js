function solution(arr) {
  let answer = 0, n = arr.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1]

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++){
      let flag = true;
      for(let k = 0; k < 4; k++){
        let di = i + dx[k];
        let dj = j + dy[k];
        if(di >= 0 && dj >= 0 && di < n && dj < n && (arr[i][j] <= arr[di][dj])) {
          flag = false;
          break;
        }
      }
      if(flag){
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
