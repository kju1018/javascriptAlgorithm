function solution(dead, ps, pt) {
  let answer = 0;

  function DFS(l, sum, time) {
    if(l === ps.length || time === 0) {
      if(answer < sum) {
        answer = sum;
      }
    } else {
      if(time - pt[l] >= 0) {
        DFS(l + 1, sum + ps[l], time - pt[l]);
      }
      DFS(l + 1, sum, time);
    }
  }

  DFS(0, 0, dead)

  return answer;
}
let ps=[10, 25, 15, 6, 7]; // 점수
let pt=[5, 12, 8, 3, 4] // 시간
console.log(solution(20, ps, pt));
