function solution(n, a) {
//   let answer = 0;
//   let start = 0;
//   const k = a.length;
  //   for(let i = 0; i < k; i++) {
  //       let sum = 0;
  //       for(let j = i ; j < k; j++) {
  //         sum+=a[j];
  //         if(sum === n) answer++;
  //         else if(sum > n) break;
  //       }
  //   }
  let answer = 0, lt = 0,sum = 0;
  for (let rt = 0; rt < a.length; rt++) {
    sum += a[rt];
    if (sum === n) answer++;
    while (sum >= n) {
      sum -= a[lt++];
      if (sum === n) answer++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
