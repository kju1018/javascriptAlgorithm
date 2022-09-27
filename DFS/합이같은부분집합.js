function solution(n) {
  let answer = 'NO';
  let ch = Array.from({length: n.length}, () => 0)

  function DFS(i) {
    if(i === n.length){
      let sumA = 0;
      let sumB = 0;
      for(let j = 0; j < i; j++) {
        if(ch[j] === 1) {
          sumA += n[j];
        } else {
          sumB += n[j];
        }
      }
      if(sumA === sumB)
        answer = 'YES';
    } else {
      ch[i] = 1;
      DFS(i+1);
      ch[i] = 0;
      DFS(i+1);
    }
  }

  DFS(0)

  return answer;
}

console.log(solution2([1, 3, 5, 6, 7, 10]));


// 강의 정답
function solution2(arr) {
  let answer = 'NO';
  let flag = 0;
  let total = arr.reduce((pre, cur) => {
    return pre + cur;
  }, 0)
  let n = arr.length;

  function DFS(L, sum) {
    if(flag) return;
    if(L === n) {
      if((total - sum) === sum) {
        answer = 'YES';
        flag = 1;
      }
    } else {
      DFS(L+1, sum + arr[L]);
      DFS(L+1, sum);
    }
  }
  DFS(0, 0);

  return answer;
}