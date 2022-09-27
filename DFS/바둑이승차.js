function solution(arr, M) {
  let answer = 0;
  function ddd(l, sum) {
      if (l === arr.length) {
          if ((sum <= M) && (answer < sum)) {
              answer = sum;
          }
      } else {
          ddd(l + 1, sum + arr[l]);
          ddd(l + 1, sum);
      }
  }
  ddd(0, 0);
  
  return answer;
}

console.log([81, 58, 42, 33, 61], 259);
